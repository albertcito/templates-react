import { ErrorCodeFormat, ErrorFormat } from '../../dataFormat/globalStateFormat';

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

class ApiError extends Error {
  constructor(public readonly error: ErrorFormat[]) {
    super();
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  public getErrorFormat = (): ErrorCodeFormat => ({
    errors: this.error,
    code: isCustom404(this.error),
    networkError: false,
  });
}

export default ApiError;
