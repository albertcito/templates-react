import { Button } from 'antd';
import React from 'react';

interface AddNewClickProperties {
  onClick: React.MouseEventHandler<HTMLElement>;
  title?: React.ReactNode;
}

const AddNewClick: React.FC<AddNewClickProperties> = ({ onClick, title = 'Add new' }) => (
  <Button
    className='button-right'
    type='primary'
    onClick={onClick}
  >
    {title}
  </Button>
);
export default AddNewClick;
