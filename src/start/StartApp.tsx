import React from 'react';
import { GlobalContext, useGlobal } from 'use/global';

import Routes from './Routes';

const StartApp = () => {
  const global = useGlobal();
  return (
    <GlobalContext.Provider value={global}>
      <Routes />
    </GlobalContext.Provider>
  );
};

export default StartApp;
