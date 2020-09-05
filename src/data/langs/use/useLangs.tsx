import React from 'react';

import { PaginationDataFormat, MessageDataFormat } from 'util/dataFormat/serverDataFormat';
import { PaginationArgumentsOptional, PaginationClass } from 'data/pagination/classes/PaginationClass';
import { LangFormat } from '../type';
import LangsApi from '../queries/langs/api';
import useStatusData from 'use/generic/useStatusData';
import useItemCallback from 'use/generic/useItemCallback';
import removeByItem from 'util/stateHandler/removeByItem';
import { notificationMessages, notificationErrors } from 'util/notifications';
import { ErrorCodeFormat } from 'util/dataFormat/globalStateFormat';

const removeItemFail = (errors: ErrorCodeFormat) => {
  notificationErrors(errors);
};

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

  const { itemStatus, removeItem } = useItemCallback<MessageDataFormat<LangFormat>>();

  const getAll = () => getData({
    getAll: () => langsApi.all(pagination.get()),
    onSuccess: setData,
    onFail: notificationErrors,
  });

  const removeItemData = React.useCallback((value: string, response: MessageDataFormat<LangFormat>) => {
    setData((currentData) => removeByItem('langID', value, currentData));
    if (response.messages) {
      notificationMessages(response.messages);
    }
  }, []);

  const onDelete = (langID: string) => removeItem({
    onRemove: () => langsApi.delete(langID),
    key: langID,
    onSuccess: (response: MessageDataFormat<LangFormat>) => removeItemData(langID, response),
    onFail: removeItemFail,
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
