export enum routeTypes {
  private = 'private',
  public = 'public',
  session= 'session',
}

export const isPrivate = (routeType: routeTypes) => (routeType === routeTypes.private);
export const isSession = (routeType: routeTypes) => (routeType === routeTypes.session);
export const isPublic = (routeType: routeTypes) => (routeType === routeTypes.public);
