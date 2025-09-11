import type { PersonData, PersonSEOProps } from "../../types";
import { buildDescription } from "../../core/meta";

export function mapPersonToSEO(
  data: PersonData,
  opts: { host: string; path: string; isEditor?: boolean }
): PersonSEOProps {
  const fullName =
    data.full_name ||
    [data.first_name, data.last_name].filter(Boolean).join(" ") ||
    undefined;

  const role = data.current_position || undefined;
  const avatarUrl = data.profile_picture || data.picture || undefined;
  const summary = buildDescription(
    data.summary || data.about_me || data.objective || ""
  );
  const tagline = data.website_name || role || undefined;

  const arr = (data.socialProfiles || []).map(s => s?.url).filter(Boolean) as string[];
  const obj = Object.values(data.social_links || {}).filter(Boolean) as string[];
  const sameAs = Array.from(new Set([...arr, ...obj]));

  const telephone =
    typeof data.phone_number === "number"
      ? `+${data.phone_number}`
      : data.phone_number || undefined;

  return {
    fullName,
    role,
    tagline,
    summary,
    avatarUrl,
    coverUrl: undefined,
    host: opts.host,
    path: opts.path,
    indexable: !opts.isEditor,
    sameAs,
    email: data.email || undefined,
    telephone,
    location: data.location || undefined
  };
}
