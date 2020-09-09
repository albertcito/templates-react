import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TranslationKeys } from '../columns';
import { TranslationColumnsType } from '../../type';

class TranslationDeleteMutation extends MessagesDataMutation {
  constructor(translationID: number, columns: TranslationKeys[] = ['translationID']) {
    super(
      'translationDelete',
      TranslationColumnsType,
      { translationID },
      columns,
      { translationID: 'Int' },
    );
  }
}

export default TranslationDeleteMutation;
