import React from 'react';

import ILayoutAppPage from '../interfaces/ILayoutAppPage';
import { Footer, Header } from './components';
import './css/index.scss';

const GlobalLayout = ({ Component, route }: ILayoutAppPage) => (
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
