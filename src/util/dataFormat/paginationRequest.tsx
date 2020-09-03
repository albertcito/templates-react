import { ErrorFormat, PaginationDataFormat } from './serverDataFormat';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TOnSuccess<T> = (response: PaginationDataFormat<T>) => void;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TOnFail<T> = (errors: ErrorFormat) => void;
export type TApi<T> = () => Promise<PaginationDataFormat<T>>;

async function paginationRequest<T>(
  api: TApi<T>,
  onSuccess: TOnSuccess<T>,
  onFail: TOnFail<T>,
  onFinish?: () => void,
): Promise<void> {
  const payload = await api();
  if ('errors' in payload && (payload.errors || payload.notFound)) {
    onFail({
      errors: payload.errors,
      loaded: true,
      submit: false,
      notFound: payload.notFound,
    });
  } else {
    onSuccess(payload);
  }
  if (onFinish) {
    onFinish();
  }
}

export default paginationRequest;
