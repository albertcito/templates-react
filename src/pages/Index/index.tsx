import React from 'react';

import PageProperties from 'routes/PageProperties';
import { GlobalContext } from 'use/global';
import Private from './Private';
import Public from './Public';

const Index: React.FC<PageProperties> = () => {
  const { sessions: { user } } = React.useContext(GlobalContext);
  if (user) return <Private />;
  return <Public />;
};
export default Index;
