import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { TextFormatKeys, defaultTextColumns } from 'data/lang/text/columns';
import { TextArgumentsFields } from 'data/lang/text/TextArguments';
import { TagFormat } from '../../type';

export type TagsKeys =
  keyof Omit<TagFormat, 'text' | 'texts'> |
  { 'text': TextArgumentsFields } |
  { 'texts': TextFormatKeys[] };

export const defaultTagColumns: TagsKeys[] = [
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

export class TagColumns implements GraphQLColumns<TagsKeys[]> {
  public constructor(public readonly fields: TagsKeys[] = defaultTagColumns) {}
}
