import React from 'react';
import { Typography, Button, Tag } from 'antd';

import useLangs from 'data/lang/lang/use/useLangs';

const Index: React.FC = () => {
  const {
    getAll,
    data,
    status,
    onDelete,
    itemStatus,
  } = useLangs();

  return (
    <div>
      <Typography.Title>
        Welcome to the Public Area
      </Typography.Title>
      <Typography.Paragraph>
        Hello there, this is the public area. Please just click in Login,
        in order to see the private area.
      </Typography.Paragraph>
      <Button
        onClick={() => getAll()}
        disabled={status.submit}
      >
        Load languages
      </Button>
      {data && data.data.map((lang) => {
        if (itemStatus[lang.langID]) {
          console.log(lang.langID, itemStatus[lang.langID].submit);
        }

        return (
          <div key={lang.langID}>
            <Tag>
              {lang.name}
              {' '}
              {lang.langID}
              {' '}
              -
              {' '}
              <Button
                size='small'
                type='primary'
                onClick={() => onDelete(lang.langID)}
                disabled={itemStatus[lang.langID] && itemStatus[lang.langID].submit}
              >
                x
                {' '}
                {itemStatus[lang.langID] ? itemStatus[lang.langID].submit : 'no submit' }
              </Button>
            </Tag>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
