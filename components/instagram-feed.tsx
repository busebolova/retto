"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

// Statik Instagram posts - gerçek veriler yerine kullanılacak
const instagramPosts = [
  {
    id: "post1",
    media_url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop&crop=center",
    permalink: "https://www.instagram.com/rettocreative/",
    caption: "Yaratıcı tasarım sürecimizden bir kare. Markaların hikayelerini görselleştirirken...",
    likes: 124,
    comments: 18,
  },
  {
    id: "post2",
    media_url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop&crop=center",
    permalink: "https://www.instagram.com/rettocreative/",
    caption: "Yeni projemizden bir kesit. Minimalist tasarım anlayışımızla...",
    likes: 98,
    comments: 12,
  },
  {
    id: "post3",
    media_url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop&crop=center",
    permalink: "https://www.instagram.com/rettocreative/",
    caption: "Tasarım ekibimiz çalışırken. Her detayın önemli olduğu anlar...",
    likes: 156,
    comments: 24,
  },
  {
    id: "post4",
    media_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&crop=center",
    permalink: "https://www.instagram.com/rettocreative/",
    caption: "Ofisimizden bir görüntü. Yaratıcılığın doğduğu mekan...",
    likes: 87,
    comments: 9,
  },
  {
    id: "post5",
    media_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop&crop=center",
    permalink: "https://www.instagram.com/rettocreative/",
    caption: "Marka kimliği çalışmalarımız. Her logo bir hikaye anlatır...",
    likes: 142,
    comments: 16,
  },
  {
    id: "post6",
    media_url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=600&fit=crop&crop=center",
    permalink: "https://www.instagram.com/rettocreative/",
    caption: "Minimalist logo tasarımlarımız. Az çoktur felsefemizle...",
    likes: 113,
    comments: 21,
  },
]

export default function InstagramFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="relative bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Instagram className="w-6 h-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Instagram</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Yaratıcı dünyamızı keşfedin. Projelerimiz, ekibimiz ve ilham kaynaklarımızla ilgili güncel içerikler için
              bizi Instagram'da takip edin.
            </p>
            <motion.div
              className="h-[1px] w-16 bg-white/20 mx-auto mt-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative aspect-square overflow-hidden group rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Post Image */}
                <img
                  src={post.media_url || "/placeholder.svg"}
                  alt={post.caption || `Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center p-4">
                    <p className="text-white text-sm mb-4 line-clamp-3">{post.caption}</p>

                    <div className="flex items-center justify-center space-x-6 mb-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="text-white">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="text-white">{post.comments}</span>
                      </div>
                    </div>

                    <Link
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 text-white text-sm transition-colors"
                    >
                      <span>Instagram'da Gör</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Follow Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="https://www.instagram.com/rettocreative/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-3 px-6 text-white transition-colors duration-300"
            >
              <span>@rettocreative</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
