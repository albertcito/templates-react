import ApiAdminGraphQL from 'util/api/ApiAdminGraphQL';
import { TagFormat } from '../../type';
import { TagColumns } from '../columns';
import { MessageDataFormat } from 'util/api/util/serverDataFormat';
import { TagCreateMutation, TagCreateArguments } from './TagCreateMutation';
import { TagUpdateArguments, TagUpdateMutation } from './TagUpdateMutation';
import TagQuery from './TagQuery';

class TagApi {
  public constructor(
    private columns: TagColumns = new TagColumns(),
    private api = new ApiAdminGraphQL(),
  ) {}

  public async add(fields: TagCreateArguments): Promise<MessageDataFormat<TagFormat>> {
    return this.api.pageFormat(new TagCreateMutation(fields, this.columns));
  }

  public async get(tagID: number): Promise<MessageDataFormat<TagFormat>> {
    return this.api.pageFormat(new TagQuery(tagID, this.columns));
  }

  public async update(fields: TagUpdateArguments): Promise<MessageDataFormat<TagFormat>> {
    return this.api.pageFormat(new TagUpdateMutation(fields, this.columns));
  }
}

export default TagApi;
