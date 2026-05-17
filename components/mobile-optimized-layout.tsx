"use client"

import type React from "react"

import { useEffect } from "react"

export default function MobileOptimizedLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Prevent zoom on input focus (iOS Safari)
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      )
    }

    // Smooth scrolling for better mobile experience
    document.documentElement.style.scrollBehavior = "smooth"

    // Prevent overscroll bounce on iOS
    document.body.style.overscrollBehavior = "none"

    // Optimize touch events
    document.body.style.touchAction = "pan-y"

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
