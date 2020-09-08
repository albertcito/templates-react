import { MessageFormat } from 'data/message/type';
import { PaginationFormat } from 'data/pagination/type';

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
