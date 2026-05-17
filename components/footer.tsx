"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/" className="inline-block mb-6">
                <img
                  src="/images/retto-logo.png"
                  alt="Retto Creative"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Ezber bozan reklam ajansı olarak markaların hikayelerini görsel dile dönüştürüyor, dijital dünyada öne
                çıkmalarını sağlıyoruz.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-light text-lg mb-6">Hızlı Linkler</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="text-gray-300 hover:text-white transition-colors">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-light text-lg mb-6">İletişim</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400" />
                  <a href="mailto:hello@rettocreative.net" className="text-gray-300 hover:text-white transition-colors">
                    hello@rettocreative.net
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <a href="tel:+905308330137" className="text-gray-300 hover:text-white transition-colors">
                    0530 833 0137
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-300">İzmir, Türkiye</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={16} className="text-gray-400" />
                  <a
                    href="https://instagram.com/rettocreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    @rettocreative
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">© 2025 Retto Creative. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik" className="text-gray-400 hover:text-white text-sm transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white text-sm transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
