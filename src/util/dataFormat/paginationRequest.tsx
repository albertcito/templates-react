import { PaginationDataServerFormat } from './serverDataFormat';
import { ErrorFormat } from './globalStateFormat';

async function paginationRequest<T>(
  api: () => Promise<PaginationDataServerFormat<T>>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess: (response: PaginationDataServerFormat<T>) => void,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail: (errors: ErrorFormat) => void,
  onFinish?: () => void,
): Promise<void> {
  const payload = await api();
  if ('errors' in payload && (payload.errors || payload.notFound)) {
    onFail({
      errors: payload.errors,
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
