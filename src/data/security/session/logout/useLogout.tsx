import { useCallback } from 'react';

import useStatusData from 'use/generic/useStatusData';
import SessionApi from 'data/security/session/logout/api';
import { SimpleDataFormat } from 'util/api/util/serverDataFormat';
import { MessageFormat } from 'data/message/type';
import { notificationErrors } from 'util/notifications';
/**
 * To logout a user in the endpoint and save the data
 * in the global status and the localStorage
 */
export default function useLogout() {
  const { status, getData } = useStatusData<SimpleDataFormat<MessageFormat>>();

  /**
   * To logout an user
   */
  const doLogout = useCallback(async (onSuccess: () => void) => {
    getData({
      getAll: () => (new SessionApi()).logout(),
      onSuccess,
      onFail: notificationErrors,
    });
  }, [getData]);

  return {
    doLogout,
    status,
  };
}
