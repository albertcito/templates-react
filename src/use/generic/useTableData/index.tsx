import React from 'react';

import paginationRequest from 'util/dataFormat/paginationRequest';
import { PaginationDataFormat, PaginationDataServerFormat, MessageDataFormat } from 'util/dataFormat/serverDataFormat';
import { StatusFormat, ErrorFormat } from 'util/dataFormat/globalStateFormat';
import { removeByColumn } from 'util/stateHandler/items';

interface GetDataProperties<T> {
  getAll: () => Promise<PaginationDataServerFormat<T[]>>;
  onBefore?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess?: (response: PaginationDataFormat<T[]> | MessageDataFormat<T[]>) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail?: (errors: ErrorFormat) => void;
  onDone?: () => void;
}

function useTableData<T>() {
  const [data, setData] = React.useState<PaginationDataFormat<T[]> | MessageDataFormat<T[]>>();
  const [status, setStatus] = React.useState<StatusFormat>({
    submit: false,
    loaded: false,
  });

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
    paginationRequest(
      () => {
        if (onBefore) {
          onBefore();
        }
        if (mounted.current) {
          setStatus((currentStatus) => ({ ...currentStatus, submit: true }));
        }
        return getAll();
      },
      (response: PaginationDataServerFormat<T[]>) => {
        if (mounted.current) {
          setData(response);
        }
        if (onSuccess) {
          onSuccess(response);
        }
      },
      (errors: ErrorFormat) => {
        if (mounted.current) {
          setStatus((currentStatus) => ({ ...currentStatus, ...errors }));
        }
        if (onFail) {
          onFail(errors);
        }
      },
      () => {
        if (mounted.current) {
          setStatus((currentStatus) => ({ ...currentStatus, submit: false, loaded: true }));
        }
        if (onDone) {
          onDone();
        }
      },
    );
  }, []);

  const removeItemData = React.useCallback((key: keyof T, value: string | number) => {
    setData((currentData) => {
      if (currentData) {
        const newData = removeByColumn<T>(currentData.data, key, value);
        return {
          ...currentData,
          data: newData,
        };
      }
      return currentData;
    });
  }, []);

  return {
    data,
    status,
    getData,
    removeItemData,
  };
}

export default useTableData;
