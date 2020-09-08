import React from 'react';
import { Typography, Tabs } from 'antd';

import UserTitle from 'ui/User/UserTitle';
import { EmailForm, PasswordForm } from './Forms';

const { Title } = Typography;
const { TabPane } = Tabs;

const Profile: React.FC = () => (
  <div>
    <Title>
      Profile
    </Title>
    <UserTitle {...{
      name: 'Albert Tjornehoj',
      emailVerified: true,
      userStatusID: 'active',
    }}
    />
    <Tabs defaultActiveKey='name' style={{ width: '100%' }}>
      <TabPane
        tab='Email'
        key='email'
      >
        <EmailForm />
      </TabPane>
      <TabPane
        tab='Password'
        key='password'
      >
        <PasswordForm />
      </TabPane>
    </Tabs>
  </div>
);
export default Profile;
