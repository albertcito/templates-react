import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

interface AddNewLinkProperties {
  link: string;
  title?: React.ReactNode;
}
const AddNewLink: React.FC<AddNewLinkProperties> = ({ link, title = 'Add new' }) => (
  <Button className='button-right' type='primary'>
    <Link to={`${link}`}>
      {title}
    </Link>
  </Button>
);

export default AddNewLink;
