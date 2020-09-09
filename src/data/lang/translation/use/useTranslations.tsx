import React, { useCallback } from 'react';

import { PaginationDataFormat, MessageDataFormat } from 'util/api/util/serverDataFormat';
import { TranslationFormat } from '../type';
import TranslationsApi from '../queries/translations/api';
import useStatusData from 'use/generic/useStatusData';
import useItemCallback from 'use/generic/useItemCallback';
import removeByItem from 'util/stateHandler/removeByItem';
import { notificationMessages, notificationErrors } from 'util/notifications';
import { ErrorCodeFormat } from 'util/dataFormat/globalStateFormat';
import {
  PaginationArgumentsSearchLangOptionals,
  PaginationClassSearchLang,
} from 'ui/Pagination/Classes/PaginationClassLang';

const removeItemFail = (errors: ErrorCodeFormat) => {
  notificationErrors(errors);
};

const translationsApi = new TranslationsApi();

function useTranslations(
  parameters: PaginationArgumentsSearchLangOptionals = {},
  orderBy = 'lang.translation.translation_id',
) {
  const pagination = React.useRef(new PaginationClassSearchLang(
    orderBy,
    parameters,
  )).current;

  const { status, getData } = useStatusData<PaginationDataFormat<TranslationFormat[]>>();
  const [data, setData] = React.useState<PaginationDataFormat<TranslationFormat[]>>();
  const { itemStatus, removeItem } = useItemCallback<MessageDataFormat<TranslationFormat>>();

  const all = useCallback(() => translationsApi.all(pagination.get()), [pagination]);
  const getAll = useCallback(() => getData({
    getAll: all,
    onSuccess: setData,
    onFail: notificationErrors,
  }), [getData, all]);

  const removeItemData = React.useCallback((value: number, response: MessageDataFormat<TranslationFormat>) => {
    setData((currentData) => removeByItem('translationID', value, currentData));
    if (response.messages) {
      notificationMessages(response.messages);
    }
  }, []);

  const onDelete = (translationID: number) => removeItem({
    onRemove: () => translationsApi.delete(translationID),
    key: translationID,
    onSuccess: (response: MessageDataFormat<TranslationFormat>) => removeItemData(translationID, response),
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

export default useTranslations;
