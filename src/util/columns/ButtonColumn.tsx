import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { ColumnProps } from 'antd/lib/table';

import { ColumnTableProperties } from './ColumnTableProperties';
import TableColumnAbstract from './TableColumnAbstract';

export type TOnSelect = (data: any, index: number) => void;
export interface ButtonColumnProperties {
  onSelect: TOnSelect;
  isLoading?: (data: any) => boolean;
  buttonText?: string;
  props?: ColumnProps<any>;
  btnProps?: ButtonProps;
}
export default class ButtonColumn implements TableColumnAbstract {
  public readonly column: ColumnTableProperties;

  constructor({
    buttonText = 'Select',
    onSelect,
    btnProps,
    props,
    isLoading,
  }: ButtonColumnProperties) {
    this.column = {
      className: 'select-row',
      key: 'select',
      render: function buttonColumn(text: any, data: any, index: number) {
        const loading = isLoading ? isLoading(data) : false;
        return (
          <Button
            {...btnProps}
            loading={loading}
            disabled={loading}
            onClick={() => onSelect(data, index)}
          >
            {buttonText}
          </Button>
        );
      },
      title: 'Select',
      ...props,
    };
  }
}
