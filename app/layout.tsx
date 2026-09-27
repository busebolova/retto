import { SITE_URL, jsonLd } from "@/lib/seo"
import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import MobileOptimizedLayout from "@/components/mobile-optimized-layout"
import { ErrorBoundary } from "@/components/error-boundary"
import type { Metadata, Viewport } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://rettocreative.net"),
  title: {
    default: "Retto Creative | İzmir Reklam & Tasarım Ajansı",
    template: "%s | Retto Creative",
  },
  description:
    "İzmir merkezli yaratıcı reklam ajansı. Logo tasarımı, kurumsal kimlik, web sitesi, sosyal medya yönetimi ve dijital pazarlama. Markanızı dijital dünyada öne çıkarın. ☎️ 0530 833 01 37",
  keywords: [
    "reklam ajansı izmir",
    "logo tasarımı izmir",
    "kurumsal kimlik izmir",
    "web tasarım izmir",
    "sosyal medya yönetimi izmir",
    "dijital pazarlama izmir",
    "marka tescil izmir",
    "grafik tasarım izmir",
    "retto creative",
    "buse bolova",
    "minimal tasarım",
    "kreatif ajans",
    "marka kimliği",
    "video prodüksiyon izmir",
  ],
  authors: [{ name: "Retto Creative", url: "https://rettocreative.net" }],
  creator: "Retto Creative",
  publisher: "Retto Creative",
  category: "Reklam & Tasarım",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
    shortcut: [{ url: "/favicon.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "Retto Creative | İzmir Reklam & Tasarım Ajansı",
    description:
      "İzmir merkezli yaratıcı reklam ajansı. Logo tasarımı, kurumsal kimlik, web sitesi ve dijital pazarlama çözümleri. ☎️ 0530 833 01 37",
    url: "https://rettocreative.net",
    siteName: "Retto Creative",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/retto-logo.png",
        width: 1200,
        height: 630,
        alt: "Retto Creative - İzmir Reklam & Tasarım Ajansı",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retto Creative | İzmir Reklam & Tasarım Ajansı",
    description:
      "İzmir merkezli yaratıcı reklam ajansı. Logo tasarımı, kurumsal kimlik, web sitesi ve dijital pazarlama çözümleri.",
    images: ["/images/retto-logo.png"],
    creator: "@rettocreative",
    site: "@rettocreative",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="dns-prefetch" href="https://aifgfzhlyyimravy.public.blob.vercel-storage.com" />
        <link rel="preload" href="/images/retto-logo.png" as="image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization", "@id": SITE_URL + "/#organization",
              name: "Retto Creative", url: SITE_URL,
              description: "İzmir merkezli web sitesi, logo tasarımı ve kurumsal kimlik ajansı.",
              logo: SITE_URL + "/images/retto-logo.png",
              telephone: "+90-530-833-01-37", email: "hello@rettocreative.net",
              address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
              sameAs: ["https://www.instagram.com/rettocreative/"],
              knowsAbout: ["Web sitesi tasarımı", "Logo tasarımı", "Kurumsal kimlik"],
            },
            {
              "@type": "WebSite", "@id": SITE_URL + "/#website",
              name: "Retto Creative", url: SITE_URL, inLanguage: "tr-TR",
              publisher: { "@id": SITE_URL + "/#organization" },
            },
          ],
        }) }} />
      </head>
      <body className={`bg-white text-black ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ErrorBoundary>
            <MobileOptimizedLayout>
              <ScrollToTop />
              {children}
            </MobileOptimizedLayout>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
