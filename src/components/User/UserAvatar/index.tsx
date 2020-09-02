import { Avatar } from 'antd';
import React from 'react';
import './index.scss';

interface UserAvatarProps {
  fullName: string;
  emailVerified: boolean;
  userStatusID: string;
}
const UserAvatar: React.FC<UserAvatarProps> = ({ fullName, emailVerified, userStatusID }) => {
  const name = fullName.split(' ');
  const initials = name.map((n: string) => n[0]).join('');
  const classEmail = emailVerified ? 'verified' : 'not-verified';
  const className = `user-${userStatusID} user-${classEmail}`;
  return (
    <Avatar size='large' className={`users-avatar ${className}`}>
      {initials}
    </Avatar>
  );
};

export default UserAvatar;
