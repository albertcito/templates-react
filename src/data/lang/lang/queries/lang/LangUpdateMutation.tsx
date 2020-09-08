import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { LangColumnsType } from '../../type';
import { LangColumns } from '../columns';
import { parameters, LangCreateArguments } from './LangCreateMutation';

export interface LangUpdateArguments extends LangCreateArguments {
  langID: number;
}

export class LangUpdateMutation extends MessagesDataMutation {
  constructor(variables: LangUpdateArguments, columns: LangColumns) {
    super(
      'langUpdate',
      LangColumnsType,
      variables,
      columns.fields,
      {
        langID: 'String',
        ...parameters,
      },
    );
  }
}
