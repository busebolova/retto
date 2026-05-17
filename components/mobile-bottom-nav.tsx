"use client"

import { useState, useEffect, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "ANASAYFA" },
  { href: "/hakkimizda", label: "STÜDYO" },
  { href: "/hizmetler", label: "NELER YAPIYORUZ?" },
  { href: "/iletisim", label: "İLETİŞİM" },
]

function MobileBottomNav() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/hizmetler") return pathname === "/hizmetler" || pathname.startsWith("/hizmetler/")
    return pathname === href || pathname.startsWith(href + "/")
  }

  if (!mounted) return null

  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
      }}
    >
      <div
        style={{
          background: "rgba(6, 6, 6, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 -8px 32px rgba(0,0,0,0.4)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {navItems.map((item, index) => {
            const active = isActive(item.href)
            return (
              <div key={item.href} style={{ display: "flex", flex: 1, alignItems: "stretch" }}>
                {/* Separator — ilk item hariç */}
                {index > 0 && (
                  <div
                    style={{
                      width: "1px",
                      background: "rgba(255,255,255,0.06)",
                      alignSelf: "stretch",
                      margin: "10px 0",
                      flexShrink: 0,
                    }}
                  />
                )}
                <Link
                  href={item.href}
                  prefetch={true}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 4px",
                    fontSize: "9px",
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    textDecoration: "none",
                    color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                    position: "relative",
                    gap: "6px",
                  }}
                >
                  {/* Active top indicator */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: active ? "20px" : "0px",
                      height: "1px",
                      background: "rgba(255,255,255,0.6)",
                      borderRadius: "0 0 2px 2px",
                      transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                  {item.label}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(MobileBottomNav)
