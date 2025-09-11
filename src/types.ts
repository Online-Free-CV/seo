export type PersonData = {
  email?: string;
  direction?: "ltr" | "rtl";
  language?: string;
  phone_number?: string | number;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  current_position?: string;
  profile_picture?: string;
  location?: string;
  website_name?: string;
  summary?: string;
  about_me?: string;
  picture?: string;
  social_links?: Record<string, string>;
  socialProfiles?: { name: string; url: string }[];
  objective?: string;
  skills?: string[];
};

export type PersonSEOProps = {
  fullName?: string;
  role?: string;
  tagline?: string;
  summary?: string;
  avatarUrl?: string;
  coverUrl?: string;
  host: string;
  path: string;
  indexable: boolean;
  sameAs?: string[];
  email?: string;
  telephone?: string;
  location?: string;
};
