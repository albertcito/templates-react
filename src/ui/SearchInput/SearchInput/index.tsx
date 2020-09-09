import { Input, Spin } from 'antd';
import React from 'react';

export interface SearchInputProperties {
  onSearch: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  initialSearch?: string;
  spinning?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange?: (value: string) => void;
  addonBefore?: React.ReactNode;
  children?: React.ReactNode;
}

export const SearchInput: React.FC<SearchInputProperties> = ({
  initialSearch,
  onSearch,
  onChange,
  children,
  addonBefore,
  spinning = false,
}) => (
  <Spin spinning={spinning}>
    <Input.Search
      addonBefore={addonBefore}
      onSearch={onSearch}
      defaultValue={initialSearch}
      className='input-search'
      placeholder='Search'
      enterButton
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event.target.value);
        }
      }}
    />
    {children}
  </Spin>
);
