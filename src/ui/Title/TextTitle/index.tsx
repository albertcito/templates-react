import React from 'react';

import { TextFormat } from 'data/lang/text/TextType';

interface TextTitleProperties {
  text: TextFormat;
}
const TextTitle: React.FC<TextTitleProperties> = ({ text }) => {
  const isAvailable = text.originalLangID !== text.langID;
  if (isAvailable) {
    const abbrTitle = `Translation (${text.translationID}) not available. Language used ${text.originalLangID}`;
    return <abbr title={abbrTitle}>{text.text}</abbr>;
  }
  return <>{text.text}</>;
};

export default TextTitle;
