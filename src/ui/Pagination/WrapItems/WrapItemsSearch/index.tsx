import React from 'react';

import { SearchInputProperties, SearchInput } from 'ui/SearchInput';
import { WrapItemsProperties, WrapItems } from '../WrapItems';

export interface WrapItemsSearchProperties extends Omit<SearchInputProperties, 'children'>, WrapItemsProperties {}

export const WrapItemsSearch: React.FC<WrapItemsSearchProperties> = ({
  initialSearch,
  onSearch,
  onChange,
  search,
  children,
  ...props
}) => {
  const searchChild = (
    <div className='search-table'>
      <SearchInput
        initialSearch={initialSearch}
        onSearch={onSearch}
        onChange={onChange}
      >
        {search}
      </SearchInput>
    </div>
  );
  return (
    <WrapItems {...props} search={searchChild}>
      {children}
    </WrapItems>
  );
};
