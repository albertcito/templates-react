import React from 'react';
import { Modal } from 'antd';

import TranslationTable, { TranslationTableProperties } from '../Table';

interface TranslationModalProperties extends TranslationTableProperties {
  visible: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setVisible: (value: boolean) => void;
}

const TranslationModal: React.FC<TranslationModalProperties> = (props) => {
  const { visible, setVisible, ...other } = props;
  return (
    <Modal
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
      width='80%'
      title='Translations'
    >
      <TranslationTable {...other} />
    </Modal>
  );
};

export default TranslationModal;
