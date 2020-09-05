import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { LangKeys } from '../columns';
import { LangColumnsType } from 'data/langs/type';

class LangDeleteMutation extends MessagesDataMutation {
  constructor(langID: string, columns: LangKeys[] = ['langID']) {
    super(
      'activityLangDelete',
      LangColumnsType,
      { langID },
      columns,
      { langID: 'String' },
    );
  }
}

export default LangDeleteMutation;
