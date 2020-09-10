import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TagColumnsType } from '../../type';
import { TagColumns } from '../columns';
import { parameters, TagCreateArguments } from './TagCreateMutation';

export interface TagUpdateArguments extends TagCreateArguments {
  tagID: number;
}

export class TagUpdateMutation extends MessagesDataMutation {
  constructor(variables: TagUpdateArguments, columns: TagColumns) {
    super(
      'tagUpdate',
      TagColumnsType,
      variables,
      columns.fields,
      {
        tagID: 'Int',
        ...parameters,
      },
    );
  }
}
