import { AxiosResponse } from 'axios';

import { SimpleDataFormat, MessageDataFormat, PaginationDataFormat } from './serverDataFormat';
import ApiError from 'util/api/util/ApiError';

export function simpleFormat<T>(payload: AxiosResponse, key: string): SimpleDataFormat<T> {
  if (payload.data.errors) {
    throw new ApiError(payload.data.errors);
  }
  return { data: payload.data.data[key] };
}

export function messageFormat<T>(payload: AxiosResponse, key: string): MessageDataFormat<T> {
  if (payload.data.errors) {
    throw new ApiError(payload.data.errors);
  }
  const { data, messages } = payload.data.data[key];
  return { data, messages };
}

export function pageFormat<T>(payload: AxiosResponse, key: string): PaginationDataFormat<T> {
  return {
    ...messageFormat<T>(payload, key),
    pagination: payload.data.data[key].pagination,
  };
}
