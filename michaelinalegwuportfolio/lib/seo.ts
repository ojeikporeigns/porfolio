import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} · ${site.shortName}`;
  return {
    title: fullTitle,
    description,
    keywords: [
      "Michael Inalegwu",
      "web developer Nigeria",
      "frontend developer",
      "UI UX designer",
      "data analyst",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.titles.join(", "),
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lafia",
      addressRegion: "Nasarawa State",
      addressCountry: "Nigeria",
    },
    sameAs: site.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
    knowsAbout: [
      "Web Development",
      "Frontend Engineering",
      "UI/UX Design",
      "Data Analytics",
      "SEO",
      "Graphic Design",
      "Digital Strategy",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/portfolio?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
