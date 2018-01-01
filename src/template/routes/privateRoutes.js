import { Profile, Post, Posts} from '../../PrivateComponents';
export default {
    Profile: {
        component: Profile,
        path: '/profile'
    },
    Posts: {
        component: Posts,
        path: '/profile/posts'
    },
    Post:{
        component: Post,
        path: '/profile/posts/:idPost'
    }
};