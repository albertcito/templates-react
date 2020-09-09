import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table/Table';

import { WrapItemsSearch, WrapItemsSearchProperties } from '../../WrapItems';
import './index.scss';

export interface TableSearchProperties extends Omit<WrapItemsSearchProperties, 'children'> {
  table: TableProps<any>;
}
export const TableSearch: React.FC<TableSearchProperties> = ({
  table,
  ...props
}) => (
  <WrapItemsSearch {...props}>
    <Table
      {...table}
    />
  </WrapItemsSearch>
);
