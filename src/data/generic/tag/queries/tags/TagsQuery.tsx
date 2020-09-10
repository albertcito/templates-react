import PaginationGraphQL from 'util/GraphQL/PaginationGraphQL';
import { TagColumns } from '../columns';
import { TagColumnsType } from '../../type';
import { PaginationSearchLangArgumentsFormat, paginationVariables } from 'ui/Pagination/Classes/PaginationClassLang';

class TagsQuery extends PaginationGraphQL {
  public constructor(variables: PaginationSearchLangArgumentsFormat, columns: TagColumns) {
    super(
      'tags',
      TagColumnsType,
      variables,
      columns.fields,
      paginationVariables,
    );
  }
}

export default TagsQuery;
