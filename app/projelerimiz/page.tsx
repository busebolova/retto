import type { Metadata } from "next"
import ProjelerimizClient from "./projelerimiz-client"

export const metadata: Metadata = {
  title: "Projelerimiz - Portfolio ve Çalışmalar",
  description:
    "Retto Creative'in tamamladığı başarılı projeler ve marka tasarım çalışmalarını keşfedin. Sueno Mimarlık, John Roy Brand, J.Mobley Coffee ve daha fazlası.",
  keywords: "portfolio, çalışmalar, marka tasarımı, web tasarım, logo tasarımı, referans",
  alternates: {
    canonical: "https://rettocreative.net/projelerimiz",
  },
  openGraph: {
    title: "Projelerimiz | Retto Creative",
    description: "Markaların hikayelerini görsel dile dönüştürdüğümüz yaratıcı projelerimizi keşfedin",
    url: "https://rettocreative.net/projelerimiz",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/retto-logo.png",
        width: 1200,
        height: 630,
        alt: "Retto Creative - Projelerimiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projelerimiz | Retto Creative",
    description: "Başarılı marka tasarım projelerimizi keşfedin",
  },
}

export default function ProjelerimizPage() {
  return <ProjelerimizClient />
}
