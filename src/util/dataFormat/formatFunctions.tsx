import { AxiosResponse } from 'axios';

import { ErrorFormat, SimpleDataFormat, PaginationDataFormat } from './serverDataFormat';

const is404 = (errors: ErrorFormat): boolean => (errors
  && errors[0]
  && errors[0].type === 'messageError'
  && errors[0].code === 404
);

const getBaseFormat = (errors: ErrorFormat) => {
  const notFound = is404(errors);
  const errorsData = (errors && !notFound) ? errors : null;
  const result = {
    errors: errorsData,
    notFound,
  };
  return result;
};

export function simpleFormat<T>(payload: AxiosResponse, key: string): SimpleDataFormat<T> {
  const response = payload.data;
  const baseFormat = getBaseFormat(response.errors);
  const data = (response.data && response.data[key]) ? response.data[key] : null;
  return {
    ...baseFormat,
    data,
  };
}

export function pageFormat<T>(payload: AxiosResponse, key: string): PaginationDataFormat<T> {
  const response = payload.data;
  let pagination = null;
  let data = null;
  let messages = null;
  if (response.data && response.data[key]) {
    data = response.data[key].data;
    pagination = response.data[key].pagination;
    messages = response.data[key].messages;
  }
  const baseFormat = getBaseFormat(response.errors);
  return {
    ...baseFormat,
    data,
    messages,
    pagination,
  };
}
