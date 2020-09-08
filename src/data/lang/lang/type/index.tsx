import { types } from 'typed-graphql-class';
import { IColumnType } from 'typed-graphql-class/dist/interfaces';

export interface LangFormat {
  langID: string;
  name: string;
  localName: string;
  active: boolean;
  isBlocked: boolean;
}
interface LangTypeFormat extends IColumnType {
  name: keyof LangFormat;
}
export const LangColumnsType: LangTypeFormat[] = [
  {
    name: 'langID',
    resolve: types.number,
  },
  {
    name: 'name',
    resolve: types.string,
  },
  {
    name: 'localName',
    resolve: types.string,
  },
  {
    name: 'isBlocked',
    resolve: types.boolean,
  },
  {
    name: 'active',
    resolve: types.boolean,
  },
];
