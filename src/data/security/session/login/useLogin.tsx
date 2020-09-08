import { useContext, useCallback } from 'react';

import useStatusData from 'use/generic/useStatusData';
import LoginApi from './api';
import { SimpleDataFormat } from 'util/api/util/serverDataFormat';
import { UserTokenFormat } from 'data/security/user/type';
import { GlobalContext } from 'use/global';

/**
 * To Logout a user in the endpoint and save the data
 * in the global status and the localStorage
 */
export default function useLogout() {
  const { sessions: { saveSession } } = useContext(GlobalContext);
  const { status, getData } = useStatusData<SimpleDataFormat<UserTokenFormat>>();

  /**
   * To Logout an user
   */
  const doLogin = useCallback(async (email: string, password: string) => {
    getData({
      getAll: () => (new LoginApi()).login(email, password),
      onSuccess: (user: SimpleDataFormat<UserTokenFormat>) => saveSession(user.data),
    });
  }, [getData, saveSession]);

  return {
    doLogin,
    status,
  };
}
