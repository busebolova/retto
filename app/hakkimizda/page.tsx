import HakkimizdaClientPage from "./hakkimizda-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda | Retto Creative - İzmir Reklam Ajansı",
  description:
    "Retto Creative hakkında bilgi edinin. Buse Bolova tarafından kurulmuş, minimal estetik anlayışıyla markaların dijital kimliklerini tasarlayan İzmir reklam ajansı.",
  keywords: "retto creative, buse bolova, reklam ajansı, marka tasarımı, dijital pazarlama",
  alternates: {
    canonical: "https://rettocreative.com/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Retto Creative",
    description: "Minimal estetik anlayışıyla markaların dijital kimliklerini şekillendiriyoruz",
    url: "https://rettocreative.com/hakkimizda",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/retto-logo.png",
        width: 1200,
        height: 630,
        alt: "Retto Creative - Hakkımızda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Retto Creative",
    description: "Minimal estetik anlayışıyla markaların dijital kimliklerini şekillendiriyoruz",
  },
}

export default function HakkimizdaPage() {
  return <HakkimizdaClientPage />
}
