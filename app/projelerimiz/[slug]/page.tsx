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

const projectsData = {
  "sueno-mimarlik": {
    id: 1,
    title: "Sueno Mimarlık",
    category: "Mimarlık & Kimlik",
    year: "2024",
    client: "Sueno Architecture",
    duration: "3 ay",
    team: "2 tasarımcı",
    description:
      "Mimarlık firması için kapsamlı marka kimliği ve web sitesi tasarımı projesi. Modern mimarlık anlayışını yansıtan minimal ve şık bir tasarım dili geliştirdik.",
    challenge:
      "Sueno Mimarlık, rekabetçi mimarlık sektöründe kendini farklılaştıracak güçlü bir marka kimliğine ihtiyaç duyuyordu. Hem kurumsal hem de yaratıcı bir görünüm yaratmak ana hedefti.",
    solution:
      "Minimalist tasarım prensiplerini mimarlık estetiğiyle birleştirerek, geometrik formlar ve temiz tipografi kullandık. Marka kimliği, web sitesi ve tüm kurumsal materyallerde tutarlı bir dil oluşturduk.",
    results: [
      "Marka bilinirliğinde %150 artış",
      "Web sitesi trafiğinde %200 artış",
      "Yeni müşteri kazanımında %80 artış",
      "Sosyal medya etkileşiminde %300 artış",
    ],
    tags: ["Web Tasarım", "Logo Tasarım", "Mimarlık", "Kimlik Tasarımı"],
    images: [
      "/images/instagram/sueno-web.jpg",
      "/images/instagram/sueno-logo.jpg",
      "/images/instagram/sueno-identity.jpg",
    ],
    mainImage: "/images/instagram/sueno-web.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Adobe Creative Suite"],
    link: "#",
  },
  "john-roy-brand": {
    id: 2,
    title: "John Roy Brand",
    category: "Marka Kimliği",
    year: "2024",
    client: "John Roy",
    duration: "2 ay",
    team: "2 tasarımcı",
    description:
      "Streetwear markası için logo tasarımı ve marka kimliği çalışması. Gençlerin beğenisini kazanacak modern ve cesur bir tasarım yaklaşımı benimsenmiştir.",
    challenge:
      "John Roy Brand, streetwear pazarında kendine özgü bir kimlik yaratmak ve genç hedef kitleye ulaşmak istiyordu. Marka, hem sokak kültürünü hem de kaliteli tasarımı yansıtmalıydı.",
    solution:
      "Bold tipografi, urban renkler ve sokak sanatından ilham alan görsel elementler kullandık. Logo tasarımında basitlik ve güçlü görsel etki yaratmayı hedefledik.",
    results: [
      "İlk koleksiyonda %90 satış oranı",
      "Instagram takipçilerinde %400 artış",
      "Marka bilinirliğinde %120 artış",
      "Müşteri memnuniyetinde %95 oran",
    ],
    tags: ["Logo Tasarım", "Marka Kimliği", "Packaging", "Streetwear"],
    images: [
      "/images/instagram/john-roy-branding.jpg",
      "/images/instagram/john-roy-tshirt.jpg",
      "/images/instagram/john-roy-hat.jpg",
    ],
    mainImage: "/images/instagram/john-roy-branding.jpg",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    link: "#",
  },
  "jmobley-coffee": {
    id: 3,
    title: "J.Mobley Coffee",
    category: "Packaging & Kimlik",
    year: "2024",
    client: "J.Mobley Coffee Co.",
    duration: "2.5 ay",
    team: "3 tasarımcı",
    description:
      "Kahve markası için packaging tasarımı ve marka kimliği. Premium kahve deneyimini yansıtan sofistike ve çekici bir tasarım dili geliştirilmiştir.",
    challenge:
      "J.Mobley Coffee, premium kahve pazarında kendini konumlandırmak ve ürünlerinin kalitesini packaging ile yansıtmak istiyordu. Raf görünürlüğü ve marka hatırlanabilirliği kritikti.",
    solution:
      "Minimal ama etkileyici packaging tasarımı, premium materyaller ve dikkat çekici renk paleti kullandık. Her ürün için benzersiz ama tutarlı bir görsel kimlik oluşturduk.",
    results: [
      "Raf satışlarında %180 artış",
      "Marka değerinde %150 artış",
      "Müşteri sadakatinde %85 artış",
      "Yeni distribütör anlaşmalarında %200 artış",
    ],
    tags: ["Packaging", "Logo Tasarım", "Kimlik Tasarımı", "Coffee"],
    images: [
      "/images/instagram/jmobley-packaging.jpg",
      "/images/instagram/jmobley-branding.jpg",
      "/images/instagram/jmobley-cup.jpg",
    ],
    mainImage: "/images/instagram/jmobley-packaging.jpg",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "3D Mockups"],
    link: "#",
  },
  goyo: {
    id: 4,
    title: "GOYO",
    category: "Marka Kimliği & UI/UX",
    year: "2024",
    client: "GOYO Technologies",
    duration: "6 ay",
    team: "4 tasarımcı + 2 developer",
    description:
      "Marka kimliği, yalnızca bir logo ya da renk paleti değil, hissettirdiği duygudur. Goyo'nun tasarım dilini oluştururken hareketin sürekliliği ve tipografinin esnekliği üzerine çalıştık.",
    challenge:
      "GOYO, aşırı doymuş sosyal medya pazarında kendini farklılaştırmak ve Gen Z kullanıcılarına özgün bir deneyim sunmak istiyordu. Mevcut platformlardan farklı, yaratıcılığı ön plana çıkaran bir yaklaşım gerekiyordu.",
    solution:
      "Minimal ama etkileyici. Modern ama zamansız. Bir markanın tasarım dili, verdiği söz kadar önemlidir. Bu prensiple hareket ederek, GOYO'nun marka kimliğini ve kullanıcı deneyimini oluşturduk.",
    results: [
      "İlk 3 ayda 500K+ indirme",
      "Günlük aktif kullanıcı %85 retention",
      "App Store'da 4.9/5 puan",
      "TechCrunch'ta 'En İyi Yeni Uygulama' ödülü",
    ],
    tags: ["Marka Kimliği", "UI/UX", "Mobil Tasarım", "Tipografi", "Hareket"],
    images: ["/images/goyo-detail-1.jpeg", "/images/goyo-detail-2.jpeg", "/images/goyo-detail-3.jpeg"],
    mainImage: "/images/goyo-detail-1.jpeg",
    technologies: ["Adobe Illustrator", "Figma", "After Effects", "Principle", "Lottie"],
    link: "#",
    features: [
      {
        title: "Minimal Tasarım",
        description: "Sade ama etkileyici görsel dil",
        icon: "✨",
      },
      {
        title: "Tipografik Esneklik",
        description: "Dinamik ve akışkan tipografi sistemi",
        icon: "🔤",
      },
      {
        title: "Hareket Sürekliliği",
        description: "Akıcı ve tutarlı animasyon dili",
        icon: "🌊",
      },
      {
        title: "Zamansız Estetik",
        description: "Trendlerden bağımsız görsel kimlik",
        icon: "⏱️",
      },
    ],
    brandElements: [
      {
        title: "Logo",
        description: "Hareketin sürekliliğini yansıtan dinamik logo tasarımı",
        icon: <Layers className="w-6 h-6 text-white" />,
      },
      {
        title: "Tipografi",
        description: "Esnekliği ve okunabilirliği dengeleyen özel font sistemi",
        icon: <Type className="w-6 h-6 text-white" />,
      },
      {
        title: "Renk Paleti",
        description: "Minimal ama etkileyici kontrast yaratan renk şeması",
        icon: <Palette className="w-6 h-6 text-white" />,
      },
      {
        title: "Hareket",
        description: "Marka kimliğini tamamlayan akıcı animasyon dili",
        icon: <Move className="w-6 h-6 text-white" />,
      },
    ],
    designPrinciples: [
      "Minimal ama Etkileyici",
      "Modern ama Zamansız",
      "Hareketin Sürekliliği",
      "Tipografik Esneklik",
      "Duygusal Bağ",
    ],
  },
  gumusay: {
    id: 5,
    title: "Gümüşay",
    category: "Kurumsal Kimlik",
    year: "2024",
    client: "Gümüşay Jewelry",
    duration: "4 ay",
    team: "3 tasarımcı",
    description:
      "Premium mücevher markası Gümüşay için kurumsal kimlik ve marka tasarımı. Zarafet ve lüksü yansıtan minimal ama güçlü bir görsel kimlik oluşturduk.",
    challenge:
      "Gümüşay, rekabetçi mücevher pazarında premium konumunu güçlendirmek ve hedef kitlesine lüks deneyimi hissettirmek istiyordu. Geleneksel zanaat ile modern tasarımı harmanlayan bir kimlik gerekiyordu.",
    solution:
      "Geometrik formlar ve minimal tipografi kullanarak, mücevherin zarafetini yansıtan sofistike bir marka kimliği geliştirdik. Siyah-gümüş renk paleti ile premium positioning'i destekledik.",
    results: [
      "Marka değerinde %200 artış",
      "Premium müşteri segmentinde %150 büyüme",
      "Sosyal medya etkileşiminde %300 artış",
      "Yeni mağaza açılışlarında %180 artış",
    ],
    tags: ["Kurumsal Kimlik", "Logo Tasarım", "Premium", "Mücevher"],
    images: ["/images/gumusay-branding.jpeg", "/images/gumusay-branding.jpeg", "/images/gumusay-branding.jpeg"],
    mainImage: "/images/gumusay-branding.jpeg",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    link: "#",
    brandElements: [
      {
        title: "Logo",
        description: "Geometrik formlarla zarafeti yansıtan minimal logo tasarımı",
        icon: <Gem className="w-6 h-6 text-white" />,
      },
      {
        title: "Tipografi",
        description: "Lüks ve okunabilirliği dengeleyen özel font sistemi",
        icon: <Type className="w-6 h-6 text-white" />,
      },
      {
        title: "Renk Paleti",
        description: "Siyah-gümüş premium renk şeması",
        icon: <Palette className="w-6 h-6 text-white" />,
      },
      {
        title: "Materyal",
        description: "Premium materyaller ve özel finishing teknikleri",
        icon: <Crown className="w-6 h-6 text-white" />,
      },
    ],
    designPrinciples: ["Premium Positioning", "Minimal Zarafet", "Geometrik Harmony", "Lüks Deneyim", "Zanaat Vurgusu"],
  },
}

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
