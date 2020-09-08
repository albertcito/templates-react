import MessagesDataQuery from 'util/GraphQL/MessagesDataQuery';
import { UserColumnsType } from '../../type';
import { UserColumns } from '../columns';

class UserQuery extends MessagesDataQuery {
  constructor(userID: number, columns: UserColumns) {
    super(
      'user',
      UserColumnsType,
      { userID },
      columns.fields,
      { userID: 'Int' },
    );
  }
}

export default UserQuery;
