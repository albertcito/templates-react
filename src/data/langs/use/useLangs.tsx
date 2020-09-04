import React from 'react';

import { PaginationDataFormat } from 'util/dataFormat/serverDataFormat';
import { PaginationArgumentsOptional, PaginationClass } from 'data/pagination/classes/PaginationClass';
import { LangFormat } from '../type';
import LangsApi from '../queries/langs/api';
import useStatusData from 'use/generic/useStatusData';
import useItemCallback from 'use/generic/useItemCallback';
import { removeByColumn } from 'util/stateHandler/items';

function removeByItem<T>(key: keyof T, value: string | number, currentData?: PaginationDataFormat<T[]>) {
  if (currentData) {
    const newData = removeByColumn(currentData.data, key, value);
    return {
      ...currentData,
      data: newData,
    };
  }
  return currentData;
}

const langsApi = new LangsApi();

function useLangs(
  parameters: PaginationArgumentsOptional = {},
  orderBy = 'lang.lang.lang_id',
) {
  const pagination = React.useRef(new PaginationClass(
    orderBy,
    parameters,
  )).current;

  const { status, getData } = useStatusData<PaginationDataFormat<LangFormat[]>>();
  const [data, setData] = React.useState<PaginationDataFormat<LangFormat[]>>();

  const { itemStatus, removeItem } = useItemCallback<PaginationDataFormat<LangFormat>>();

  const getAll = () => getData({
    getAll: () => langsApi.all(pagination.get()),
    onSuccess: setData,
  });

  const removeItemData = React.useCallback((value: string) => {
    setData((currentData) => removeByItem('langID', value, currentData));
  }, []);

  const onDelete = (langID: string) => removeItem({
    onRemove: () => langsApi.delete(langID),
    key: langID,
    onSuccess: (response: PaginationDataFormat<LangFormat>) => {
      removeItemData(langID);
      console.log(response.messages);
    },
    onFail: console.log,
  });

  return {
    data,
    status,
    itemStatus,
    pagination,
    getAll,
    onDelete,
  };
}

export default useLangs;
