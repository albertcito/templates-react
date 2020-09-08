import { UserFormat, UserTokenFormat } from 'data/security/user/type';

export interface UserStorageFormat {
  userID: number;
  accessToken: string;
}

interface UserStorageKeyFormat {
  userID: string;
  accessToken: string;
}

class Storage {
  private readonly user: UserStorageKeyFormat;

  public constructor() {
    this.user = {
      accessToken: 'accessToken',
      userID: 'userID',
    };
  }

  public getUser(): UserStorageFormat | null {
    const userID = localStorage.getItem(this.user.userID);
    const accessToken = localStorage.getItem(this.user.accessToken);
    if (!accessToken || !userID) { return null; }
    return {
      accessToken,
      userID: parseInt(userID, 10),
    };
  }

  private getUserData(data: UserFormat | UserTokenFormat): UserStorageFormat {
    const user = {
      accessToken: '',
      userID: data.userID,
    };
    user.accessToken = ('accessToken' in data
      ? data.accessToken
      : this.getToken()
    );
    return user;
  }

  public setUser(data: UserFormat | UserTokenFormat) {
    const validData = this.getUserData(data);
    Object.entries(validData).forEach(([key, value]) => {
      localStorage.setItem(key, value as string);
    });
  }

  public getToken(): string {
    const accessToken = localStorage.getItem(this.user.accessToken);
    return accessToken ?? '';
  }

  public logout() {
    Object.entries(this.user).forEach(([key]) => {
      localStorage.removeItem(key);
    });
  }
}

export default new Storage();
