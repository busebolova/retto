"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function MobileHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 md:hidden">
      <div className="flex justify-center px-4 py-3">
        <motion.div
          className="glass-header-enhanced rounded-full py-2 px-6 flex items-center justify-center transition-all duration-300 bg-black/90 border-white/20 border backdrop-blur-xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center">
            <img src="/images/retto-logo.png" alt="Retto Creative" width={120} height={30} className="h-8 w-auto" />
            <div className="hidden text-white font-light text-lg tracking-wider">RETTO</div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
