import React from 'react';

import TagsSelect from 'ui/Tags/Select';
import { WrapItemsSearchLang, WrapItemsSearchLangProperties } from '../WrapItemsSearchLang';
import { TagFormat } from 'data/generic/tag/type';

export interface WrapItemsSearchLangTagProperties extends Omit<WrapItemsSearchLangProperties, 'onSearch'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSearch: (value: string, tags: number[]) => void;
  tags: TagFormat[];
}

export const WrapItemsSearchLangTag: React.FC<WrapItemsSearchLangTagProperties> = ({
  onSearch,
  children,
  tags,
  search,
  ...props
}) => {
  const [tagsID, setTagsID] = React.useState<number[]>([]);

  const onSearchInput = (value: string) => {
    onSearch(value, tagsID);
  };

  const tagsElement = (
    <div className='tags-select'>
      <TagsSelect
        tags={tags}
        onChange={setTagsID}
      />
      {search}
    </div>
  );

  return (
    <WrapItemsSearchLang
      onSearch={onSearchInput}
      search={tagsElement}
      {...props}
    >
      {children}
    </WrapItemsSearchLang>
  );
};
