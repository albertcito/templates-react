import { types } from 'typed-graphql-class';
import { IColumnType } from 'typed-graphql-class/dist/interfaces';

export interface PaginationFormat {
  per: number;
  current: number;
  from: number;
  to: number;
  total: number;
  last: number;
  page: number;
}

interface PaginationTypeFormat extends IColumnType {
  name: keyof PaginationFormat;
}

export const PaginationColumnType: PaginationTypeFormat[] = [
  {
    name: 'per',
    resolve: types.number,
  },
  {
    name: 'current',
    resolve: types.number,
  },
  {
    name: 'from',
    resolve: types.number,
  },
  {
    name: 'to',
    resolve: types.number,
  },
  {
    name: 'total',
    resolve: types.number,
  },
  {
    name: 'last',
    resolve: types.number,
  },
  {
    name: 'page',
    resolve: types.number,
  },
];
