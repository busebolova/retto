import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#000000" }}>
      <div className="text-center px-4">
        <h1 className="text-6xl font-light text-white mb-6">404</h1>
        <h2 className="text-2xl font-light text-gray-300 mb-8">Proje Bulunamadı</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
        <Link
          href="/projelerimiz"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-light hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          Projelerimize Dön
        </Link>
      </div>
    </div>
  )
}
