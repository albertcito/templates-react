import React from 'react';
import { Spin } from 'antd';

import './index.scss';
import Pagination from '../../Pagination';
import { PaginationFormat } from 'data/pagination/type';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import AlertError from 'ui/Alert/AlertError';
import Loading from 'ui/Loading';

export interface WrapItemsProperties {
  pagination: PaginationFormat;
  status: StatusFormat;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChangePagination: (value: number, perPage: number) => void;
  search?: React.ReactNode;
  children: React.ReactNode;
}

export const WrapItems: React.FC<WrapItemsProperties> = ({
  pagination,
  children,
  status,
  onChangePagination,
  search,
}) => {
  if (!status.loaded) { return <Loading />; }

  return (
    <div className='pagination-table'>
      <Spin spinning={status.submit} tip='Loading...'>
        {status.error?.errors && <AlertError errors={status.error.errors} mgBtm />}
        {search && search}
        <div className='table-pagination-top'>
          <Pagination
            pagination={pagination}
            onChange={onChangePagination}
            small
          />
        </div>
        {children}
        <div className='table-pagination-bottom'>
          <Pagination
            pagination={pagination}
            onChange={onChangePagination}
          />
        </div>
      </Spin>
    </div>
  );
};
