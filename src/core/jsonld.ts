export const personJsonLd = (p: {
  name?: string; jobTitle?: string; url: string; image?: string;
  description?: string; email?: string; telephone?: string;
  sameAs?: string[]; addressLocality?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: p.name,
  jobTitle: p.jobTitle,
  url: p.url,
  image: p.image,
  description: p.description,
  email: p.email,
  telephone: p.telephone,
  sameAs: p.sameAs && p.sameAs.length ? p.sameAs : undefined,
  address: p.addressLocality
    ? { "@type": "PostalAddress", addressLocality: p.addressLocality }
    : undefined
});

export const webPageJsonLd = (p: {
  name: string; url: string; publisherName?: string; publisherUrl?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: p.name,
  url: p.url,
  publisher: p.publisherName
    ? { "@type": "Organization", name: p.publisherName, url: p.publisherUrl }
    : undefined
});
