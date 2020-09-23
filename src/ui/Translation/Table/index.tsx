import React, { useEffect, useContext } from 'react';

import { GlobalContext } from 'use/global';
import useTranslations from 'data/lang/translation/use/useTranslations';
import { TableSearchLangApi } from 'ui/Pagination/TableApi';
import Loading from 'ui/Loading';
import {
  IDColumn,
  TextColumn,
  DeleteColumn,
  ButtonColumn,
} from 'util/columns';
import TableColumns from 'util/columns/base/TableColumns';
import { TranslationFormat } from 'data/lang/translation/type';

export interface TranslationTableProperties {
  remove?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect?: (data: TranslationFormat) => void;
}

const TranslationTable: React.FC<TranslationTableProperties> = ({
  remove,
  onSelect,
}) => {
  const { appData: { langs } } = useContext(GlobalContext);
  const { data, getAll, status, pagination, onDelete, itemStatus } = useTranslations();

  useEffect(() => { getAll(); }, [getAll]);

  if (!data) {
    return <Loading />;
  }

  const tableColumns = new TableColumns([
    new IDColumn<TranslationFormat>('lang.translation.translation_id', 'translationID'),
    new TextColumn<TranslationFormat>({ getTitle: (item: TranslationFormat) => item.text }),
  ]);
  if (onSelect) {
    tableColumns.append(
      new ButtonColumn({
        buttonText: 'Select',
        onSelect,
      }),
    );
  }
  if (remove) {
    tableColumns.append(
      new DeleteColumn<TranslationFormat>({
        onDelete: (item) => onDelete(item.translationID),
        isLoading: (item) => itemStatus[item.translationID] && itemStatus[item.translationID].submit,
      }),
    );
  }

  return (
    <TableSearchLangApi
      data={data}
      getData={getAll}
      status={status}
      pagArgs={pagination}
      lang='EN'
      langs={langs}
      columns={tableColumns}
      onSearch={() => {}}
      onSelectLang={() => {}}
      rowKey={(translation: TranslationFormat) => translation.translationID}
    />
  );
};

export default TranslationTable;
