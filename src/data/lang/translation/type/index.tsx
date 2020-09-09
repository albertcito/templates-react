import { GraphQL, types } from 'typed-graphql-class';
import { IColumnType, IColVar } from 'typed-graphql-class/dist/interfaces';

import { TextFormat, textColumnType } from 'data/lang/text/TextType';

export interface TranslationFormat {
  translationID: number;
  code?: string;
  isBlocked?: boolean;
  text: TextFormat;
  texts: TextFormat[];
}

interface TranslationFormatColumn extends IColumnType {
  name: keyof TranslationFormat;
}

export const TranslationColumnsType: TranslationFormatColumn[] = [
  {
    name: 'translationID',
    resolve: types.number,
  },
  {
    name: 'code',
    resolve: types.string,
  },
  {
    name: 'isBlocked',
    resolve: types.boolean,
  },
  {
    name: 'text',
    resolve: (fields: IColVar) => GraphQL.resolveType(fields, textColumnType, { langID: 'String' }),
  },
  {
    name: 'texts',
    resolve: (fields: IColVar) => GraphQL.resolveType(fields, textColumnType),
  },
];
