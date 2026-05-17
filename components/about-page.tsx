"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// Team member interface
interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  expertise: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Buse Bolova",
    role: "Kurucu & Kreatif Direktör",
    description:
      "Retto Creative'in vizyoner kurucusu. Yaratıcılık ve stratejinin mükemmel birleşimini sağlayarak markaların dijital dünyada iz bırakmasını sağlıyor. Her projede detaylara olan tutkusu ve minimalist yaklaşımıyla fark yaratıyor.",
    image: "/images/buse-bolova-professional.jpg",
    expertise: ["Marka Stratejisi", "Kreatif Yönetim", "UI/UX Tasarım", "Görsel Kimlik"],
  },
  {
    name: "Pelin Kartal",
    role: "Ortak & Sosyal Medya Yöneticisi",
    description:
      "Dijital platformlarda markaların sesini güçlendiren yaratıcı stratejist. Sosyal medya trendlerini yakından takip ederek, markaların hedef kitleleriyle güçlü bağlar kurmasını sağlıyor. İçerik stratejisi ve topluluk yönetiminde uzman.",
    image: "/images/pelin-kartal.png",
    expertise: ["Sosyal Medya Stratejisi", "İçerik Planlama", "Topluluk Yönetimi", "Dijital Pazarlama"],
  },
]

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f3a] to-[#0f1324] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <div className="w-8 h-8 rounded-full bg-blue-500" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              Ola Studio
              <span className="text-blue-400">.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">Yazılım & Tasarım Ekibi</p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Retto Creative'in yenilikçi yazılım geliştirme ve dijital tasarım stüdyosu
            </p>
          </AnimatedSection>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-blue-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-light">Kimiz?</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ola Studio, dijital dönüşümün merkezinde yer alan, teknoloji ve yaratıcılığı birleştiren bir yazılım
                ekibidir. Web uygulamaları, mobil çözümler ve kompleks dijital sistemler geliştirerek markaların
                geleceğini şekillendiriyoruz.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-blue-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-light">Uzmanlaşmamız</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Modern web uygulamaları ve SPA geliştirme",
                  "Next.js, React ve TypeScript ile scalable çözümler",
                  "UI/UX tasarım ve frontend geliştirme",
                  "API geliştirme ve backend entegrasyonları",
                  "Responsive ve performans odaklı tasarım",
                  "Dijital ürün stratejisi ve danışmanlık",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                Ekibimiz<span className="text-blue-400">.</span>
              </h2>
              <p className="text-gray-400 text-lg">Yaratıcılığı teknoloji ile buluşturan ekip</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={0.2 * (index + 1)}>
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name}&size=400&background=1a1f3a&color=ffffff`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a] via-[#1a1f3a]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 relative -mt-20">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-light mb-2">{member.name}</h3>
                      <p className="text-blue-400 text-sm uppercase tracking-wider">{member.role}</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{member.description}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                Değerlerimiz<span className="text-blue-400">.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yenilikçi Yaklaşım",
                description: "Sürekli gelişen teknolojileri takip ederek, en güncel çözümleri sunuyoruz.",
              },
              {
                title: "Kalite Odaklı",
                description: "Her projede mükemmeliyeti hedefleyerek, detaylara önem veriyoruz.",
              },
              {
                title: "İşbirliği",
                description: "Müşterilerimizle güçlü ortaklıklar kurarak, birlikte büyüyoruz.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={0.2 * (index + 1)}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Birlikte Çalışalım</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Projenizi hayata geçirmek için bizimle iletişime geçin. Dijital dönüşüm yolculuğunuzda yanınızdayız.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center px-8 py-3 bg-white text-[#1a1f3a] rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
