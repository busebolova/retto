"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Globe, Instagram, Layers, FileCheck, Video, ArrowRight } from "lucide-react"

// Service data
const services = [
  {
    id: "logo",
    title: "Logo Tasarımı",
    shortTitle: "LOGO",
    description: "Markanızın kimliğini yansıtan özgün ve etkileyici logo tasarımları",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-rose-500/20 to-orange-500/10",
    hoverGradient: "from-rose-500/30 to-orange-500/20",
  },
  {
    id: "identity",
    title: "Kurumsal Kimlik",
    shortTitle: "K.KİMLİK",
    description: "Tutarlı ve profesyonel kurumsal kimlik tasarımları",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-purple-500/10",
    hoverGradient: "from-blue-500/30 to-purple-500/20",
  },
  {
    id: "website",
    title: "Web Sitesi",
    shortTitle: "WEB SİTE",
    description: "Modern, responsive ve kullanıcı dostu web siteleri",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-emerald-500/20 to-teal-500/10",
    hoverGradient: "from-emerald-500/30 to-teal-500/20",
  },
  {
    id: "social",
    title: "Sosyal Medya",
    shortTitle: "SOSYAL M.",
    description: "Etkili sosyal medya stratejileri ve içerik yönetimi",
    icon: <Instagram className="w-6 h-6" />,
    gradient: "from-pink-500/20 to-red-500/10",
    hoverGradient: "from-pink-500/30 to-red-500/20",
  },
  {
    id: "brand",
    title: "Marka Tescil",
    shortTitle: "MARKA TESCİL",
    description: "Markanızı koruma altına alan tescil işlemleri",
    icon: <FileCheck className="w-6 h-6" />,
    gradient: "from-cyan-500/20 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 to-blue-500/20",
  },
  {
    id: "production",
    title: "Prodüksiyon",
    shortTitle: "PRODÜK.",
    description: "Profesyonel video ve fotoğraf prodüksiyon hizmetleri",
    icon: <Video className="w-6 h-6" />,
    gradient: "from-amber-500/20 to-yellow-500/10",
    hoverGradient: "from-amber-500/30 to-yellow-500/20",
  },
]

// Card component with mouse tracking effect
const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Calculate the mouse position relative to the card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within the element
    const y = e.clientY - rect.top // y position within the element

    // Calculate the position as a percentage of the card dimensions
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    setMousePosition({ x: xPercent, y: yPercent })
  }

  // Calculate gradient angle based on mouse position
  const getGradientAngle = () => {
    // Convert mouse position to angle (0-360 degrees)
    const angle = Math.atan2(mousePosition.y - 50, mousePosition.x - 50) * (180 / Math.PI) + 90
    return `${angle}deg`
  }

  // Determine the size of the card based on index
  const getCardSize = () => {
    // Make some cards larger for visual interest
    if (index === 0 || index === 3) {
      return "row-span-2"
    }
    if (index === 4) {
      return "col-span-2"
    }
    return ""
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl ${getCardSize()}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: false, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`h-full w-full p-6 backdrop-blur-sm border border-white/10 flex flex-col justify-between
          bg-gradient-to-${isHovered ? getGradientAngle() : "br"} ${isHovered ? service.hoverGradient : service.gradient}
          transition-colors duration-300`}
        animate={{
          backgroundPosition: isHovered ? `${mousePosition.x}% ${mousePosition.y}%` : "center",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Card Content */}
        <div className="space-y-4">
          <motion.div
            className="p-3 rounded-xl bg-white/10 w-fit"
            animate={{
              x: isHovered ? (mousePosition.x > 50 ? 5 : -5) : 0,
              y: isHovered ? (mousePosition.y > 50 ? 5 : -5) : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div className="text-white">{service.icon}</div>
          </motion.div>

          <motion.h3
            className="text-xl md:text-2xl font-light text-white"
            animate={{
              x: isHovered ? (mousePosition.x > 50 ? 3 : -3) : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-white/70 text-sm"
            animate={{
              opacity: isHovered ? 1 : 0.7,
              y: isHovered ? 0 : 5,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>
        </div>

        {/* Bottom indicator */}
        <motion.div
          className="flex items-center justify-end mt-4"
          animate={{
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-5 h-5 text-white/70" />
        </motion.div>

        {/* Spotlight effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default function InteractiveGridServices() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative min-h-screen bg-black flex items-center justify-center py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">Hizmetlerimiz</h2>
            <motion.div
              className="h-[1px] w-16 bg-white/20 mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          />
        </div>
      </div>
    </section>
  )
}
