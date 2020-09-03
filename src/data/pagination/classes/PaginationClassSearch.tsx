import { PaginationClass, PaginationArgumentsFormat, paginationVariables as pvBase } from './PaginationClass';

export interface PaginationSearchArgumentsFormat extends PaginationArgumentsFormat {
  search: string;
}
export const paginationVariables = {
  ...pvBase,
  search: 'String',
};
export type PaginationSearchArgumentsOptionals = Partial<PaginationSearchArgumentsFormat>;

export class PaginationClassSearch extends PaginationClass {
  private search = '';

  public constructor(orderBy: string, p: PaginationSearchArgumentsOptionals = {}) {
    super(orderBy, p);
    if (p.search) { this.search = p.search; }
  }

  public setSearch(search: string) {
    this.search = search;
  }

  public get(): PaginationSearchArgumentsFormat {
    return {
      search: this.search,
      ...super.get(),
    };
  }
}
