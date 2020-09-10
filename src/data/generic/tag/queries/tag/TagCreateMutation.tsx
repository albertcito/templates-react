import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TagColumnsType } from '../../type';
import { TagColumns } from '../columns';

export interface TagCreateArguments {
  isBlocked: boolean;
  translationID: number;
}

export const parameters = {
  isBlocked: 'Boolean',
  translationID: 'Int',
  langID: 'String',
};

export class TagCreateMutation extends MessagesDataMutation {
  constructor(variables: TagCreateArguments, columns: TagColumns) {
    super(
      'tagCreate',
      TagColumnsType,
      variables,
      columns.fields,
      parameters,
    );
  }
}
