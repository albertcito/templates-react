// eslint-disable-next-line no-shadow
export enum AscDescEnum {
  desc = 'desc',
  asc = 'asc',
}

export interface PaginationArgumentsFormat {
  limit: number;
  page: number;
  order: AscDescEnum;
  orderBy: string;
}

export const paginationVariables = {
  limit: 'Int',
  page: 'Int',
  order: 'String',
  orderBy: 'String',
};

export type PaginationArgumentsOptional = Partial<PaginationArgumentsFormat>;

export class PaginationClass {
  private page = 1;

  private limit = 20;

  private orderBy: string;

  private order = AscDescEnum.desc;

  private orderByDefault: {
    orderBy: string;
    order: AscDescEnum;
  };

  public constructor(orderBy: string, p: PaginationArgumentsOptional = {}) {
    this.orderBy = orderBy;

    this.orderByDefault = {
      orderBy,
      order: AscDescEnum.desc,
    };

    if (p.page) { this.page = p.page; }
    if (p.limit) { this.limit = p.limit; }
    if (p.order) {
      this.order = p.order;
      this.orderByDefault.order = p.order;
    }
  }

  public reset() {
    this.page = 1;
    this.orderBy = this.orderByDefault.orderBy;
    this.order = this.orderByDefault.order;
  }

  public setPage(page: number) { this.page = page; }

  public setLimit(limit: number) { this.limit = limit; }

  public setOrder(order: AscDescEnum) { this.order = order; }

  public setOrderBy(orderBy: string) { this.orderBy = orderBy; }

  public get(): PaginationArgumentsFormat {
    return {
      page: this.page,
      limit: this.limit,
      orderBy: this.orderBy,
      order: this.order,
    };
  }
}
