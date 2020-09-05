import { AxiosResponse } from 'axios';

import { SimpleDataErrorFormat, MessageDataErrorFormat, PaginationDataErrorFormat } from './serverDataFormat';
import { ErrorFormat, ErrorCodeFormat } from './globalStateFormat';

const errorStatusCode = [404, 500, 401, 403];

const isHttpErrorStatus = (payload: AxiosResponse, errors: ErrorFormat[]): number | undefined => {
  if (payload.status !== 200) {
    return payload.status;
  }
  // The server cannot send 404 error in some queries.
  // This is the way to send a 4040 error in a query not found.
  if (errors
    && errors[0]
    && errors[0].type === 'messageError'
    && errors[0].code
    && errorStatusCode.includes(errors[0].code)
  ) {
    return errors[0].code;
  }
  return undefined;
};

const getErrorFormat = (payload: AxiosResponse, errors: ErrorFormat[]): ErrorCodeFormat | undefined => {
  const code = isHttpErrorStatus(payload, errors);
  const { networkError } = payload.data;
  if (errors || code || networkError) {
    return {
      errors,
      code,
      networkError,
    };
  }
  return undefined;
};

export function simpleFormat<T>(payload: AxiosResponse, key: string): SimpleDataErrorFormat<T> {
  const response = payload.data;
  return {
    error: getErrorFormat(payload, response.errors),
    data: (response.data && response.data[key]) ? response.data[key] : undefined,
  };
}

export function messageFormat<T>(payload: AxiosResponse, key: string): MessageDataErrorFormat<T> {
  const response = payload.data;
  let data = null;
  let messages = null;
  if (response.data && response.data[key]) {
    data = response.data[key].data;
    messages = response.data[key].messages;
  }
  return {
    error: getErrorFormat(payload, response.errors),
    data,
    messages,
  };
}

export function pageFormat<T>(payload: AxiosResponse, key: string): PaginationDataErrorFormat<T> {
  const message = messageFormat<T>(payload, key);
  let pagination = null;
  if (payload.data.data && payload.data.data[key] && payload.data.data[key].pagination) {
    pagination = payload.data.data[key].pagination;
  }
  return {
    ...message,
    pagination,
  };
}
