/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from 'antd';
import React from 'react';

import { SearchInput, SearchInputProperties } from '../SearchInput';
import { LangFormat } from 'data/lang/lang/type';

export interface SearchInputLangProperties extends SearchInputProperties {
  langs: LangFormat[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelectLang: (value: string, option: React.ReactElement<any> | Array<React.ReactElement<any>>) => void;
  lang?: string;
}

export const SearchInputLang: React.FC<SearchInputLangProperties> = ({
  langs,
  lang = 'EN',
  onSelectLang,
  ...props
}) => {
  const SelectLangsOption = (
    <SelectLangs
      langs={langs}
      onChange={onSelectLang}
      lang={lang}
    />
  );

  return (
    <SearchInput
      {...props}
      addonBefore={SelectLangsOption}
    />
  );
};

export interface SelectLangsProperties {
  langs: LangFormat[];
  lang: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (value: any, option: any) => void;
}

const SelectLangs: React.FC<SelectLangsProperties> = ({
  langs,
  lang = 'EN',
  onChange,
}) => (
  <Select defaultValue={lang} onChange={onChange}>
    {
      langs.map((currentLang) => (
        <Select.Option
          key={currentLang.langID}
          value={currentLang.langID}
        >
          {currentLang.localName}
        </Select.Option>
      ))
    }
  </Select>
);
