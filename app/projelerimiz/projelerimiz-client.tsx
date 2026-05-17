"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import ScrollHeader from "@/components/scroll-header"
import Footer from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "To Be",
    category: "Sanat + Street Food",
    description: "Klasik sanat ve street food konseptini birleştiren yaratıcı marka kimliği tasarımı",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portolio5-MDAausDEEb2Vk6AlGq55Km0rUFzvgN.png",
    tags: ["Branding", "Social Media", "Dizayn"],
    year: "2024",
    slug: "to-be",
  },
  {
    id: 2,
    title: "Espresso Lab",
    category: "Kahve Kültürü",
    description: "Kahve kültürünün yansıtan sıcak ve çağdaş sosyal medya yönetimi stratejisi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portolio1.png-Ebj2nVZfnT9QdM5wUekaYYu2P3TSQU.jpeg",
    tags: ["Social Media", "Content", "Pazarlama"],
    year: "2024",
    slug: "espresso-lab",
  },
  {
    id: 3,
    title: "Kaci Coffee",
    category: "Özel Kahve",
    description: "Premium kahve markası için sofistike marka kimliği ve sosyal medya tasarımı",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portolio6.png-8mxM17Gux4N8cjes0R53cxvZpQO6q4.jpeg",
    tags: ["Branding", "Packaging", "Kimlik"],
    year: "2024",
    slug: "kaci-coffee",
  },
  {
    id: 4,
    title: "Minimal Pub",
    category: "Restoran Kimliği",
    description: "Minimal pub konsepti için minimalista tasarım ve vizüel kimlik çalışması",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portolio4.png-UWfcqDiFlVwAwGXDee7IPHEFGHFDXi.jpeg",
    tags: ["Branding", "Kimlik", "Tasarım"],
    year: "2024",
    slug: "minimal-pub",
  },
  {
    id: 5,
    title: "Nomads",
    category: "Komedi Etkinlikleri",
    description: "Komedi etkinlikleri ve sanatçı promosyonu için dinamik ve çekici kampanya tasarımı",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events.png-98u7Vl9LA3RWIO9vDiDWInkvo75HXm.jpeg",
    tags: ["Campaign", "Art Direction", "Etkinlik"],
    year: "2024",
    slug: "nomads",
  },
  {
    id: 6,
    title: "Sueno Mimarlık",
    category: "Mimarlık & Kimlik",
    description: "Mimarlık firması için kapsamlı marka kimliği ve web sitesi tasarımı",
    image: "/images/instagram/sueno-web.jpg",
    tags: ["Web Tasarım", "Logo Tasarım", "Mimarlık"],
    year: "2024",
    slug: "sueno-mimarlik",
  },
]

export default function ProjelerimizClient() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* Header */}
      <ScrollHeader sticky />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">Projelerimiz</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Markaların hikayelerini görsel dile dönüştürdüğümüz yaratıcı projelerimizi keşfedin. Her proje, benzersiz
              bir yaklaşım ve özenli bir tasarım süreci ile hayata geçirilmiştir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/projelerimiz/${project.slug}`}>
                  <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    {/* Project Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <ExternalLink size={16} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-400">{project.year}</span>
                        <Tag size={14} className="text-gray-400 ml-2" />
                        <span className="text-sm text-gray-400">{project.category}</span>
                      </div>

                      <h3 className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full font-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#000000" }}>
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
