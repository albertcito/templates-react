import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { TableTitle } from '../TableTitle';

interface TitleWappedProperties {
  url?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  title: string | JSX.Element;
  actions?: React.ReactNode[];
}
const TitleWapped: React.FC<TitleWappedProperties> = ({
  url,
  onClick,
  title,
  actions,
}) => {
  let newTitle: React.ReactNode = <>{title}</>;
  if (url) {
    newTitle = (<Link to={url}>{title}</Link>);
  } else if (onClick) {
    newTitle = (
      <Button
        onClick={onClick}
        type='link'
        className='link-button'
      >
        {title}
      </Button>
    );
  }

  return (
    <TableTitle
      title={newTitle}
      actions={actions}
    />
  );
};
export default TitleWapped;
