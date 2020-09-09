import PaginationGraphQL from 'util/GraphQL/PaginationGraphQL';
import { TranslationColumns } from '../columns';
import { TranslationColumnsType } from '../../type';
import { PaginationSearchLangArgumentsFormat, paginationVariables } from 'ui/Pagination/Classes/PaginationClassLang';

class TranslationsQuery extends PaginationGraphQL {
  public constructor(variables: PaginationSearchLangArgumentsFormat, columns: TranslationColumns) {
    super(
      'translations',
      TranslationColumnsType,
      variables,
      columns.fields,
      paginationVariables,
    );
  }
}

export default TranslationsQuery;
