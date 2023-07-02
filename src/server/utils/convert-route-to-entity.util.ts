const mapping: Record<string, string> = {
  clients: 'client',
  comments: 'comment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
