import React from 'react';

export interface UseGlobalProperties {
  logged: boolean;
  login: () => void;
  logout: () => void;
}

const useGlobal = (): UseGlobalProperties => {
  const [logged, setLogged] = React.useState(false);

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
