"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, ExternalLink, Heart, MessageCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Instagram post interface
interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  username?: string
}

export default function RealInstagramFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Instagram postlarını fetch et
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch("/api/instagram-feed")

        if (!response.ok) {
          throw new Error("Instagram feed yüklenemedi")
        }

        const data = await response.json()
        setPosts(data.posts || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bir hata oluştu")
        console.error("Instagram feed error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Fallback posts (API çalışmazsa)
  const fallbackPosts = [
    {
      id: "fallback1",
      media_type: "IMAGE" as const,
      media_url: "/images/instagram-1.jpg",
      permalink: "https://www.instagram.com/rettocreative/",
      caption: "Yaratıcı tasarım sürecimizden bir kare...",
      timestamp: new Date().toISOString(),
      username: "rettocreative",
    },
    {
      id: "fallback2",
      media_type: "IMAGE" as const,
      media_url: "/images/instagram-2.jpg",
      permalink: "https://www.instagram.com/rettocreative/",
      caption: "Yeni projemizden bir kesit...",
      timestamp: new Date().toISOString(),
      username: "rettocreative",
    },
    // Daha fazla fallback post ekleyebilirsiniz
  ]

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

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
              Yaratıcı dünyamızı keşfedin. Projelerimiz, ekibimiz ve ilham kaynaklarımızla ilgili güncel içerikler.
            </p>
            <motion.div
              className="h-[1px] w-16 bg-white/20 mx-auto mt-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
              <span className="ml-3 text-white">Instagram gönderileri yükleniyor...</span>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <p className="text-gray-400 text-sm">Fallback içerikler gösteriliyor</p>
            </div>
          )}

          {/* Instagram Grid */}
          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {displayPosts.slice(0, 9).map((post, index) => (
                <motion.div
                  key={post.id}
                  className="relative aspect-square overflow-hidden group rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Post Image/Video */}
                  <div className="relative w-full h-full">
                    {post.media_type === "VIDEO" ? (
                      <video
                        src={post.media_url}
                        poster={post.thumbnail_url}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                    ) : (
                      <Image
                        src={post.media_url || "/placeholder.svg"}
                        alt={post.caption?.slice(0, 100) || `Instagram post ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    )}

                    {/* Carousel indicator */}
                    {post.media_type === "CAROUSEL_ALBUM" && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-black/50 rounded-full p-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Video indicator */}
                    {post.media_type === "VIDEO" && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-black/50 rounded-full p-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-center p-4">
                      {post.caption && (
                        <p className="text-white text-sm mb-4 line-clamp-3">
                          {post.caption.length > 100 ? `${post.caption.slice(0, 100)}...` : post.caption}
                        </p>
                      )}

                      <div className="flex items-center justify-center space-x-6 mb-4">
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 text-white mr-2" />
                          <span className="text-white">♥</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-5 h-5 text-white mr-2" />
                          <span className="text-white">💬</span>
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
          )}

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
              <Instagram className="w-5 h-5" />
              <span>@rettocreative</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
