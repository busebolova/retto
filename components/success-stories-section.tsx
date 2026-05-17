"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Award, Coffee, Music, Palette, Star } from "lucide-react"
import Image from "next/image"

export default function SuccessStoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeStory, setActiveStory] = useState(0)

  // Success stories data with real Blob images
  const successStories = [
    {
      id: "tobe",
      title: "To Be",
      category: "Marka Kimliği & Sosyal Medya",
      description: "Klasik sanat ve street food konseptini birleştiren yaratıcı marka kimliği tasarımı",
      shortDesc: "Sanat + Street Food",
      icon: <Award className="w-5 h-5" />,
      metrics: [
        { label: "Marka Tanınırlığı", value: "190%", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "Sosyal Etkileşim", value: "240%", icon: <Users className="w-3 h-3" /> },
        { label: "Müşteri Sadakati", value: "160%", icon: <Star className="w-3 h-3" /> },
      ],
      image:
        "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/ba%C5%9Far%C4%B1%20hikayeleri/portolio5-JH0H7QeKhznK5NJSS7ylwkCTqPiM9I.png",
      tags: ["Branding", "Social Media"],
    },
    {
      id: "espressolab",
      title: "Espresso Lab",
      category: "Sosyal Medya Yönetimi",
      description: "Kahve kültürünü yansıtan sıcak tonlarda içerik stratejisi ve görsel kimlik geliştirme",
      shortDesc: "Kahve Kültürü",
      icon: <Coffee className="w-5 h-5" />,
      metrics: [
        { label: "Etkileşim Artışı", value: "290%", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "Takipçi Artışı", value: "210%", icon: <Users className="w-3 h-3" /> },
        { label: "Satış Artışı", value: "175%", icon: <Star className="w-3 h-3" /> },
      ],
      image: "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/portolio1-RIxVujkgdpyEOII0LCky0Arr3ijclW.png",
      tags: ["Social Media", "Content"],
    },
    {
      id: "trove",
      title: "Trove",
      category: "Sosyal Medya Kampanyası",
      description: "Sanat ve yemek konseptini birleştiren yaratıcı içerik stratejisi ve kampanya yönetimi",
      shortDesc: "Sanat + Gastronomi",
      icon: <Palette className="w-5 h-5" />,
      metrics: [
        { label: "Etkileşim Artışı", value: "320%", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "Takipçi Artışı", value: "180%", icon: <Users className="w-3 h-3" /> },
        { label: "Marka Bilinirliği", value: "250%", icon: <Star className="w-3 h-3" /> },
      ],
      image:
        "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/ba%C5%9Far%C4%B1%20hikayeleri/socialmedia3-fJgOIsmfMIgjTU7JFtQu1kpGt5yIax.png",
      tags: ["Campaign", "Art Direction"],
    },
    {
      id: "nomads",
      title: "Nomads",
      category: "Event Tasarımları & Poster Serisi",
      description: "Stand-up komedi etkinlikleri için yaratıcı poster tasarımları ve event branding",
      shortDesc: "Komedi Etkinlikleri",
      icon: <Music className="w-5 h-5" />,
      metrics: [
        { label: "Etkinlik Katılımı", value: "340%", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "Marka Tanınırlığı", value: "280%", icon: <Users className="w-3 h-3" /> },
        { label: "Sosyal Paylaşım", value: "420%", icon: <Star className="w-3 h-3" /> },
      ],
      image:
        "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/ba%C5%9Far%C4%B1%20hikayeleri/events-g3IZVYzak4805EhXxVDlMf8Xaqh7BF.png",
      tags: ["Event Design", "Poster"],
    },
    {
      id: "minimal-pub",
      title: "Minimal Pub",
      category: "Marka Kimliği & İç Mekan Tasarımı",
      description: "Modern pub konsepti için minimal ve şık marka kimliği tasarımı",
      shortDesc: "Minimal Pub",
      icon: <Award className="w-5 h-5" />,
      metrics: [
        { label: "Müşteri Memnuniyeti", value: "195%", icon: <Star className="w-3 h-3" /> },
        { label: "Marka Tanınırlığı", value: "220%", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "Sosyal Medya", value: "180%", icon: <Users className="w-3 h-3" /> },
      ],
      image:
        "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/ba%C5%9Far%C4%B1%20hikayeleri/portolio4-dCk7lBgpvIOohcyELeOI8LvkpVqM3M.png",
      tags: ["Branding", "Interior"],
    },
    {
      id: "keci-coffee",
      title: "Keçi Coffee",
      category: "Marka Kimliği & Ambalaj Tasarımı",
      description: "Özel kahve markası için yaratıcı marka kimliği ve ambalaj tasarımı",
      shortDesc: "Özel Kahve",
      icon: <Coffee className="w-5 h-5" />,
      metrics: [
        { label: "Satış Artışı", value: "260%", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "Marka Değeri", value: "310%", icon: <Star className="w-3 h-3" /> },
        { label: "Müşteri Sadakati", value: "190%", icon: <Users className="w-3 h-3" /> },
      ],
      image:
        "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/ba%C5%9Far%C4%B1%20hikayeleri/portolio6-8Wy0JByWfKEeNA2VO7IgNr06Z7mogi.png",
      tags: ["Branding", "Packaging"],
    },
  ]

  return (
    <section ref={ref} className="relative bg-black py-12 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
            <span className="text-xs text-gray-300">Başarılarımız</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Dijital Dönüşüm
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Hikayeleri</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Müşterilerimizle birlikte yarattığımız başarı hikayelerini keşfedin
          </p>
        </motion.div>

        {/* Stories Grid - Responsive Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveStory(index)}
            >
              {/* Main Card - Compact Design */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] cursor-pointer">
                {/* Image Section */}
                <div className="relative h-36 md:h-40 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    priority={index < 4}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                      {story.icon}
                      <span className="text-xs text-white font-medium">{story.shortDesc}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title & Category */}
                  <div className="mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-gray-100">
                      {story.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-1">{story.category}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                    {story.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {story.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-0.5">
                          {metric.icon}
                          <span className="text-sm font-bold text-white">{metric.value}</span>
                        </div>
                        <span className="text-xs text-gray-400 leading-tight line-clamp-1">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {story.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Sizin Başarı Hikayenizi Yazalım</h3>
            <p className="text-gray-400 mb-5 text-sm md:text-base">
              Projenizi hayata geçirmek için hemen iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-black px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2">
                <span>Projeni Başlat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                Portföyü İncele
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
