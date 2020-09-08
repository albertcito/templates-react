import { AxiosRequestConfig } from 'axios';
import { Operation } from 'typed-graphql-class';

import storage from '../Storage';
import {
  MessageDataFormat,
  PaginationDataFormat,
  SimpleDataFormat,
} from './util/serverDataFormat';
import ApiGraphQL, { InterceptorSuccessType } from './ApiGraphQL';

class ApiAdminGraphQL {
  protected readonly api: ApiGraphQL;

  private readonly authType: string = 'Bearer ';

  public constructor(
    url = 'graphql/admin',
    interceptorSuccess?: InterceptorSuccessType,
  ) {
    this.api = new ApiGraphQL(url, interceptorSuccess);
  }

  public async messageFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<MessageDataFormat<T>> {
    const configAuth: AxiosRequestConfig = {
      ...config,
      headers: { Authorization: this.authType + storage.getToken() },
    };
    return this.api.messageFormat(operation, configAuth);
  }

  public async pageFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<PaginationDataFormat<T>> {
    const configAuth: AxiosRequestConfig = {
      ...config,
      headers: { Authorization: this.authType + storage.getToken() },
    };
    return this.api.pageFormat(operation, configAuth);
  }

  public async simpleFormat<T>(
    operation: Operation,
    config: AxiosRequestConfig = {},
  ): Promise<SimpleDataFormat<T>> {
    const configAuth: AxiosRequestConfig = {
      ...config,
      headers: { Authorization: this.authType + storage.getToken() },
    };
    return this.api.simpleFormat(operation, configAuth);
  }
}

export default ApiAdminGraphQL;
