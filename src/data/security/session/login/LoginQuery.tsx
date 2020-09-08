import { Operation, Query } from 'typed-graphql-class';

import { UserColumnsType } from '../../user/type';
import { UserColumns } from '../../user/queries/columns';

class LogoutQuery extends Operation {
  constructor(email: string, password: string, columns: UserColumns) {
    super(
      {
        email,
        password,
      },
      columns.fields,
      new Query(
        'login',
        UserColumnsType,
        {
          email: 'String',
          password: 'String',
        },
      ),
    );
  }
}

export default LogoutQuery;
