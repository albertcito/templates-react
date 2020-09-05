import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Operation } from 'typed-graphql-class';

import constants from 'config/constants';
import {
  MessageDataErrorFormat,
  PaginationDataErrorFormat,
  SimpleDataErrorFormat,
} from '../dataFormat/serverDataFormat';
import { pageFormat, simpleFormat } from '../dataFormat/formatFunctions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type InterceptorSuccessType = ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>);

class ApiGraphQL {
  protected readonly api: AxiosInstance;

  private readonly url: string;

  public constructor(url: string, interceptorSuccess?: InterceptorSuccessType) {
    this.url = `${constants.urlServer}/${url}`;
    this.api = axios.create();
    this.api.interceptors.response.use(
      interceptorSuccess,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: any) => { throw error; },
    );
  }

  public async messageFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<MessageDataErrorFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return pageFormat(payload, operation.name);
  }

  public async pageFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<PaginationDataErrorFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return pageFormat(payload, operation.name);
  }

  public async simpleFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<SimpleDataErrorFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return simpleFormat(payload, operation.name);
  }
}

export default ApiGraphQL;
