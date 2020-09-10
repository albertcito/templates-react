import React, { useEffect, useContext } from 'react';

import { GlobalContext } from 'use/global';
import useTags from 'data/generic/tag/use/useTags';
import { TableSearchLangApi } from 'ui/Pagination/TableApi';
import Loading from 'ui/Loading';
import {
  IDColumn,
  TextColumn,
  DeleteColumn,
} from 'util/columns';
import TableColumns from 'util/columns/base/TableColumns';
import { TagFormat } from 'data/generic/tag/type';
import PageProperties from 'routes/PageProperties';
import { AddNewLink } from 'ui/Buttons/AddNew';

const Tag: React.FC<PageProperties> = ({ route }) => {
  const { appData: { langs } } = useContext(GlobalContext);
  const { data, getAll, status, pagination, onDelete: onDeleteTag, itemStatus } = useTags();

  useEffect(() => { getAll(); }, [getAll]);

  if (!langs) {
    return <div>ssss</div>;
    // throw new Error('Langs should be already loaded, I need to fix it');
  }

  if (!data) {
    return <Loading />;
  }

  const tableColumns = new TableColumns([
    new IDColumn<TagFormat>('lang.Tag.Tag_id', 'tagID'),
    new TextColumn<TagFormat>({
      getTitle: (item: TagFormat) => item.text,
      getLink: (item: TagFormat) => `${route.location.pathname}/${item.tagID}`,
    }),
    new DeleteColumn<TagFormat>({
      onDelete: (item) => onDeleteTag(item.tagID),
      isLoading: (item) => itemStatus[item.tagID] && itemStatus[item.tagID].submit,
    }),
  ]);

  return (
    <div>
      <div className='title'>
        <h1 className='title-left'>
          Tags
        </h1>
        <AddNewLink link={`${route.location.pathname}/add`} />
      </div>
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
        rowKey={(tag: TagFormat) => tag.tagID}
      />
    </div>
  );
};

export default Tag;
