import React from 'react';

import ActionsList from './ActionsList';
import './style.scss';

interface TableTitleProperties {
  title: string | number | React.ReactNode;
  actions?: React.ReactNode[];
}

const TableTitle: React.FC<TableTitleProperties> = ({ title, actions }) => (
  <>
    <div className='table-title-title'>
      {title}
    </div>
    {(actions && actions.length > 0) && <ActionsList actions={actions} />}
  </>
);

export default TableTitle;
