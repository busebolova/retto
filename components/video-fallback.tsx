"use client"

import { useState, useEffect } from "react"

export default function VideoFallback() {
  const [videoExists, setVideoExists] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    // Video dosyasının varlığını kontrol et
    const checkVideo = async () => {
      try {
        const response = await fetch("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-05-23%20saat%2003.21.32_517a49b6-VudDP47E4vlWbinRPjvRSqoE8ukE5i.mp4", { method: "HEAD" })
        setVideoExists(response.ok)
      } catch (error) {
        console.error("Video kontrol hatası:", error)
        setVideoExists(false)
      } finally {
        setChecking(false)
      }
    }

    checkVideo()
  }, [])

  if (checking) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm">Video kontrol ediliyor...</p>
        </div>
      </div>
    )
  }

  if (!videoExists) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <div className="w-16 h-16 rounded-full bg-red-500/20 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3 className="text-lg font-light mb-2">Video Bulunamadı</h3>
          <p className="text-sm text-gray-400">Video dosyası yüklenemedi</p>
        </div>
      </div>
    )
  }

  return null
}
