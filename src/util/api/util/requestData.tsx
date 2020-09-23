import { AxiosError } from 'axios';

import { ErrorCodeFormat } from '../../dataFormat/globalStateFormat';
import ApiError from 'util/api/util/ApiError';

/**
 * To format the errors from the connection or server.
 * It's like 401, 500, Network Error, etc.
 * @param error
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorFormat = (error: AxiosError): ErrorCodeFormat => ({
  networkError: (error.message === 'Network Error'),
  code: error.response?.status,
  errors: [{
    type: 'messageError',
    message: error.message,
  }],
});

async function requestData<T>(
  api: () => Promise<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess: (response: T) => void,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail: (errors: ErrorCodeFormat) => void,
  onFinish?: () => void,
): Promise<void> {
  try {
    const payload = await api();
    onSuccess(payload);
    if (onFinish) {
      onFinish();
    }
  } catch (error) {
    // This is API error, as validation form.
    if (error.constructor === ApiError) {
      onFail(error.getErrorFormat());
      if (onFinish) {
        onFinish();
      }
    } else {
      // This is network, auth or server error http status
      onFail(errorFormat(error));
      if (onFinish) {
        onFinish();
      }
      // The global function have to handle the error to verify authorization (401)
      throw error;
    }
  }
}

export default requestData;
