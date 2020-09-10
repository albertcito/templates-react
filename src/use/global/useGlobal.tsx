import React from 'react';

import useSession, { UseSessionProperties } from 'use/global/useSession';
import storage from 'util/Storage';
import useLogout from 'data/security/session/logout/useLogout';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import useUnauthorized from './useUnauthorized';
import useStartData, { StartDataFormat } from './useStartData';
import useIntl, { UseIntlFormat } from './useIntl';

export interface UseGlobalProperties {
  sessions: Omit<UseSessionProperties, 'getSession' | 'delSession'>;
  logout: {
    logout: () => void;
    status: StatusFormat;
  };
  appData: Omit<StartDataFormat, 'getData'>;
  intl: UseIntlFormat;
}

const useGlobal = (): UseGlobalProperties => {
  const { getSession, delSession, ...sessions } = useSession();
  const { doLogout, status: logoutStatus } = useLogout();
  const { getData, ...appData } = useStartData();
  const intl = useIntl();

  useUnauthorized(delSession);

  React.useEffect(() => {
    const storageUser = storage.getUser();
    if (storageUser) {
      getSession(storageUser);
    }
  }, [getSession]);

  React.useEffect(() => { getData(); }, [getData]);

  return {
    sessions,
    logout: {
      logout: () => doLogout(delSession),
      status: logoutStatus,
    },
    appData,
    intl,
  };
};

export default useGlobal;
