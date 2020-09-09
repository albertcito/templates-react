import MessagesDataQuery from 'util/GraphQL/MessagesDataQuery';
import { LangColumnsType } from '../../type';
import { LangColumns } from '../columns';

class LangQuery extends MessagesDataQuery {
  constructor(langID: string, columns: LangColumns) {
    super(
      'lang',
      LangColumnsType,
      { langID },
      columns.fields,
      { langID: 'String' },
    );
  }
}

export default LangQuery;
