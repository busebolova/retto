import { services } from "@/lib/services"
import { pageMetadata, SITE_URL, jsonLd } from "@/lib/seo"
import { notFound } from 'next/navigation'
import ServiceDetailPage from "@/components/service-detail-page"
import ScrollHeader from "@/components/scroll-header"
import MobileBottomNav from "@/components/mobile-bottom-nav"

// Service data
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org", "@type": "Service",
        "@id": SITE_URL + "/hizmetler/" + service.slug + "#service",
        name: service.title, description: service.description,
        url: SITE_URL + "/hizmetler/" + service.slug,
        provider: { "@id": SITE_URL + "/#organization" },
      }) }} />
      <ScrollHeader />
      <ServiceDetailPage service={service} />
      <MobileBottomNav />
    </>
  )
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((service) => service.slug === params.slug)
  if (!service) notFound()
  return pageMetadata(service.title + " İzmir", service.description, "/hizmetler/" + service.slug)
}
