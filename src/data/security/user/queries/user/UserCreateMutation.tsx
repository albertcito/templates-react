import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { UserFormat, UserColumnsType } from '../../type';
import { UserColumns } from '../columns';

export type UserCreateArguments = Omit<UserFormat, 'userID'>;

export const parameters = {
  name: 'String',
  localName: 'String',
  active: 'Boolean',
  isBlocked: 'Boolean',
};

export class UserCreateMutation extends MessagesDataMutation {
  constructor(variables: UserCreateArguments, columns: UserColumns) {
    super(
      'userCreate',
      UserColumnsType,
      variables,
      columns.fields,
      parameters,
    );
  }
}
