import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { UserTokenFormat } from '../../type';

export type UserKeys = keyof UserTokenFormat;

export const defaultUserColumns: UserKeys[] = [
  'userID',
  'name',
  'email',
  'emailVerified',
  'accessToken',
];

export class UserColumns implements GraphQLColumns<UserKeys[]> {
  public constructor(public readonly fields: UserKeys[] = defaultUserColumns) {
    this.fields = fields;
  }
}
