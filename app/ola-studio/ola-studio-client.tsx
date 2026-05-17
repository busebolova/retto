"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollHeader from "@/components/scroll-header"
import MobileBottomNav from "@/components/mobile-bottom-nav"

export default function OlaStudioClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-slate-900 text-white">
      <ScrollHeader sticky />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Logo Circle */}

            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Ola Studio</h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Dijital dünyada fark yaratan tasarımlar ve güçlü teknolojik çözümler üretme tutkusuyla kuruldu. Yaratıcı
              tasarımcılar ve deneyimli geliştiricilerden oluşan ekibimiz, her projeyi benzersiz bir hikaye olarak
              görür.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Hizmetlerimiz</h2>
            <p className="text-white/60">Web tasarımından mobil uygulamalara, geniş bir yelpazede çözümler</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Web Tasarımı",
                description: "Modern ve kullanıcı odaklı web arayüzleri tasarlıyoruz",
              },
              {
                title: "Mobil Uygulamalar",
                description: "iOS ve Android platformları için native uygulamalar geliştiriyoruz",
              },
              {
                title: "Performans Optimizasyonu",
                description: "Hızlı, ölçeklenebilir ve güvenli dijital çözümler sunuyoruz",
              },
              {
                title: "Marka Kimliği",
                description: "Markaların dijital varlığını güçlendiren tasarımlar yapıyoruz",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 text-cyan-300">★</div>
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Temel Değerlerimiz</h2>
            <p className="text-white/60">
              Çalışma prensiplerimizi şekillendiren ve her projede rehberimiz olan değerler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500/50 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Tasarım Felsefemiz</h3>
                <p className="text-white/70 text-sm">
                  Her projeyi benzersiz bir sanat eseri olarak görüyor, kullanıcı deneyimini ön planda tutarak estetik
                  ve işlevselliği mükemmel şekilde birleştiriyoruz.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500/50 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Yaratıcı Yaklaşımımız</h3>
                <p className="text-white/70 text-sm">
                  Her müşterinin hikayesini anlayarak, marka kimliğini güçlendiren özgün ve etkili tasarım çözümleri
                  geliştiriyoruz.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500/50 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Teknoloji Uzmanlığımız</h3>
                <p className="text-white/70 text-sm">
                  En güncel teknolojiler ve geliştirme metodolojileri ile performanslı, ölçeklenebilir ve güvenli
                  dijital çözümler üretiyoruz.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500/50 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Vizyonumuz</h3>
                <p className="text-white/70 text-sm">
                  Dijital dönüşümde öncü olan, markaları geleceğe taşıyan yenilikçi tasarım ve geliştirme stüdyosu
                  olmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Rakamlarla Ola Studio</h2>
            <p className="text-white/60">Başarılı projelerimiz ve müşteri memnuniyetimizi gösteren rakamlar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "300+", label: "Tamamlanan Proje" },
              { number: "150+", label: "Mutlu Müşteri" },
              { number: "10+", label: "Yıl Deneyim" },
              { number: "98%", label: "Müşteri Memnuniyeti" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20"
              >
                <div className="text-3xl md:text-4xl font-light text-cyan-300 mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4">Geleceğin Dijital Çözümleri</h2>
          <p className="text-lg text-white/70 mb-8">
            Retto Creative'in yazılım ekibi olarak, markaların dijital dönüşüm yolculuğunda rehberiniziz
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.olastudio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium text-sm"
            >
              <span className="mr-2">olastudio.co'yu ziyaret et</span>
              <ArrowRight size={16} />
            </a>

            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm"
            >
              <span className="mr-2">İletişime geç</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <MobileBottomNav />
    </div>
  )
}
