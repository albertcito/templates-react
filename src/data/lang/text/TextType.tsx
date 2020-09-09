import { types } from 'typed-graphql-class';
import { IColumnType } from 'typed-graphql-class/dist/interfaces';

export interface TextFormat {
  langID: string;
  text: string;
  textID?: number;
  translationID: number;
  originalLangID: string;
  isAvailable: boolean;
}

interface TextFormatColumn extends IColumnType {
  name: keyof TextFormat;
}
export const textColumnType: TextFormatColumn[] = [
  {
    name: 'langID',
    resolve: types.string,
  },
  {
    name: 'text',
    resolve: types.string,
  },
  {
    name: 'textID',
    resolve: types.number,
  },
  {
    name: 'originalLangID',
    resolve: types.string,
  },
  {
    name: 'translationID',
    resolve: types.number,
  },
  {
    name: 'isAvailable',
    resolve: types.boolean,
  },
];
