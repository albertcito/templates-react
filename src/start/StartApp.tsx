import React from 'react';
import Routes from './Routes';
import { GlobalContext, useGlobal} from 'use/global';

const StartApp = () => {
  const global = useGlobal();
  return <GlobalContext.Provider value={global}>
    <Routes />
    </GlobalContext.Provider>;
};

export default StartApp;
