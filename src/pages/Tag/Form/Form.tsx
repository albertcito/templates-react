import React from 'react';
import { Button, Checkbox, Form, Spin, Alert } from 'antd';
import { FormattedMessage } from 'react-intl';

import { StatusFormat } from 'util/dataFormat/globalStateFormat';
import { TagFormat } from 'data/generic/tag/type';
import AlertError from 'ui/Alert/AlertError';
import TextItem from 'ui/Translation/Modal/TextItem';
import { TextFormat } from 'data/lang/text/TextType';
import { removeEmpty } from 'util/stateHandler/struct';

interface TagFormProperties {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFinish: (values: any) => void;
  status: StatusFormat;
  tag?: TagFormat;
}

interface FormFields {
  text: TextFormat;
  isBlocked: boolean;
}

const TagForm: React.FC<TagFormProperties> = ({
  onFinish,
  status,
  tag,
}) => {
  const onInternalFinish = (fields: FormFields) => {
    const tagCreate = {
      isBlocked: fields.isBlocked,
      translationID: fields.text.translationID,
      tagID: tag?.tagID,
    };
    onFinish(removeEmpty(tagCreate));
  };

  return (
    <Spin spinning={status.submit}>
      {(tag && tag.isBlocked) && (
        <Alert
          message={<FormattedMessage id='generic.blockedMsg' />}
          type='warning'
          showIcon
          style={{ marginBottom: 20 }}
        />
      )}
      {status.error?.errors && <AlertError errors={status.error.errors} mgBtm />}
      <Form onFinish={onInternalFinish} initialValues={tag} layout='vertical'>
        <Form.Item
          name='text'
          className='form-item'
          label='Name'
          rules={[{ required: true }]}
          hasFeedback
        >
          <TextItem />
        </Form.Item>
        <Form.Item
          name='isBlocked'
          valuePropName='checked'
        >
          <Checkbox>
            Blocked
          </Checkbox>
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

export default TagForm;
