export const USER = {
    login: {
        success: 'USER_LOGIN_SUCCESS',
    },
    logout: {
        success: 'USER_LOGOUT_SUCCESS',
    },
    verify: {
        success: 'USER_VERIFY_SUCCESS',
        error: 'USER_VERIFY_ERROR',
    }
};

export class UserActions {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.login  = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.verify = this.verify.bind(this);
        this.userToken = 'user';
    }
    login() {
        localStorage.setItem(this.userToken, true);
        return this.dispatch({type: USER.login.success});
    }
    logout() {
        localStorage.removeItem(this.userToken);
        return this.dispatch({type: USER.logout.success});
    }
    verify() {
        const user = localStorage.getItem(this.userToken);
        if (user) {
            return this.dispatch({type: USER.verify.success});
        }
        return this.dispatch({type: USER.verify.error});
    }
}
