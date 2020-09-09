import React from 'react';

import './index.scss';

interface ActionsListProperties {
  actions: React.ReactNode[];
}
const ActionsList: React.FC<ActionsListProperties> = ({ actions }) => (
  <ul className='table-title-actions'>
    {actions.map((action, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={`action-${index}`}>
        {action}
      </li>
    ))}
  </ul>
);

export default ActionsList;
