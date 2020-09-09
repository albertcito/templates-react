import { Operation, GraphQL, Query } from 'typed-graphql-class';
import { ICols, IColumnType, IColVar, IVars } from 'typed-graphql-class/dist/interfaces';

import { paginationColumns } from 'data/pagination/columns';
import { PaginationColumnType } from 'data/pagination/type';

export default class PaginationGraphQL extends Operation {
  public constructor(
    operationName: string,
    columnType: IColumnType[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variables: any,
    columns: Array<ICols | string>,
    varTypes: { [key: string]: string } = {},
  ) {
    const query = new Query(
      operationName,
      [
        {
          name: 'data',
          resolve: (parameters: IColVar) => GraphQL.resolveType(parameters, columnType),
        },
        {
          name: 'pagination',
          resolve: (parameters: IColVar) => GraphQL.resolveType(parameters, PaginationColumnType),
        },
      ],
      varTypes,
    );
    const cols = [{
      data: columns,
      pagination: paginationColumns,
    }];
    super(
      variables as IVars,
      cols,
      query,
    );
  }
}
