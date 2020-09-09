import React from 'react';

import { PaginationDataFormat, MessageDataFormat } from 'util/api/util/serverDataFormat';
import { UserFormat } from '../type';
import UsersApi from '../queries/users/api';
import useStatusData from 'use/generic/useStatusData';
import useItemCallback from 'use/generic/useItemCallback';
import removeByItem from 'util/stateHandler/removeByItem';
import { notificationMessages, notificationErrors } from 'util/notifications';
import { ErrorCodeFormat } from 'util/dataFormat/globalStateFormat';
import {
  PaginationSearchArgumentsOptionals,
  PaginationClassSearch,
} from 'ui/Pagination/Classes/PaginationClassSearch';

const removeItemFail = (errors: ErrorCodeFormat) => {
  notificationErrors(errors);
};

const usersApi = new UsersApi();

function useUsers(
  parameters: PaginationSearchArgumentsOptionals = {},
  orderBy = 'user.user.user_id',
) {
  const pagination = React.useRef(new PaginationClassSearch(
    orderBy,
    parameters,
  )).current;

  const { status, getData } = useStatusData<PaginationDataFormat<UserFormat[]>>();
  const [data, setData] = React.useState<PaginationDataFormat<UserFormat[]>>();
  const { itemStatus, removeItem } = useItemCallback<MessageDataFormat<UserFormat>>();

  const getAll = () => getData({
    getAll: () => usersApi.all(pagination.get()),
    onSuccess: setData,
    onFail: notificationErrors,
  });

  const removeItemData = React.useCallback((value: number, response: MessageDataFormat<UserFormat>) => {
    setData((currentData) => removeByItem('userID', value, currentData));
    if (response.messages) {
      notificationMessages(response.messages);
    }
  }, []);

  const onDelete = (userID: number) => removeItem({
    onRemove: () => usersApi.delete(userID),
    key: userID,
    onSuccess: (response: MessageDataFormat<UserFormat>) => removeItemData(userID, response),
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

export default useUsers;
