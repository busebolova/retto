"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Manuel Instagram posts - 9'lu grid için
const instagramPosts = [
  // İlk sıra - Sueno projesi
  {
    id: "sueno-web",
    image: "/images/instagram/sueno-web.jpg", // Blob URL ile değiştirilebilir
    caption:
      "Estetik ve strateji, aynı çatı altında! Retto Creative olarak, Sueno'nun marka kimliğini güçlendiren logo & kurumsal kimlik tasarımını ve etkileyici bir web sitesi deneyimini oluşturduk. Mimari vizyonunu en iyi şekilde yansıtmak için modern çizgileri, minimal tasarım anlayışıyla buluşturduk. Şimdi Sueno, güçlü ve profesyonel bir marka olarak dijital dünyada yerini aldı. Bu süreç ile retto döngüsünü başlatmış oldu...",
    likes: 245,
    comments: 32,
    date: "1 gün önce",
    hashtags: "#webdesign #mimarlık #sueno #rettocreative",
  },
  {
    id: "sueno-logo",
    image: "/images/instagram/sueno-logo.jpg",
    caption:
      "Sueno'nun yeni marka kimliği! Minimal ve güçlü tipografi ile mimarlık dünyasında fark yaratan bir logo tasarımı. 'sizin retto döngünüz!' #logodesign #branding #sueno",
    likes: 189,
    comments: 24,
    date: "1 gün önce",
    hashtags: "#logodesign #branding #minimal",
  },
  {
    id: "sueno-identity",
    image: "/images/instagram/sueno-identity.jpg",
    caption:
      "Sueno kurumsal kimlik materyalleri. Kartvizitlerden antetli kağıtlara, her detayda marka tutarlılığı. Siyah-beyaz kontrast ile güçlü bir görsel dil. #corporateidentity #businesscards",
    likes: 156,
    comments: 18,
    date: "2 gün önce",
    hashtags: "#corporateidentity #printdesign",
  },
  // İkinci sıra - John Roy Design projesi
  {
    id: "john-roy-tshirt",
    image: "/images/instagram/john-roy-tshirt.jpg",
    caption:
      "Marka kimliği yalnızca bir logo değildir, tasarımın her detayında kendini gösterir! John Roy Design için oluşturduğumuz kurumsal kimliği, giyim ve aksesuar tasarımlarında güçlü ve net bir şekilde konumlandırdık. #johnroy #brandidentity #apparel",
    likes: 198,
    comments: 27,
    date: "3 gün önce",
    hashtags: "#brandidentity #apparel #johnroy",
  },
  {
    id: "john-roy-branding",
    image: "/images/instagram/john-roy-branding.jpg",
    caption:
      "JRD monogramı, markanın özgün kimliğini ve tasarım vizyonunu yansıtır. Dairesel form, süreklilik ve dengeyi simgeler. Tipografik düzen, modern ve sofistike bir estetik sunar. #jrd #monogram #branddesign",
    likes: 167,
    comments: 22,
    date: "4 gün önce",
    hashtags: "#monogram #branddesign #jrd",
  },
  {
    id: "john-roy-hat",
    image: "/images/instagram/john-roy-hat.jpg",
    caption:
      "John Roy Design bucket hat koleksiyonu. Minimalist tasarım anlayışı ile günlük kullanımda marka kimliğini taşıyan aksesuar tasarımları. Siyah-beyaz kontrast ile zamansız estetik. #buckethat #accessories #johnroy",
    likes: 143,
    comments: 19,
    date: "5 gün önce",
    hashtags: "#accessories #buckethat #streetwear",
  },
  // Üçüncü sıra - J'Mobley Coffee projesi
  {
    id: "jmobley-packaging",
    image: "/images/instagram/jmobley-packaging.jpg",
    caption:
      "Kahvesiz bir tasarım süreci? İmkansız. Üçüncü nesil kahveciliği seviyoruz çünkü bu sektörü sadece tasarlamıyoruz, aynı zamanda yaşıyoruz. J'Mobley Coffee'nin tasarımı, kahve ritüelini modern bir kimlikle buluşturuyor. #jmobley #coffee #packaging",
    likes: 234,
    comments: 31,
    date: "6 gün önce",
    hashtags: "#coffee #packaging #filtercoffee",
  },
  {
    id: "jmobley-branding",
    image: "/images/instagram/jmobley-branding.jpg",
    caption:
      "J'Mobley Coffee, kahve ritüelinin huzurunu ve sıcaklığını yansıtan bir kimlikle tasarlandı. Logo, markanın doğallık ve geleneksel lezzet anlayışını modern bir yaklaşımla harmanlıyor. #jmobley #coffeebranding #identity",
    likes: 187,
    comments: 25,
    date: "1 hafta önce",
    hashtags: "#coffeebranding #identity #logo",
  },
  {
    id: "jmobley-cup",
    image: "/images/instagram/jmobley-cup.jpg",
    caption:
      "Tasarım, bir markayı sadece görünür kılmak değil, ona ruh vermektir. J'Mobley Coffee bardak tasarımında marka kimliği her yudumda hissediliyor. Retto Creative olarak kahveyle çalışıyor, kahve markalarına hayat veriyoruz. #jmobley #coffeecup #brandexperience",
    likes: 201,
    comments: 28,
    date: "1 hafta önce",
    hashtags: "#coffeecup #brandexperience #takeaway",
  },
]

export default function ManualInstagramFeed() {
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
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Marka Günlüğü</h2>
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

          {/* Instagram 9'lu Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative aspect-square overflow-hidden group rounded-lg bg-gray-900 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Post Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback: Placeholder göster
                      e.currentTarget.src = "/placeholder.svg?height=400&width=400&query=instagram post"
                    }}
                  />
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center w-full">
                    {/* Caption - Kısaltılmış */}
                    <p className="text-white text-xs mb-3 line-clamp-3 leading-relaxed">
                      {post.caption.length > 100 ? `${post.caption.substring(0, 100)}...` : post.caption}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center space-x-4 mb-3">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 text-white mr-1" />
                        <span className="text-white text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 text-white mr-1" />
                        <span className="text-white text-xs">{post.comments}</span>
                      </div>
                    </div>

                    {/* Instagram Link */}
                    <Link
                      href="https://www.instagram.com/rettocreative/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 rounded-full px-3 py-1 text-white text-xs transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Gör</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>

                {/* Özel vurgu - Tüm 9 post için (3 tamamlanmış proje) */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-80"></div>
              </motion.div>
            ))}
          </div>

          {/* Follow Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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

          {/* Alt bilgi */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-gray-500 text-sm">Daha fazla proje ve güncel içerik için takip edin</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
