/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { SorterResult, TablePaginationConfig } from 'antd/lib/table/interface';
import { Table } from 'antd';

import { PaginationClass, AscDescEnum } from 'ui/Pagination/Classes/PaginationClass';
import { ColumnTableProperties } from 'util/columns/base/ColumnTableProperties';
import Loading from 'ui/Loading';
import { PaginationDataFormat } from 'util/api/util/serverDataFormat';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import TableColumns from 'util/columns/base/TableColumns';
import { WrapItems } from '../../WrapItems';

import './index.scss';

export interface TableApiProperties {
  pagArgs: PaginationClass;
  data: PaginationDataFormat<any>;
  status: StatusFormat;
  getData: () => void;
  columns: TableColumns;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowKey: (item: any) => string | number;
}
export const TableApi: React.FC<TableApiProperties> = ({
  pagArgs,
  data,
  status,
  getData,
  columns,
  rowKey,
}) => {
  const onChangePagination = (page: number) => {
    pagArgs.setPage(page);
    getData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onChangeTable = (
    pagination: TablePaginationConfig,
    filters: Record<string, (string | number)[] | null>,
    sorter: SorterResult<ColumnTableProperties> | SorterResult<ColumnTableProperties>[],
  ): void => {
    if (Array.isArray(sorter)) { return; }
    const sorterTable = sorter.column as ColumnTableProperties;
    pagArgs.reset();
    if (!sorterTable || !sorterTable.order) {
      getData();
      return;
    }

    pagArgs.setOrder((sorter.order === 'ascend') ? AscDescEnum.asc : AscDescEnum.desc);
    pagArgs.setOrderBy(sorterTable.order.column);
    getData();
  };

  if (!status.loaded) return <Loading />;

  return (
    <WrapItems
      pagination={data.pagination}
      status={status}
      onChangePagination={onChangePagination}
    >
      <Table
        {...{
          dataSource: data.data,
          rowKey,
          columns: columns.getColumns(),
          onChange: onChangeTable,
          pagination: false,
        }}
      />
    </WrapItems>
  );
};
