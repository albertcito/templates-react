import React from 'react';

import useSession, { UseSessionProperties } from 'use/global/useSession';
import storage from 'util/Storage';
import useLogout from 'data/security/session/logout/useLogout';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import useUnauthorized from './useUnauthorized';

export interface UseGlobalProperties {
  sessions: Omit<UseSessionProperties, 'getSession' | 'delSession'>;
  logout: {
    logout: () => void;
    status: StatusFormat;
  };
}

const useGlobal = (): UseGlobalProperties => {
  const { getSession, delSession, ...sessions } = useSession();
  const { doLogout, status: logoutStatus } = useLogout();

  useUnauthorized(delSession);

  React.useEffect(() => {
    const localUser = storage.getUser();
    if (localUser) {
      getSession(localUser);
    }
  }, [getSession]);

  return {
    sessions,
    logout: {
      logout: () => doLogout(delSession),
      status: logoutStatus,
    },
  };
};

export default useGlobal;
