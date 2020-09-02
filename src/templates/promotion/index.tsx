import React from 'react';

import LayoutPageProperties from '../interfaces/LayoutPageProperties';

const PromotionLayout = ({ Component, route }: LayoutPageProperties) => (
  <div className='promotion-layout'>
    <Component route={route} />
  </div>
);

export default PromotionLayout;
