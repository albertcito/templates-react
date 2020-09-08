import MessagesDataQuery from 'util/GraphQL/MessagesDataQuery';
import { TranslationColumnsType } from '../../type';
import { TranslationColumns } from '../columns';

class TranslationQuery extends MessagesDataQuery {
  constructor(translationID: number, columns: TranslationColumns) {
    super(
      'translation',
      TranslationColumnsType,
      { translationID },
      columns.fields,
      { translationID: 'Int' },
    );
  }
}

export default TranslationQuery;
