import React from 'react';
import { Typography, Button, Tag } from 'antd';

import useLangs from 'data/langs/use/useLangs';

const Index: React.FC = () => {
  const {
    getData,
    data,
    status,
  } = useLangs();

  return (
    <div>
      <Typography.Title>
        Welcome to the Private Area
      </Typography.Title>
      <Typography.Paragraph>
        Hello there, this is the private area.
      </Typography.Paragraph>
      <Button
        onClick={() => getData()}
        disabled={status.submit}
      >
        Load languages
      </Button>
      {data && data.data.map((lang) => (
        <div key={lang.langID}>
          <Tag>
            {lang.name}
          </Tag>
        </div>
      ))}
    </div>
  );
};

export default Index;
