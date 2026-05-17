"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Sparkles, Globe, Instagram, Layers, FileCheck, Video, ArrowRight, Star, X, ChevronRight } from "lucide-react"

// Service data with enhanced information
const services = [
  {
    id: "logo",
    title: "Logo Tasarımı",
    shortTitle: "LOGO",
    description: "Markanızın kimliğini yansıtan özgün ve etkileyici logo tasarımları",
    details: "Yaratıcı süreçle başlayan, markanızın ruhunu yansıtan logoların doğuşu",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    hoverGlow: "0 0 30px rgba(168, 85, 247, 0.3)",
    features: ["Sınırsız revizyon", "Vektör formatlar", "Marka rehberi"],
    position: { x: 0, y: 0 },
    image: "/creative-logo-design-process.png",
  },
  {
    id: "identity",
    title: "Kurumsal Kimlik",
    shortTitle: "K.KİMLİK",
    description: "Tutarlı ve profesyonel kurumsal kimlik tasarımları",
    details: "Markanızın tüm dokunuş noktalarında tutarlı görsel kimlik",
    icon: <Layers className="w-6 h-6" />,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    hoverGlow: "0 0 30px rgba(16, 185, 129, 0.3)",
    features: ["Kartvizit tasarımı", "Antet tasarımı", "Marka kullanımı"],
    position: { x: 1, y: 0 },
    image: "/placeholder.svg?height=400&width=600&query=corporate identity design elements",
  },
  {
    id: "website",
    title: "Web Sitesi",
    shortTitle: "WEB SİTE",
    description: "Modern, responsive ve kullanıcı dostu web siteleri",
    details: "Dijital dünyanızın kalbi olan web siteniz",
    icon: <Globe className="w-6 h-6" />,
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
    hoverGlow: "0 0 30px rgba(14, 165, 233, 0.3)",
    features: ["Responsive tasarım", "SEO optimizasyonu", "Hızlı yükleme"],
    position: { x: 2, y: 0 },
    image: "/placeholder.svg?height=400&width=600&query=responsive website design mockup",
  },
  {
    id: "social",
    title: "Sosyal Medya",
    shortTitle: "SOSYAL M.",
    description: "Etkili sosyal medya stratejileri ve içerik yönetimi",
    details: "Hikayenizi dijital dünyada en etkili şekilde anlatın",
    icon: <Instagram className="w-6 h-6" />,
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-500/30",
    hoverGlow: "0 0 30px rgba(244, 63, 94, 0.3)",
    features: ["İçerik planlama", "Topluluk yönetimi", "Analiz raporları"],
    position: { x: 0, y: 1 },
    image: "/placeholder.svg?height=400&width=600&query=social media content grid",
  },
  {
    id: "brand",
    title: "Marka Tescil",
    shortTitle: "MARKA TESCİL",
    description: "Markanızı koruma altına alan tescil işlemleri",
    details: "Markanızı hukuki açıdan koruma altına alın",
    icon: <FileCheck className="w-6 h-6" />,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    hoverGlow: "0 0 30px rgba(8, 145, 178, 0.3)",
    features: ["Hukuki danışmanlık", "Tescil süreci", "Koruma stratejisi"],
    position: { x: 0, y: 2 },
    image: "/placeholder.svg?height=400&width=600&query=trademark registration process",
  },
  {
    id: "production",
    title: "Prodüksiyon",
    shortTitle: "PRODÜK.",
    description: "Profesyonel video ve fotoğraf prodüksiyon hizmetleri",
    details: "Markanızı görsel hikayelerle canlandırın",
    icon: <Video className="w-6 h-6" />,
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/30",
    hoverGlow: "0 0 30px rgba(245, 158, 11, 0.3)",
    features: ["Video prodüksiyon", "Fotoğraf çekimi", "Post prodüksiyon"],
    position: { x: 1, y: 2 },
    image: "/placeholder.svg?height=400&width=600&query=professional video production studio",
  },
]

export default function InteractiveFloatingServices() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("features")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [windowWidth, setWindowWidth] = useState(0)

  // Update window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Get selected service data
  const selectedServiceData = services.find((s) => s.id === selectedService)

  // Determine grid columns based on window width
  const getGridCols = () => {
    if (windowWidth < 640) return "grid-cols-1"
    if (windowWidth < 1024) return "grid-cols-2"
    return "grid-cols-3"
  }

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto relative py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 0.5 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.2 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Services Grid */}
      <div className={`relative grid ${getGridCols()} gap-6 md:gap-8 px-4`}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
            onHoverStart={() => setHoveredService(service.id)}
            onHoverEnd={() => setHoveredService(null)}
            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
          >
            {/* Main Card */}
            <motion.div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-md border ${service.borderColor} p-6 h-[340px] transition-all duration-500`}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
                boxShadow: service.hoverGlow,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 rounded-2xl`}
                animate={{
                  opacity: hoveredService === service.id ? 0.4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-between z-10">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <motion.div
                    className="p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                    animate={{
                      scale: hoveredService === service.id ? 1.1 : 1,
                      rotate: hoveredService === service.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  <motion.div
                    className="opacity-60"
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0.6,
                      x: hoveredService === service.id ? 5 : 0,
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Title */}
                <div className="space-y-2 mt-4">
                  <motion.h3
                    className="text-2xl font-medium text-white"
                    animate={{
                      y: hoveredService === service.id ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0.8,
                      y: hoveredService === service.id ? -3 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Features - Show on hover */}
                <motion.div
                  className="space-y-2 mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredService === service.id ? 1 : 0,
                    height: hoveredService === service.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2 text-white/80 text-xs"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{
                        x: hoveredService === service.id ? 0 : -10,
                        opacity: hoveredService === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2, delay: 0.1 + idx * 0.05 }}
                    >
                      <Star className="w-3 h-3 fill-current text-white" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Call to action */}
                <motion.div
                  className="mt-4 pt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredService === service.id ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/70">Detaylı Bilgi</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>

              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                animate={{
                  x: hoveredService === service.id ? [0, 10, 0] : 0,
                  y: hoveredService === service.id ? [0, -10, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredService === service.id ? Number.POSITIVE_INFINITY : 0,
                  ease: "linear",
                }}
              />

              {/* Floating particles inside card */}
              {hoveredService === service.id && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1 + Math.random() * 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: Math.random() * 0.5,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Details Modal */}
      <AnimatePresence>
        {selectedService && selectedServiceData && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className={`bg-gradient-to-br ${selectedServiceData.color} backdrop-blur-xl border ${selectedServiceData.borderColor} rounded-3xl p-8 max-w-4xl w-full relative`}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">{selectedServiceData.icon}</div>
                    <div>
                      <h3 className="text-3xl font-medium text-white">{selectedServiceData.title}</h3>
                      <p className="text-gray-300">{selectedServiceData.details}</p>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex space-x-2 border-b border-white/10 pb-2">
                    <button
                      className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                        activeTab === "features" ? "bg-white/10 text-white" : "text-white/60 hover:text-white/80"
                      }`}
                      onClick={() => setActiveTab("features")}
                    >
                      Özellikler
                    </button>
                    <button
                      className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                        activeTab === "process" ? "bg-white/10 text-white" : "text-white/60 hover:text-white/80"
                      }`}
                      onClick={() => setActiveTab("process")}
                    >
                      Süreç
                    </button>
                    <button
                      className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                        activeTab === "examples" ? "bg-white/10 text-white" : "text-white/60 hover:text-white/80"
                      }`}
                      onClick={() => setActiveTab("examples")}
                    >
                      Örnekler
                    </button>
                  </div>

                  {/* Tab content */}
                  <div className="min-h-[200px]">
                    {activeTab === "features" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-medium text-white">Neler Sunuyoruz?</h4>
                        <div className="space-y-3">
                          {selectedServiceData.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 text-gray-300">
                              <Star className="w-4 h-4 fill-current text-white" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-white/5 rounded-xl">
                          <p className="text-white/80 text-sm">
                            {selectedServiceData.title} hizmetimiz, markanızın benzersiz ihtiyaçlarına göre
                            özelleştirilmiş çözümler sunar. Detaylı bilgi ve fiyatlandırma için bizimle iletişime geçin.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "process" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-medium text-white">Çalışma Sürecimiz</h4>
                        <div className="space-y-4">
                          {[
                            { step: "Keşif", desc: "İhtiyaçlarınızı ve hedeflerinizi anlıyoruz" },
                            { step: "Strateji", desc: "Markanıza özel stratejiler geliştiriyoruz" },
                            { step: "Tasarım", desc: "Yaratıcı çözümler üretiyoruz" },
                            { step: "Uygulama", desc: "Projenizi hayata geçiriyoruz" },
                            { step: "Analiz", desc: "Sonuçları ölçümlüyor ve raporluyoruz" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs">{idx + 1}</span>
                              </div>
                              <div>
                                <h5 className="text-white font-medium">{item.step}</h5>
                                <p className="text-white/70 text-sm">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "examples" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-medium text-white">Örnek Çalışmalar</h4>
                        <p className="text-white/70">
                          {selectedServiceData.title} alanında gerçekleştirdiğimiz bazı projeler:
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {[...Array(4)].map((_, idx) => (
                            <div
                              key={idx}
                              className="aspect-video rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                            >
                              <div className="w-full h-full flex items-center justify-center text-xs text-white/50">
                                Örnek {idx + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-6 text-white font-medium transition-all duration-300 mt-4">
                    Detaylı Bilgi Al
                  </button>
                </div>

                {/* Image section */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/20">
                  <img
                    src={selectedServiceData.image || "/placeholder.svg"}
                    alt={selectedServiceData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-medium text-white mb-1">{selectedServiceData.title}</h4>
                    <p className="text-sm text-white/80">{selectedServiceData.description}</p>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom decorative elements */}
      <div className="mt-16 relative">
        {/* Center circle with pulsing effect */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-white/30"></div>
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>

        {/* Horizontal line */}
        <motion.div
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>
    </div>
  )
}
