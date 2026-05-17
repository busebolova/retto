"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Layers, Globe, Instagram, FileCheck, Video } from "lucide-react"

// Service data
const services = [
  {
    id: "logo",
    title: "LOGO",
    description: "Markanızın kimliğini yansıtan özgün ve etkileyici logo tasarımları",
    icon: <Sparkles className="w-5 h-5" />,
    color: "from-white/10 to-white/5",
    width: "col-span-1",
  },
  {
    id: "identity",
    title: "K.KİMLİK",
    description: "Tutarlı ve profesyonel kurumsal kimlik tasarımları",
    icon: <Layers className="w-5 h-5" />,
    color: "from-white/10 to-white/5",
    width: "col-span-1",
  },
  {
    id: "website",
    title: "WEB SİTE",
    description: "Modern, responsive ve kullanıcı dostu web siteleri",
    icon: <Globe className="w-5 h-5" />,
    color: "from-white/10 to-white/5",
    width: "col-span-1",
  },
  {
    id: "social",
    title: "SOSYAL M.",
    description: "Etkili sosyal medya stratejileri ve içerik yönetimi",
    icon: <Instagram className="w-5 h-5" />,
    color: "from-white/10 to-white/5",
    width: "col-span-1",
  },
  {
    id: "brand",
    title: "MARKA TESCİL",
    description: "Markanızı koruma altına alan tescil işlemleri",
    icon: <FileCheck className="w-5 h-5" />,
    color: "from-white/10 to-white/5",
    width: "col-span-1",
  },
  {
    id: "production",
    title: "PRODÜK.",
    description: "Profesyonel video ve fotoğraf prodüksiyon hizmetleri",
    icon: <Video className="w-5 h-5" />,
    color: "from-white/10 to-white/5",
    width: "col-span-1",
    highlight: true,
  },
]

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`${service.width} relative overflow-hidden group`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className={`
                relative rounded-full md:rounded-3xl border border-white/10 
                ${service.highlight ? "bg-white text-black" : "bg-gradient-to-b " + service.color + " backdrop-blur-sm text-white"}
                h-16 md:h-20 flex items-center justify-center cursor-pointer overflow-hidden
                transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
              `}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="flex items-center justify-center space-x-2 px-4">
                <span className="text-sm md:text-base font-light tracking-wider">{service.title}</span>
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-4"
                  >
                    {service.icon}
                  </motion.div>
                )}
              </div>

              {/* Animated background effect */}
              <motion.div
                className={`absolute inset-0 ${
                  service.highlight ? "bg-white/20" : "bg-white/5"
                } rounded-full md:rounded-3xl`}
                initial={{ x: "-100%" }}
                animate={{ x: hoveredService === service.id ? "0%" : "-100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Service description panel */}
            <AnimatePresence>
              {activeService === service.id && (
                <motion.div
                  className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">{service.icon}</div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">{service.title}</h4>
                      <p className="text-xs text-gray-300">{service.description}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">
                        <span>Detaylı bilgi</span>
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Floating particles for decoration */}
      <div className="relative h-20 mt-8">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
