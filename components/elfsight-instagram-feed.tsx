"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

interface ElfsightInstagramFeedProps {
  widgetId: string
}

export default function ElfsightInstagramFeed({ widgetId }: ElfsightInstagramFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Widget yüklendiğinde yükleme göstergesini gizle
    const handleWidgetLoad = () => {
      if (loadingRef.current) {
        loadingRef.current.style.display = "none"
      }
    }

    // Widget yüklendikten sonra bir süre bekleyip kontrol et
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const widgetContent = containerRef.current.querySelector(".eapps-instagram-feed")
        if (widgetContent) {
          handleWidgetLoad()
        }
      }
    }, 2000)

    // Hide Elfsight watermark and admin panels
    const hideWatermark = () => {
      // Target the watermark elements using their class names
      const watermarkElements = document.querySelectorAll(
        ".eapps-widget-toolbar, .eapps-instagram-feed-container-free, .eapps-instagram-feed-free-label",
      )

      watermarkElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.display = "none"
        }
      })
    }

    // Run the hideWatermark function periodically to ensure it catches elements that might load later
    const watermarkInterval = setInterval(hideWatermark, 1000)
    hideWatermark() // Run once immediately

    return () => {
      clearTimeout(timer)
      clearInterval(watermarkInterval)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Instagram</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Yaratıcı dünyamızı keşfedin. Projelerimiz, ekibimiz ve ilham kaynaklarımızla ilgili güncel içerikler.
          </p>
          <div className="h-[1px] w-16 bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* Instagram Widget Container */}
        <div ref={containerRef} className="instagram-feed-container max-w-6xl mx-auto">
          {/* Elfsight Widget */}
          <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy></div>

          {/* Yükleme göstergesi */}
          <div ref={loadingRef} className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
            <span className="ml-3 text-white">Instagram gönderileri yükleniyor...</span>
          </div>
        </div>

        {/* Instagram Takip Butonu */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/rettocreative/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-3 px-6 text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>@rettocreative</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Add CSS to hide Elfsight watermark and admin panels */}
      <style jsx global>{`
        /* Hide Elfsight watermark and admin panels */
        .eapps-widget-toolbar,
        .eapps-instagram-feed-container-free,
        .eapps-instagram-feed-free-label,
        .eapps-instagram-feed-header-free,
        .eui-widget-title,
        .eapps-instagram-feed-title {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          height: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* Elfsight Script */}
      <Script src="https://static.elfsight.com/platform/platform.js" async strategy="lazyOnload" />
    </section>
  )
}
