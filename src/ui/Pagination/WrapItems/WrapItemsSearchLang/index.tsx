import React from 'react';

import { SearchInputLangProperties, SearchInputLang } from 'ui/SearchInput';
import { WrapItemsProperties, WrapItems } from '../WrapItems';

export interface WrapItemsSearchLangProperties extends Omit<
SearchInputLangProperties, 'children'
>, WrapItemsProperties {}

export const WrapItemsSearchLang: React.FC<WrapItemsSearchLangProperties> = ({
  langs,
  lang,
  initialSearch,
  onSelectLang,
  onSearch,
  onChange,
  search,
  children,
  ...props
}) => {
  const searchChild = (
    <div className='search-table'>
      <SearchInputLang
        langs={langs}
        lang={lang}
        initialSearch={initialSearch}
        onSelectLang={onSelectLang}
        onSearch={onSearch}
        onChange={onChange}
      >
        {search}
      </SearchInputLang>
    </div>
  );
  return (
    <WrapItems {...props} search={searchChild}>
      {children}
    </WrapItems>
  );
};
