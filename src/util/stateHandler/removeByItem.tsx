import { PaginationDataFormat } from 'util/api/util/serverDataFormat';
import { removeByColumn } from 'util/stateHandler/items';

function removeByItem<T>(key: keyof T, value: string | number, currentData?: PaginationDataFormat<T[]>) {
  if (currentData) {
    const newData = removeByColumn(currentData.data, key, value);
    return {
      ...currentData,
      data: newData,
    };
  }
  return currentData;
}

export default removeByItem;
