import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Operation } from 'typed-graphql-class';

import constants from 'config/constants';
import {
  MessageDataFormat,
  PaginationDataFormat,
  SimpleDataFormat,
} from './util/serverDataFormat';
import { pageFormat, simpleFormat, messageFormat } from './util/formatFunctions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type InterceptorSuccessType = ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>);

class ApiGraphQL {
  protected readonly api: AxiosInstance;

  public constructor(
    private readonly url = 'graphql',
    interceptorSuccess?: InterceptorSuccessType,
  ) {
    this.url = `${constants.urlServer}/${url}`;
    this.api = axios.create();
    this.api.interceptors.response.use(
      interceptorSuccess,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // (error: any) => { throw error; },
    );
  }

  public async messageFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<MessageDataFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return messageFormat(payload, operation.name);
  }

  public async pageFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<PaginationDataFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return pageFormat(payload, operation.name);
  }

  public async simpleFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<SimpleDataFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return simpleFormat(payload, operation.name);
  }
}

export default ApiGraphQL;
