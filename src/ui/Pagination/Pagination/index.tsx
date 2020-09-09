import { Pagination } from 'antd';
import React from 'react';

import { PaginationFormat } from 'data/pagination/type';
import './pages.scss';

const goToScroll = (tagName: string) => {
  const body = document.getElementsByTagName(tagName);
  if (body[0]) { body[0].scrollIntoView({ behavior: 'smooth' }); }
};

const showTotal = (
  total: number,
  range: [number, number],
  itemsLabel: string,
): React.ReactNode => (
  <>
    {`${range[0]} - ${range[1]} of ${total} ${itemsLabel}`}
  </>
);

interface PaginateProperties {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (page: number, pageSize: number) => void;
  pagination: PaginationFormat;
  itemsLabel?: string;
  scroll?: string;
  small?: boolean;
}

const PaginationLocal: React.FC<PaginateProperties> = ({
  onChange,
  pagination,
  itemsLabel,
  scroll,
  small,
}) => {
  if (
    pagination.total
    && pagination.per
    && pagination.total <= pagination.per
  ) {
    return <></>;
  }

  if (!pagination.total) { return <></>; }

  const label = typeof itemsLabel === 'string' ? itemsLabel : 'items';
  const subClass = typeof small === 'string' ? 'pagination-small' : '';
  const size = small ? 'small' : undefined;

  return (
    <div className={`pagination ${subClass}`}>
      <Pagination
        size={size}
        showTotal={(total, range) => showTotal(total, range, label)}
        current={pagination.current}
        total={pagination.total}
        pageSize={pagination.per}
        onChange={(page, perPage) => {
          if (scroll) { goToScroll(scroll); }
          onChange(page, perPage ?? pagination.per);
        }}
      />
    </div>
  );
};

export default PaginationLocal;
