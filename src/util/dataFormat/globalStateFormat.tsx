interface MessageError {
  type: string;
  code?: number;
}

export interface ErrorFormat extends MessageError{
  message: string;
}

export interface ErrorCodeFormat {
  networkError?: boolean;
  code?: number;
  errors?: ErrorFormat[];
}

export interface StatusFormat {
  error?: ErrorCodeFormat;
  loaded: boolean;
  submit: boolean;
}
