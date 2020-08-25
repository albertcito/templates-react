import React from 'react';
import ILayoutAppPage from '../interfaces/ILayoutAppPage';
import { Footer, Header } from './components';
import './css/index.scss';

const GlobalLayout = ({ Component, route }: ILayoutAppPage) => {
 return <div className='public-layout'>
    <Header />
    <div className='content-page'>
      <div className='content-width breadcrumbs'>
      </div>
      <Component route={route} />
    </div>
    <Footer />
 </div>;
};

export default GlobalLayout;
