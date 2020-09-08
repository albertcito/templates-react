import React, { useCallback } from 'react';

import useSession, { UseSessionProperties } from 'use/global/useSession';
import storage from 'util/Storage';
import useLogout from 'data/security/session/logout/useLogout';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';

export interface UseGlobalProperties {
  sessions: Omit<UseSessionProperties, 'getSession' | 'delSession'>;
  logout: {
    logout: () => void;
    status: StatusFormat;
  }
}

const rejectionServerCalls = (event: PromiseRejectionEvent) => {
  if (
    event.reason && event.reason.response
    && (event.reason.response.status === 401)
  ) {
    // TO DO: remove the session
    event.preventDefault();
  }
};

const useGlobal = (): UseGlobalProperties => {
  const { getSession, delSession, ...sessions } = useSession();
  const { doLogout, status: logoutStatus } = useLogout();

  React.useEffect(() => {
    window.addEventListener('unhandledrejection', rejectionServerCalls);
    return () => {
      window.removeEventListener('unhandledrejection', rejectionServerCalls);
    };
  }, []);

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
