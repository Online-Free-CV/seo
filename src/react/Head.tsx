"use client";
import React from "react";
import { buildRobots } from "../core/canonical";

export function SEOHead(props: {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  indexable?: boolean;
  imageUrl?: string;
  jsonLd?: object[];
  generatorBrand?: string;
}) {
  const robots = buildRobots(props.indexable ?? true);
  const kw = props.keywords?.join(", ");

  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {kw && <meta name="keywords" content={kw} />}
      <link rel="canonical" href={props.canonical} />
      <meta name="robots" content={robots} />
      <meta name="generator" content={props.generatorBrand ?? "OnlineFreeCV"} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.canonical} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageUrl && <meta name="twitter:image" content={props.imageUrl} />}

      {props.jsonLd?.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
