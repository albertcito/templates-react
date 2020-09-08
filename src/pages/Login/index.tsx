import React from 'react';

import LoginForm from './LoginForm';
import useLogin from 'data/security/session/login/useLogin';

const Login: React.FC = () => {
  const { doLogin, status } = useLogin();
  return (
    <div style={{ maxWidth: 450, margin: '0 auto' }}>
      <LoginForm onLogin={doLogin} status={status} />
    </div>
  );
};

export default Login;
