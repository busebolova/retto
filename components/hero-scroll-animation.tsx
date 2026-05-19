"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ThreeModel = dynamic(() => import("./three-model"), { ssr: false })

export default function HeroScrollAnimation() {
  const outerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const canvasWrapRef = useRef<HTMLDivElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const h1 = h1Ref.current
    const textEl = textRef.current
    const canvasWrap = canvasWrapRef.current

    if (!outer || !h1 || !textEl || !canvasWrap) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outer,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    })

    const bgText = bgTextRef.current

    tl.to([h1, canvasWrap], {
      y: -80,
      opacity: 0,
      duration: 1.5,
    })
    .to(bgText, {
      opacity: 0,
      duration: 0.8,
    }, "<0.3")
    .to(textEl, {
      opacity: 1,
      scale: 1,
      duration: 1,
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={outerRef}
      style={{
        height: "400vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          background: "#fafaf8",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          isolation: "isolate",
        }}
      >
        {/* Film grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            pointerEvents: "none",
            opacity: 0.025,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
            mixBlendMode: "multiply",
          }}
        />

        {/* h1 ref — GSAP animasyonu için gerekli, görünmez */}
        <h1
          ref={h1Ref}
          style={{
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Arka plan logo — tam ekran geniş, scroll ile kayboluyor */}
        <div
          ref={bgTextRef}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            pointerEvents: "none",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/retto-logo.png"
            alt=""
            aria-hidden="true"
            style={{
              width: "110vw",
              maxWidth: "none",
              height: "auto",
              display: "block",
              filter: "brightness(0)",
              opacity: 0.08,
            }}
          />
        </div>

        {/* 3D model - tam ortada */}
        <div
          ref={canvasWrapRef}
          style={{
            position: "absolute",
            width: "min(82vw, 82vh)",
            height: "min(82vw, 82vh)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 6,
            willChange: "transform, opacity",
          }}
        >
          <ThreeModel />
        </div>

        {/* Scroll sonrası beliren metin */}
        <p
          ref={textRef}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            width: "min(22ch, 90vw)",
            textAlign: "center",
            marginInline: "auto",
            fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            opacity: 0,
            color: "#000000",
            zIndex: 10,
            pointerEvents: "none",
            transform: "translateY(-50%) scale(0.9)",
            fontFamily: "'Poppins', system-ui, sans-serif",
          }}
        >
          Sıradan markalara uygun değil.
        </p>
      </div>
    </div>
  )
}