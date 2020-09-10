import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { TextFormatKeys, defaultTextColumns } from 'data/lang/text/columns';
import { TextArgumentsFields } from 'data/lang/text/TextArguments';
import { TagFormat } from '../../type';

export type TagKeys =
  keyof Omit<TagFormat, 'text' | 'texts'> |
  { 'text': TextArgumentsFields } |
  { 'texts': TextFormatKeys[] };

export const defaultTagColumns: TagKeys[] = [
  'tagID',
  'isBlocked',
  'translationID',
  {
    text: {
      columns: defaultTextColumns,
      variables: ['langID'],
    },
  },
];

export class TagColumns implements GraphQLColumns<TagKeys[]> {
  public constructor(public readonly fields: TagKeys[] = defaultTagColumns) {}
}
