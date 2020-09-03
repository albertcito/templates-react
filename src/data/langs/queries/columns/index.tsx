import GraphQLColumns from 'util/GraphQL/GraphQLColumns';
import { LangFormat } from '../../type';

export type LangKeys = keyof LangFormat;

export const defaultLangColumns: LangKeys[] = [
  'langID',
  'name',
  'localName',
  'active',
  'isBlocked',
];

export class LangColumns implements GraphQLColumns<LangKeys[]> {
  public constructor(public readonly fields: LangKeys[] = defaultLangColumns) {
    this.fields = fields;
  }
}
