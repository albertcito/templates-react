import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table/Table';

import { WrapItemsSearchLangTag, WrapItemsSearchLangTagProperties } from '../../WrapItems';
import './index.scss';

export interface TableSearchLangTagProperties extends Omit<WrapItemsSearchLangTagProperties, 'children'> {
  table: TableProps<any>;
}
export const TableSearchLangTag: React.FC<TableSearchLangTagProperties> = ({
  table,
  ...props
}) => (
  <WrapItemsSearchLangTag {...props}>
    <Table {...table} expandable={{ childrenColumnName: 'no_column_svg_problem_with_children_column_name' }} />
  </WrapItemsSearchLangTag>
);
