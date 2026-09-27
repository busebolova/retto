import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { blogPosts } from "@/lib/blog-posts"
import { projectsData } from "@/lib/projects"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/hakkimizda", "/hizmetler", "/projelerimiz", "/iletisim", "/blog", "/galeri", "/ola-studio",
    ...services.map(({ slug }) => "/hizmetler/" + slug),
    ...blogPosts.map(({ slug }) => "/blog/" + slug),
    ...Object.keys(projectsData).map((slug) => "/projelerimiz/" + slug),
    "/projelerimiz/dionz",
  ]
  // Omit lastModified until genuine publication/update dates are maintained.
  return paths.map((path) => ({ url: new URL(path, SITE_URL).toString() }))
}
