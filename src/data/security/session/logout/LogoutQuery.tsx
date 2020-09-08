import { Operation, Query } from 'typed-graphql-class';

import { MessageColumnsType } from 'data/message/type';
import { MessageColumns } from 'data/message/columns';

class LogoutQuery extends Operation {
  constructor(columns: MessageColumns) {
    super(
      {},
      columns.fields,
      new Query(
        'logout',
        MessageColumnsType,
      ),
    );
  }
}

export default LogoutQuery;
