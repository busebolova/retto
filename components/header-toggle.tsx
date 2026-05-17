"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface HeaderToggleProps {
  onToggle: (sticky: boolean) => void
  initialSticky?: boolean
}

export default function HeaderToggle({ onToggle, initialSticky = false }: HeaderToggleProps) {
  const [isSticky, setIsSticky] = useState(initialSticky)

  const handleToggle = () => {
    const newSticky = !isSticky
    setIsSticky(newSticky)
    onToggle(newSticky)
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed top-20 right-4 z-50 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full p-3 text-white hover:bg-black/90 transition-all duration-300 hidden md:flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {isSticky ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      <span className="text-xs font-medium">{isSticky ? "Statik" : "Sabit"}</span>
    </motion.button>
  )
}
