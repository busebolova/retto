import type { Metadata } from "next"
import IletisimClient from "./iletisim-client"

export const metadata: Metadata = {
  title: "İletişim | Retto Creative - Bize Ulaşın",
  description:
    "Retto Creative ile iletişime geçin. WhatsApp üzerinden direkt iletişim veya iletişim formunu kullanarak projenizi başlatın. Telefon: 0530 833 01 37",
  keywords: "iletişim, İzmir reklam ajansı, proje başlat, whatsapp, destek",
  alternates: {
    canonical: "https://rettocreative.com/iletisim",
  },
  openGraph: {
    title: "İletişim | Retto Creative",
    description: "Markanızın dijital dönüşümü için bizimle iletişime geçin",
    url: "https://rettocreative.com/iletisim",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/retto-logo.png",
        width: 1200,
        height: 630,
        alt: "Retto Creative - İletişim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Retto Creative",
    description: "Projeniz hakkında konuşalım",
  },
}

export default function IletisimPage() {
  return <IletisimClient />
}
