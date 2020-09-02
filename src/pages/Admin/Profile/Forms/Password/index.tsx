import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin, notification } from 'antd';
import React from 'react';

const onFinish = () => notification.info({
  message: 'To be implemented',
  description: 'This feature will be implemented ASAP.',
});
const PasswordForm: React.FC = () => {
  const email = 'me@albertcito.com';
  return (
    <Spin spinning={false}>
      <Form autoComplete='off' onFinish={onFinish}>
        <input
          type='email'
          autoComplete='email'
          value={email}
          readOnly
          style={{ display: 'none' }}
        />

        <Form.Item
          name='password'
          hasFeedback
        >
          <Input.Password
            autoComplete='password'
            size='large'
            placeholder='Current password'
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item
          name='newPassword'
          hasFeedback
        >
          <Input.Password
            autoComplete='newPassword'
            size='large'
            placeholder='New Password'
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item
          name='confirmNewPassword'
          dependencies={['newPassword']}
          hasFeedback
        >
          <Input.Password
            autoComplete='new-password'
            size='large'
            placeholder='Confirm new password'
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='session-form-button'
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default PasswordForm;
