import type { Metadata } from "next"
import ScrollHeader from "@/components/scroll-header"
import ModernServicesGrid from "@/components/modern-services-grid"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"

export const metadata: Metadata = {
  title: "Neler Yapıyoruz? | Retto Creative - Tasarım & Pazarlama Hizmetleri",
  description:
    "Logo tasarımı, kurumsal kimlik, web sitesi, sosyal medya yönetimi, marka tescil ve video prodüksiyon hizmetleri. İzmir'de profesyonel yaratıcı çözümler. ☎️ 0530 833 01 37",
  keywords: [
    "logo tasarımı izmir",
    "kurumsal kimlik tasarımı",
    "web tasarım izmir",
    "sosyal medya yönetimi",
    "dijital pazarlama",
    "video prodüksiyon izmir",
    "marka tescil",
    "grafik tasarım",
    "reklam ajansı",
  ],
  alternates: {
    canonical: "https://rettocreative.com/hizmetler",
  },
  openGraph: {
    title: "Neler Yapıyoruz? | Retto Creative",
    description: "Logo tasarımı, kurumsal kimlik, web sitesi, sosyal medya ve daha fazlası. İzmir'in yaratıcı ajansı.",
    url: "https://rettocreative.com/hizmetler",
    type: "website",
    locale: "tr_TR",
    siteName: "Retto Creative",
    images: [
      {
        url: "/images/retto-logo.png",
        width: 1200,
        height: 630,
        alt: "Retto Creative - Hizmetler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neler Yapıyoruz? | Retto Creative",
    description: "Logo tasarımı, kurumsal kimlik, web sitesi ve daha fazlası. İzmir'in yaratıcı ajansı.",
    images: ["/images/retto-logo.png"],
  },
}

export default function HizmetlerPage() {
  return (
    <>
      <ScrollHeader />
      <main className="min-h-screen bg-black pt-20">
        <ModernServicesGrid />
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  )
}
