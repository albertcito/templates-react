import { InboxOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin, notification } from 'antd';
import React from 'react';

const onFinish = () => notification.info({
  message: 'To be implemented',
  description: 'This feature will be implemented ASAP.',
});

const EmailForm: React.FC = () => (
  <Spin spinning={false}>
    <Form initialValues={{ email: 'me@albertcito.com' }} onFinish={onFinish}>
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail',
          },
        ]}
        hasFeedback
      >
        <Input
          autoComplete='email'
          placeholder='Email'
          size='large'
          type='email'
          prefix={<InboxOutlined />}
        />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
          autoComplete='password'
          size='large'
          placeholder='Password'
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

export default EmailForm;
