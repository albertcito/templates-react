import MessagesDataMutation from 'util/GraphQL/MessagesDataMutation';
import { TagKeys } from '../columns';
import { TagColumnsType } from '../../type';

class TagDeleteMutation extends MessagesDataMutation {
  constructor(tagID: number, columns: TagKeys[] = ['tagID']) {
    super(
      'tagDelete',
      TagColumnsType,
      { tagID },
      columns,
      { tagID: 'Int' },
    );
  }
}

export default TagDeleteMutation;
