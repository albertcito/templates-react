import React from 'react';
import { Table as TableAntd } from 'antd';
import { TableProps } from 'antd/lib/table/Table';

import { WrapItems, WrapItemsProperties } from '../../WrapItems';

import './index.scss';

export interface TableProperties extends Omit<WrapItemsProperties, 'children'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: TableProps<any>;
}
export const Table: React.FC<TableProperties> = ({
  table,
  ...props
}) => (
  <WrapItems {...props}>
    <TableAntd {...table} />
  </WrapItems>
);
