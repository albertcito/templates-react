import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TranslationColumnsType } from '../../type';
import { TranslationColumns } from '../columns';

export interface TextInput {
  langID: string;
  text: string;
}

export interface TranslationCreateArguments {
  code: string;
  isBlocked: boolean;
  texts: TextInput[];
}

export const parameters = {
  code: 'String',
  isBlocked: 'boolean',
  texts: '[Text]',
};

export class TranslationCreateMutation extends MessagesDataMutation {
  constructor(variables: TranslationCreateArguments, columns: TranslationColumns) {
    super(
      'translationCreate',
      TranslationColumnsType,
      variables,
      columns.fields,
      parameters,
    );
  }
}
