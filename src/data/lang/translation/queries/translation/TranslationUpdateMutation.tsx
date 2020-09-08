import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TranslationColumnsType } from '../../type';
import { TranslationColumns } from '../columns';
import { parameters, TranslationCreateArguments } from './TranslationCreateMutation';

export interface TranslationUpdateArguments extends TranslationCreateArguments {
  translationID: number;
}

export class TranslationUpdateMutation extends MessagesDataMutation {
  constructor(variables: TranslationUpdateArguments, columns: TranslationColumns) {
    super(
      'translationUpdate',
      TranslationColumnsType,
      variables,
      columns.fields,
      {
        translationID: 'Int',
        ...parameters,
      },
    );
  }
}
