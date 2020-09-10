import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';

import TranslationModal from '../Modal';
import './index.scss';
import { TextFormat } from 'data/lang/text/TextType';
import InfoIcon from './InfoIcon';
import { TranslationFormat } from 'data/lang/translation/type';

export interface TextItemProperties {
  value?: TextFormat;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange?: (text?: TextFormat) => void;
}
const { TextArea } = Input;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextItem = React.forwardRef<any, TextItemProperties>((
  {
    onChange,
    value,
  },
  ref,
) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='translation-input'>
      <TextArea
        onClick={() => setVisible(true)}
        rows={1}
        readOnly
        autoSize
        value={value ? value.text : ''}
        allowClear
        ref={ref}
      />
      {value && (
        <div className='translation-input-remove-translation'>
          <Tooltip title='Remove the current translation'>
            <button
              onClick={() => {
                if (onChange) {
                  onChange(undefined);
                }
              }}
            >
              <CloseOutlined />
            </button>
          </Tooltip>
        </div>
      )}
      {value && <InfoIcon text={value} /> }
      <TranslationModal
        visible={visible}
        setVisible={setVisible}
        onSelect={(translation: TranslationFormat) => {
          if (onChange) {
            onChange(translation.text);
          }
          setVisible(false);
        }}
      />
    </div>
  );
});

export default TextItem;
