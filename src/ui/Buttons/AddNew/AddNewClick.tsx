import { Button } from 'antd';
import React from 'react';

interface AddNewClickProperties {
  onClick: React.MouseEventHandler<HTMLElement>;
  addNew?: string;
}

const AddNewClick: React.FC<AddNewClickProperties> = ({ onClick, addNew = 'generic.addNew' }) => (
  <Button
    className='button-right'
    type='primary'
    onClick={onClick}
  >
    {addNew}
  </Button>
);
export default AddNewClick;
