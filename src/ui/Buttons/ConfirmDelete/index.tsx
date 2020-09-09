import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Tooltip } from 'antd';
import React from 'react';
import './index.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IOnConfirm = (event?: React.MouseEvent<HTMLElement>) => void;

interface ConfirmDeleteProperties {
  onConfirm: IOnConfirm;
  title?: string;
  delText?: string;
  tooltip?: string;
  loading?: boolean;
}

const ConfirmDelete: React.FC<ConfirmDeleteProperties> = ({
  onConfirm,
  title,
  delText,
  tooltip,
  loading,
}) => {
  const newTitle = title ?? 'Are you sure delete it?';

  if (loading) {
    return (
      <Button
        size='small'
        icon={<LoadingOutlined />}
        type='dashed'
        disabled
      />
    );
  }
  const component = (
    <Popconfirm
      title={newTitle}
      onConfirm={onConfirm}
      okText='Yes'
      cancelText='No'
    >
      <Button
        size='small'
        icon={<DeleteOutlined />}
        type='dashed'
        className='confirm-delete'
      >
        {delText}
      </Button>
    </Popconfirm>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        {component}
      </Tooltip>
    );
  }

  return component;
};

export default ConfirmDelete;
