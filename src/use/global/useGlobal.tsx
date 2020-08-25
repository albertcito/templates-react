import React from 'react';

export interface IUseGlobal {
  logged: boolean;
  login: () => void;
  logout: () => void;
}

const useGlobal = (): IUseGlobal => {

  const [logged, setLogged] = React.useState(false);

  const login = () => {
    setLogged(true);
  }

  const logout = () => {
    setLogged(false);
  }

  return {
    logged,
    login,
    logout
  }
}

export default useGlobal;