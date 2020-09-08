import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TranslationKeys } from '../columns';
import { TranslationColumnsType } from '../../type';

class TranslationDeleteMutation extends MessagesDataMutation {
  constructor(translationID: string, columns: TranslationKeys[] = ['translationID']) {
    super(
      'translationDelete',
      TranslationColumnsType,
      { translationID },
      columns,
      { translationID: 'String' },
    );
  }
}

export default TranslationDeleteMutation;
