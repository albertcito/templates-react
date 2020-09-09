import { ColumnTableProperties } from './ColumnTableProperties';
import TableColumnAbstract from './TableColumnAbstract';

export default class TableColumns {
  public readonly columns: TableColumnAbstract[];

  public constructor(columns: TableColumnAbstract[]) {
    this.columns = columns;
  }

  public getColumns(): ColumnTableProperties[] {
    return this.columns.map((column) => column.column);
  }

  public append(column: TableColumnAbstract) {
    this.columns.push(column);
  }
}
