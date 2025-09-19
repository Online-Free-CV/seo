// Simple factory for Next App Router `app/robots.ts`
export type RobotsRule = { userAgent: string; allow?: string; disallow?: string };

export function createRobots(opts: {
  base?: string;                 // used only to emit sitemap url if provided
  disallowAll?: boolean;         // set true for drafts/previews
  extraRules?: RobotsRule[];     // optional extra user-agent rules
}) {
  const { base, disallowAll = false, extraRules = [] } = opts || {};
  return function robots() {
    const rules: RobotsRule[] = disallowAll
      ? [{ userAgent: "*", disallow: "/" }]
      : [{ userAgent: "*", allow: "/" }];

    if (extraRules.length) rules.push(...extraRules);

    const sitemap = disallowAll
      ? []                      // no sitemap when blocked
      : base
      ? `${base.replace(/\/$/, "")}/sitemap.xml`
      : "/sitemap.xml";

    return { rules, sitemap };
  };
}
