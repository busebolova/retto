"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Download } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceProcess {
  step: string
  description: string
}

interface ServiceData {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  features: ServiceFeature[]
  process: ServiceProcess[]
  deliveryTime: string
  examples?: string[]
}

export default function ServiceDetailPage({ service }: { service: ServiceData }) {
  const [selectedExample, setSelectedExample] = useState<string | null>(null)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const examplesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 })
  const isExamplesInView = useInView(examplesRef, { once: true, amount: 0.2 })

  if (!service) {
    return (
      <div style={{ backgroundColor: "#ffffff" }} className="text-black min-h-screen flex items-center justify-center">
        <div>Hizmet bilgileri yükleniyor...</div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "#ffffff" }} className="text-black min-h-screen">
      {/* Hero Section — beyaz */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#fafaf8" }}>
        {/* Minimal Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gray-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6" style={{ color: "#000" }}>{service.title}</h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ color: "#666" }}>
                {service.subtitle}
              </p>
            </motion.div>

            {/* Minimal Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-light mb-2" style={{ color: "#000" }}>{service.deliveryTime}</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: "#999" }}>Teslimat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2" style={{ color: "#000" }}>
                  {service.id === "logo" ? "3+" : `${service.features?.length || 0}`}
                </div>
                <div className="text-sm uppercase tracking-wider" style={{ color: "#999" }}>
                  {service.id === "logo" ? "Alternatif" : "Özellik"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2" style={{ color: "#000" }}>∞</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: "#999" }}>Revizyon</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section ref={contentRef} className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
                Kapsam
              </p>
              <h2 className="text-3xl md:text-4xl font-light mb-0" style={{ color: "#000" }}>Hizmet Kapsamı</h2>
            </motion.div>

            <div>
              {service.features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(16px, 3vw, 40px)", padding: "clamp(20px, 3vh, 32px) 0" }}>
                    <span style={{ fontSize: "11px", fontWeight: 400, color: "#bbb", letterSpacing: "0.15em", flexShrink: 0 }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 500, color: "#000", margin: "0 0 8px 0", lineHeight: 1.1 }}>{feature.title}</h3>
                      <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )) || <div style={{ color: "#666" }}>Özellikler yükleniyor...</div>}
              <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Examples */}
      {service.id === "logo" && service.examples && service.examples.length > 0 && (
        <section ref={examplesRef} className="py-20" style={{ backgroundColor: "#000000" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Portföy</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Özgün tasarım anlayışımızla hayata geçirdiğimiz logo çalışmaları
                </p>
                <div className="w-16 h-px bg-gray-700 mx-auto mt-8"></div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {service.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 group cursor-pointer border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedExample(example)}
                  >
                    <Image
                      src={example || "/placeholder.svg"}
                      alt={`Logo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Minimal Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">200+</div>
                  <div className="text-gray-500 text-sm">Logo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">15+</div>
                  <div className="text-gray-500 text-sm">Sektör</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">100%</div>
                  <div className="text-gray-500 text-sm">Memnuniyet</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Corporate Identity Examples */}
      {service.id === "identity" && service.examples && service.examples.length > 0 && (
        <section ref={examplesRef} className="py-20" style={{ backgroundColor: "#000000" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Portföy</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Tutarlı kurumsal kimlik tasarımlarımızla markaların profesyonel görünümünü güçlendiriyoruz
                </p>
                <div className="w-16 h-px bg-gray-700 mx-auto mt-8"></div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {service.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 group cursor-pointer border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedExample(example)}
                  >
                    <Image
                      src={example || "/placeholder.svg"}
                      alt={`Kurumsal Kimlik ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Minimal Stats for Corporate Identity */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">150+</div>
                  <div className="text-gray-500 text-sm">Kurumsal Kimlik</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">20+</div>
                  <div className="text-gray-500 text-sm">Sektör</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">100%</div>
                  <div className="text-gray-500 text-sm">Memnuniyet</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Website Examples */}
      {service.id === "website" && service.examples && service.examples.length > 0 && (
        <section ref={examplesRef} className="py-20" style={{ backgroundColor: "#000000" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Portföy</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Modern teknolojiler ve kullanıcı deneyimi odaklı web sitesi tasarımlarımız
                </p>
                <div className="w-16 h-px bg-gray-700 mx-auto mt-8"></div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {service.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 group cursor-pointer border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedExample(example)}
                  >
                    <Image
                      src={example || "/placeholder.svg"}
                      alt={`Web Sitesi ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Minimal Stats for Website */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={isExamplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">100+</div>
                  <div className="text-gray-500 text-sm">Web Sitesi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">25+</div>
                  <div className="text-gray-500 text-sm">Sektör</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">99%</div>
                  <div className="text-gray-500 text-sm">Uptime</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section - Vertical elegant list */}
      <section style={{ backgroundColor: "#000000", paddingTop: "clamp(60px, 10vh, 120px)", paddingBottom: "clamp(60px, 10vh, 120px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)" }}>
          <motion.div
            style={{ marginBottom: "clamp(48px, 8vh, 96px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#555", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
              Nasıl Çalışıyoruz
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
              Süreç
            </h2>
          </motion.div>

          <div>
            {service.process?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(24px, 5vw, 80px)",
                  padding: "clamp(28px, 4vh, 48px) 0",
                }}>
                  {/* Step number */}
                  <span style={{
                    fontSize: "clamp(32px, 5vw, 56px)",
                    fontWeight: 200,
                    color: "rgba(255,255,255,0.12)",
                    lineHeight: 1,
                    flexShrink: 0,
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.02em",
                    minWidth: "clamp(40px, 6vw, 80px)",
                  }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div style={{ flex: 1, paddingTop: "4px" }}>
                    <h3 style={{
                      fontSize: "clamp(18px, 2.5vw, 28px)",
                      fontWeight: 400,
                      color: "#ffffff",
                      margin: "0 0 12px 0",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}>
                      {step.step}
                    </h3>
                    <p style={{
                      fontSize: "clamp(13px, 1.4vw, 16px)",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                      fontWeight: 300,
                      maxWidth: "560px",
                    }}>
                      {step.description}
                    </p>
                    {step.step === "Teslim & Rehber" && (
                      <button
                        style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "6px", padding: "10px 20px", fontSize: "12px", fontWeight: 300, cursor: "pointer", letterSpacing: "0.05em" }}
                      >
                        <Download className="w-3 h-3" />
                        <span>Örnek Brand Guide PDF İndir</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )) || <div style={{ color: "rgba(255,255,255,0.4)" }}>Süreç bilgileri yükleniyor...</div>}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "clamp(60px, 10vh, 120px)", paddingBottom: "clamp(60px, 10vh, 120px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "clamp(40px, 6vh, 80px)" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "32px" }}>
              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
                  Projenizi Başlatalım
                </p>
                <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 300, color: "#000", margin: 0, lineHeight: 1.1 }}>
                  Başlayalım
                </h2>
              </div>
              <p style={{ fontSize: "clamp(15px, 1.8vw, 20px)", color: "#666", fontWeight: 300, maxWidth: "480px", lineHeight: 1.6, margin: 0 }}>
                Markanız için özgün tasarım oluşturmak üzere projenizi başlatalım.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <a
                  href="/iletisim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "14px 32px",
                    background: "#000",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Proje Başlat
                </a>
                <a
                  href="/iletisim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "14px 32px",
                    background: "transparent",
                    color: "#000",
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: "4px",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  İletişim
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedExample && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExample(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedExample || "/placeholder.svg"}
              alt="Logo detay"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              onClick={() => setSelectedExample(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-gray-900/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
