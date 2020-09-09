import { PaginationArgumentsOptional } from 'ui/Pagination/Classes/PaginationClass';
import ApiGraphQL from 'util/api/ApiGraphQL';
import { LangFormat } from '../../type';
import LangDeleteMutation from './LangDeleteMutation';
import LangsQuery from './LangsQuery';
import { LangColumns } from '../columns';
import { MessageDataFormat, PaginationDataFormat } from 'util/api/util/serverDataFormat';

class LangsApi {
  public constructor(
    private columns: LangColumns = new LangColumns(),
    private api = new ApiGraphQL('graphql'),
  ) {}

  public async all(variables: PaginationArgumentsOptional = {}): Promise<PaginationDataFormat<LangFormat[]>> {
    return this.api.pageFormat(new LangsQuery(variables, this.columns));
  }

  public async delete(langID: string): Promise<MessageDataFormat<LangFormat>> {
    return this.api.messageFormat(
      new LangDeleteMutation(langID, ['langID']),
    );
  }
}

export default LangsApi;
