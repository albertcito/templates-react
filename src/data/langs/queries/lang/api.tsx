import ApiGraphQL from 'util/api/ApiGraphQL';
import { LangFormat } from '../../type';
import { LangColumns } from '../columns';
import { PaginationDataFormat } from 'util/dataFormat/serverDataFormat';
import { LangCreateMutation, LangCreateArguments } from './LangCreateMutation';
import { LangUpdateArguments, LangUpdateMutation } from './LangUpdateMutation';
import LangQuery from './LangQuery';

class LangApi {
  public constructor(
    private columns: LangColumns,
    private api = new ApiGraphQL('graphql'),
  ) {}

  public async add(fields: LangCreateArguments): Promise<PaginationDataFormat<LangFormat>> {
    return this.api.pageFormat(new LangCreateMutation(fields, this.columns));
  }

  public async gets(langID: number): Promise<PaginationDataFormat<LangFormat>> {
    return this.api.pageFormat(new LangQuery(langID, this.columns));
  }

  public async update(fields: LangUpdateArguments): Promise<PaginationDataFormat<LangFormat>> {
    return this.api.pageFormat(new LangUpdateMutation(fields, this.columns));
  }
}

export default LangApi;
