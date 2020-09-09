import { PaginationSearchLangArgumentsFormat } from 'ui/Pagination/Classes/PaginationClassLang';
import { TranslationFormat } from '../../type';
import TranslationDeleteMutation from './TranslationDeleteMutation';
import TranslationsQuery from './TranslationsQuery';
import { TranslationColumns } from '../columns';
import { MessageDataFormat, PaginationDataFormat } from 'util/api/util/serverDataFormat';
import ApiAdminGraphQL from 'util/api/ApiAdminGraphQL';

class TranslationsApi {
  public constructor(
    private columns: TranslationColumns = new TranslationColumns(),
    private api = new ApiAdminGraphQL('graphql/admin'),
  ) {}

  public async all(variables: PaginationSearchLangArgumentsFormat): Promise<PaginationDataFormat<TranslationFormat[]>> {
    return this.api.pageFormat(new TranslationsQuery(variables, this.columns));
  }

  public async delete(translationID: number): Promise<MessageDataFormat<TranslationFormat>> {
    return this.api.messageFormat(
      new TranslationDeleteMutation(translationID, ['translationID']),
    );
  }
}

export default TranslationsApi;
