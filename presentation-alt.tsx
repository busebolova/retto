"use client"

import { useRef } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"
import { Lightbulb, Target, Zap, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleAnimation from "./vercel-logo-particles"
import TypewriterEffect from "./components/typewriter-effect"
import Image from "next/image"
import Link from "next/link"
import {
  HeadingStyle1,
  HeadingStyle2,
  HeadingStyle3,
  HeadingStyle4,
  HeadingStyle5,
  HeadingStyle8,
  HeadingStyle10,
} from "./components/heading-styles"

// Header component
const Header = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-header rounded-full py-4 px-8 flex items-center justify-between min-w-[800px]">
        <div className="flex items-center space-x-10">
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-normal text-sm tracking-wider"
          >
            ANASAYFA
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-normal text-sm tracking-wider"
          >
            HİZMETLER
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-normal text-sm tracking-wider"
          >
            PROJELER
          </Link>
        </div>

        <div className="mx-10">
          <Image src="/images/retto-logo.png" alt="Retto Ajans" width={140} height={40} className="h-8 w-auto" />
        </div>

        <div className="flex items-center space-x-10">
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-normal text-sm tracking-wider"
          >
            EKİBİMİZ
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-normal text-sm tracking-wider"
          >
            BLOG
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-normal text-sm tracking-wider"
          >
            İLETİŞİM
          </Link>
        </div>
      </div>
    </div>
  )
}

// Animated section component
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center p-8 ${className}`}
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
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section with Particles */}
      <section className="relative h-screen w-full">
        <ParticleAnimation />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Agency Introduction - Style 2: Gradient Text */}
      <AnimatedSection>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <HeadingStyle2>Potansiyeli ortaya çıkarıyoruz.</HeadingStyle2>
          </div>

          <div className="bg-gray-900/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)] mb-12">
            <p className="text-xl md:text-2xl text-center text-gray-300 font-normal">
              Geleneksel reklam anlayışını yıkıp, markanızı dijital dünyada öne çıkaran yaratıcı çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-12 w-12 text-gray-400" />,
                title: "Yaratıcı Stratejiler",
                description: "Sıradışı fikirlerle markanızı öne çıkarın",
              },
              {
                icon: <Target className="h-12 w-12 text-gray-400" />,
                title: "Hedef Odaklı",
                description: "Doğru kitleye, doğru zamanda ulaşın",
              },
              {
                icon: <Zap className="h-12 w-12 text-gray-400" />,
                title: "Hızlı Çözümler",
                description: "Rekabette öne geçmenizi sağlayın",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)] flex items-start"
              >
                <div className="mr-6 relative">
                  {item.icon}
                  <div className="absolute -inset-2 bg-gray-500/20 rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-300">{item.title}</h3>
                  <p className="text-gray-300 font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section - Style 8: Minimal with Dot */}
      <AnimatedSection className="bg-black/80">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <HeadingStyle8>Hizmetlerimiz</HeadingStyle8>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              {[
                "Dijital Pazarlama & Sosyal Medya Yönetimi",
                "Marka Kimliği & Görsel Tasarım",
                "Web Tasarım & Geliştirme",
                "İçerik Üretimi & Video Prodüksiyon",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/20 backdrop-blur-md p-6 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]"
                >
                  <p className="text-xl text-gray-300 font-normal">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-900/20 backdrop-blur-md rounded-xl border border-gray-700/30 p-8 text-center">
                  <Users className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-medium mb-4 text-gray-300">Ekibimiz</h3>
                  <p className="text-gray-300 font-normal">
                    Yaratıcı tasarımcılar, stratejik düşünen pazarlamacılar ve teknik uzmanlardan oluşan{" "}
                    <span className="italic">dinamik ekibimiz</span>
                  </p>
                </div>
                <div className="absolute inset-0 bg-gray-500/10 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section - Style 5: Split Style */}
      <AnimatedSection>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <HeadingStyle5 firstWord="Adım" restWords="1: Analiz & Strateji" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="bg-gray-900/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]">
                <div className="relative max-w-[280px] mx-auto">
                  <Target className="h-48 w-48 text-gray-400 mx-auto" />
                  <div className="absolute inset-0 bg-gray-500/5 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex flex-col gap-6">
                {[
                  "Markanızın mevcut durumunu detaylı analiz ediyoruz",
                  "Hedef kitlenizi ve rakiplerinizi inceliyoruz",
                  "Size özel yaratıcı strateji geliştiriyoruz",
                  "Ölçülebilir hedefler belirliyoruz",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/20 backdrop-blur-md p-6 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]"
                  >
                    <p className="text-xl text-gray-300 font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Implementation Section - Style 3: Elegant with Line */}
      <AnimatedSection className="bg-black/80">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <HeadingStyle3>Adım 2: Uygulama</HeadingStyle3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              {[
                "Yaratıcı tasarımlar ve içerikler üretiyoruz",
                "Dijital platformlarda kampanyalarınızı yayınlıyoruz",
                "Sürekli optimizasyon yapıyoruz",
                "Gerçek zamanlı raporlama sağlıyoruz",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/20 backdrop-blur-md p-6 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]"
                >
                  <p className="text-xl text-gray-300 font-normal">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-900/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]">
                <div className="relative max-w-[280px] mx-auto">
                  <Zap className="h-48 w-48 text-gray-400 mx-auto" />
                  <div className="absolute inset-0 bg-gray-500/5 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Results Section - Style 4: Bold with Background */}
      <AnimatedSection>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <HeadingStyle4>Adım 3: Sonuçlar</HeadingStyle4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="bg-gray-900/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]">
                <div className="relative max-w-[280px] mx-auto">
                  <TrendingUp className="h-48 w-48 text-gray-400 mx-auto" />
                  <div className="absolute inset-0 bg-gray-500/5 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex flex-col gap-6">
                {[
                  "Marka bilinirliğinizde artış sağlıyoruz",
                  "Satışlarınızı ve müşteri sayınızı artırıyoruz",
                  "Dijital varlığınızı güçlendiriyoruz",
                  "ROI'nizi maksimize ediyoruz",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/20 backdrop-blur-md p-6 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)]"
                  >
                    <p className="text-xl text-gray-300 font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Stories - Style 10: Bracket Highlight */}
      <AnimatedSection className="bg-black/80">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <HeadingStyle10>Başarı Hikayeleri</HeadingStyle10>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Ticaret Markası",
                metric: "%300",
                description: "Satış Artışı",
                detail: "6 aylık dijital pazarlama kampanyası ile online satışlarda 3 kat artış sağladık",
              },
              {
                title: "Restoran Zinciri",
                metric: "%250",
                description: "Sosyal Medya Etkileşimi",
                detail: "Yaratıcı içerik stratejisi ile sosyal medya takipçi sayısını 5 kat artırdık",
              },
              {
                title: "Teknoloji Startup",
                metric: "%400",
                description: "Marka Bilinirliği",
                detail: "Entegre pazarlama kampanyası ile marka farkındalığını 4 kat artırdık",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-gray-900/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/30 hover:shadow-[0_0_15px_rgba(150,150,150,0.3)] text-center"
              >
                <h3 className="text-xl font-medium mb-4 text-gray-300">{story.title}</h3>
                <div className="text-5xl font-bold text-gray-400 mb-2">{story.metric}</div>
                <p className="text-gray-300 font-medium mb-4">{story.description}</p>
                <p className="text-gray-400 text-sm font-normal">{story.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Closing/CTA Section - Style 1: Clean Underline */}
      <AnimatedSection>
        <div className="max-w-5xl w-full text-center">
          <div>
            <img src="/images/retto-logo.png" alt="Retto Ajans" className="h-32 md:h-40 mx-auto mb-12" />
          </div>

          <div className="mb-8">
            <HeadingStyle1>
              Markanızı geleceğe
              <br />
              <span className="italic">taşıyalım.</span>
            </HeadingStyle1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-normal">
            Ezber bozan yaratıcı çözümlerle markanızı dijital dünyada zirveye çıkarın
          </p>

          <div className="mb-8">
            <TypewriterEffect
              text="bu sizin rettonuz!"
              delay={1000}
              speed={100}
              className="text-2xl md:text-3xl font-normal text-gray-400 tracking-wide"
            />
          </div>

          <div>
            <Button
              size="lg"
              className="bg-gray-600/80 hover:bg-gray-700 text-white px-10 py-6 text-2xl rounded-full backdrop-blur-sm hover:shadow-[0_0_15px_rgba(150,150,150,0.5)] font-normal tracking-wide"
            >
              Hemen Başlayalım
            </Button>
          </div>

          <div className="mt-16">
            <p className="text-gray-500 text-sm font-normal">© 2024 Retto Ajans. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
