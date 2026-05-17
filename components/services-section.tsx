"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const services = [
  {
    id: "logo",
    num: "01",
    title: "Logo Tasarımı",
    sub: "Identity & Mark",
    tag: "Visual Identity",
  },
  {
    id: "identity",
    num: "02",
    title: "Kurumsal Kimlik",
    sub: "Brand System",
    tag: "Brand Design",
  },
  {
    id: "website",
    num: "03",
    title: "Web Sistemleri",
    sub: "Digital Architecture",
    tag: "Development",
  },
  {
    id: "social",
    num: "04",
    title: "Dijital Varlık",
    sub: "Social & Content",
    tag: "Digital Presence",
  },
  {
    id: "production",
    num: "05",
    title: "Prodüksiyon",
    sub: "Film & Photography",
    tag: "Creative Production",
  },
  {
    id: "strategy",
    num: "06",
    title: "Marka Stratejisi",
    sub: "Direction & Positioning",
    tag: "Strategy",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      ref={ref}
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', system-ui, sans-serif",
        paddingTop: "10vh",
        paddingBottom: "12vh",
      }}
    >
      {/* Massive faded background title */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontSize: "clamp(80px, 22vw, 320px)",
          fontWeight: 800,
          color: "#ffffff",
          opacity: 0.025,
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        SERVICES
      </div>

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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: "clamp(48px, 8vh, 96px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#555",
                textTransform: "uppercase",
                marginBottom: "12px",
                fontWeight: 400,
              }}
            >
              What We Build
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 300,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Hizmetlerimiz
            </h2>
          </div>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, transparent, #333)",
              flexShrink: 0,
            }}
          />
        </motion.div>

        {/* Service list */}
        <div>
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
              hovered={hovered}
              setHovered={setHovered}
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
}: {
  service: (typeof services)[0]
  index: number
  isInView: boolean
  hovered: string | null
  setHovered: (id: string | null) => void
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
      <motion.div
        onHoverStart={() => setHovered(service.id)}
        onHoverEnd={() => setHovered(null)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "clamp(20px, 3vh, 36px)",
          paddingBottom: "clamp(20px, 3vh, 36px)",
          cursor: "default",
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
              color: "#444",
              letterSpacing: "0.15em",
              flexShrink: 0,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.4s ease",
              ...(isHovered ? { color: "#666" } : {}),
            }}
          >
            {service.num}
          </span>

          {/* Title */}
          <motion.h3
            animate={{
              letterSpacing: isHovered ? "0.04em" : "0em",
              x: isHovered ? 6 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(22px, 4.5vw, 64px)",
              fontWeight: 600,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {service.title}
          </motion.h3>
        </div>

        {/* Right: sub + tag + arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 3vw, 48px)",
            flexShrink: 0,
          }}
        >
          {/* Sub label - hidden on small screens */}
          <span
            style={{
              fontSize: "12px",
              color: "#444",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 300,
              display: "none",
              transition: "color 0.4s ease",
              ...(isHovered ? { color: "#666" } : {}),
            }}
            className="service-sub"
          >
            {service.sub}
          </span>

          {/* Tag pill */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#888",
                  border: "1px solid #2a2a2a",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                  fontWeight: 300,
                }}
              >
                {service.tag}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Arrow */}
          <motion.span
            animate={{
              x: isHovered ? 4 : 0,
              opacity: isHovered ? 1 : 0.25,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "18px",
              color: "#ffffff",
              fontWeight: 200,
              lineHeight: 1,
            }}
          >
            →
          </motion.span>
        </div>
      </motion.div>

      {/* Bottom divider — only for last item */}
      {index === services.length - 1 && (
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
