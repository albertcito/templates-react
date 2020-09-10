import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import TagForm from './Form';
import useStatusData from 'use/generic/useStatusData';
import { TagFormat } from 'data/generic/tag/type';
import TagApi from 'data/generic/tag/queries/tag/api';
import { MessageDataFormat } from 'util/api/util/serverDataFormat';
import { TagUpdateArguments } from 'data/generic/tag/queries/tag/TagUpdateMutation';
import { notificationMessages } from 'util/notifications';
import Loading from 'ui/Loading';
import { Error403 } from 'templates/errors';
import PageProperties from 'routes/PageProperties';

const api = new TagApi();

interface UpdateTagParameters {
  tagID: string;
}

const UpdateTag: React.FC<PageProperties> = () => {
  const [tag, setTag] = useState<TagFormat>();

  const { status, getData } = useStatusData<MessageDataFormat<TagFormat>>();
  const { tagID } = useParams<UpdateTagParameters>();

  const onFinish = async (fields: TagUpdateArguments) => {
    getData({
      getAll: () => api.update(fields),
      onSuccess: (response: MessageDataFormat<TagFormat>) => {
        setTag(response.data);
        if (response.messages) {
          notificationMessages(response.messages);
        }
      },
    });
  };

  const load = React.useCallback(() => {
    getData({
      getAll: () => api.get(tagID as unknown as number),
      onSuccess: (response) => {
        setTag(response.data);
        if (response.messages) {
          notificationMessages(response.messages);
        }
      },
    });
  }, [tagID, getData]);
  React.useEffect(() => { load(); }, [load]);

  if (status.error?.code === 401) { return <Error403 />; }
  if (!status.loaded) { return <Loading />; }

  return (
    <div className='content-width'>
      <div className='title'>
        <h1 className='title-left'>
          Update Tag
        </h1>
      </div>
      <TagForm
        status={status}
        onFinish={onFinish}
        tag={tag}
      />
    </div>
  );
};

export default UpdateTag;
