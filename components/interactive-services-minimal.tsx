"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

// Service data
const services = [
  {
    id: "logo",
    title: "LOGO",
    description: "Markanızın kimliğini yansıtan özgün ve etkileyici logo tasarımları",
  },
  {
    id: "identity",
    title: "K.KİMLİK",
    description: "Tutarlı ve profesyonel kurumsal kimlik tasarımları",
  },
  {
    id: "website",
    title: "WEB SİTE",
    description: "Modern, responsive ve kullanıcı dostu web siteleri",
  },
  {
    id: "social",
    title: "SOSYAL M.",
    description: "Etkili sosyal medya stratejileri ve içerik yönetimi",
  },
  {
    id: "brand",
    title: "MARKA TESCİL",
    description: "Markanızı koruma altına alan tescil işlemleri",
    width: 2,
  },
  {
    id: "production",
    title: "PRODÜK.",
    description: "Profesyonel video ve fotoğraf prodüksiyon hizmetleri",
    highlight: true,
  },
]

export default function InteractiveServicesMinimal() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto">
      {/* Elegant services layout */}
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`relative ${service.width === 2 ? "w-[calc(66.66%-8px)]" : "w-[calc(33.33%-8px)]"} 
                       sm:${service.width === 2 ? "w-[calc(50%-8px)]" : "w-[calc(25%-8px)]"} 
                       md:${service.width === 2 ? "w-[calc(40%-16px)]" : "w-[calc(20%-16px)]"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <motion.div
              className={`
                relative rounded-full border ${
                  service.highlight ? "bg-white text-black border-white/80" : "bg-black text-white border-white/10"
                }
                h-14 flex items-center justify-center cursor-pointer overflow-hidden
                transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
              `}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <span className="text-sm font-light tracking-wider px-4">{service.title}</span>

              {/* Subtle hover effect */}
              <motion.div
                className={`absolute inset-0 ${service.highlight ? "bg-gray-200/30" : "bg-white/5"} rounded-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Animated description on hover */}
            <AnimatePresence>
              {hoveredService === service.id && (
                <motion.div
                  className="absolute top-full left-0 right-0 mt-2 text-center"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-gray-400">{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="mt-24 relative h-[1px] w-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  )
}
