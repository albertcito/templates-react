import React from 'react';
import { InfoCircleTwoTone, WarningTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';

import { TextFormat } from 'data/lang/text/TextType';

interface InfoIconProperties {
  text: TextFormat;
}

const InfoIcon: React.FC<InfoIconProperties> = ({ text }) => {
  const isAvailable = text.originalLangID === text.langID;
  const title = isAvailable
    ? `Translation ${text.translationID}`
    : `Translation (${text.translationID}) not available. Language used ${text.originalLangID}`;
  const icon = isAvailable ? <InfoCircleTwoTone /> : <WarningTwoTone twoToneColor='#eb2f96' />;
  return (
    <div className='info-icon'>
      <Tooltip title={title}>
        {icon}
      </Tooltip>
    </div>
  );
};

export default InfoIcon;
