import { MessageFormat } from 'data/message/type';
import { PaginationFormat } from 'data/pagination/type';
import { ErrorNotFoundFormat } from './globalStateFormat';

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

export type SimpleDataServerFormat<T> = SimpleDataFormat<T> & ErrorNotFoundFormat;
export type MessageDataServerFormat<T> = MessageDataFormat<T> & ErrorNotFoundFormat;
export type PaginationDataServerFormat<T> = PaginationDataFormat<T> & ErrorNotFoundFormat;
