import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { MessageFormat } from '../type';

export type MessageKeys = keyof MessageFormat;
const messagesColumns: MessageKeys[] = [
  'type',
  'message',
  'code',
];

export class MessageColumns implements GraphQLColumns<MessageKeys[]> {
  public constructor(public readonly fields: MessageKeys[] = messagesColumns) {
    this.fields = fields;
  }
}
