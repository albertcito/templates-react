import React from 'react';
import { GlobalContext } from 'use/global';

import Private from './Private';
import Public from './Public';

const Index: React.FC = () => {
  const global = React.useContext(GlobalContext);
  if (global.logged) return <Private />;
  return <Public />;
};
export default Index;
