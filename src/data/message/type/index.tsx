import { types } from 'typed-graphql-class';
import { IColumnType } from 'typed-graphql-class/dist/interfaces';

export interface MessageFormat {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  code?: number;
}

interface MessageTypeFormat extends IColumnType {
  name: keyof MessageFormat;
}

export const MessageColumnsType: MessageTypeFormat[] = [
  {
    name: 'message',
    resolve: types.string,
  },
  {
    name: 'type',
    resolve: types.string,
  },
  {
    name: 'code',
    resolve: types.number,
  },
];
