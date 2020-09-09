import { GraphQL, Mutation, Operation } from 'typed-graphql-class';
import { ICols, IColumnType, IColVar } from 'typed-graphql-class/dist/interfaces';

import { MessageColumnsType } from 'data/message/type';

export default class MessagesDataQuery extends Operation {
  public constructor(
    operationName: string,
    columnType: IColumnType[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variables: { [key: string]: any },
    columns: Array<ICols | string>,
    varTypes: { [key: string]: string },
  ) {
    const query = new Mutation(
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
