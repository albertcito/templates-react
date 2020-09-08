import React from 'react';

import LayoutPageProperties from '../interfaces/LayoutPageProperties';
import { Footer, Header } from './ui';
import './css/index.scss';

const GlobalLayout = ({ Component, route }: LayoutPageProperties) => (
  <div className='public-layout'>
    <Header />
    <div className='content-page'>
      <div className='content-width breadcrumbs' />
      <Component route={route} />
    </div>
    <Footer />
  </div>
);

export default GlobalLayout;
