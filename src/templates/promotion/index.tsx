import React from 'react';
import ILayoutAppPage from '../interfaces/ILayoutAppPage';

const PromotionLayout = ({ Component, route }: ILayoutAppPage) => {
 return <div className='promotion-layout'>
    <Component route={route} />
 </div>;
};

export default PromotionLayout;
