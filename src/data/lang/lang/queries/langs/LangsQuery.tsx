import { PaginationArgumentsOptional, paginationVariables } from 'ui/Pagination/Classes/PaginationClass';
import PaginationGraphQL from 'util/GraphQL/PaginationGraphQL';
import { LangColumns } from '../columns';
import { LangColumnsType } from '../../type';

class LangsQuery extends PaginationGraphQL {
  public constructor(variables: PaginationArgumentsOptional, columns: LangColumns) {
    super(
      'langs',
      LangColumnsType,
      variables,
      columns.fields,
      paginationVariables,
    );
  }
}

export default LangsQuery;
