import { MessageFormat } from 'data/message/type';
import { PaginationFormat } from 'data/pagination/type';

export interface ErrorFormat {
  [index: number]: any;
  [key: string]: any;
  printKey?: boolean;
  message?: string;
}

export interface DataErrorsFormat<T> {
  data: T;
  errors: ErrorFormat | null;
}

export interface SimpleDataFormat<T> extends DataErrorsFormat<T> {
  notFound?: boolean;
}

export interface PaginationDataFormat<T> extends SimpleDataFormat<T> {
  pagination: PaginationFormat;
  messages?: MessageFormat[];
}
