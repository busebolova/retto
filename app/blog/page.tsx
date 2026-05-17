import type { Metadata } from "next"
import ScrollHeader from "@/components/scroll-header"
import Link from "next/link"
import MobileBottomNav from "@/components/mobile-bottom-nav"

export const metadata: Metadata = {
  title: "Blog | Retto Creative - Tasarım ve Pazarlama İpuçları",
  description:
    "Dijital tasarım, marka kimliği, web tasarım ve dijital pazarlama hakkında güncel makaleler ve ipuçları. Uzman görüşleri ve sektör trendleri.",
  keywords: "tasarım blog, dijital pazarlama, marka kimliği, web tasarım, sosyal medya, logo tasarım ipuçları",
  openGraph: {
    title: "Blog | Retto Creative",
    description: "Tasarım ve dijital pazarlama dünyasından güncel içerikler",
    url: "https://rettocreative.com/blog",
    siteName: "Retto Creative",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Retto Creative",
    description: "Tasarım ve dijital pazarlama dünyasından güncel içerikler",
  },
  alternates: {
    canonical: "https://rettocreative.com/blog",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "2024'te Logo Tasarımı Trendleri",
    excerpt: "Bu yıl öne çıkan logo tasarım trendlerini ve markanız için doğru seçimi nasıl yapacağınızı keşfedin.",
    date: "15 Ocak 2024",
    category: "Tasarım",
    readTime: "5 dk",
    image: "/placeholder.svg?height=300&width=400&text=Logo+Trendleri",
  },
  {
    id: 2,
    title: "Etkili Sosyal Medya Stratejisi Nasıl Oluşturulur?",
    excerpt: "Markanızın sosyal medyada başarılı olması için izlemeniz gereken adımlar ve stratejiler.",
    date: "10 Ocak 2024",
    category: "Dijital Pazarlama",
    readTime: "8 dk",
    image: "/placeholder.svg?height=300&width=400&text=Sosyal+Medya",
  },
  {
    id: 3,
    title: "Kurumsal Kimlik Tasarımının Önemi",
    excerpt: "Güçlü bir kurumsal kimliğin işletmenize sağlayacağı avantajlar ve tasarım süreci.",
    date: "5 Ocak 2024",
    category: "Marka Kimliği",
    readTime: "6 dk",
    image: "/placeholder.svg?height=300&width=400&text=Kurumsal+Kimlik",
  },
  {
    id: 4,
    title: "Web Tasarımında UX/UI Prensipleri",
    excerpt: "Kullanıcı deneyimini ön planda tutan web tasarım yaklaşımları ve modern UI trendleri.",
    date: "28 Aralık 2023",
    category: "Web Tasarım",
    readTime: "7 dk",
    image: "/placeholder.svg?height=300&width=400&text=UX+UI",
  },
  {
    id: 5,
    title: "Dijital Pazarlamada İçerik Stratejisi",
    excerpt: "Etkili içerik pazarlama stratejileri ile markanızın dijital varlığını güçlendirin.",
    date: "20 Aralık 2023",
    category: "Dijital Pazarlama",
    readTime: "6 dk",
    image: "/placeholder.svg?height=300&width=400&text=İçerik+Stratejisi",
  },
  {
    id: 6,
    title: "Marka Kimliği Oluşturma Rehberi",
    excerpt: "Güçlü bir marka kimliği oluşturmak için izlemeniz gereken adımlar ve dikkat edilmesi gerekenler.",
    date: "15 Aralık 2023",
    category: "Marka Kimliği",
    readTime: "9 dk",
    image: "/placeholder.svg?height=300&width=400&text=Marka+Kimliği",
  },
]

export default function BlogPage() {
  return (
    <>
      <ScrollHeader />
      <main className="min-h-screen bg-black pt-16 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Tasarım & Pazarlama</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Blog</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Dijital dünyada öne çıkmanızı sağlayacak
                <br className="hidden md:block" />
                <span className="text-white font-medium">uzman görüşleri ve trendler</span>
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="glass-card-enhanced rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:border-white/20">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="text-white/80 text-xs font-medium">{post.readTime}</span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="mb-4">
                        <time className="text-gray-400 text-sm font-medium">{post.date}</time>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-gray-200 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-white hover:text-gray-300 text-sm font-medium transition-colors group"
                      >
                        <span>Devamını Oku</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="text-center mt-20 md:mt-32">
              <div className="glass-card-enhanced rounded-3xl p-12 md:p-16 max-w-4xl mx-auto border border-white/10 backdrop-blur-xl bg-white/5">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Daha Fazla İçerik Geliyor</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Tasarım ve dijital pazarlama dünyasından en güncel içerikleri
                    <br className="hidden md:block" />
                    kaçırmamak için bizi takip edin
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full transition-all duration-300 font-medium hover:transform hover:scale-105"
                  >
                    <span>Bize Ulaşın</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <a
                    href="https://www.instagram.com/rettocreative/"
                    className="inline-flex items-center border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium hover:bg-white/10"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Instagram'da Takip Et</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 md:py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <img src="/images/retto-logo.png" alt="Retto Creative" className="h-10 w-auto" />
              </div>

              <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
                <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
                  Anasayfa
                </a>
                <a href="/hizmetler" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
                  Hizmetler
                </a>
                <a href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
                  Blog
                </a>
                <a href="/iletisim" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
                  İletişim
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="mailto:hello@rettocreative.net"
                  className="text-gray-400 hover:text-white text-sm transition-colors font-medium"
                >
                  hello@rettocreative.net
                </a>
                <div className="h-4 w-px bg-gray-700"></div>
                <a
                  href="/iletisim"
                  className="bg-white/10 hover:bg-white/20 text-white text-sm px-6 py-3 rounded-full transition-colors font-medium"
                >
                  İletişime Geç
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 Retto Creative. Tüm hakları saklıdır.</p>

              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/rettocreative/"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="Instagram"
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
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <MobileBottomNav />
    </>
  )
}
