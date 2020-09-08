import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { PaginationFormat } from '../type';

export type PaginationKeys = keyof PaginationFormat;
export const paginationColumns: PaginationKeys[] = [
  'current',
  'from',
  'last',
  'per',
  'to',
  'total',
];

export class PaginationColumns implements GraphQLColumns<PaginationKeys[]> {
  public constructor(public readonly fields: PaginationKeys[] = paginationColumns) {
    this.fields = fields;
  }
}
