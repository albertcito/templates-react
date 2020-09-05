import React from 'react';

export interface UseGlobalProperties {
  logged: boolean;
  login: () => void;
  logout: () => void;
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
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('unhandledrejection', rejectionServerCalls);
    return () => {
      window.removeEventListener('unhandledrejection', rejectionServerCalls);
    };
  }, []);

  const login = () => {
    setLogged(true);
  };

  const logout = () => {
    setLogged(false);
  };

  return {
    logged,
    login,
    logout,
  };
};

export default useGlobal;
