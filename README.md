# @onlinefreecv/seo

Shared SEO toolkit for OnlineFreeCV – helpers for titles, meta tags, canonicals, JSON-LD, and template mappers.

## Install

```bash
npm i @onlinefreecv/seo
# or
pnpm add @onlinefreecv/seo
```

## Features

- **Meta Tag Helpers**: Build SEO-friendly titles, descriptions, and keywords.
- **Canonical & Robots**: Generate canonical URLs and robots meta tags.
- **JSON-LD Structured Data**: Easily create schema.org JSON-LD for Person and WebPage.
- **React SEO Head**: Drop-in React component for meta tags and social sharing.
- **Persona Template Mapping**: Map person data to SEO properties for profile pages.

---

## API Overview

### Meta Helpers (`src/core/meta.ts`)

- `buildTitle({ primary, secondary, brand, max })`: Compose and clamp page titles.
- `buildDescription(str, max)`: Clean and clamp meta descriptions.
- `buildKeywords(list)`: Deduplicate and join keywords.

### Canonical & Robots (`src/core/canonical.ts`)

- `buildCanonical(host, path)`: Generate canonical URLs.
- `buildRobots(indexable)`: Return `"index,follow"` or `"noindex,nofollow"`.

### String Utilities (`src/core/clamp.ts`)

- `clamp(str, max)`: Clamp string to max length, add ellipsis.
- `clean(str)`: Normalize whitespace.

### JSON-LD Structured Data (`src/core/jsonld.ts`)

- `personJsonLd(props)`: Generate Person schema.org JSON-LD.
- `webPageJsonLd(props)`: Generate WebPage schema.org JSON-LD.

### React SEO Head (`src/react/Head.tsx`)

- `<SEOHead {...props} />`: React component for meta tags, OpenGraph, Twitter, canonical, robots, and JSON-LD.

  **Props:**
  - `title`, `description`, `keywords`, `canonical`, `indexable`, `imageUrl`, `jsonLd`, `generatorBrand`

### Persona Template Mapping (`src/templates/persona/map.ts`)

- `mapPersonToSEO(data, opts)`: Map person data to SEO properties for profile/persona pages.

---

## Types

See [`src/types.ts`](src/types.ts) for `PersonData` and `PersonSEOProps` definitions.

---

## Example Usage

```tsx
import { SEOHead, buildCanonical, personJsonLd } from "@onlinefreecv/seo";

<SEOHead
  title="John Doe – Resume"
  description="Experienced developer..."
  canonical={buildCanonical("example.com", "/john-doe")}
  indexable={true}
  imageUrl="https://example.com/john.jpg"
  jsonLd={[personJsonLd({ name: "John Doe", url: "https://example.com/john-doe" })]}
/>
```

---

## License

MIT © [Online Free CV](https://onlinefreecv.com)