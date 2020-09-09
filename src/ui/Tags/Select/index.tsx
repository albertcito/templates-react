/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from 'antd';
import React, { useRef } from 'react';

import { TagFormat } from 'data/generic/tag/type';

interface TagsSelectProperties {
  tags: TagFormat[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange?: (tags: number[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onBlur?: (tags: number[]) => void;
}

const TagsSelect: React.FC<TagsSelectProperties> = ({ tags, onChange, onBlur }) => {
  const selected = React.useRef({ tags: [] }).current;
  const options = useRef(tags.map((tag: TagFormat) => ({
    value: tag.text.text,
    tag: tag.tagID,
  }))).current;

  const onChangeInternal = (items: any, items2: any) => {
    selected.tags = items2.map((item: any) => item.tag);
    if (onChange) {
      onChange(selected.tags);
    }
  };

  const onBlurInternal = () => {
    if (onBlur) {
      onBlur(selected.tags);
    }
  };

  return (
    <Select
      mode='multiple'
      style={{ width: '100%' }}
      placeholder='Filter by tags'
      size='small'
      options={options}
      onChange={onChangeInternal}
      onBlur={onBlurInternal}
    />
  );
};

export default TagsSelect;
