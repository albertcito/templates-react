import React from 'react';

import paginationRequest from 'util/dataFormat/paginationRequest';
import { PaginationDataFormat, PaginationDataServerFormat } from 'util/dataFormat/serverDataFormat';
import { StatusFormat, ErrorFormat } from 'util/dataFormat/globalStateFormat';
import { StructFormat, set } from 'util/stateHandler/struct';

interface RemoveItemProperties<T> {
  onRemove: () => Promise<PaginationDataServerFormat<T>>;
  key: string | number;
  onBefore?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess?: (response: PaginationDataServerFormat<T>) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail?: (errors: ErrorFormat) => void;
  onDone?: () => void;
}

function useItemCallback<T>() {
  const [items, setItems] = React.useState<StructFormat<PaginationDataFormat<T>>>({});
  const [itemStatus, setItemStatus] = React.useState<StructFormat<StatusFormat>>({});

  const mounted = React.useRef(true);
  // eslint-disable-next-line arrow-body-style
  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const removeItem = React.useCallback(async ({
    onRemove,
    key,
    onBefore,
    onSuccess,
    onFail,
    onDone,
  }: RemoveItemProperties<T>) => {
    paginationRequest(
      () => {
        if (onBefore) {
          onBefore();
        }
        if (mounted.current) {
          setItemStatus((currentStatus) => {
            if (key in currentStatus) {
              return set(currentStatus, key, { ...currentStatus[key], submit: true });
            }
            return { ...currentStatus, [key]: { submit: true, loaded: false } };
          });
        }
        return onRemove();
      },
      (response: PaginationDataFormat<T>) => {
        if (mounted.current) {
          setItems((currentData) => {
            if (key in currentData) {
              return set(currentData, key, { ...currentData[key], ...response });
            }
            return { ...currentData, [key]: response };
          });
          if (onSuccess) {
            onSuccess(response);
          }
        }
      },
      (errors: ErrorFormat) => {
        if (mounted.current) {
          setItemStatus((currentStatus) => set(
            currentStatus,
            key,
            { ...currentStatus[key], ...errors },
          ));
          if (onFail) {
            onFail(errors);
          }
        }
      },
      async () => {
        if (mounted.current) {
          setItemStatus((currentStatus) => set(
            currentStatus,
            key,
            { ...currentStatus[key], submit: false, loaded: true },
          ));
          if (onDone) {
            onDone();
          }
        }
      },
    );
  }, []);

  return {
    items,
    itemStatus,
    removeItem,
  };
}

export default useItemCallback;
