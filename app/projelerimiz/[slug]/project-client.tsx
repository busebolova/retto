"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Tag,
  ExternalLink,
  Users,
  Clock,
  Award,
  Smartphone,
  Star,
  Download,
  TrendingUp,
  Palette,
  Type,
  Layers,
  Move,
  Gem,
  Crown,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ScrollHeader from "@/components/scroll-header"
import Footer from "@/components/footer"

import { projectsData } from "@/lib/projects"

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  const isGoyo = params.slug === "goyo"
  const isGumusay = params.slug === "gumusay"

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* Header */}
      <ScrollHeader />

      {/* Back Button */}
      <div className="pt-32 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/projelerimiz"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Projelerimize Dön</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-400">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-gray-400" />
                  <span className="text-gray-400">{project.category}</span>
                </div>
                {isGoyo && (
                  <div className="flex items-center gap-2">
                    <Smartphone size={16} className="text-gray-400" />
                    <span className="text-gray-400">iOS & Android</span>
                  </div>
                )}
                {isGumusay && (
                  <div className="flex items-center gap-2">
                    <Gem size={16} className="text-gray-400" />
                    <span className="text-gray-400">Premium</span>
                  </div>
                )}
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">{project.title}</h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">{project.description}</p>

              {/* Project Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Ekip</p>
                    <p className="text-white font-light">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Süre</p>
                    <p className="text-white font-light">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Müşteri</p>
                    <p className="text-white font-light">{project.client}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/10 text-white/80 text-sm rounded-full font-light">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={project.mainImage || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Elements */}
      {(isGoyo || isGumusay) && "brandElements" in project && (
        <section className="py-20 px-4" style={{ backgroundColor: "#161616" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-12 text-center">
                {isGumusay ? "Kurumsal Kimlik Elementleri" : "Marka Elementleri"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.brandElements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-white/5 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300 h-full flex flex-col">
                      <div className="mb-4 flex justify-center">{element.icon}</div>
                      <h3 className="text-xl font-light text-white mb-3">{element.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mt-auto">{element.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-20 px-4" style={{ backgroundColor: isGoyo || isGumusay ? "#000000" : "#161616" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-white mb-6">Meydan Okuma</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-white mb-6">Çözümümüz</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: isGoyo || isGumusay ? "#161616" : "#000000" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-12 text-center">
              {isGoyo ? "Marka Kimliği" : isGumusay ? "Kurumsal Materyaller" : "Proje Galerisi"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      {(isGoyo || isGumusay) && "designPrinciples" in project && (
        <section className="py-20 px-4" style={{ backgroundColor: "#000000" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-light text-white mb-12">Tasarım Prensipleri</h2>

              <div className="flex flex-wrap justify-center gap-4">
                {project.designPrinciples.map((principle, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-6 py-3 bg-white/10 text-white rounded-full font-light border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                  >
                    {principle}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-20 px-4" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-12 text-center">
              {isGoyo ? "Başarı Metrikleri" : "Sonuçlar"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/5 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300">
                    {isGoyo && (
                      <div className="mb-4">
                        {index === 0 && <Download className="w-8 h-8 text-white mx-auto" />}
                        {index === 1 && <TrendingUp className="w-8 h-8 text-white mx-auto" />}
                        {index === 2 && <Star className="w-8 h-8 text-white mx-auto" />}
                        {index === 3 && <Award className="w-8 h-8 text-white mx-auto" />}
                      </div>
                    )}
                    {isGumusay && (
                      <div className="mb-4">
                        {index === 0 && <TrendingUp className="w-8 h-8 text-white mx-auto" />}
                        {index === 1 && <Crown className="w-8 h-8 text-white mx-auto" />}
                        {index === 2 && <Star className="w-8 h-8 text-white mx-auto" />}
                        {index === 3 && <Gem className="w-8 h-8 text-white mx-auto" />}
                      </div>
                    )}
                    <p className="text-white font-light leading-relaxed">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-white mb-8">
              {isGoyo ? "Kullanılan Tasarım Araçları" : "Kullanılan Teknolojiler"}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-white/10 text-white rounded-full font-light border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              {isGoyo
                ? "Markanız İçin Hazır mısınız?"
                : isGumusay
                  ? "Premium Markanız İçin Hazır mısınız?"
                  : "Benzer Bir Proje İçin Hazır mısınız?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {isGoyo
                ? "Minimal ama etkileyici. Modern ama zamansız. Markanız için benzersiz bir tasarım dili yaratalım."
                : isGumusay
                  ? "Zarafet ve lüksü yansıtan kurumsal kimlik tasarımları ile markanızı öne çıkaralım."
                  : "Markanız için de benzersiz bir hikaye yaratmaya başlayalım."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-light tracking-wide hover:bg-gray-100 transition-colors duration-300"
              >
                {isGoyo ? "Markanı Başlat" : isGumusay ? "Premium Projen" : "Projeni Başlat"}
                <ExternalLink size={18} />
              </Link>
              <Link
                href="/projelerimiz"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-white/20 transition-colors duration-300"
              >
                Diğer Projeler
                <ArrowLeft size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
