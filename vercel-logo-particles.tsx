"use client"

import { useRef, useEffect, useState } from "react"
import TypewriterEffect from "./components/typewriter-effect"

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [canvasInitialized, setCanvasInitialized] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [useTextFallback, setUseTextFallback] = useState(false)

  // Initialize canvas dimensions
  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setIsMobile(window.innerWidth < 768)
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height
    setCanvasInitialized(true)
  }, [dimensions])

  useEffect(() => {
    if (!canvasInitialized) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    console.log("Starting particle animation with canvas:", canvas.width, "x", canvas.height)

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
      isLogo: boolean
    }[] = []

    let textImageData: ImageData | null = null
    let animationFrameId: number

    function createTextFallback() {
      console.log("Using text fallback - creating RETTO text")
      setUseTextFallback(true)

      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const fontSize = isMobile ? 64 : 96
        ctx.font = `bold ${fontSize}px 'Arial', sans-serif`
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        const x = canvas.width / 2
        const y = canvas.height / 2 - 60

        // Draw text with better contrast
        ctx.shadowColor = "white"
        ctx.shadowBlur = 2
        ctx.fillText("RETTO", x, y)
        ctx.shadowBlur = 0

        // Get image data for particle creation
        textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        particles = []
        createInitialParticles()
        setImageLoaded(true)

        if (!animationFrameId) {
          animate()
        }

        console.log("✅ Text fallback created successfully")
      } catch (error) {
        console.error("Error creating text fallback:", error)
        createDefaultParticles()
        if (!animationFrameId) {
          animate()
        }
      }
    }

    function createLogoImage() {
      console.log("Attempting to load RETTO logo...")

      const loadTimeout = setTimeout(() => {
        console.log("Logo load timeout - switching to text fallback")
        createTextFallback()
      }, 3000)

      const img = new Image()

      img.onload = () => {
        clearTimeout(loadTimeout)
        console.log("✅ Logo loaded successfully!", img.width, img.height)

        if (img.width === 0 || img.height === 0) {
          console.log("Logo has invalid dimensions, using text fallback")
          createTextFallback()
          return
        }

        try {
          setImageLoaded(true)
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          // Calculate logo size and position - orijinal boyutlandırma
          const logoMaxHeight = isMobile ? 120 : 180
          const scale = Math.min(logoMaxHeight / img.height, (canvas.width * 0.6) / img.width)
          const logoWidth = Math.max(1, img.width * scale)
          const logoHeight = Math.max(1, img.height * scale)

          // Center the logo but move it slightly up - orijinal konumlandırma
          const x = Math.max(0, (canvas.width - logoWidth) / 2)
          const y = Math.max(0, (canvas.height - logoHeight) / 2 - 60)

          console.log("Drawing logo at:", x, y, "with size:", logoWidth, logoHeight)

          ctx.drawImage(img, x, y, logoWidth, logoHeight)

          // Get image data for particle creation
          textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          particles = []
          createInitialParticles()

          if (!animationFrameId) {
            animate()
          }

          console.log("✅ Logo particles created successfully")
        } catch (error) {
          console.error("Error drawing logo:", error)
          createTextFallback()
        }
      }

      img.onerror = () => {
        clearTimeout(loadTimeout)
        console.log("Logo file not found, using text fallback")
        createTextFallback()
      }

      // Try to load the logo
      try {
        img.crossOrigin = "anonymous"
        img.src = "/images/retto-logo.png"
      } catch (error) {
        console.log("Error setting logo source, using text fallback")
        createTextFallback()
      }
    }

    function createDefaultParticles() {
      console.log("Creating default random particles")
      particles = []

      const backgroundParticleCount = isMobile ? 100 : 150
      for (let i = 0; i < backgroundParticleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.5,
          color: "white",
          scatteredColor: "#888888",
          life: Math.random() * 100 + 50,
          isLogo: false,
        })
      }
      setImageLoaded(true)
    }

    function createLogoParticle() {
      if (!textImageData || canvas.width <= 0 || canvas.height <= 0) {
        return null
      }

      const data = textImageData.data

      // Try to find a pixel that's part of the logo/text - daha fazla deneme
      for (let attempt = 0; attempt < 300; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        const index = (y * canvas.width + x) * 4
        if (index < data.length && data[index + 3] > 30) {
          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.5,
            color: "white",
            scatteredColor: "#888888",
            life: Math.random() * 150 + 100,
            isLogo: true,
          }
        }
      }
      return null
    }

    function createBackgroundParticle() {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      return {
        x: x,
        y: y,
        baseX: x,
        baseY: y,
        size: Math.random() * 1.2 + 0.3,
        color: "white",
        scatteredColor: "#888888",
        life: Math.random() * 100 + 50,
        isLogo: false,
      }
    }

    function createInitialParticles() {
      // Logo particles - orijinal yoğunluk
      const logoParticleCount = isMobile ? 2000 : 3000
      let logoParticlesCreated = 0

      // Logo particle'larını oluştur
      for (let i = 0; i < logoParticleCount * 2; i++) {
        // Daha fazla deneme
        const particle = createLogoParticle()
        if (particle) {
          particles.push(particle)
          logoParticlesCreated++
          if (logoParticlesCreated >= logoParticleCount) break
        }
      }

      // Background particles - minimal
      const backgroundParticleCount = isMobile ? 80 : 120
      for (let i = 0; i < backgroundParticleCount; i++) {
        const particle = createBackgroundParticle()
        particles.push(particle)
      }

      console.log(
        `Created ${particles.length} particles (Logo: ${particles.filter((p) => p.isLogo).length}, Background: ${particles.filter((p) => !p.isLogo).length})`,
      )
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = "white"
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          if (p.isLogo) {
            const newParticle = createLogoParticle()
            if (newParticle) {
              particles[i] = newParticle
            } else {
              particles.splice(i, 1)
              i--
            }
          } else {
            particles[i] = createBackgroundParticle()
          }
        }
      }

      // Maintain particle count
      const logoParticles = particles.filter((p) => p.isLogo)
      const backgroundParticles = particles.filter((p) => !p.isLogo)

      const targetLogoCount = isMobile ? 2000 : 3000
      const targetBackgroundCount = isMobile ? 80 : 120

      // Add logo particles
      while (logoParticles.length < targetLogoCount) {
        const newParticle = createLogoParticle()
        if (newParticle) particles.push(newParticle)
        else break
      }

      // Add background particles
      while (backgroundParticles.length < targetBackgroundCount) {
        particles.push(createBackgroundParticle())
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start by trying to load the logo
    createLogoImage()

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        const touch = e.touches[0]
        const rect = canvas.getBoundingClientRect()
        handleMove(touch.clientX - rect.left, touch.clientY - rect.top)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      isTouchingRef.current = true
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const rect = canvas.getBoundingClientRect()
        handleMove(touch.clientX - rect.left, touch.clientY - rect.top)
      }
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
      canvas.addEventListener("mouseleave", handleMouseLeave)
      canvas.addEventListener("touchstart", handleTouchStart)
      canvas.addEventListener("touchend", handleTouchEnd)
    }

    // Cleanup function
    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("touchmove", handleTouchMove)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
        canvas.removeEventListener("touchstart", handleTouchStart)
        canvas.removeEventListener("touchend", handleTouchEnd)
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [canvasInitialized, isMobile])

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 touch-none"
        style={{ width: "100%", height: "100vh" }}
        aria-label="Interactive particle effect with Retto logo"
      />

      {!imageLoaded && (
        <div className="absolute z-10 text-white flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
          <span className="text-sm">Yükleniyor...</span>
        </div>
      )}

      {/* Show fallback indicator */}
      {useTextFallback && (
        <div className="absolute top-4 left-4 z-10 text-white/40 text-xs bg-black/30 px-2 py-1 rounded">Text modu</div>
      )}

      {/* Typewriter effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4 md:translate-y-8 text-center z-10 px-4">
        <TypewriterEffect
          text="DÖNGÜSÜNE BİR KEZ GİRERSİN, SONRASI SADECE DÖNÜŞÜM."
          delay={1000}
          speed={60}
          className="text-xs md:text-sm font-light text-white tracking-[0.2em] max-w-[90%] md:max-w-[600px] mx-auto leading-relaxed"
        />
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-10 flex flex-col space-y-4 md:space-y-6">
        <a
          href="https://www.linkedin.com/company/rettocreative"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white md:w-5 md:h-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/rettocreative"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white md:w-5 md:h-5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* Hashtag */}
      <div className="absolute bottom-20 md:bottom-[100px] left-1/2 transform -translate-x-1/2 text-center z-10 px-4">
        <a
          href="https://twitter.com/hashtag/bubizimrettomuz"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-gray-400 hover:text-gray-200 transition-colors duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
        >
          #bubizimrettomuz
        </a>
      </div>
    </div>
  )
}
