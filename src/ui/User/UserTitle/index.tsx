import { Typography } from 'antd';
import React from 'react';

import UserAvatar from '../UserAvatar';
import './index.scss';

interface UserTitleProperties {
  name: string;
  emailVerified: boolean;
  userStatusID: string;
}

const { Title } = Typography;

const UserTitle: React.FC<UserTitleProperties> = ({
  name,
  emailVerified,
  userStatusID,
}) => (
  <div className='user-title'>
    <div className='user-title-avatar'>
      <UserAvatar
        fullName={name}
        emailVerified={emailVerified}
        userStatusID={userStatusID}
      />
    </div>
    <div className='user-title-data'>
      <Title level={4}>
        {name}
      </Title>
      <ul>
        <li>
          status:
          {' '}
          {userStatusID}
        </li>
        <li>
          email:
          {' '}
          {emailVerified ? 'verified' : 'not verified'}
        </li>
      </ul>
    </div>
  </div>
);
export default UserTitle;
