import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

import './index.scss';

interface LoadingProperties {
  title?: string;
}
const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin
  />
);
const Loading: React.FC<LoadingProperties> = ({ title = '...Loading' }) => (
  <div className='loading'>
    <Spin indicator={antIcon} />
    <br />
    {title}
  </div>
);

export default Loading;
