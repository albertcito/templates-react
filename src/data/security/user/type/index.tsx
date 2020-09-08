import { types } from 'typed-graphql-class';
import { IColumnType } from 'typed-graphql-class/dist/interfaces';

export interface UserFormat {
  userID: number;
  name: string;
  email: string;
  status: boolean;
  emailVerified: boolean;
}
export interface UserTokenFormat extends UserFormat {
  accessToken: string;
}

interface UserTypeFormat extends IColumnType {
  name: keyof UserTokenFormat;
}
export const UserColumnsType: UserTypeFormat[] = [
  {
    name: 'userID',
    resolve: types.number,
  },
  {
    name: 'name',
    resolve: types.string,
  },
  {
    name: 'email',
    resolve: types.string,
  },
  {
    name: 'status',
    resolve: types.boolean,
  },
  {
    name: 'emailVerified',
    resolve: types.boolean,
  },
  {
    name: 'accessToken',
    resolve: types.string,
  },
];
