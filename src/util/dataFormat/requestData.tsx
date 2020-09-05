import { ErrorCodeFormat } from './globalStateFormat';

interface PayloadError {
  error: ErrorCodeFormat;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorFormat = (error: any) => {
  const networkError = (error.message === 'Network Error');
  const status = error.response?.status;
  return {
    networkError,
    code: status,
    errors: [{
      type: 'messageError',
      message: error.message,
    }],
  };
};

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
    const payloadError = (payload as unknown as PayloadError);
    if (payloadError && payloadError.error) {
      onFail(payloadError.error);
    } else {
      onSuccess(payload);
    }
    if (onFinish) {
      onFinish();
    }
  } catch (error) {
    onFail(errorFormat(error));
    if (onFinish) { onFinish(); }
    throw error;
  }
}

export default requestData;
