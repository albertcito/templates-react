import React, { useCallback } from 'react';

import { PaginationDataFormat, MessageDataFormat } from 'util/api/util/serverDataFormat';
import { TagFormat } from '../type';
import TagsApi from '../queries/tags/api';
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

const tagsApi = new TagsApi();

function useTags(
  parameters: PaginationArgumentsSearchLangOptionals = {},
  orderBy = 'generic.tag.tag_id',
) {
  const pagination = React.useRef(new PaginationClassSearchLang(
    orderBy,
    parameters,
  )).current;

  const { status, getData } = useStatusData<PaginationDataFormat<TagFormat[]>>();
  const [data, setData] = React.useState<PaginationDataFormat<TagFormat[]>>();
  const { itemStatus, removeItem } = useItemCallback<MessageDataFormat<TagFormat>>();

  const all = useCallback(() => tagsApi.all(pagination.get()), [pagination]);
  const getAll = useCallback(() => getData({
    getAll: all,
    onSuccess: setData,
    onFail: notificationErrors,
  }), [getData, all]);

  const removeItemData = React.useCallback((value: number, response: MessageDataFormat<TagFormat>) => {
    setData((currentData) => removeByItem('tagID', value, currentData));
    if (response.messages) {
      notificationMessages(response.messages);
    }
  }, []);

  const onDelete = (tagID: number) => removeItem({
    onRemove: () => tagsApi.delete(tagID),
    key: tagID,
    onSuccess: (response: MessageDataFormat<TagFormat>) => removeItemData(tagID, response),
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

export default useTags;
