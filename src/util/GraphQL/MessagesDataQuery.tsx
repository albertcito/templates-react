import { Operation, GraphQL, Query } from 'typed-graphql-class';
import { ICols, IColumnType, IColVar } from 'typed-graphql-class/dist/interfaces';

import { MessageColumnsType } from 'data/message/type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class MessagesDataQuery<T = any> extends Operation {
  public constructor(
    operationName: string,
    columnType: IColumnType[],
    variables: { [key: string]: T },
    columns: Array<ICols | string>,
    varTypes: { [key: string]: string },
  ) {
    const query = new Query(
      operationName,
      [
        {
          name: 'data',
          resolve: (parameters: IColVar) => GraphQL.resolveType(parameters, columnType),
        },
        {
          name: 'messages',
          resolve: (parameters: IColVar) => GraphQL.resolveType(parameters, MessageColumnsType),
        },
      ],
      varTypes,
    );
    const cols = [{
      data: columns,
      messages: [
        'type',
        'message',
      ],
    }];
    super(
      variables,
      cols,
      query,
    );
  }
}
