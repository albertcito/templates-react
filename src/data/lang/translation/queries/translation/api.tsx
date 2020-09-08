import ApiAdminGraphQL from 'util/api/ApiAdminGraphQL';
import { TranslationFormat } from '../../type';
import { TranslationColumns } from '../columns';
import { MessageDataFormat } from 'util/api/util/serverDataFormat';
import { TranslationCreateMutation, TranslationCreateArguments } from './TranslationCreateMutation';
import { TranslationUpdateArguments, TranslationUpdateMutation } from './TranslationUpdateMutation';
import TranslationQuery from './TranslationQuery';

class TranslationApi {
  public constructor(
    private columns: TranslationColumns,
    private api = new ApiAdminGraphQL(),
  ) {}

  public async add(fields: TranslationCreateArguments): Promise<MessageDataFormat<TranslationFormat>> {
    return this.api.pageFormat(new TranslationCreateMutation(fields, this.columns));
  }

  public async get(translationID: number): Promise<MessageDataFormat<TranslationFormat>> {
    return this.api.pageFormat(new TranslationQuery(translationID, this.columns));
  }

  public async update(fields: TranslationUpdateArguments): Promise<MessageDataFormat<TranslationFormat>> {
    return this.api.pageFormat(new TranslationUpdateMutation(fields, this.columns));
  }
}

export default TranslationApi;
