import { ErrorNotFoundFormat } from './globalStateFormat';

async function requestData<T>(
  api: () => Promise<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess: (response: T) => void,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail: (errors: ErrorNotFoundFormat) => void,
  onFinish?: () => void,
): Promise<void> {
  const payload = await api();
  const asError = (payload as ErrorNotFoundFormat);
  if (asError.errors || asError.notFound) {
    onFail(asError);
  } else {
    onSuccess(payload);
  }
  if (onFinish) {
    onFinish();
  }
}

export default requestData;
