import { ColumnProps } from 'antd/lib/table';

export interface ColumnTableProperties extends ColumnProps<any> {
  order?: {
    getValue: (item: any) => string | number;
    column: string;
  };
}
