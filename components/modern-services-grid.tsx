"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const services = [
  {
    id: "logo",
    num: "01",
    title: "Logo Tasarımı",
    slug: "logo-tasarimi",
  },
  {
    id: "identity",
    num: "02",
    title: "Kurumsal Kimlik",
    slug: "kurumsal-kimlik",
  },
  {
    id: "website",
    num: "03",
    title: "Web Sitesi",
    slug: "web-sitesi",
  },
  {
    id: "social",
    num: "04",
    title: "Sosyal Medya",
    slug: "sosyal-medya",
  },
  {
    id: "production",
    num: "05",
    title: "Prodüksiyon",
    slug: "produksiyon",
  },
  {
    id: "brand",
    num: "06",
    title: "Marka Stratejisi",
    slug: "marka-tescil",
  },
]

export default function ModernServicesGrid() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      ref={ref}
      style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', system-ui, sans-serif",
        paddingTop: "10vh",
        paddingBottom: "12vh",
      }}
    >
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
        }}
      >
        {/* Service list */}
        <div style={{ paddingBottom: "clamp(16px, 3vh, 40px)" }}>
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
              hovered={hovered}
              setHovered={setHovered}
              isLast={index === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({
  service,
  index,
  isInView,
  hovered,
  setHovered,
  isLast,
}: {
  service: { id: string; num: string; title: string; slug: string }
  index: number
  isInView: boolean
  hovered: string | null
  setHovered: (id: string | null) => void
  isLast: boolean
}) {
  const isHovered = hovered === service.id
  const isOtherHovered = hovered !== null && hovered !== service.id

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.9,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Top divider */}
      <div
        style={{
          height: "1px",
          background: isHovered
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.06)",
          transition: "background 0.5s ease",
        }}
      />

      {/* Row */}
      <Link href={`/hizmetler/${service.slug}`} style={{ textDecoration: "none" }}>
        <motion.div
          onHoverStart={() => setHovered(service.id)}
          onHoverEnd={() => setHovered(null)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "clamp(28px, 4.5vh, 52px)",
            paddingBottom: "clamp(28px, 4.5vh, 52px)",
            cursor: "pointer",
            opacity: isOtherHovered ? 0.3 : 1,
            transition: "opacity 0.4s ease",
            gap: "16px",
          }}
        >
          {/* Left: number + title */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "clamp(16px, 3vw, 40px)",
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Number */}
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: isHovered ? "#666" : "#444",
                letterSpacing: "0.15em",
                flexShrink: 0,
                fontVariantNumeric: "tabular-nums",
                transition: "color 0.4s ease",
              }}
            >
              {service.num}
            </span>

            {/* Title */}
            <motion.h3
              animate={{
                letterSpacing: isHovered ? "0.025em" : "0em",
                x: isHovered ? 4 : 0,
                opacity: isHovered ? 1 : 0.85,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(20px, 4vw, 58px)",
                fontWeight: 500,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.1,
                whiteSpace: "normal",
                wordBreak: "keep-all",
              }}
            >
              {service.title}
            </motion.h3>
          </div>

          {/* Right: arrow */}
          <motion.span
            animate={{
              x: isHovered ? 3 : 0,
              opacity: isHovered ? 0.5 : 0.1,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "13px",
              color: "#ffffff",
              fontWeight: 100,
              lineHeight: 1,
              flexShrink: 0,
              letterSpacing: "0.05em",
            }}
          >
            →
          </motion.span>
        </motion.div>
      </Link>

      {/* Bottom divider — only for last item */}
      {isLast && (
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      )}
    </motion.div>
  )
}
