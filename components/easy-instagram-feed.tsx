"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

interface EasyInstagramFeedProps {
  username?: string
  widgetId?: string
  limit?: number
}

export default function EasyInstagramFeed({
  username = "rettocreative",
  widgetId = "your-widget-id", // Bu ID servis tarafından verilecek
  limit = 9,
}: EasyInstagramFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Widget yüklendikten sonra yapılacak işlemler
    return () => {
      // Component unmount olduğunda temizlik
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
        </div>

        {/* Instagram Widget Container */}
        <div ref={containerRef} className="instagram-feed-container">
          {/* Buraya widget yüklenecek */}
          <div id="instagram-feed" className="elfsight-app-{widgetId}"></div>

          {/* Yükleme göstergesi */}
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
            <span className="ml-3 text-white">Instagram gönderileri yükleniyor...</span>
          </div>
        </div>

        {/* Instagram Takip Butonu */}
        <div className="flex justify-center mt-12">
          <a
            href={`https://www.instagram.com/${username}/`}
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
            <span>@{username}</span>
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

      {/* Widget Script */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
        strategy="lazyOnload"
        onLoad={() => {
          // Script yüklendiğinde yükleme göstergesini gizle
          if (containerRef.current) {
            const loadingEl = containerRef.current.querySelector("div:last-child")
            if (loadingEl) loadingEl.style.display = "none"
          }
        }}
      />
    </section>
  )
}
