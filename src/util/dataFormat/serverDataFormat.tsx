import { MessageFormat } from 'data/message/type';
import { PaginationFormat } from 'data/pagination/type';
import { ErrorCodeFormat } from './globalStateFormat';

export interface SimpleDataFormat<T> {
  data: T;
}

export interface MessageDataFormat<T> extends SimpleDataFormat<T> {
  messages?: MessageFormat[];
}

export interface PaginationDataFormat<T> extends SimpleDataFormat<T> {
  pagination: PaginationFormat;
  messages?: MessageFormat[];
}

export interface SimpleDataErrorFormat<T> extends SimpleDataFormat<T> {
  error?: ErrorCodeFormat;
}

export interface MessageDataErrorFormat<T> extends MessageDataFormat<T> {
  error?: ErrorCodeFormat;
}

export interface PaginationDataErrorFormat<T> extends PaginationDataFormat<T> {
  error?: ErrorCodeFormat;
}
