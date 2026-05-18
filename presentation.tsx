"use client"

import { useRef } from "react"
import React from "react"
import { useInView } from "framer-motion"
import dynamic from "next/dynamic"

const HeroScrollAnimation = dynamic(() => import("./components/hero-scroll-animation"), { ssr: false })
const Preloader = dynamic(() => import("./components/preloader"), { ssr: false })
import ScrollHeader from "./components/scroll-header"
import ModernServicesGrid from "./components/modern-services-grid"
import ModernFounderSection from "./components/modern-founder-section"
import PreloadCriticalImages from "./components/preload-critical-images"
import ManualInstagramFeed from "./components/manual-instagram-feed"
import YouTubePhoneMockup from "./components/youtube-phone-mockup"
import Footer from "./components/footer"
import MobileBottomNav from "./components/mobile-bottom-nav"

// Animated section component
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center p-4 md:p-8 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      {children}
    </div>
  )
}

export default function ScrollablePage() {
  return (
    <div
      className="bg-white text-black font-sans"
    >
      {/* Sinematik Preloader */}
      <Preloader />

      {/* Preload Critical Images */}
      <>
        <PreloadCriticalImages />
        <ScrollHeader />
      </>

      {/* Hero Section with Canvas Scroll Animation - 200vh scroll alanı */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <HeroScrollAnimation />
      </div>

      {/* About Us - Story Section */}
      <AnimatedSection className="bg-white text-black">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-medium mb-4 text-black tracking-tight">
              Hakkımızda<span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left side - Phone Mockup with Video */}
            <div className="flex justify-center group order-1 lg:order-1">
              <YouTubePhoneMockup />
            </div>

            {/* Right side - Story Content */}
            <div className="h-full flex flex-col justify-between order-2 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-black">
                    Bir Hikaye, Bir Dönüşüm
                  </h3>
                  <div className="w-16 h-[1px] bg-gray-500 mt-2 mb-6"></div>
                </div>

                <div className="space-y-6 text-base md:text-lg leading-relaxed">
                  <p className="text-gray-600 font-light">
                    Dijital dünyada iz bırakma hayaliyle başlayan bu yolculuk, zamanla{" "}
                    <span className="text-black italic">çok daha büyük bir vizyona</span> dönüştü. Başlangıçta sadece
                    tasarımla sınırlı görünen bu alan, bugün bizim için bir ifade biçimi, bir yaratım alanı haline
                    geldi. Çünkü biliyoruz ki; gerçek başarı, hikâyenin kendisinde gizli.
                  </p>

                  <div className="pt-4">
                    <h4 className="text-xl md:text-2xl font-light mb-4 text-black">Retto: Bir Yaratım Dünyası</h4>
                  </div>

                  <p className="text-gray-600 font-light">
                    Retto Creative, sadece bir ajans değil,{" "}
                    <span className="text-black">fikirlerin sanatla buluştuğu bir yaratım dünyasıdır.</span> Markaların
                    ruhunu anlayarak, onları dijitalde bir sanat eserine dönüştürmeyi hedefliyoruz.
                  </p>

                  <p className="text-gray-600 font-light">
                    Kreatif içeriklerden etkileyici stratejilere, görsel tasarımdan dijital varlık yönetimine kadar her
                    adımı özenle planlıyor, <span className="text-black italic">detaylarda saklı güce inanıyoruz.</span>
                  </p>

                  <p className="text-gray-600 font-light">
                    Hayal gücünü stratejiyle birleştiriyor, markaların hedef kitleleriyle en güçlü bağları kurmasını
                    sağlıyoruz. İlham verici işler üretmek, fark yaratmak ve dijitalde sürdürülebilir bir etki yaratmak
                    için buradayız.
                  </p>
                </div>

                <div className="pt-4">
                  <div className="bg-gray-100 backdrop-blur-md rounded-xl p-6 border border-gray-200">
                    <p className="text-gray-500 text-sm font-light italic text-center">
                      "Retto Creative ile tanışın. Çünkü iyi fikirler değil, doğru anlatılan hikâyeler dünyayı
                      değiştirir."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section - Modern Grid */}
      <ModernServicesGrid />

      {/* Founder Section - New Modern Design */}
      <ModernFounderSection />

      {/* Manuel Instagram Feed Section */}
      <ManualInstagramFeed />

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
