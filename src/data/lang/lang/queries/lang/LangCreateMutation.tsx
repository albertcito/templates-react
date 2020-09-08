import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { LangFormat, LangColumnsType } from '../../type';
import { LangColumns } from '../columns';

export type LangCreateArguments = Omit<LangFormat, 'langID'>;

export const parameters = {
  name: 'String',
  localName: 'String',
  active: 'Boolean',
  isBlocked: 'Boolean',
};

export class LangCreateMutation extends MessagesDataMutation {
  constructor(variables: LangCreateArguments, columns: LangColumns) {
    super(
      'langCreate',
      LangColumnsType,
      variables,
      columns.fields,
      parameters,
    );
  }
}
