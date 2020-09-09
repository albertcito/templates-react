import { PaginationArgumentsOptional } from 'ui/Pagination/Classes/PaginationClass';
import ApiGraphQL from 'util/api/ApiGraphQL';
import { UserFormat } from '../../type';
import UserDeleteMutation from './UserDeleteMutation';
import UsersQuery from './UsersQuery';
import { UserColumns } from '../columns';
import { MessageDataFormat, PaginationDataFormat } from 'util/api/util/serverDataFormat';

class UsersApi {
  public constructor(
    private columns: UserColumns = new UserColumns(),
    private api = new ApiGraphQL('graphql'),
  ) {}

  public async all(variables: PaginationArgumentsOptional = {}): Promise<PaginationDataFormat<UserFormat[]>> {
    return this.api.pageFormat(new UsersQuery(variables, this.columns));
  }

  public async delete(userID: number): Promise<MessageDataFormat<UserFormat>> {
    return this.api.messageFormat(
      new UserDeleteMutation(userID, ['userID']),
    );
  }
}

export default UsersApi;
