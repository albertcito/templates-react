import React from 'react';
import LoginForm from './LoginForm';
import { GlobalContext } from 'use/global';

const Login: React.FC = () => {
  const global = React.useContext(GlobalContext);
  return <div style={{maxWidth: 450, margin: '0 auto',}}>
    <LoginForm onLogin={() => global.login()}/>
  </div>;
}

export default Login;