import { PaginationArgumentsOptional } from '../../../pagination/classes/PaginationClass';
import ApiGraphQL from 'util/api/ApiGraphQL';
import { LangFormat } from '../../type';
import LangDeleteMutation from './LangDeleteMutation';
import LangsQuery from './LangsQuery';
import { LangColumns } from '../columns';
import { MessageDataErrorFormat, PaginationDataErrorFormat } from 'util/dataFormat/serverDataFormat';

class LangsApi {
  public constructor(
    private columns: LangColumns = new LangColumns(),
    private api = new ApiGraphQL('graphql'),
  ) {}

  public async all(variables: PaginationArgumentsOptional = {}): Promise<PaginationDataErrorFormat<LangFormat[]>> {
    return this.api.pageFormat(new LangsQuery(variables, this.columns));
  }

  public async delete(langID: string): Promise<MessageDataErrorFormat<LangFormat>> {
    return this.api.messageFormat(
      new LangDeleteMutation(langID, ['langID']),
    );
  }
}

export default LangsApi;
