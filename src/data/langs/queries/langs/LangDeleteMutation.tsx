import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { LangKeys } from '../columns';
import { LangColumnsType } from 'data/langs/type';

class LangDeleteMutation extends MessagesDataMutation {
  constructor(langID: number, columns: LangKeys[] = ['langID']) {
    super(
      'activityLangDelete',
      LangColumnsType,
      { langID },
      columns,
      { lang_id: 'Int' },
    );
  }
}

export default LangDeleteMutation;
