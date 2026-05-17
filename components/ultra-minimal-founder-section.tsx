"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function UltraMinimalFounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [isHovered, setIsHovered] = useState(false)
  const textControls = useAnimation()

  // Phrases that will float/scroll
  const phrases = [
    "Yaratıcılık",
    "Özgünlük",
    "Minimalizm",
    "Detaycılık",
    "Tutku",
    "Vizyon",
    "Yenilikçilik",
    "Estetik",
    "Denge",
    "Zarafet",
    "Sadelik",
    "İlham",
    "Kalite",
    "Güven",
    "Başarı",
  ]

  useEffect(() => {
    if (isInView) {
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.4 },
      })
    }
  }, [isInView, textControls])

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Interactive Image */}
            <motion.div
              className="relative group cursor-pointer order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: 0.2 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                {/* Image */}
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                  <motion.img
                    src="/images/buse-bolova-professional.jpg"
                    alt="Buse Bolova - Kurucu"
                    className="w-full aspect-[3/4] object-cover"
                    animate={{
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onError={(e) => {
                      // Fallback olarak placeholder göster
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=800&fit=crop&crop=center"
                    }}
                  />

                  {/* Minimal overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Bottom content */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white"
                    animate={{
                      y: isHovered ? 0 : 10,
                      opacity: isHovered ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <motion.div
                        className="h-[1px] bg-white/70"
                        animate={{
                          width: isHovered ? "40px" : "20px",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      <p className="text-xs uppercase tracking-widest text-white/90">Kurucu & Kreatif Direktör</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light mb-2">Buse Bolova</h3>
                    <motion.p
                      className="text-white/90 text-sm"
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      Yaratıcılığın sınırlarını keşfeden vizyon
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Ultra Minimal Text */}
            <motion.div
              className="space-y-8 md:space-y-12 order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Ultra minimal typography - Cleaner Version */}
              <div className="space-y-0">
                <motion.div className="relative" animate={textControls} initial={{ opacity: 0, y: 20 }}>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter leading-none">
                    <span className="text-black">Az çoktur,</span>
                    <span className="text-gray-400 ml-2">şekil ruhundur</span>
                  </h2>
                </motion.div>
              </div>

              {/* Scrolling text underneath */}
              <div className="relative h-8 overflow-hidden mt-8">
                <motion.div
                  className="flex space-x-8 whitespace-nowrap absolute"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  {phrases.map((phrase, index) => (
                    <span key={index} className="text-xs text-gray-400 uppercase tracking-widest">
                      {phrase}
                    </span>
                  ))}
                  {/* Duplicate phrases for seamless loop */}
                  {phrases.map((phrase, index) => (
                    <span key={`dup-${index}`} className="text-xs text-gray-400 uppercase tracking-widest">
                      {phrase}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Minimal signature */}
              <motion.div
                className="flex items-center space-x-6 pt-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <motion.div
                  className="text-xl font-light text-gray-400 italic"
                  whileHover={{
                    scale: 1.02,
                    color: "#000000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  — Buse Bolova
                </motion.div>

                <motion.div
                  className="w-16 h-[1px] bg-gray-300"
                  animate={{
                    width: [64, 80, 64],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
