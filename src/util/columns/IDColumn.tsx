import { ColumnTableProperties } from './base/ColumnTableProperties';
import TableColumnAbstract from './base/TableColumnAbstract';

export default class IDColumn<T> implements TableColumnAbstract {
  public readonly column: ColumnTableProperties<T>;

  constructor(dataIndex: string, indexID: keyof T, props?: ColumnTableProperties<T>) {
    this.column = {
      className: 'fit-center-column',
      order: {
        column: dataIndex,
        getValue: (data: T) => data[indexID],
      },
      key: 'id',
      render: (_: string, data: T) => data[indexID],
      sorter: true,
      title: 'ID',
      ...props,
    };
  }
}
