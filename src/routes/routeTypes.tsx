// eslint-disable-next-line no-shadow
export enum RouteTypeEnum {
  private = 'private',
  public = 'public',
  session= 'session',
}

export const isPrivate = (routeType: RouteTypeEnum) => (routeType === RouteTypeEnum.private);
export const isSession = (routeType: RouteTypeEnum) => (routeType === RouteTypeEnum.session);
export const isPublic = (routeType: RouteTypeEnum) => (routeType === RouteTypeEnum.public);
