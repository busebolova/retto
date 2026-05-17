"use client"

import { X } from "lucide-react"
import { motion } from "framer-motion"

interface ModalProps {
  onClose: () => void
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-blue-500/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="p-8 md:p-12 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Ola Studio</h1>
                <p className="text-blue-300 font-light">Yazılım & Tasarım Ekibi</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Retto Creative'in yenilikçi yazılım geliştirme ve dijital tasarım stüdyosu
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          {/* About Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                Kimiz?
              </h2>
              <p className="text-gray-300 leading-relaxed font-light">
                Ola Studio, dijital dönüşümün merkezinde yer alan, teknoloji ve yaratıcılığı birleştiren bir yazılım
                ekibidir. Web uygulamaları, mobil çözümler ve kompleks dijital sistemler geliştirerek markaların
                geleceğini şekillendiriyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                Uzmanlaşmamız
              </h2>
              <ul className="space-y-2 text-gray-300 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Modern web uygulamaları ve SPA geliştirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Next.js, React ve TypeScript ile scalable çözümler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>UI/UX tasarım ve frontend geliştirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>API geliştirme ve backend entegrasyonları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Performans optimizasyonu ve sistem mimarisi</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                Değerlerimiz
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-cyan-300 font-semibold mb-1">İnovasyon</p>
                  <p className="text-sm text-gray-400 font-light">Teknolojinin sınırlarını zorluyoruz</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-cyan-300 font-semibold mb-1">Kalite</p>
                  <p className="text-sm text-gray-400 font-light">Her detayda mükemmelliği arıyoruz</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-cyan-300 font-semibold mb-1">İşbirliği</p>
                  <p className="text-sm text-gray-400 font-light">Vizyonunuzu gerçeğe dönüştürüyoruz</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <p className="text-cyan-300 font-semibold mb-1">Hız</p>
                  <p className="text-sm text-gray-400 font-light">Deadline'ı tutup kaliteyi koruyoruz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          {/* CTA Section */}
          <div className="space-y-4">
            <p className="text-gray-300 font-light">
              Yazılım ekibimiz ile çalışmak için iletişime geçin. Projenizi birlikte hayata geçirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://olastudio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
              >
                Ola Studio Sayfasını Ziyaret Et
              </a>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-blue-500/50 text-gray-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
