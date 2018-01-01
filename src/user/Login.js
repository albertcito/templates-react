import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserActions } from './UserActions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.action = new UserActions(this.props.dispatch);
     }
    render() {
        return(
            <div>
                <button onClick={() => { this.action.login() }}>
                    Click here to Login
                </button>
            </div>
        );
    }

}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
