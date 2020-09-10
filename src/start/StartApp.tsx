import React from 'react';
import { IntlProvider } from 'react-intl';

import { GlobalContext, useGlobal } from 'use/global';
import Routes from './Routes';

const StartApp = () => {
  const global = useGlobal();
  return (
    <GlobalContext.Provider value={global}>
      <IntlProvider
        locale={global.intl.lang}
        messages={global.intl.messages}
        defaultLocale={global.intl.defaultLocale}
      >
        <Routes />
      </IntlProvider>
    </GlobalContext.Provider>
  );
};

export default StartApp;
