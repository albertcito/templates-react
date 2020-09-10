import { PaginationSearchLangArgumentsFormat } from 'ui/Pagination/Classes/PaginationClassLang';
import { TagFormat } from '../../type';
import TagDeleteMutation from './TagDeleteMutation';
import TagsQuery from './TagsQuery';
import { TagColumns } from '../columns';
import { MessageDataFormat, PaginationDataFormat } from 'util/api/util/serverDataFormat';
import ApiAdminGraphQL from 'util/api/ApiAdminGraphQL';

class TagsApi {
  public constructor(
    private columns: TagColumns = new TagColumns(),
    private api = new ApiAdminGraphQL('graphql/admin'),
  ) {}

  public async all(variables: PaginationSearchLangArgumentsFormat): Promise<PaginationDataFormat<TagFormat[]>> {
    return this.api.pageFormat(new TagsQuery(variables, this.columns));
  }

  public async delete(tagID: number): Promise<MessageDataFormat<TagFormat>> {
    return this.api.messageFormat(
      new TagDeleteMutation(tagID, ['tagID']),
    );
  }
}

export default TagsApi;
