import React, { useEffect } from 'react';

import useTranslations from 'data/lang/translation/use/useTranslations';

const Translation: React.FC = () => {
  const { data, getAll, status } = useTranslations();

  useEffect(() => { getAll(); }, [getAll]);
  return (
    <div />
  );
};

export default Translation;
