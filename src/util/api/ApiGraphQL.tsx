import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Operation } from 'typed-graphql-class';

import constants from 'config/constants';
import { PaginationDataFormat, SimpleDataFormat } from '../dataFormat/serverDataFormat';
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
      this.interceptorError,
    );
  }

  public async pageFormat<T>(operation: Operation, config: AxiosRequestConfig = {}): Promise<PaginationDataFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return pageFormat(payload, operation.name);
  }

  public async simpleFormat<T>(operation: Operation, config: AxiosRequestConfig = {}): Promise<SimpleDataFormat<T>> {
    const payload = await this.api.post(this.url, operation.params(), config);
    return simpleFormat(payload, operation.name);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private interceptorError = (error: any) => new Promise(
    (resolve) => resolve({ data: { errors: error.message } }),
  );
}

export default ApiGraphQL;
