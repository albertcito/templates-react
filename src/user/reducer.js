import { USER } from './UserActions';

const userDefault = {
    name:'John Doe',
    logged: false,
    verified: false
}

export default function(state = userDefault, action) {
    var user = Object.assign({}, state);
    switch (action.type) {
        case USER.login.success:
        case USER.verify.success:
            user.verified = true;
            user.logged = true;
            return user;
        case USER.logout.success:
            user.logged = false;
            return user;
        case USER.verify.error:
            user.verified = true;
            return user;
        default:
            return user;
    }
}