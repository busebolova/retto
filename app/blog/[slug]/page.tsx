import { blogPosts } from "@/lib/blog-posts"
import { pageMetadata, SITE_URL, jsonLd } from "@/lib/seo"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Share2 } from "lucide-react"
import Footer from "@/components/footer"
import ScrollHeader from "@/components/scroll-header"

// Blog yazıları veritabanı (gerçek projede bir CMS veya API'dan gelecektir)
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: post.title, description: post.excerpt,
        mainEntityOfPage: SITE_URL + "/blog/" + post.slug,
        image: SITE_URL + post.image,
        author: { "@type": post.author === "Retto Creative Ekibi" ? "Organization" : "Person", name: post.author },
        publisher: { "@id": SITE_URL + "/#organization" },
      }) }} />
      <ScrollHeader />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
                <span className="bg-white/20 px-3 py-1 rounded-full">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-invert prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <span className="text-white/80 flex items-center gap-2">
                    <Share2 size={18} />
                    Paylaş:
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/80"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/80"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/80"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/80"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Author */}
                <div className="bg-gray-900 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Yazar Hakkında</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
                      <Image
                        src="/images/buse-bolova.jpg"
                        alt="Buse Bolova"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{post.author}</h4>
                      <p className="text-sm text-white/70">Kreatif Direktör</p>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-gray-900 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Son Yazılar</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter((p) => p.id !== post.id)
                      .slice(0, 3)
                      .map((recentPost) => (
                        <Link href={`/blog/${recentPost.slug}`} key={recentPost.id} className="block group">
                          <div className="flex gap-3">
                            <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={recentPost.image || "/placeholder.svg"}
                                alt={recentPost.title}
                                width={80}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium group-hover:text-white/90 transition-colors line-clamp-2">
                                {recentPost.title}
                              </h4>
                              <p className="text-xs text-white/60 mt-1">{recentPost.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-900 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Kategoriler</h3>
                  <div className="space-y-2">
                    <Link
                      href="/blog?category=logo-tasarimi"
                      className="block py-2 px-3 rounded hover:bg-gray-800 transition-colors"
                    >
                      Logo Tasarımı
                    </Link>
                    <Link
                      href="/blog?category=web-tasarimi"
                      className="block py-2 px-3 rounded hover:bg-gray-800 transition-colors"
                    >
                      Web Tasarımı
                    </Link>
                    <Link
                      href="/blog?category=sosyal-medya"
                      className="block py-2 px-3 rounded hover:bg-gray-800 transition-colors"
                    >
                      Sosyal Medya
                    </Link>
                    <Link
                      href="/blog?category=dijital-pazarlama"
                      className="block py-2 px-3 rounded hover:bg-gray-800 transition-colors"
                    >
                      Dijital Pazarlama
                    </Link>
                    <Link
                      href="/blog?category=marka-stratejisi"
                      className="block py-2 px-3 rounded hover:bg-gray-800 transition-colors"
                    >
                      Marka Stratejisi
                    </Link>
                  </div>
                </div>

                {/* Tags Cloud */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Etiketler</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/blog?tag=logo-tasarimi"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #logo tasarımı
                    </Link>
                    <Link
                      href="/blog?tag=branding"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #branding
                    </Link>
                    <Link
                      href="/blog?tag=web-tasarimi"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #web tasarımı
                    </Link>
                    <Link
                      href="/blog?tag=ux"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #UX
                    </Link>
                    <Link
                      href="/blog?tag=sosyal-medya"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #sosyal medya
                    </Link>
                    <Link
                      href="/blog?tag=dijital-pazarlama"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #dijital pazarlama
                    </Link>
                    <Link
                      href="/blog?tag=tasarim-trendleri"
                      className="bg-gray-800 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #tasarım trendleri
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="container mx-auto px-4 py-12 border-t border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">İlgili Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group">
                  <div className="bg-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                        <span>{relatedPost.category}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-white/90 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 flex-1">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span>{relatedPost.date}</span>
                        <span className="group-hover:text-white transition-colors">Devamını Oku →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  if (!post) notFound()
  const metadata = pageMetadata(post.title, post.excerpt, `/blog/${post.slug}`)
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", authors: [post.author] } }
}
