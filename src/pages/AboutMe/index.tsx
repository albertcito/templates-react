import React from 'react';
import { Typography } from 'antd';

import PageProperties from 'routes/PageProperties';

const { Paragraph, Title } = Typography;

const AboutMe: React.FC<PageProperties> = () => (
  <div>
    <Title>
      About Me
    </Title>
    <Paragraph>
      I&#39;m a Computer Engineer based in Boston, MA
      specializing in building delightful websites,
      applications, and everything in between.
      I have 5+ years of experience in web development,
      and a solid understanding of web and server infrastructure.
    </Paragraph>
    <Paragraph>
      Please visit me at:
      {' '}
      <a href='https://albertcito.com'>www.albertcito.com</a>
    </Paragraph>
  </div>
);
export default AboutMe;
