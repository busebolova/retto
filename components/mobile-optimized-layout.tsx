"use client"

import type React from "react"

import { useEffect } from "react"

export default function MobileOptimizedLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scrolling for better mobile experience
    document.documentElement.style.scrollBehavior = "smooth"

    // Prevent overscroll bounce on iOS
    document.body.style.overscrollBehavior = "none"

    // Optimize touch events
    document.body.style.touchAction = "pan-y pinch-zoom"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      document.body.style.overscrollBehavior = "auto"
      document.body.style.touchAction = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Mobile padding for bottom nav */}
      <div className="pb-20 md:pb-0">{children}</div>
    </div>
  )
}
