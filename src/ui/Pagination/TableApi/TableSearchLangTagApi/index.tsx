/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { SorterResult, TablePaginationConfig } from 'antd/lib/table/interface';
import { Table } from 'antd';

import { AscDescEnum } from 'ui/Pagination/Classes/PaginationClass';
import { ColumnTableProperties } from 'util/columns/base/ColumnTableProperties';
import Loading from 'ui/Loading';
import { PaginationDataFormat } from 'util/api/util/serverDataFormat';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import TableColumns from 'util/columns/base/TableColumns';
import { SearchInputLangProperties } from 'ui/SearchInput';
import { PaginationClassSearchLangTags } from 'ui/Pagination/Classes/PaginationClassTags';
import { TagFormat } from 'data/generic/tag/type';
import { WrapItemsSearchLangTag } from '../../WrapItems';

import './index.scss';

export interface TableSearchLangTagApiProperties extends Omit<SearchInputLangProperties, 'onSelectLang' | 'onSearch'> {
  pagArgs: PaginationClassSearchLangTags;
  data: PaginationDataFormat<any>;
  status: StatusFormat;
  getData: () => void;
  columns: TableColumns;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowKey: (item: any) => string | number;
  tags: TagFormat[];
}

export const TableSearchLangTagApi: React.FC<TableSearchLangTagApiProperties> = ({
  pagArgs,
  data,
  status,
  getData,
  columns,
  rowKey,
  langs,
  lang,
  tags,
}) => {
  const onSearch = (search: string, tagsList: number[]) => {
    pagArgs.setSearch(search);
    pagArgs.setPage(1);
    pagArgs.setTags(tagsList);
    getData();
  };

  const onChangePagination = (page: number) => {
    pagArgs.setPage(page);
    getData();
    // If it's a modal it doen't works
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSelectLangInternal = (langID: string) => {
    pagArgs.setLangID(langID);
    getData();
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
    <WrapItemsSearchLangTag
      pagination={data.pagination}
      status={status}
      onChangePagination={onChangePagination}
      onSearch={onSearch}

      langs={langs}
      lang={lang}
      onSelectLang={onSelectLangInternal}
      tags={tags}
    >
      <Table
        {...{
          dataSource: data.data,
          rowKey,
          columns: columns.getColumns(),
          onChange: onChangeTable,
          pagination: false,
        }}
        expandable={{ childrenColumnName: 'no_column_svg_problem_with_children_column_name' }}
      />
    </WrapItemsSearchLangTag>
  );
};
