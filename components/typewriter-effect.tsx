"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function TypewriterEffect({ text, delay = 2000, speed = 50, className = "" }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else {
      // Start blinking cursor after typing is complete
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)

      return () => clearInterval(cursorTimer)
    }
  }, [currentIndex, text, speed, started])

  return (
    <div className={`inline-block ${className}`}>
      <span>{displayText}</span>
    </div>
  )
}
