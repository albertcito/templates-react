import { ErrorCodeFormat } from '../../dataFormat/globalStateFormat';

class ApiError extends Error {
  constructor(public readonly error: ErrorCodeFormat) {
    super();
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export default ApiError;
