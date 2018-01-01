import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class PrivateLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user = this.props.user;
        const userActions = this.props.userActions;
        return (
            <div>
                <h1>Private Layout</h1>
                <h2>Hello {user.name}</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/profile/posts'>Posts</Link></li>
                </ul>
                <button onClick={() => {userActions.logout()}}>Logout</button>
                <Component route={route}/>
            </div>
        );
    }
}