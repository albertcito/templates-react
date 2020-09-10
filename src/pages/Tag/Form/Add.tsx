import React from 'react';

import TagForm from './Form';
import useStatusData from 'use/generic/useStatusData';
import { TagFormat } from 'data/generic/tag/type';
import TagApi from 'data/generic/tag/queries/tag/api';
import { MessageDataFormat } from 'util/api/util/serverDataFormat';
import { TagCreateArguments } from 'data/generic/tag/queries/tag/TagCreateMutation';
import PageProperties from 'routes/PageProperties';

const api = new TagApi();

const TagAdd: React.FC<PageProperties> = ({ route }) => {
  const { status, getData } = useStatusData<MessageDataFormat<TagFormat>>();

  const onFinish = async (fields: TagCreateArguments) => {
    getData({
      getAll: () => api.add(fields),
      onSuccess: (response: MessageDataFormat<TagFormat>) => {
        const URL = route.location.pathname.replace('add', '');
        const newUrl = `${URL}${response.data.tagID}`;
        route.history.replace(newUrl);
      },
    });
  };

  return (
    <div className='content-width'>
      <div className='title'>
        <h1 className='title-left'>
          New Tag
        </h1>
      </div>
      <TagForm
        status={status}
        onFinish={onFinish}
      />
    </div>
  );
};

export default TagAdd;
