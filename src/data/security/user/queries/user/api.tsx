import ApiAdminGraphQL from 'util/api/ApiAdminGraphQL';
import { UserFormat } from '../../type';
import { UserColumns } from '../columns';
import { MessageDataFormat } from 'util/api/util/serverDataFormat';
import { UserCreateMutation, UserCreateArguments } from './UserCreateMutation';
import { UserUpdateArguments, UserUpdateMutation } from './UserUpdateMutation';
import UserQuery from './UserQuery';

class UserApi {
  public constructor(
    private columns: UserColumns = new UserColumns(),
    private api = new ApiAdminGraphQL(),
  ) {}

  public async add(fields: UserCreateArguments): Promise<MessageDataFormat<UserFormat>> {
    return this.api.pageFormat(new UserCreateMutation(fields, this.columns));
  }

  public async get(userID: number): Promise<MessageDataFormat<UserFormat>> {
    return this.api.pageFormat(new UserQuery(userID, this.columns));
  }

  public async update(fields: UserUpdateArguments): Promise<MessageDataFormat<UserFormat>> {
    return this.api.pageFormat(new UserUpdateMutation(fields, this.columns));
  }
}

export default UserApi;
