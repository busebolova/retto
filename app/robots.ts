import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/private/"] },
      // Preserve the existing training-crawler restrictions. Search access remains allowed.
      { userAgent: ["GPTBot", "CCBot"], disallow: "/" },
    ],
    sitemap: SITE_URL + "/sitemap.xml",
  }
}
