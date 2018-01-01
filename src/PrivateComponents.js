import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {return <div> Profile o.O</div>}
export const Posts = (routes) => {
    return (<div>
        <ul>
            <li><Link to='/profile/posts/1'>Post 1</Link></li>
            <li><Link to='/profile/posts/2'>Post 2</Link></li>
            <li><Link to='/profile/posts/3'>Post 3</Link></li>
        </ul>
    </div>);
}
export const Post = (routes) => {
    const idPost = routes.route.match.params.idPost;
    return (<div> Post {idPost}</div>);
}