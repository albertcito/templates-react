import React from 'react';

import ILayoutAppPage from '../interfaces/ILayoutAppPage';

const PromotionLayout = ({ Component, route }: ILayoutAppPage) => (
  <div className='promotion-layout'>
    <Component route={route} />
  </div>
);

export default PromotionLayout;
