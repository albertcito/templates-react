import {
  PaginationClassSearchLang,
  PaginationSearchLangArgumentsFormat,
  paginationVariables as pvBase,
} from './PaginationClassLang';

export interface PaginationSearchLangTagsArgumentsFormat extends PaginationSearchLangArgumentsFormat {
  tags: number[];
}
export const paginationVariables = {
  ...pvBase,
  tags: '[Int]',
};
export type PaginationSearchLangTagsArgumentsOptionals = Partial<PaginationSearchLangTagsArgumentsFormat>;

export class PaginationClassSearchLangTags extends PaginationClassSearchLang {
  private tags: number[] = [];

  public constructor(order: string, p: PaginationSearchLangTagsArgumentsOptionals = {}) {
    super(order, p);
    if (p.tags) { this.tags = p.tags; }
  }

  public setTags(tags: number[]) {
    this.tags = tags;
  }

  public get(): PaginationSearchLangTagsArgumentsFormat {
    return {
      tags: this.tags,
      ...super.get(),
    };
  }
}
