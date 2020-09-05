import { ErrorCodeFormat } from './globalStateFormat';

interface PayloadError {
  error: ErrorCodeFormat;
}

async function requestData<T>(
  api: () => Promise<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess: (response: T) => void,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail: (errors: ErrorCodeFormat) => void,
  onFinish?: () => void,
): Promise<void> {
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
}

export default requestData;
