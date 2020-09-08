import { AxiosResponse } from 'axios';

import { SimpleDataFormat, MessageDataFormat, PaginationDataFormat } from './serverDataFormat';
import { ErrorFormat, ErrorCodeFormat } from '../../dataFormat/globalStateFormat';
import ApiError from 'util/api/util/ApiError';

/**
 * The server cannot send 404 error in some queries.
 * This is the way to send a 404 error in a query not found.
 *
 * @param errors
 */
const isCustom404 = (errors: ErrorFormat[]): number => {
  if (errors
    && errors[0]
    && errors[0].type === 'messageError'
    && errors[0].code
    && errors[0].code === 404
  ) {
    return errors[0].code;
  }
  return 200;
};

const getErrorFormat = (errors: ErrorFormat[]): ErrorCodeFormat => ({
  errors,
  code: isCustom404(errors),
});

export function simpleFormat<T>(payload: AxiosResponse, key: string): SimpleDataFormat<T> {
  if (payload.data.errors) {
    throw new ApiError(getErrorFormat(payload.data.errors));
  }
  return { data: payload.data.data[key] };
}

export function messageFormat<T>(payload: AxiosResponse, key: string): MessageDataFormat<T> {
  if (payload.data.errors) {
    throw new ApiError(getErrorFormat(payload.data.errors));
  }
  const { data, messages } = payload.data.data[key];
  return { data, messages };
}

export function pageFormat<T>(payload: AxiosResponse, key: string): PaginationDataFormat<T> {
  return {
    ...messageFormat<T>(payload, key),
    pagination: payload.data.data[key],
  };
}
