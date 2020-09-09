import { GraphQL, types } from 'typed-graphql-class';
import { IColumnType, IColVar } from 'typed-graphql-class/dist/interfaces';

import { TextFormat, textColumnType } from 'data/lang/text/TextType';

export interface TagFormat {
  tagID: number;
  isBlocked: boolean;
  translationID: number;
  text: TextFormat;
  texts: TextFormat[];
}

interface TagFormatKeysColumn extends IColumnType {
  name: keyof TagFormat;
}

export const TagColumnsType: TagFormatKeysColumn[] = [
  {
    name: 'tagID',
    resolve: types.number,
  },
  {
    name: 'translationID',
    resolve: types.number,
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
