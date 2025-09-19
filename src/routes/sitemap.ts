// Factory for Next App Router `app/sitemap.ts`
export type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export function createSitemap(opts: {
  base?: string;       // if omitted, Next will prefix with current host when you pass absolute paths yourself
  paths: string[];     // e.g. ["/", "/projects"]
  defaultChangeFreq?: SitemapEntry["changeFrequency"];
  defaultPriority?: number;
}) {
  const {
    base = "",
    paths,
    defaultChangeFreq = "monthly",
    defaultPriority = 0.8,
  } = opts;

  return async function sitemap(): Promise<SitemapEntry[]> {
    const now = new Date().toISOString();
    const origin = base.replace(/\/$/, "");

    return paths.map((p) => {
      const url = origin
        ? `${origin}${p === "/" ? "" : p}`
        : p; // If base is "", you may return absolute URLs yourself

      const priority = p === "/" ? defaultPriority : Math.max(0.5, defaultPriority - 0.2);
      return { url, lastModified: now, changeFrequency: defaultChangeFreq, priority };
    });
  };
}
