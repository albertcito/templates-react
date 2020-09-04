import React from 'react';

import requestData from 'util/dataFormat/requestData';
import { StatusFormat, ErrorFormat } from 'util/dataFormat/globalStateFormat';
import { StructFormat, set } from 'util/stateHandler/struct';

interface RemoveItemProperties<T> {
  onRemove: () => Promise<T>;
  key: string | number;
  onBefore?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess?: (response: T) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFail?: (errors: ErrorFormat) => void;
  onDone?: () => void;
}

function useItemCallback<T>() {
  const [itemStatus, setItemStatus] = React.useState<StructFormat<StatusFormat>>({});

  const mounted = React.useRef(true);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    () => { mounted.current = false; };
  }, []);

  const removeItem = React.useCallback(async ({
    onRemove,
    key,
    onBefore,
    onSuccess,
    onFail,
    onDone,
  }: RemoveItemProperties<T>) => {
    requestData(
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
      (response: T) => {
        if (mounted.current && onSuccess) {
          onSuccess(response);
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
    itemStatus,
    removeItem,
  };
}

export default useItemCallback;
