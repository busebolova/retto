"use client"

import { useState, useEffect, useRef, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ScrollHeaderProps {
  sticky?: boolean
}

const navItems = [
  { href: "/", label: "Anasayfa", num: "01" },
  { href: "/hakkimizda", label: "Stüdyo", num: "02" },
  { href: "/hizmetler", label: "Neler Yapıyoruz?", num: "03" },
  { href: "/iletisim", label: "İletişim", num: "04" },
]

// Minimal hamburger → X ikonu (3 çizgi)
function MenuIcon({ open }: { open: boolean }) {
  return (
    <div
      style={{
        width: "22px",
        height: "16px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Üst çizgi */}
      <span style={{
        display: "block",
        height: "1.5px",
        background: "currentColor",
        transformOrigin: "center",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
        transform: open ? "translateY(7px) rotate(45deg)" : "none",
      }} />
      {/* Orta çizgi */}
      <span style={{
        display: "block",
        height: "1.5px",
        background: "currentColor",
        transformOrigin: "center",
        transition: "opacity 0.15s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: open ? 0 : 1,
        transform: open ? "scaleX(0)" : "none",
        width: open ? "100%" : "70%",
      }} />
      {/* Alt çizgi */}
      <span style={{
        display: "block",
        height: "1.5px",
        background: "currentColor",
        transformOrigin: "center",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
        transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
      }} />
    </div>
  )
}

function ScrollHeader({ sticky = false }: ScrollHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Menü açıkken scroll kilitle
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Sayfa değişince menüyü kapat
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  if (!mounted) return null

  return (
    <>
      {/* TEK HEADER — mobilde logo ortada hamburger yok, desktopda logo sol hamburger sağ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: isMobile ? "1.2rem 1.5rem" : "1.6rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "space-between",
          background: "transparent",
          transition: "opacity 0.5s ease",
          opacity: scrolled && !menuOpen ? (isMobile ? 0.7 : 0.6) : 1,
          mixBlendMode: "difference",
          color: "#ffffff",
          fontFamily: "'Poppins', system-ui, sans-serif",
        }}
        onMouseEnter={e => { if (!menuOpen && !isMobile) (e.currentTarget as HTMLElement).style.opacity = "1" }}
        onMouseLeave={e => { if (!menuOpen && !isMobile) (e.currentTarget as HTMLElement).style.opacity = scrolled ? "0.6" : "1" }}
      >
        {/* Logo image */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            opacity: 0.95,
            transition: "opacity 0.3s ease",
            flexShrink: 0,
            textDecoration: "none",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.95")}
        >
          <img
            src="/images/retto-logo.png"
            alt="Retto Creative"
            style={{
              height: isMobile ? "26px" : "30px",
              width: "auto",
              display: "block",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>

        {/* Hamburger — sadece desktop */}
        {!isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "inherit",
              padding: "8px",
              transition: "opacity 0.3s ease",
              opacity: 0.85,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.85")}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        )}
      </header>

      {/* FULLSCREEN OVERLAY MENU */}
      <div
        style={{
          display: "flex",
          position: "fixed",
          inset: 0,
          zIndex: 190,
          background: "#000000",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 10vw",
          transition: "opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.22s ease",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {/* Nav items */}
        <nav style={{ width: "100%" }}>
          {navItems.map((item, i) => (
            <div
              key={item.href}
              style={{
                overflow: "hidden",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Link
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.5rem",
                  padding: "1.2rem 0",
                  textDecoration: "none",
                  color: pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "#ffffff"
                    : "rgba(255,255,255,0.35)",
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  transform: menuOpen ? "translateY(0)" : "translateY(60%)",
                  transitionDelay: menuOpen ? `${i * 0.03}s` : "0s",
                  transitionProperty: "color, transform",
                  transitionDuration: "0.2s, 0.28s",
                  transitionTimingFunction: "ease, cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#ffffff"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateX(8px)"
                }}
                onMouseLeave={e => {
                  const isAct = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  ;(e.currentTarget as HTMLElement).style.color = isAct ? "#ffffff" : "rgba(255,255,255,0.35)"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateX(0)"
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    opacity: 0.4,
                    minWidth: "2rem",
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "10vw",
            right: "10vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.25s ease 0.15s",
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              margin: 0,
            }}>
              SONRASI DÖNÜŞÜM
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}>
              hello@rettocreative.net
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(ScrollHeader)
