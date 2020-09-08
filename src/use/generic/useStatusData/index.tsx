import React from 'react';

import requestData from 'util/api/util/requestData';
import { StatusFormat, ErrorCodeFormat } from 'util/dataFormat/globalStateFormat';

interface GetDataProperties<T> {
  /**
   * Function to request data from the server
   */
  getAll: () => Promise<T>;
  /**
   * Before send the request
   */
  onBefore?: () => void;
  /**
   * Run it when the request is successful
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess?: (response: T) => void;
  /**
   * Run it when the request fail
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail?: (error: ErrorCodeFormat) => void;
  /**
   * Run it when the request is done.
   */
  onDone?: () => void;
}

/**
 * Return the function to request data and the request's status
 */
function useStatusData<T>() {
  const [status, setStatus] = React.useState<StatusFormat>({
    submit: false,
    loaded: false,
  });

  /**
   * This variable help me to  prevent update the status if the
   * component that use this function is not mounted
   */
  const mounted = React.useRef(true);

  // eslint-disable-next-line arrow-body-style
  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const getData = React.useCallback(({
    getAll,
    onBefore,
    onSuccess,
    onFail,
    onDone,
  }: GetDataProperties<T>) => {
    requestData(
      () => {
        if (mounted.current) {
          if (onBefore) {
            onBefore();
          }
          setStatus((currentStatus) => ({ ...currentStatus, submit: true, error: undefined }));
        }
        return getAll();
      },
      (response: T) => {
        if (mounted.current && onSuccess) {
          onSuccess(response);
        }
      },
      (error: ErrorCodeFormat) => {
        if (mounted.current) {
          setStatus((currentStatus) => ({ ...currentStatus, error }));
          if (onFail) {
            onFail(error);
          }
        }
      },
      () => {
        if (mounted.current) {
          setStatus((currentStatus) => ({ ...currentStatus, submit: false, loaded: true }));
          if (onDone) {
            onDone();
          }
        }
      },
    );
  }, []);

  return {
    status,
    getData,
  };
}

export default useStatusData;
