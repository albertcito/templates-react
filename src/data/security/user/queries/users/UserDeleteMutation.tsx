import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { UserKeys } from '../columns';
import { UserColumnsType } from '../../type';

class UserDeleteMutation extends MessagesDataMutation {
  constructor(userID: number, columns: UserKeys[] = ['userID']) {
    super(
      'userDelete',
      UserColumnsType,
      { userID },
      columns,
      { userID: 'Int' },
    );
  }
}

export default UserDeleteMutation;
