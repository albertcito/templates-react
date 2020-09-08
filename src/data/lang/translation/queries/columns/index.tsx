import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { TranslationFormat } from '../../type';
import { TextFormatKeys, defaultTextColumns } from '../../../text/columns';
import { TextArgumentsFields } from '../../../text/TextArguments';

export type TranslationKeys = (
  keyof TranslationFormat |
  { 'text': TextArgumentsFields } |
  { 'texts': TextFormatKeys[] }
);

export const defaultTranslationColumns: TranslationKeys[] = [
  'translationID',
  'code',
  'isBlocked',
  { texts: defaultTextColumns },
];

export class TranslationColumns implements GraphQLColumns<TranslationKeys[]> {
  public constructor(public readonly fields: TranslationKeys[] = defaultTranslationColumns) {
    this.fields = fields;
  }
}
