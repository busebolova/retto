"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  // Dense particle counts to match homepage
  const mainParticleCount = isMobile ? 40 : 60
  const diagonalParticleCount = isMobile ? 25 : 35
  const ambientParticleCount = isMobile ? 15 : 25
  const staticParticleCount = isMobile ? 30 : 50

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Dense Horizontal Flow Particles */}
          <div className="absolute inset-0">
            {[...Array(mainParticleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                }}
                initial={{
                  x: -50,
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  opacity: 0,
                }}
                animate={{
                  x: typeof window !== "undefined" ? window.innerWidth + 50 : 1200,
                  opacity: [0, 0.6, 0.8, 0.6, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3, // 4-7 saniye (daha hızlı akış)
                  delay: Math.random() * 2,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}

            {/* Diagonal Dense Flow */}
            {[...Array(diagonalParticleCount)].map((_, i) => (
              <motion.div
                key={`diagonal-${i}`}
                className="absolute bg-white/70 rounded-full"
                style={{
                  width: Math.random() * 1.5 + 0.5 + "px",
                  height: Math.random() * 1.5 + 0.5 + "px",
                }}
                initial={{
                  x: -30,
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  opacity: 0,
                }}
                animate={{
                  x: typeof window !== "undefined" ? window.innerWidth + 30 : 1200,
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight * 0.5 : 400),
                  opacity: [0, 0.4, 0.6, 0.4, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 4, // 5-9 saniye
                  delay: Math.random() * 2.5,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}

            {/* Ambient Floating Particles */}
            {[...Array(ambientParticleCount)].map((_, i) => (
              <motion.div
                key={`ambient-${i}`}
                className="absolute bg-white/40 rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                  filter: "blur(0.5px)",
                }}
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  opacity: [0, 0.3, 0.5, 0.3, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 6, // 8-14 saniye
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}

            {/* Static Background Particles (Homepage-like) */}
            {[...Array(staticParticleCount)].map((_, i) => (
              <motion.div
                key={`static-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}

            {/* Vertical Flow Particles */}
            {[...Array(isMobile ? 15 : 25)].map((_, i) => (
              <motion.div
                key={`vertical-${i}`}
                className="absolute bg-white/50 rounded-full"
                style={{
                  width: Math.random() * 1.5 + 0.5 + "px",
                  height: Math.random() * 1.5 + 0.5 + "px",
                }}
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: typeof window !== "undefined" ? window.innerHeight + 20 : 800,
                  opacity: [0, 0.4, 0.6, 0.4, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4, // 6-10 saniye
                  delay: Math.random() * 3,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </div>

          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className="relative z-10 text-center"
          >
            <motion.h1
              className="text-xs md:text-sm font-light text-white uppercase tracking-[0.3em] md:tracking-[0.4em] leading-relaxed"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              RETTO EVRENİNE
              <br />
              <span className="tracking-[0.35em] md:tracking-[0.45em]">GİRİŞ YAPILIYOR</span>
            </motion.h1>

            {/* Enhanced underline animation */}
            <motion.div
              className="mt-6 mx-auto w-20 h-px bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            />
          </motion.div>

          {/* Enhanced ambient glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-white/4 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          {/* Corner accent lines */}
          <motion.div
            className="absolute top-8 left-8 w-10 h-10 border-l border-t border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-10 h-10 border-r border-b border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
