import { useCallback, useRef, useState } from 'react';

import { PaginationDataFormat, MessageDataFormat } from 'util/api/util/serverDataFormat';
import { PaginationArgumentsOptional, PaginationClass } from 'ui/Pagination/Classes/PaginationClass';
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
  const pagination = useRef(new PaginationClass(
    orderBy,
    parameters,
  )).current;

  const { status, getData } = useStatusData<PaginationDataFormat<LangFormat[]>>();
  const [data, setData] = useState<PaginationDataFormat<LangFormat[]>>();
  const { itemStatus, removeItem } = useItemCallback<MessageDataFormat<LangFormat>>();

  const getAll = useCallback(() => getData({
    getAll: () => langsApi.all(pagination.get()),
    onSuccess: setData,
    onFail: notificationErrors,
  }), [getData, pagination]);

  const removeItemData = useCallback((value: string, response: MessageDataFormat<LangFormat>) => {
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
