import React from 'react';
import { Alert } from 'antd';

import Errors, { ErrorsProperties } from './Errors';

export interface AlertErrorProperties extends ErrorsProperties {
  mgBtm?: boolean;
}
const AlertError: React.FC<AlertErrorProperties> = ({ errors, mgBtm }) => {
  const style = mgBtm ? { marginBottom: 20 } : undefined;
  return (
    <div style={style}>
      <Alert
        type='error'
        showIcon
        message={<Errors errors={errors} />}
      />
    </div>
  );
};

export default AlertError;
