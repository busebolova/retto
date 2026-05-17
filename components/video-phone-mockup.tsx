"use client"

import { useState, useRef, useEffect } from "react"

interface VideoPhoneMockupProps {
  muted?: boolean
}

export default function VideoPhoneMockup({ muted = false }: VideoPhoneMockupProps) {
  const [videoError, setVideoError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted) // Prop'tan gelen değeri kullan
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Video yüklendiğinde otomatik oynat
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Prop'tan gelen muted değerini video'ya uygula
      video.muted = muted
      setIsMuted(muted)

      const handleLoadedData = () => {
        // Video'yu muted olarak oynat
        video
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.log("Otomatik oynatma başarısız, kullanıcı etkileşimi gerekli:", err)
            setIsPlaying(false)
          })
      }

      video.addEventListener("loadeddata", handleLoadedData)

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
      }
    }
  }, [muted])

  // Video oynatma/durdurma
  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((err) => {
          console.error("Video oynatılamadı:", err)
        })
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  // Ses açma/kapama
  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  // Video bittiğinde tekrar başlat
  const handleVideoEnd = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      video.play()
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-[40px] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative w-full max-w-[300px] md:max-w-[380px] mx-auto">
        {/* Phone Frame */}
        <div className="relative border-2 border-white/70 rounded-[40px] p-3 bg-white/10 backdrop-blur-md shadow-lg">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-white/10 rounded-b-xl border-b-2 border-l-2 border-r-2 border-white/70 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/70 mr-2"></div>
            <div className="w-12 h-1 rounded-full bg-white/70"></div>
          </div>

          {/* Screen - Video */}
          <div
            className="rounded-[32px] overflow-hidden aspect-[9/19.5] bg-black flex items-center justify-center relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {!videoError ? (
              <video
                ref={videoRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-05-23%20saat%2003.21.32_517a49b6-VudDP47E4vlWbinRPjvRSqoE8ukE5i.mp4"
                className="w-full h-full object-cover"
                playsInline
                loop={false}
                muted={isMuted} // State'den gelen değeri kullan
                onError={() => setVideoError(true)}
                onEnded={handleVideoEnd}
                preload="metadata"
              />
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-light mb-2">Buse Bolova</h3>
                  <p className="text-sm text-gray-400">Kurucu & Kreatif Direktör</p>
                  <p className="text-xs text-red-400 mt-2">Video yüklenemedi</p>
                </div>
              </div>
            )}

            {/* Video Kontrolleri */}
            {!videoError && (
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                  showControls || !isPlaying ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Mute/Unmute Button - Sadece muted=false ise göster */}
                  {!muted && (
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Video Yükleme Göstergesi */}
            {!videoError && !isPlaying && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/70 rounded-full"></div>
        </div>

        {/* Phone Controls */}
        <div className="absolute top-20 -left-2 h-12 w-1 bg-white/70 rounded-l-lg"></div>
        <div className="absolute top-36 -left-2 h-12 w-1 bg-white/70 rounded-l-lg"></div>
        <div className="absolute top-20 -right-2 h-16 w-1 bg-white/70 rounded-r-lg"></div>
      </div>

    </div>
  )
}
