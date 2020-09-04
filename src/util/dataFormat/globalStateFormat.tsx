export interface ErrorFormat {
  [index: number]: any;
  [key: string]: any;
  printKey?: boolean;
  message?: string;
}

export interface ErrorNotFoundFormat {
  notFound?: boolean;
  errors?: ErrorFormat;
}
export interface StatusFormat extends ErrorNotFoundFormat {
  loaded: boolean;
  submit: boolean;
}
