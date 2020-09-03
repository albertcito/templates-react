import { ErrorFormat, SimpleDataFormat, PaginationDataFormat } from './serverDataFormat';

export interface BasicState<T> extends SimpleDataFormat<T> {
  loaded: boolean;
  submit: boolean;
}

export interface PageState<T> extends PaginationDataFormat<T> {
  loaded: boolean;
  submit: boolean;
}

export interface StatusFormat {
  loaded: boolean;
  submit: boolean;
  notFound?: boolean;
  errors?: ErrorFormat;
}
