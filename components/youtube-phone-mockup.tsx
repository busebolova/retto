"use client"

import { useState, useRef, useEffect } from "react"

export default function YouTubePhoneMockup() {
  const [isLoading, setIsLoading] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // YouTube video ID from the URL
  const videoId = "vF6drrEZ5ZU"

  // YouTube embed URL with autoplay and loop parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&mute=1`

  useEffect(() => {
    // Check if iframe is loaded
    const handleLoad = () => {
      setIsLoading(false)
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleLoad)
      return () => iframe.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-gray-700/20 rounded-[40px] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative w-full max-w-[300px] md:max-w-[380px] mx-auto">
        {/* Phone Frame */}
        <div className="relative border-2 border-black/80 rounded-[40px] p-3 bg-black shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl border-b-2 border-l-2 border-r-2 border-black/80 flex items-center justify-center z-10">
            <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
            <div className="w-12 h-1 rounded-full bg-gray-700"></div>
          </div>

          {/* Screen - YouTube Video */}
          <div
            className="rounded-[32px] overflow-hidden aspect-[9/19.5] bg-black flex items-center justify-center relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* YouTube iframe */}
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="w-full h-full pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Buse Bolova - Retto Creative"
              style={{ border: "none" }}
            />

            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-sm">Video yükleniyor...</p>
                </div>
              </div>
            )}

            {/* Custom overlay for branding */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                  <h3 className="text-white text-sm font-light">Buse Bolova</h3>
                  <p className="text-white/70 text-xs">Kurucu & Kreatif Direktör</p>
                </div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Phone Controls */}
        <div className="absolute top-20 -left-2 h-12 w-1 bg-black rounded-l-lg"></div>
        <div className="absolute top-36 -left-2 h-12 w-1 bg-black rounded-l-lg"></div>
        <div className="absolute top-20 -right-2 h-16 w-1 bg-black rounded-r-lg"></div>
      </div>
    </div>
  )
}
