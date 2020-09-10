import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

interface AddNewLinkProperties {
  link: string;
  addNew?: string;
}
const AddNewLink: React.FC<AddNewLinkProperties> = ({ link, addNew = 'generic.addNew' }) => (
  <Button className='button-right' type='primary'>
    <Link to={`${link}`}>
      {addNew}
    </Link>
  </Button>
);

export default AddNewLink;
