export const buildCanonical = (host: string, path: string) =>
  `https://${host}${path.startsWith("/") ? path : `/${path}`}`;

export const buildRobots = (indexable = true) =>
  indexable ? "index,follow" : "noindex,nofollow";
