import MessagesDataQuery from 'util/GraphQL/MessagesDataQuery';
import { TagColumnsType } from '../../type';
import { TagColumns } from '../columns';

class TagQuery extends MessagesDataQuery {
  constructor(tagID: number, columns: TagColumns) {
    super(
      'tag',
      TagColumnsType,
      { tagID },
      columns.fields,
      {
        tagID: 'Int',
        langID: 'String',
      },
    );
  }
}

export default TagQuery;
