import React, { useEffect, useContext } from 'react';

import { GlobalContext } from 'use/global';
import useTranslations from 'data/lang/translation/use/useTranslations';
import { TableSearchLangApi } from 'ui/Pagination/TableApi';
import Loading from 'ui/Loading';
import {
  IDColumn,
  TextColumn,
} from 'util/columns';
import TableColumns from 'util/columns/base/TableColumns';
import { TranslationFormat } from 'data/lang/translation/type';

const tableColumns = new TableColumns([
  new IDColumn<TranslationFormat>('lang.translation.translation_id', 'translationID'),
  new TextColumn<TranslationFormat>({ getTitle: (data: TranslationFormat) => data.text }),
]);

const Translation: React.FC = () => {
  const { appData: { langs } } = useContext(GlobalContext);
  const { data, getAll, status, pagination } = useTranslations();

  useEffect(() => { getAll(); }, [getAll]);

  if (!data) {
    return <Loading />;
  }

  if (!langs) {
    return <div>Langs should be already loaded</div>;
  }

  return (
    <TableSearchLangApi
      data={data}
      getData={getAll}
      status={status}
      pagArgs={pagination}
      lang='EN'
      langs={langs.data}
      columns={tableColumns}
      onSearch={() => {}}
      onSelectLang={() => {}}
      rowKey={(translation: TranslationFormat) => translation.translationID}
    />
  );
};

export default Translation;
