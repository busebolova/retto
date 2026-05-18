"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [logoReady, setLogoReady] = useState(false)
  const [breathe, setBreathe] = useState(false)
  const [exit, setExit] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setLogoReady(true), 120)
    const t2 = setTimeout(() => setBreathe(true), 750)
    const t3 = setTimeout(() => setExit(true), 1700)
    const t4 = setTimeout(() => setDone(true), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  if (done) return null

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          overflow: "hidden",
          pointerEvents: exit ? "none" : "all",
        }}
        // Perde yukarı kalkıyor
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{
          clipPath: exit
            ? "inset(0% 0% 100% 0%)"
            : "inset(0% 0% 0% 0%)",
        }}
        transition={
          exit
            ? {
                clipPath: {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                },
              }
            : { clipPath: { duration: 0 } }
        }
      >
        {/* Siyah arka plan */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#080808",
          }}
        />

        {/* Grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* İçerik */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease",
              opacity: logoReady ? 1 : 0,
              transform: logoReady
                ? breathe
                  ? "scale(1.04) translateY(-4px)"
                  : "scale(1) translateY(0)"
                : "scale(0.92) translateY(8px)",
              filter: logoReady ? "blur(0px)" : "blur(12px)",
            }}
          >
            <img
              src="/images/retto-logo.png"
              alt="Retto Creative"
              style={{
                width: "clamp(150px, 20vw, 280px)",
                height: "auto",
                display: "block",
                filter: "brightness(0) invert(1)",
                opacity: 0.9,
              }}
            />

            <div
              style={{
                width: "1px",
                height: breathe ? "26px" : "0px",
                background: "rgba(255,255,255,0.12)",
                marginTop: "22px",
                transition: "height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                opacity: breathe ? 1 : 0,
              }}
            />

            <p
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: "7.5px",
                fontWeight: 300,
                letterSpacing: "0.45em",
                color: "rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                margin: 0,
                marginTop: "10px",
                whiteSpace: "nowrap",
                opacity: breathe ? 1 : 0,
                transform: breathe ? "translateY(0)" : "translateY(4px)",
                transition:
                  "opacity 0.5s ease 0.08s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.08s",
              }}
            >
              Creative Studio
            </p>
          </div>
        </div>

        {/* Köşe aksanlar */}
        <div
          style={{
            position: "absolute",
            top: "clamp(20px, 3.5vh, 44px)",
            left: "clamp(20px, 3.5vw, 44px)",
            width: "28px",
            height: "28px",
            borderTop: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "1px solid rgba(255,255,255,0.09)",
            zIndex: 2,
            opacity: logoReady ? 1 : 0,
            transition: "opacity 0.8s ease 0.25s",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "clamp(20px, 3.5vh, 44px)",
            right: "clamp(20px, 3.5vw, 44px)",
            width: "28px",
            height: "28px",
            borderBottom: "1px solid rgba(255,255,255,0.09)",
            borderRight: "1px solid rgba(255,255,255,0.09)",
            zIndex: 4,
            opacity: logoReady ? 1 : 0,
            transition: "opacity 0.8s ease 0.35s",
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
