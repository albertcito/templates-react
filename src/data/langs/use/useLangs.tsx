import React from 'react';

import { PaginationArgumentsOptional, PaginationClass } from 'data/pagination/classes/PaginationClass';
import { LangFormat } from '../type';
import LangsApi from '../queries/langs/api';
import useTableData from 'use/generic/useTableData';
import useItemCallback from 'use/generic/useItemCallback';

const langsApi = new LangsApi();

function useLangs(
  parameters: PaginationArgumentsOptional = {},
  orderBy = 'lang.lang.lang_id',
) {
  const pagination = React.useRef(new PaginationClass(
    orderBy,
    parameters,
  )).current;

  const {
    data,
    status,
    getData,
    removeItemData,
  } = useTableData<LangFormat>();

  const {
    items,
    itemStatus,
    removeItem,
  } = useItemCallback<LangFormat>();

  const getAll = () => getData({ getAll: () => langsApi.all(pagination.get()) });
  const onDelete = (langID: string) => removeItem({
    onRemove: () => langsApi.delete(langID),
    key: langID,
    onSuccess: () => {
      removeItemData('langID', langID);
    },
  });

  return {
    data,
    status,
    items,
    itemStatus,
    pagination,
    getAll,
    onDelete,
  };
}

export default useLangs;
