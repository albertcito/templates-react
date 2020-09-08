import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { UserColumnsType } from '../../type';
import { UserColumns } from '../columns';
import { parameters, UserCreateArguments } from './UserCreateMutation';

export interface UserUpdateArguments extends UserCreateArguments {
  userID: number;
}

export class UserUpdateMutation extends MessagesDataMutation {
  constructor(variables: UserUpdateArguments, columns: UserColumns) {
    super(
      'userUpdate',
      UserColumnsType,
      variables,
      columns.fields,
      {
        userID: 'String',
        ...parameters,
      },
    );
  }
}
