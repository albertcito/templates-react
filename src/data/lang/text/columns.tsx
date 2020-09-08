import { TextFormat } from './TextType';

export type TextFormatKeys = keyof TextFormat;

export const defaultTextColumns: TextFormatKeys[] = [
  'textID',
  'langID',
  'text',
  'originalLangID',
  'isAvailable',
  'translationID',
];

class TextColumns {
  public constructor(public readonly fields: TextFormatKeys[] = defaultTextColumns) { }
}

export default TextColumns;
