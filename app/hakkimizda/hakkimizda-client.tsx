"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollHeader from "@/components/scroll-header"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import VideoPhoneMockup from "@/components/video-phone-mockup"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"

export default function HakkimizdaClientPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    // Sayfa yüklendiğinde loading state'ini kaldır
    setTimeout(() => setIsLoaded(true), 100)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  // Mobil için daha basit animasyon ayarları
  const mobileAnimation = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
      }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
      }

  const mobileViewAnimation = isMobile
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.3 },
        viewport: { once: true, margin: "-20px" },
      }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
      }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollHeader sticky />

      {/* Hero Section with Video */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div {...mobileAnimation} className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                Yaratıcılığın
                <br />
                <span className="text-white/60">Dijital Hali</span>
              </h1>

              <div className="space-y-4 text-base md:text-lg text-white/80 leading-relaxed">
                <p>
                  Her marka benzersizdir ve bu benzersizliği dijital dünyada en güçlü şekilde yansıtmak bizim tutkumuz.
                  Minimal estetik anlayışımızla, markanızın özünü en saf haliyle ortaya çıkarıyoruz.
                </p>

                <p>
                  Tasarım sadece görsel bir unsur değil, aynı zamanda markanızın hikayesini anlatan güçlü bir dil. Bu
                  dili konuşmak ve markanızın sesini duyurmak için buradayız.
                </p>

                <p className="text-white font-medium">
                  Yaratıcılık ve teknolojinin mükemmel birleşimi ile geleceğin markalarını bugünden inşa ediyoruz.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: isMobile ? 0.1 : 0.3 }}
              >
                <Link
                  href="/projelerimiz"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm"
                >
                  <span className="mr-2">Çalışmalarımızı keşfedin</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: isMobile ? 0.2 : 0.2 }}
              className="flex justify-center"
            >
              <div style={{ pointerEvents: "none" }}>
                <VideoPhoneMockup muted />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tasarım Yaklaşımımız */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...mobileViewAnimation} className="mb-12">
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#aaa", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
              Yaklaşımımız
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-0">Tasarım Yaklaşımımız</h2>
          </motion.div>

          <div>
            {[
              { num: "01", title: "Minimal Estetik", desc: "Sadelik içinde güçlü mesajlar yaratıyoruz. Her elementin anlamlı ve etkili olmasını sağlıyoruz." },
              { num: "02", title: "Özgün Tasarım", desc: "Her tasarımın arkasında güçlü bir hikaye ve derin bir anlam barındırmasını hedefliyoruz." },
              { num: "03", title: "Stratejik Düşünce", desc: "Estetik kararların arkasında her zaman güçlü bir strateji ve marka vizyonu yatıyor." },
              { num: "04", title: "Detay Hassasiyeti", desc: "Büyük fikirleri küçük detaylarda yaşatıyoruz. Mükemmellik, göze çarpmayan şeylerde gizlidir." },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-20px" }}
              >
                <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(16px, 3vw, 40px)", padding: "clamp(20px, 3vh, 32px) 0" }}>
                  <span style={{ fontSize: "11px", fontWeight: 400, color: "#bbb", letterSpacing: "0.15em", flexShrink: 0 }}>{item.num}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 500, color: "#000", margin: "0 0 8px 0", lineHeight: 1.1 }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* Zaman Çizelgesi - Mobilde daha basit */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...mobileViewAnimation} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Zaman Çizelgesi</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20" />

            <div className="space-y-8">
              {[
                {
                  title: "Başlangıç",
                  year: "2020",
                  description: "24 yaşında Busebolovacom kurulumu. Tasarım dünyasına kendi ismiyle iz bırakma hayali.",
                },
                {
                  title: "Freelancer Dönemi",
                  year: "2020-2024",
                  description:
                    "Bağımsızlık ve özgürlüğün yanı sıra tek başına mücadele etmenin zorluklarını öğrenme dönemi.",
                },
                {
                  title: "Dönüşüm",
                  year: "2025",
                  description:
                    "28 yaşında Retto Creative kurulumu. Ekip çalışmasının gücüyle yeni bir vizyonun başlangıcı.",
                },
                {
                  title: "Gelecek Vizyon",
                  year: "∞",
                  description: "Minimal estetik ile markaların dijital kimliklerini şekillendirmeye devam etmek.",
                },
              ].map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : index * 0.2 }}
                    viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                    className="relative flex items-start"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-black z-10 ${
                        index === 2
                          ? "bg-white/20"
                          : index === 3
                            ? "bg-gradient-to-r from-white/20 to-white/40"
                            : "bg-white/10"
                      }`}
                    >
                      <div className="w-3 h-3 bg-white/80 rounded-full" />
                    </div>
                    <div
                      className={`ml-6 p-4 rounded-xl backdrop-blur-sm border flex-1 ${
                        index >= 2 ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <span className={`font-mono text-sm ${index >= 2 ? "text-white/80" : "text-white/60"}`}>
                          {item.year}
                        </span>
                      </div>
                      <p className={`text-sm ${index >= 2 ? "text-white/80" : "text-white/70"}`}>{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
