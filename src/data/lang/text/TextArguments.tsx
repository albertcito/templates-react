import { TextFormat } from './TextType';
import TextColumns from './columns';

export type TextFormatKeys = keyof TextFormat;

export interface TextArgumentsFields {
  columns: TextFormatKeys[];
  variables: ['langID'];
}

export class TextArguments {
  public fields: TextArgumentsFields;

  public constructor(text: TextColumns) {
    this.fields = {
      columns: text.fields,
      variables: ['langID'],
    };
  }
}
