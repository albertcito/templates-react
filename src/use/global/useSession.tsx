import { useCallback, useState } from 'react';

import storage, { UserStorageFormat } from 'util/Storage';
import { UserFormat, UserTokenFormat } from 'data/security/user/type';
import useStatusData from 'use/generic/useStatusData';
import { SimpleDataFormat } from 'util/api/util/serverDataFormat';
import UserApi from 'data/security/user/queries/user/api';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';

const userApi = new UserApi();

export interface UseSessionProperties {
  user?: UserFormat;
  status: StatusFormat;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getSession: (storageUser: UserStorageFormat) => void;
  delSession: () => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveSession: (userData: UserFormat | UserTokenFormat) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setName: (name: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setEmail: (email: string) => void;
}

/**
 * This function is to load and remove the user information
 * in the localStorage and the hook's status
 */
const useSession = (): UseSessionProperties => {
  const [user, setUser] = useState<UserFormat>();
  const { status, getData } = useStatusData<SimpleDataFormat<UserFormat>>();

  /**
   * Get data from the current user logged
   *
   * @param storageUser: UserStorageFormat
   */
  const getSession = useCallback(async (storageUser: UserStorageFormat) => {
    getData({
      getAll: () => userApi.get(storageUser.userID),
      onSuccess: (data: SimpleDataFormat<UserFormat>) => setUser(data.data),
    });
  }, [getData]);

  /**
   * Clean user's private data
   */
  const delSession = useCallback((): void => {
    setUser(undefined);
    storage.logout();
  }, []);

  /**
   * To save a user in the state and in the localStorage
   * @param (UserFormat | UserTokenFormat) UserData
   */
  const saveSession = useCallback((userData: UserFormat | UserTokenFormat) => {
    storage.setUser(userData);
    setUser(userData);
  }, []);

  /**
   * update name
   */
  const setName = useCallback((name: string) => setUser((state) => {
    if (!state) {
      throw new Error('Not session found');
    }
    return ({ ...state, name });
  }), []);

  /**
   * update email
   */
  const setEmail = useCallback((email: string) => setUser((state) => {
    if (!state) {
      throw new Error('Not session found');
    }
    return ({ ...state, email });
  }), []);

  return {
    user,
    status,
    getSession,
    delSession,
    saveSession,
    setName,
    setEmail,
  };
};

export default useSession;
