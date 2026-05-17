"use client"

import { useState } from "react"
import VideoPhoneMockup from "./video-phone-mockup"
import YouTubePhoneMockup from "./youtube-phone-mockup"

export default function HybridPhoneMockup() {
  const [useYouTube, setUseYouTube] = useState(true) // Default to YouTube

  return (
    <div className="relative">
      {/* Toggle button for development/testing */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => setUseYouTube(!useYouTube)}
            className="text-xs text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 py-1 rounded-full"
          >
            {useYouTube ? "YouTube" : "Local"} Video
          </button>
        </div>
      )}

      {/* Render the appropriate component */}
      {useYouTube ? <YouTubePhoneMockup /> : <VideoPhoneMockup />}
    </div>
  )
}
