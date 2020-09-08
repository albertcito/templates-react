import PaginationGraphQL from 'util/GraphQL/PaginationGraphQL';
import { UserColumns } from '../columns';
import { UserColumnsType } from '../../type';
import { PaginationSearchArgumentsOptionals, paginationVariables } from 'data/pagination/classes/PaginationClassSearch';

class UsersQuery extends PaginationGraphQL {
  public constructor(variables: PaginationSearchArgumentsOptionals, columns: UserColumns) {
    super(
      'users',
      UserColumnsType,
      variables,
      columns.fields,
      paginationVariables,
    );
  }
}

export default UsersQuery;
