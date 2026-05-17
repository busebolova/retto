"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react"
import Link from "next/link"
import ScrollHeader from "@/components/scroll-header"
import Footer from "@/components/footer"

export default function DionzProjectPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <ScrollHeader sticky />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Project Info */}
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/projelerimiz"
                className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Tüm Projeler
              </Link>

              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">DIONZ</h1>

              <div className="flex items-center gap-2 mb-6">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400">2024</span>
                <Tag size={16} className="text-gray-400 ml-2" />
                <span className="text-sm text-gray-400">Marka Kimliği & Web</span>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Dijital pazarlama ajansı DIONZ için geliştirdiğimiz marka kimliği ve web sitesi tasarımı projesi.
                Modern, dinamik ve teknolojik bir yaklaşımla markanın dijital dünyada güçlü bir şekilde
                konumlandırılmasını sağladık.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Web Tasarım</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Marka Kimliği</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Dijital</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">UI/UX</span>
              </div>

              <div className="border-t border-gray-800 pt-6 mt-6">
                <h3 className="text-xl text-white mb-4">Proje Kapsamı</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    Logo ve marka kimliği tasarımı
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    Responsive web sitesi tasarımı
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    Kullanıcı arayüzü ve deneyimi tasarımı
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    Dijital marka varlıkları
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Project Images */}
            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/dionz-project.jpeg" alt="DIONZ Project" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl text-white mb-4">Marka Hikayesi</h3>
              <p className="text-gray-300 leading-relaxed">
                DIONZ, dijital pazarlama dünyasında yenilikçi çözümler sunan genç ve dinamik bir ajans. Markanın ismi,
                dijital inovasyonu temsil eden bir kelime oyunundan geliyor. Marka kimliği tasarımında, teknolojik
                altyapıyı ve yaratıcı yaklaşımı vurgulamak için modern ve minimalist bir tasarım dili kullandık.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl text-white mb-4">Tasarım Yaklaşımı</h3>
              <p className="text-gray-300 leading-relaxed">
                Web sitesi tasarımında kullanıcı deneyimini ön planda tuttuk. Koyu renk paleti üzerine canlı aksan
                renklerle dinamik bir görünüm elde ettik. Responsive tasarım sayesinde tüm cihazlarda kusursuz çalışan
                bir dijital deneyim yarattık. Animasyonlar ve interaktif elementlerle kullanıcı deneyimini
                zenginleştirdik.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Projenizi Hayata Geçirelim</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Markanız için benzersiz bir hikaye yaratmaya hazır mısınız? Birlikte çalışarak vizyonunuzu gerçeğe
              dönüştürelim.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-light tracking-wide hover:bg-gray-100 transition-colors duration-300"
            >
              Projeni Başlat
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
