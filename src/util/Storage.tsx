import { UserFormat, UserTokenFormat } from 'data/security/user/type';

export interface UserStorageFormat {
  userID: number;
  accessToken: string;
}

class Storage {
  private readonly user = {
    accessToken: 'accessToken',
    userID: 'userID',
  };

  private readonly langID = 'langID';

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

  public getLangID(): string {
    const langID = localStorage.getItem(this.langID);
    return langID ?? '';
  }

  public setLangID(langID: string) {
    return localStorage.setItem(this.langID, langID);
  }

  public logout() {
    Object.entries(this.user).forEach(([key]) => {
      localStorage.removeItem(key);
    });
  }
}

export default new Storage();
