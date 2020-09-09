import { ColumnTableProperties } from './ColumnTableProperties';
import TableColumnAbstract from './TableColumnAbstract';

export default class IDColumn implements TableColumnAbstract {
  public readonly column: ColumnTableProperties;

  constructor(dataIndex: string, indexID: string, props?: ColumnTableProperties) {
    this.column = {
      className: 'fit-center-column',
      order: {
        column: dataIndex,
        getValue: (data: any) => (data[indexID] ? data[indexID] : 0),
      },
      key: 'id',
      render: (text: any, data: any) => data[indexID],
      sorter: true,
      title: 'ID',
      ...props,
    };
  }
}
