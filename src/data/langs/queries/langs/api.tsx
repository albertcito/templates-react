import { PaginationArgumentsOptional } from '../../../pagination/classes/PaginationClass';
import ApiGraphQL from 'util/api/ApiGraphQL';
import { LangFormat } from '../../type';
import LangDeleteMutation from './LangDeleteMutation';
import LangsQuery from './LangsQuery';
import { LangColumns } from '../columns';
import { PaginationDataFormat } from 'util/dataFormat/serverDataFormat';

type LangPaginationType = PaginationDataFormat<LangFormat[]>;

class LangsApi {
  public constructor(
    private columns: LangColumns = new LangColumns(),
    private api = new ApiGraphQL('graphql'),
  ) {}

  public async delete(langID: number): Promise<LangPaginationType> {
    return this.api.pageFormat(
      new LangDeleteMutation(langID, ['langID']),
    );
  }

  public async all(variables: PaginationArgumentsOptional = {}): Promise<LangPaginationType> {
    return this.api.pageFormat(new LangsQuery(variables, this.columns));
  }
}

export default LangsApi;
