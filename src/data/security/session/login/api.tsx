import ApiGraphQL from 'util/api/ApiGraphQL';
import { UserTokenFormat } from '../../user/type';
import { UserColumns } from '../../user/queries/columns';
import { SimpleDataFormat } from 'util/api/util/serverDataFormat';
import LoginQuery from './LoginQuery';

class LoginApi {
  public constructor(
    private columns: UserColumns = new UserColumns(),
    private api = new ApiGraphQL('graphql'),
  ) {}

  public async login(email: string, password: string): Promise<SimpleDataFormat<UserTokenFormat>> {
    return this.api.simpleFormat(new LoginQuery(email, password, this.columns));
  }
}

export default LoginApi;
