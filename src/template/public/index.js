import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user  = this.props.user;
        return (
            <div>
                <h1>Public Layout</h1>
                { user.logged &&
                    <h2>Hello {user.name}</h2>
                }
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    { user.logged ? (
                        <li><Link to='/profile'>Profile</Link></li>
                    ):(
                        <li><Link to='/login'>Login</Link></li>
                    )
                    }

                </ul>
                <Component route={route}/>
            </div>
        );
    }
}