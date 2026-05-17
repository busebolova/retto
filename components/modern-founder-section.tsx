"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function ModernFounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  // Creative words that will float
  const creativeWords = [
    "Vizyon",
    "Yenilik",
    "Yaratıcılık",
    "Tasarım",
    "Strateji",
    "Mükemmellik",
    "Tutku",
    "Gelecek",
    "Sanat",
    "Etki",
  ]

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

            {/* Right Column - Modern Content */}
            <motion.div
              className="space-y-8 md:space-y-12 order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Modern Typography - Updated for a more hierarchical look */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight">
                  <span className="text-black">Az çoktur,</span>
                  <br />
                  <span className="text-gray-400">şekil ruhundur</span>
                </h2>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                  Her proje, bir hikaye anlatır. Her tasarım, bir duygu yaratır. Biz sadece görsel üretmiyoruz,{" "}
                  <span className="text-black italic">deneyim tasarlıyoruz.</span>
                </p>
              </motion.div>

              {/* Floating creative words */}
              <div className="relative h-12 overflow-hidden">
                <motion.div
                  className="flex space-x-8 whitespace-nowrap absolute"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 25,
                    ease: "linear",
                  }}
                >
                  {creativeWords.map((word, index) => (
                    <span key={index} className="text-sm text-gray-400 uppercase tracking-widest font-light">
                      {word}
                    </span>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {creativeWords.map((word, index) => (
                    <span key={`dup-${index}`} className="text-sm text-gray-400 uppercase tracking-widest font-light">
                      {word}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Quote section */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border-l-4 border-black"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <blockquote className="text-lg md:text-xl text-gray-700 font-light italic leading-relaxed">
                  "Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır. Biz her projede bu ikisini mükemmel şekilde
                  birleştiriyoruz."
                </blockquote>
                <div className="flex items-center space-x-4 mt-6">
                  <motion.div
                    className="w-12 h-[1px] bg-gray-400"
                    animate={{
                      width: [48, 60, 48],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <cite className="text-gray-500 font-light not-italic">Buse Bolova</cite>
                </div>
              </motion.div>

              {/* Stats or achievements */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                {[
                  { number: "200+", label: "Proje" },
                  { number: "10+", label: "Yıl Deneyim" },
                  { number: "6", label: "Günlük Kahve" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-light text-black">{stat.number}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
