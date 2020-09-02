import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import Exception from './Exception';
import './index.scss';

export default function Error403() {
  const actions = (
    <div>
      <Link to='/'>
        <Button type='primary'>
          Back to Home
        </Button>
      </Link>
    </div>
  );

  return (
    <div className='content-width page-error'>
      <Exception
        type='403'
        title='Private'
        desc='This is a private area, you are not authorize to see it'
        actions={actions}
      />
    </div>
  );
}
