"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Variant 1: Original (Particle + Progress)
export function PreloaderParticle({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center space-y-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150" />
          <img
            src="/images/retto-logo.png"
            alt="Retto Creative"
            width={200}
            height={50}
            className="h-16 w-auto relative z-10 filter drop-shadow-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none"
              e.currentTarget.nextElementSibling.style.display = "block"
            }}
          />
          <div className="hidden text-white font-light text-3xl tracking-wider relative z-10">RETTO</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-sm tracking-widest font-light"
        >
          YARATILIYOR...
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-64 h-px bg-white/20 relative overflow-hidden rounded-full"
        >
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/60 to-white/90 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-white/60 text-xs font-mono tracking-wider"
        >
          {Math.round(progress)}%
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 text-white/40 text-xs tracking-widest font-light"
      >
        EZBER BOZAN REKLAM AJANSI
      </motion.div>
    </div>
  )
}

// Variant 2: Rotating Logo
export function PreloaderRotating({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-12">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 w-32 h-32 border-2 border-white/20 rounded-full border-t-white/60"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Logo */}
          <div className="w-32 h-32 flex items-center justify-center">
            <motion.img
              src="/images/retto-logo.png"
              alt="Retto Creative"
              width={120}
              height={30}
              className="h-8 w-auto filter drop-shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "block"
              }}
            />
            <motion.div
              className="hidden text-white font-light text-xl tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              RETTO
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/60 text-sm tracking-widest font-light"
        >
          HAZIRLANILIYOR
        </motion.div>
      </div>
    </div>
  )
}

// Variant 3: Typewriter Effect
export function PreloaderTypewriter({ onComplete }: { onComplete: () => void }) {
  const [displayText, setDisplayText] = useState("")
  const fullText = "RETTO CREATIVE"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(onComplete, 1000)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-light text-white tracking-wider"
        >
          {displayText}
          <motion.span
            className="text-white/40"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            |
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-white/60 text-sm tracking-widest font-light"
        >
          EZBER BOZAN REKLAM AJANSI
        </motion.div>
      </div>
    </div>
  )
}

// Variant 4: Minimalist Dots
export function PreloaderDots({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-16">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/retto-logo.png"
            alt="Retto Creative"
            width={200}
            height={50}
            className="h-16 w-auto filter drop-shadow-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none"
              e.currentTarget.nextElementSibling.style.display = "block"
            }}
          />
          <div className="hidden text-white font-light text-3xl tracking-wider">RETTO</div>
        </motion.div>

        <div className="flex space-x-4">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/60 text-sm tracking-widest font-light"
        >
          YÜKLENIYOR
        </motion.div>
      </div>
    </div>
  )
}

// Variant 5: Creative Shapes
export function PreloaderShapes({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-12">
        {/* Geometric shapes */}
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 border-2 border-white/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-white/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-8 bg-white/20 transform rotate-45"
            animate={{ rotate: 405 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="/images/retto-logo.png"
              alt="Retto Creative"
              width={80}
              height={20}
              className="h-6 w-auto filter drop-shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "block"
              }}
            />
            <motion.div
              className="hidden text-white font-light text-lg tracking-wider"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              RETTO
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-white/60 text-sm tracking-widest font-light"
        >
          TASARLANILIYOR
        </motion.div>
      </div>
    </div>
  )
}

// Variant 6: Pulse Effect
export function PreloaderPulse({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-12">
        <div className="relative">
          {/* Pulse rings */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute inset-0 border border-white/20 rounded-full"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative z-10 w-24 h-24 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/retto-logo.png"
              alt="Retto Creative"
              width={100}
              height={25}
              className="h-8 w-auto filter drop-shadow-xl"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "block"
              }}
            />
            <div className="hidden text-white font-light text-2xl tracking-wider">RETTO</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/60 text-sm tracking-widest font-light"
        >
          CANLANILIYOR
        </motion.div>
      </div>
    </div>
  )
}
