import {
  PaginationClassSearch,
  PaginationSearchArgumentsFormat,
  paginationVariables as pvBase,
} from './PaginationClassSearch';

export interface PaginationSearchLangArgumentsFormat extends PaginationSearchArgumentsFormat {
  langID: string;
}
export const paginationVariables = {
  ...pvBase,
  langID: 'String',
};
export type PaginationArgumentsSearchLangOptionals = Partial<PaginationSearchLangArgumentsFormat>;

export class PaginationClassSearchLang extends PaginationClassSearch {
  private langID = 'EN';

  public constructor(orderBy: string, p: PaginationArgumentsSearchLangOptionals = {}) {
    super(orderBy, p);
    if (p.langID) { this.langID = p.langID; }
  }

  public setLangID(langID: string) {
    this.langID = langID;
  }

  public get(): PaginationSearchLangArgumentsFormat {
    return {
      langID: this.langID,
      ...super.get(),
    };
  }
}
