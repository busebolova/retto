import type { Metadata } from "next"

export const SITE_URL = "https://rettocreative.net"
export const SITE_NAME = "Retto Creative"

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, SITE_URL).toString()
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [{ url: "/images/retto-logo.png", alt: SITE_NAME }],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/images/retto-logo.png"],
    },
  }
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}
