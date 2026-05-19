"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import ScrollHeader from "@/components/scroll-header"
import MobileBottomNav from "@/components/mobile-bottom-nav"

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

const SERVICE_NAV = [
  { slug: "logo-tasarimi", title: "Logo Tasarımı" },
  { slug: "kurumsal-kimlik", title: "Kurumsal Kimlik" },
  { slug: "web-sitesi", title: "Web Sitesi" },
  { slug: "sosyal-medya", title: "Sosyal Medya" },
  { slug: "produksiyon", title: "Prodüksiyon" },
  { slug: "marka-tescil", title: "Marka Stratejisi" },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function ServiceDetailPage({ service }: { service: ServiceData }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const examples = service?.examples ?? []

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const goPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  }
  const goNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setSelectedIndex((i) => (i !== null && i < examples.length - 1 ? i + 1 : i))
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroTitleY = useTransform(heroScroll, [0, 1], [0, -120])
  const heroSubtitleY = useTransform(heroScroll, [0, 1], [0, -60])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
  const heroBgY = useTransform(heroScroll, [0, 1], [0, 80])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "ArrowRight") goNext()
      else if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedIndex, examples.length])

  const currentIndex = SERVICE_NAV.findIndex((s) => s.slug === service?.slug)
  const prevService = currentIndex > 0 ? SERVICE_NAV[currentIndex - 1] : null
  const nextService = currentIndex < SERVICE_NAV.length - 1 ? SERVICE_NAV[currentIndex + 1] : null

  if (!service) {
    return (
      <div style={{ backgroundColor: "#fafaf8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: "'Poppins', sans-serif", color: "#000" }}>Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: "#fafaf8",
        minHeight: "100vh",
        fontFamily: "'Poppins', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <ScrollHeader />

      {/* ─── HERO — BEYAZ ─── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#fafaf8",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: "-20%",
            backgroundImage: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,0,0,0.025) 0%, transparent 70%)",
            y: heroBgY,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.025,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
            pointerEvents: "none",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            x: mousePos.x * 25 - 200,
            y: mousePos.y * 15 - 200,
            pointerEvents: "none",
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 clamp(24px, 6vw, 80px)",
            maxWidth: "900px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "rgba(0,0,0,0.3)",
              textTransform: "uppercase",
              marginBottom: "32px",
              fontWeight: 300,
            }}
          >
            Hizmet
          </motion.p>

          <motion.h1
            style={{
              fontSize: "clamp(3rem, 9vw, 9rem)",
              fontWeight: 500,
              color: "#000000",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: "0 0 32px 0",
              y: heroTitleY,
              opacity: heroOpacity,
            }}
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            style={{
              fontSize: "clamp(14px, 1.8vw, 20px)",
              color: "rgba(0,0,0,0.45)",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: "560px",
              margin: "0 auto",
              y: heroSubtitleY,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ position: "absolute", bottom: "-38vh", left: "50%", transform: "translateX(-50%)" }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)" }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ position: "absolute", top: "clamp(20px, 4vh, 48px)", left: "clamp(20px, 4vw, 48px)", width: "32px", height: "32px", borderTop: "1px solid rgba(0,0,0,0.1)", borderLeft: "1px solid rgba(0,0,0,0.1)" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ position: "absolute", bottom: "clamp(20px, 4vh, 48px)", right: "clamp(20px, 4vw, 48px)", width: "32px", height: "32px", borderBottom: "1px solid rgba(0,0,0,0.1)", borderRight: "1px solid rgba(0,0,0,0.1)" }}
        />
      </section>

      {/* ─── STATS BAR ─── */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <RevealSection>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "clamp(40px, 6vh, 72px) clamp(24px, 6vw, 80px)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(24px, 4vw, 64px)",
            }}
          >
            {[
              { value: service.deliveryTime, label: "Teslimat Süresi" },
              { value: service.id === "logo" ? "3+" : String(service.features?.length || 0), label: service.id === "logo" ? "Alternatif" : "Özellik" },
              { value: "∞", label: "Revizyon Hakkı" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#000", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#999", textTransform: "uppercase", fontWeight: 400 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ─── FEATURES ─── */}
      <section style={{ background: "#fafaf8", padding: "clamp(80px, 12vh, 160px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 80px)" }}>
          <RevealSection>
            <div style={{ marginBottom: "clamp(48px, 8vh, 96px)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#aaa", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>
                Kapsam
              </p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 300, color: "#000", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Hizmet Kapsamı
              </h2>
            </div>
          </RevealSection>

          <div>
            {service.features?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6 }}
              >
                <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(20px, 4vw, 56px)", padding: "clamp(24px, 4vh, 40px) 0", cursor: "default" }}>
                  <span style={{ fontSize: "10px", fontWeight: 400, color: "#ccc", letterSpacing: "0.15em", flexShrink: 0, paddingTop: "6px", minWidth: "28px" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "clamp(18px, 2.5vw, 30px)", fontWeight: 500, color: "#000", margin: "0 0 10px 0", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: "clamp(13px, 1.3vw, 15px)", color: "#777", lineHeight: 1.7, margin: 0, fontWeight: 300, maxWidth: "560px" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      {service.examples && service.examples.length > 0 && (
        <section style={{ background: "#000000", padding: "clamp(80px, 12vh, 160px) 0", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 80px)" }}>
            <RevealSection>
              <div style={{ marginBottom: "clamp(48px, 8vh, 96px)", textAlign: "center" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#444", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>
                  Çalışmalar
                </p>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 300, color: "#ffffff", margin: "0 0 16px 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  Portföy
                </h2>
                <p style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "rgba(255,255,255,0.35)", fontWeight: 300, maxWidth: "480px", margin: "0 auto" }}>
                  {service.id === "logo"
                    ? "Özgün tasarım anlayışımızla hayata geçirdiğimiz logo çalışmaları"
                    : service.id === "identity"
                    ? "Tutarlı kurumsal kimlik tasarımlarımız"
                    : "Modern teknolojiler ile tasarladığımız web siteleri"}
                </p>
              </div>
            </RevealSection>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(12px, 2vw, 20px)",
              }}
            >
              {service.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                  style={{
                    position: "relative",
                    aspectRatio: service.id === "website" ? "4/3" : "1/1",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#111",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src={example || "/placeholder.svg"}
                    alt={`Portföy ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(24px, 4vw, 64px)",
                marginTop: "clamp(60px, 10vh, 120px)",
                paddingTop: "clamp(40px, 6vh, 80px)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {(service.id === "logo"
                ? [{ v: "200+", l: "Logo" }, { v: "15+", l: "Sektör" }, { v: "100%", l: "Memnuniyet" }]
                : service.id === "identity"
                ? [{ v: "150+", l: "Kurumsal Kimlik" }, { v: "20+", l: "Sektör" }, { v: "100%", l: "Memnuniyet" }]
                : [{ v: "100+", l: "Web Sitesi" }, { v: "25+", l: "Sektör" }, { v: "99%", l: "Uptime" }]
              ).map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em" }}>{s.v}</div>
                  <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── PROCESS ─── */}
      <section style={{ background: "#000000", padding: "clamp(80px, 12vh, 160px) 0", position: "relative", overflow: "hidden" }}>
        <motion.div
          style={{
            position: "absolute",
            width: "80vw",
            height: "80vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 80px)", position: "relative", zIndex: 1 }}>
          <RevealSection>
            <div style={{ marginBottom: "clamp(48px, 8vh, 96px)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#444", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>
                Nasıl Çalışıyoruz
              </p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 300, color: "#ffffff", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Süreç
              </h2>
            </div>
          </RevealSection>

          <div>
            {service.process?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "clamp(24px, 5vw, 80px)", padding: "clamp(32px, 5vh, 56px) 0" }}
                >
                  <span style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 200, color: "rgba(255,255,255,0.08)", lineHeight: 1, flexShrink: 0, letterSpacing: "-0.02em", minWidth: "clamp(48px, 7vw, 90px)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1, paddingTop: "6px" }}>
                    <h3 style={{ fontSize: "clamp(18px, 2.5vw, 30px)", fontWeight: 400, color: "#ffffff", margin: "0 0 12px 0", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                      {step.step}
                    </h3>
                    <p style={{ fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(255,255,255,0.38)", lineHeight: 1.8, margin: 0, fontWeight: 300, maxWidth: "520px" }}>
                      {step.description}
                    </p>
                    {step.step === "Teslim & Rehber" && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", padding: "10px 20px", fontSize: "11px", fontWeight: 300, cursor: "pointer", letterSpacing: "0.1em", fontFamily: "'Poppins', sans-serif" }}
                      >
                        <Download style={{ width: "12px", height: "12px" }} />
                        <span>Örnek Brand Guide PDF</span>
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: "#fafaf8", padding: "clamp(100px, 15vh, 200px) 0", position: "relative", overflow: "hidden" }}>
        {/* Arka plan: "Merhaba!" */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: "clamp(80px, 22vw, 280px)",
              fontWeight: 700,
              color: "rgba(0,0,0,0.03)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            Merhaba!
          </span>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 80px)", position: "relative", zIndex: 1 }}>
          <RevealSection>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#aaa", textTransform: "uppercase", marginBottom: "24px", fontWeight: 400 }}>
                Projenizi Başlatalım
              </p>
              <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 300, color: "#000", margin: "0 0 32px 0", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
                Başlayalım
              </h2>
              <p style={{ fontSize: "clamp(14px, 1.6vw, 18px)", color: "#888", fontWeight: 300, maxWidth: "440px", lineHeight: 1.7, margin: "0 auto 48px" }}>
                Markanız için özgün tasarım oluşturmak üzere projenizi başlatalım.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: "inline-flex", alignItems: "center", padding: "16px 40px", background: "#000", color: "#fff", textDecoration: "none", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", borderRadius: "4px" }}
                >
                  Proje Başlat
                </motion.a>
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: "inline-flex", alignItems: "center", padding: "16px 40px", background: "transparent", color: "#000", textDecoration: "none", fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "4px" }}
                >
                  İletişim
                </motion.a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── HİZMETLER ARASI NAVİGASYON ─── */}
      <section style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "clamp(32px, 5vh, 56px) clamp(24px, 6vw, 80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Sol: Önceki */}
          {prevService ? (
            <Link
              href={`/hizmetler/${prevService.slug}`}
              style={{ textDecoration: "none", flex: 1 }}
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ChevronLeft style={{ width: "16px", height: "16px", color: "#000" }} />
                </div>
                <div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>Önceki</div>
                  <div style={{ fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 500, color: "#000", letterSpacing: "-0.01em" }}>{prevService.title}</div>
                </div>
              </motion.div>
            </Link>
          ) : (
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", opacity: 0.2, pointerEvents: "none" }}>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ChevronLeft style={{ width: "16px", height: "16px", color: "#000" }} />
                </div>
                <div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>Önceki</div>
                  <div style={{ fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 500, color: "#000", letterSpacing: "-0.01em" }}>—</div>
                </div>
              </div>
            </div>
          )}

          {/* Orta: nokta göstergesi */}
          <Link
            href="/hizmetler"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0 }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {SERVICE_NAV.map((s) => (
                <div
                  key={s.slug}
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: s.slug === service.slug ? "#000" : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase" }}>Tüm Hizmetler</span>
          </Link>

          {/* Sağ: Sonraki */}
          {nextService ? (
            <Link
              href={`/hizmetler/${nextService.slug}`}
              style={{ textDecoration: "none", flex: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>Sonraki</div>
                  <div style={{ fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 500, color: "#000", letterSpacing: "-0.01em" }}>{nextService.title}</div>
                </div>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ChevronRight style={{ width: "16px", height: "16px", color: "#000" }} />
                </div>
              </motion.div>
            </Link>
          ) : (
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", opacity: 0.2, pointerEvents: "none" }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>Sonraki</div>
                  <div style={{ fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 500, color: "#000", letterSpacing: "-0.01em" }}>—</div>
                </div>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ChevronRight style={{ width: "16px", height: "16px", color: "#000" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <MobileBottomNav />

      {selectedIndex !== null && examples[selectedIndex] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {/* Görsel */}
          <div
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", width: "100%", height: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={examples[selectedIndex]}
              alt={`Portföy ${selectedIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
            />
          </div>

          {/* Kapat */}
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
          >
            ×
          </button>

          {/* Sol ok */}
          {selectedIndex > 0 && (
            <button
              onClick={goPrev}
              style={{
                position: "fixed",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10000,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              ‹
            </button>
          )}

          {/* Sağ ok */}
          {selectedIndex < examples.length - 1 && (
            <button
              onClick={goNext}
              style={{
                position: "fixed",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10000,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              ›
            </button>
          )}

          {/* Sayaç */}
          <div
            style={{
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              zIndex: 10000,
            }}
          >
            {selectedIndex + 1} / {examples.length}
          </div>
        </motion.div>
      )}
    </div>
  )
}
