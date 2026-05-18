import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import MobileOptimizedLayout from "@/components/mobile-optimized-layout"
import { ErrorBoundary } from "@/components/error-boundary"
import type { Viewport } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
}

export const metadata = {
  metadataBase: new URL("https://rettocreative.com"),
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
  authors: [{ name: "Retto Creative", url: "https://rettocreative.com" }],
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
    url: "https://rettocreative.com",
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
  alternates: {
    canonical: "https://rettocreative.com",
    languages: {
      "tr-TR": "https://rettocreative.com",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "geo.region": "TR-35",
    "geo.placename": "İzmir",
    "geo.position": "38.4192;27.1287",
    "ICBM": "38.4192, 27.1287",
  },
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

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.example.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://rettocreative.com/#organization",
              name: "Retto Creative",
              description:
                "İzmir'in önde gelen dijital reklam ajansı. Logo tasarımı, kurumsal kimlik, web sitesi ve dijital pazarlama hizmetleri.",
              url: "https://rettocreative.com",
              logo: {
                "@type": "ImageObject",
                url: "https://rettocreative.com/images/retto-logo.png",
                width: 500,
                height: 500,
              },
              image: "https://rettocreative.com/images/retto-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-530-833-01-37",
                contactType: "Customer Service",
                areaServed: "TR",
                availableLanguage: "Turkish",
                email: "hello@rettocreative.net",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "İzmir",
                addressCountry: "TR",
                addressRegion: "İzmir",
              },
              sameAs: ["https://www.instagram.com/rettocreative/", "https://wa.me/905308330137"],
              areaServed: {
                "@type": "GeoShape",
                addressCountry: "TR",
              },
              priceRange: "$$",
              knowsAbout: [
                "Logo Tasarımı",
                "Kurumsal Kimlik",
                "Web Sitesi Tasarımı",
                "Sosyal Medya Yönetimi",
                "Dijital Pazarlama",
                "Marka Tescil",
                "Video Prodüksiyon",
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 38.4192,
                  longitude: 27.1287,
                },
                geoRadius: "50000",
              },
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://rettocreative.com/#localbusiness",
              name: "Retto Creative",
              image: "https://rettocreative.com/images/retto-logo.png",
              telephone: "+90-530-833-01-37",
              email: "hello@rettocreative.net",
              address: {
                "@type": "PostalAddress",
                addressLocality: "İzmir",
                addressCountry: "TR",
                addressRegion: "İzmir",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.4192,
                longitude: 27.1287,
              },
              url: "https://rettocreative.com",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "100",
              },
            }),
          }}
        />

        {/* Structured Data - WebSite (for search actions) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://rettocreative.com",
              name: "Retto Creative",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://rettocreative.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList (for homepage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Anasayfa",
                  item: "https://rettocreative.com",
                },
              ],
            }),
          }}
        />
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
