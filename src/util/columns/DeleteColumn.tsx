import { LockOutlined } from '@ant-design/icons';
import React from 'react';
import { ColumnProps } from 'antd/lib/table';

import { ColumnTableProperties } from './base/ColumnTableProperties';
import TableColumnAbstract from './base/TableColumnAbstract';
import ConfirmDelete from 'ui/Buttons/ConfirmDelete';

export interface DeleteColumnProperties<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDelete?: (item: T, index: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isLoading?: (item: T, index: number) => boolean;
  props?: ColumnProps<T>;
}
export default class DeleteColumn<T> implements TableColumnAbstract {
  public readonly column: ColumnTableProperties;

  constructor({ onDelete, isLoading, props }: DeleteColumnProperties<T>) {
    const column: ColumnTableProperties = {
      className: 'fit-center-column',
      key: 'delete',
      title: 'Delete',
    };
    if (onDelete) {
      column.render = function delColumn(_: string, data: T, index: number) {
        if (data['isBlocked' as keyof T]) {
          return <LockOutlined />;
        }
        return (
          <ConfirmDelete
            onConfirm={() => onDelete(data, index)}
            loading={isLoading ? isLoading(data, index) : false}
          />
        );
      };
    }
    this.column = {
      ...column,
      ...props,
    };
  }
}
