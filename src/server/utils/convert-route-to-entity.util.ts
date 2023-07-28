const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  orders: 'order',
  organizations: 'organization',
  strategies: 'strategy',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
