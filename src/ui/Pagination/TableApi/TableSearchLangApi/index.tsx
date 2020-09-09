/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { SorterResult, TablePaginationConfig } from 'antd/lib/table/interface';
import { Table } from 'antd';

import { WrapItemsSearchLang } from '../../WrapItems';
import { AscDescEnum } from 'ui/Pagination/Classes/PaginationClass';
import { ColumnTableProperties } from 'util/columns/base/ColumnTableProperties';
import Loading from 'ui/Loading';
import { PaginationDataFormat } from 'util/api/util/serverDataFormat';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import TableColumns from 'util/columns/base/TableColumns';
import { PaginationClassSearchLang } from 'ui/Pagination/Classes/PaginationClassLang';
import { SearchInputLangProperties } from 'ui/SearchInput';

import './index.scss';

export interface TableSearchLangApiProperties extends Omit<SearchInputLangProperties, 'children'> {
  pagArgs: PaginationClassSearchLang;
  data: PaginationDataFormat<any>;
  status: StatusFormat;
  getData: () => void;
  columns: TableColumns;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowKey: (item: any) => string | number;
}

export const TableSearchLangApi: React.FC<TableSearchLangApiProperties> = ({
  pagArgs,
  data,
  status,
  getData,
  columns,
  rowKey,
  langs,
  lang,
}) => {
  const onSearch = (search: string) => {
    pagArgs.setSearch(search);
    pagArgs.setPage(1);
    getData();
  };

  const onChangePagination = (page: number, perPage: number) => {
    pagArgs.setPage(page);
    pagArgs.setLimit(perPage);
    getData();
    // If it's a modal it doen't works
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSelectLangInternal = (langID: string) => {
    pagArgs.setLangID(langID);
    getData();
  };

  const onChangeTable = (
    _: TablePaginationConfig,
    __: Record<string, (string | number)[] | null>,
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
    <WrapItemsSearchLang
      pagination={data.pagination}
      status={status}
      onChangePagination={onChangePagination}
      onSearch={onSearch}

      langs={langs}
      lang={lang}
      onSelectLang={onSelectLangInternal}
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
    </WrapItemsSearchLang>
  );
};
