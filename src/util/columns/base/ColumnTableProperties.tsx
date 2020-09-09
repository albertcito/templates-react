/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnProps } from 'antd/lib/table';

export interface ColumnTableProperties<T = any> extends ColumnProps<T> {
  order?: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValue: (item: T) => any;
    column: string;
  };
}
