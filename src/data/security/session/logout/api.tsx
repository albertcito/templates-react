import { MessageColumns } from 'data/message/columns';
import { SimpleDataFormat } from 'util/api/util/serverDataFormat';
import LogoutQuery from './LogoutQuery';
import { MessageFormat } from 'data/message/type';
import ApiAdminGraphQL from 'util/api/ApiAdminGraphQL';

class LogoutApi {
  public constructor(
    private columns: MessageColumns = new MessageColumns(),
    private api = new ApiAdminGraphQL('graphql/admin'),
  ) {}

  public async logout(): Promise<SimpleDataFormat<MessageFormat>> {
    return this.api.simpleFormat(new LogoutQuery(this.columns));
  }
}

export default LogoutApi;
