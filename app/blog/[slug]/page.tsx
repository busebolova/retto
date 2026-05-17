import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Share2 } from "lucide-react"
import Footer from "@/components/footer"
import ScrollHeader from "@/components/scroll-header"

// Blog yazıları veritabanı (gerçek projede bir CMS veya API'dan gelecektir)
const blogPosts = [
  {
    id: 1,
    slug: "logo-tasariminda-yeni-trendler",
    title: "Logo Tasarımında 2024 Yılının Öne Çıkan Trendleri",
    excerpt:
      "Minimalizm, gradyan renkler ve hareketli logolar 2024 yılında öne çıkan logo tasarım trendleri arasında yer alıyor.",
    content: `
      <p>Logo tasarımı, bir markanın kimliğini ve değerlerini yansıtan en önemli görsel unsurlardan biridir. Her yıl olduğu gibi, 2024 yılında da logo tasarım dünyasında yeni trendler ortaya çıkmaya devam ediyor. Bu yazımızda, 2024 yılında öne çıkan logo tasarım trendlerini inceleyeceğiz.</p>
      
      <h2>1. Minimalist Tasarımlar</h2>
      <p>Minimalizm, son yıllarda olduğu gibi 2024'te de popülerliğini korumaya devam ediyor. Sade, temiz ve anlaşılır tasarımlar, markaların mesajlarını net bir şekilde iletmelerine yardımcı oluyor. Gereksiz detaylardan arındırılmış minimalist logolar, dijital platformlarda daha iyi performans gösteriyor ve küçük boyutlarda bile okunabilirliğini koruyor.</p>
      
      <h2>2. Gradyan Renkler</h2>
      <p>Gradyan renkler, 2024 yılında logo tasarımlarında sıkça karşımıza çıkıyor. Yumuşak geçişler ve canlı renk kombinasyonları, logolara derinlik ve dinamizm katıyor. Özellikle teknoloji ve yaratıcı sektörlerde faaliyet gösteren markalar, gradyan renkleri tercih ediyor.</p>
      
      <h2>3. Hareketli Logolar</h2>
      <p>Dijital platformların yaygınlaşmasıyla birlikte, hareketli logolar (motion logos) giderek daha fazla önem kazanıyor. Statik bir logoyu hareketli hale getirmek, markanın dijital varlığını güçlendiriyor ve kullanıcıların dikkatini çekiyor. 2024 yılında, basit animasyonlarla zenginleştirilmiş logo tasarımları trend olmaya devam ediyor.</p>
      
      <h2>4. Geometrik Şekiller</h2>
      <p>Geometrik şekiller, logo tasarımında her zaman popüler olmuştur. 2024 yılında da üçgenler, daireler, kareler gibi temel geometrik şekillerin yaratıcı kombinasyonlarıyla oluşturulan logolar öne çıkıyor. Bu tür tasarımlar, markanın profesyonelliğini ve güvenilirliğini vurguluyor.</p>
      
      <h2>5. Tipografi Odaklı Logolar</h2>
      <p>Tipografi odaklı logolar, 2024 yılında da popülerliğini sürdürüyor. Özel olarak tasarlanmış yazı tipleri veya mevcut fontların yaratıcı kullanımıyla oluşturulan logolar, markanın kimliğini güçlü bir şekilde yansıtıyor. Özellikle serif fontlar, vintage ve lüks markaların logolarında tercih ediliyor.</p>
      
      <h2>6. Negatif Alan Kullanımı</h2>
      <p>Negatif alan (negative space) kullanımı, logo tasarımında yaratıcı çözümler sunmaya devam ediyor. İki farklı görüntüyü tek bir tasarımda birleştiren bu yaklaşım, izleyicilerin logoyu daha dikkatli incelemesini sağlıyor ve akılda kalıcılığı artırıyor.</p>
      
      <h2>7. Sürdürülebilirlik Temalı Logolar</h2>
      <p>Sürdürülebilirlik ve çevre bilinci, günümüzde markaların önem verdiği konuların başında geliyor. 2024 yılında, doğa temalı, organik formlar ve yeşil tonların kullanıldığı logolar, markaların sürdürülebilirlik konusundaki hassasiyetlerini yansıtıyor.</p>
      
      <h2>Sonuç</h2>
      <p>Logo tasarımında trendler sürekli değişse de, bir logonun en önemli özelliği markanın değerlerini ve kimliğini doğru bir şekilde yansıtmasıdır. 2024 yılında öne çıkan trendleri takip ederken, markanızın özgünlüğünü ve mesajını ön planda tutmak, başarılı bir logo tasarımı için kritik öneme sahiptir.</p>
      
      <p>Retto Creative olarak, markanızın kimliğini en iyi şekilde yansıtacak özgün ve etkileyici logo tasarımları sunuyoruz. Güncel trendleri takip ederken, markanızın değerlerini ve hedef kitlenizin beklentilerini göz önünde bulundurarak, zamansız tasarımlar yaratıyoruz.</p>
    `,
    author: "Buse Bolova",
    date: "15 Mayıs 2024",
    category: "Logo Tasarımı",
    tags: ["logo tasarımı", "branding", "tasarım trendleri"],
    image: "/images/artistic-bg.png",
    readTime: "6 dakika",
  },
  {
    id: 2,
    slug: "sosyal-medya-yonetimi-ipuclari",
    title: "Etkili Sosyal Medya Yönetimi İçin 10 Altın İpucu",
    excerpt: "Markanızın sosyal medya varlığını güçlendirmek için uygulamanız gereken stratejiler ve ipuçları.",
    content: `
      <p>Günümüzde sosyal medya, markaların hedef kitleleriyle etkileşim kurabilecekleri en önemli platformlardan biri haline geldi. Etkili bir sosyal medya yönetimi, markanızın bilinirliğini artırabilir, müşteri sadakatini güçlendirebilir ve satışlarınızı artırabilir. Bu yazımızda, sosyal medya yönetiminde başarılı olmanız için 10 altın ipucu paylaşacağız.</p>
      
      <h2>1. Hedef Kitlenizi Tanıyın</h2>
      <p>Etkili bir sosyal medya stratejisi oluşturmanın ilk adımı, hedef kitlenizi tanımaktır. Takipçilerinizin demografik özellikleri, ilgi alanları ve davranış kalıpları hakkında bilgi sahibi olun. Bu bilgiler, içerik stratejinizi şekillendirmenize ve doğru mesajları doğru zamanda iletmenize yardımcı olacaktır.</p>
      
      <h2>2. Platform Bazlı Strateji Geliştirin</h2>
      <p>Her sosyal medya platformunun kendine özgü dinamikleri ve kullanıcı beklentileri vardır. Instagram'da görsel içerikler ön plandayken, Twitter'da güncel konular ve hızlı etkileşimler önemlidir. LinkedIn ise profesyonel içerikler için daha uygundur. Markanız için en uygun platformları belirleyin ve her platform için özel stratejiler geliştirin.</p>
      
      <h2>3. Tutarlı Bir Marka Kimliği Oluşturun</h2>
      <p>Sosyal medya hesaplarınızda tutarlı bir marka kimliği oluşturmak, takipçilerinizin markanızı tanımasını ve hatırlamasını sağlar. Profil fotoğrafı, kapak görseli, renk paleti ve ton of voice gibi unsurların tüm platformlarda uyumlu olmasına dikkat edin.</p>
      
      <h2>4. İçerik Takvimi Hazırlayın</h2>
      <p>Düzenli ve planlı bir içerik akışı, sosyal medya yönetiminin temel taşlarından biridir. Haftalık veya aylık içerik takvimi hazırlayarak, paylaşımlarınızı önceden planlayabilir ve zaman kazanabilirsiniz. İçerik takvimi, özel günleri ve kampanyaları da takip etmenizi kolaylaştırır.</p>
      
      <h2>5. Görsel Kaliteye Önem Verin</h2>
      <p>Sosyal medyada dikkat çekmenin en etkili yollarından biri, kaliteli görseller kullanmaktır. Profesyonel fotoğraflar, ilgi çekici grafikler ve yaratıcı videolar, takipçilerinizin ilgisini çekecek ve etkileşim oranlarınızı artıracaktır.</p>
      
      <h2>6. Etkileşime Önem Verin</h2>
      <p>Sosyal medya, tek yönlü bir iletişim kanalı değil, etkileşim platformudur. Takipçilerinizin yorumlarına yanıt verin, mesajlarını cevaplayın ve onlarla diyalog kurun. Bu yaklaşım, müşteri memnuniyetini artırır ve marka sadakatini güçlendirir.</p>
      
      <h2>7. Analitikleri Takip Edin</h2>
      <p>Sosyal medya performansınızı düzenli olarak analiz edin. Hangi içeriklerin daha fazla etkileşim aldığını, hangi saatlerde paylaşım yapmanın daha etkili olduğunu ve takipçi demografinizin nasıl değiştiğini takip edin. Bu veriler, stratejinizi sürekli olarak iyileştirmenize yardımcı olacaktır.</p>
      
      <h2>8. Güncel Trendleri Takip Edin</h2>
      <p>Sosyal medya dünyası sürekli değişiyor ve yeni trendler ortaya çıkıyor. Güncel trendleri takip ederek, markanızı güncel tutabilir ve yeni fırsatları değerlendirebilirsiniz. Ancak, her trendi körü körüne takip etmek yerine, markanıza uygun olanları seçmeye özen gösterin.</p>
      
      <h2>9. Ücretli Reklamları Etkili Kullanın</h2>
      <p>Organik erişimin giderek zorlaştığı günümüzde, ücretli reklamlar sosyal medya stratejinizin önemli bir parçası olabilir. Hedef kitle segmentasyonu yaparak, doğru kişilere doğru mesajları iletebilir ve reklam bütçenizi daha verimli kullanabilirsiniz.</p>
      
      <h2>10. A/B Testleri Yapın</h2>
      <p>Farklı içerik türleri, görseller ve mesajlar deneyerek, hangilerinin daha iyi performans gösterdiğini test edin. A/B testleri, sosyal medya stratejinizi sürekli olarak optimize etmenize ve daha iyi sonuçlar almanıza yardımcı olacaktır.</p>
      
      <h2>Sonuç</h2>
      <p>Etkili bir sosyal medya yönetimi, sabır, tutarlılık ve stratejik düşünce gerektirir. Bu 10 altın ipucunu uygulayarak, markanızın sosyal medya varlığını güçlendirebilir ve dijital pazarlama hedeflerinize ulaşabilirsiniz.</p>
      
      <p>Retto Creative olarak, markanızın sosyal medya yönetiminde profesyonel destek sunuyoruz. Uzman ekibimizle, markanızın dijital varlığını güçlendirmek ve hedef kitlenizle etkili iletişim kurmanız için yanınızdayız.</p>
    `,
    author: "Retto Creative Ekibi",
    date: "2 Haziran 2024",
    category: "Sosyal Medya",
    tags: ["sosyal medya", "dijital pazarlama", "içerik stratejisi"],
    image: "/images/socialmedia1.png",
    readTime: "8 dakika",
  },
  {
    id: 3,
    slug: "web-sitesi-tasariminda-kullanici-deneyimi",
    title: "Web Sitesi Tasarımında Kullanıcı Deneyiminin Önemi",
    excerpt: "Kullanıcı deneyimi odaklı web sitesi tasarımı ile dönüşüm oranlarınızı nasıl artırabilirsiniz?",
    content: `
      <p>Web sitesi tasarımında kullanıcı deneyimi (UX), ziyaretçilerin sitenizle etkileşimini ve memnuniyetini belirleyen en önemli faktörlerden biridir. İyi bir kullanıcı deneyimi, ziyaretçilerin sitenizde daha uzun süre kalmasını, daha fazla sayfa görüntülemesini ve nihayetinde dönüşüm oranlarının artmasını sağlar. Bu yazımızda, web sitesi tasarımında kullanıcı deneyiminin önemini ve nasıl iyileştirilebileceğini inceleyeceğiz.</p>
      
      <h2>Kullanıcı Deneyimi Nedir?</h2>
      <p>Kullanıcı deneyimi, bir kullanıcının bir web sitesi veya uygulamayla etkileşime girdiğinde yaşadığı deneyimin tamamını ifade eder. Bu deneyim, sitenin kullanım kolaylığı, erişilebilirliği, performansı, tasarımı ve içeriği gibi birçok faktörden etkilenir. İyi bir kullanıcı deneyimi, kullanıcıların ihtiyaçlarını karşılayan, kolay kullanılabilen ve estetik açıdan tatmin edici bir web sitesi anlamına gelir.</p>
      
      <h2>Kullanıcı Deneyiminin Web Sitesi Tasarımındaki Önemi</h2>
      
      <h3>1. Dönüşüm Oranlarını Artırır</h3>
      <p>Kullanıcı dostu bir web sitesi, ziyaretçilerin aradıklarını kolayca bulmasını ve istenen eylemleri (satın alma, form doldurma, abone olma vb.) gerçekleştirmesini sağlar. Bu da dönüşüm oranlarının artmasına yol açar. Araştırmalar, kullanıcı deneyimine yapılan yatırımların dönüşüm oranlarını %400'e kadar artırabildiğini gösteriyor.</p>
      
      <h3>2. Marka Algısını Güçlendirir</h3>
      <p>Web siteniz, markanızın dijital yüzüdür ve ziyaretçilerin markanız hakkındaki ilk izlenimlerini şekillendirir. Profesyonel ve kullanıcı dostu bir web sitesi, markanızın güvenilirliğini ve profesyonelliğini artırır. Kötü bir kullanıcı deneyimi ise, potansiyel müşterilerin markanıza olan güvenini zedeleyebilir.</p>
      
      <h3>3. SEO Performansını İyileştirir</h3>
      <p>Google ve diğer arama motorları, kullanıcı deneyimini giderek daha fazla önemsemektedir. Sayfa yükleme hızı, mobil uyumluluk, gezinme kolaylığı gibi kullanıcı deneyimi faktörleri, arama motoru sıralamalarını doğrudan etkiler. İyi bir kullanıcı deneyimi, organik trafiğinizi artırmanıza yardımcı olur.</p>
      
      <h3>4. Müşteri Sadakatini Artırır</h3>
      <p>Olumlu bir kullanıcı deneyimi, ziyaretçilerin sitenize tekrar gelmesini ve markanızla uzun vadeli bir ilişki kurmasını sağlar. Kullanıcıların ihtiyaçlarını karşılayan ve sorunlarını çözen bir web sitesi, müşteri sadakatini artırır ve tekrarlanan satışları teşvik eder.</p>
      
      <h2>Kullanıcı Deneyimini İyileştirmek İçin İpuçları</h2>
      
      <h3>1. Hızlı Sayfa Yükleme Süresi</h3>
      <p>Ziyaretçiler, yavaş yüklenen web sitelerinden hızla ayrılma eğilimindedir. Sayfa yükleme süresini optimize etmek, kullanıcı deneyimini iyileştirmenin en etkili yollarından biridir. Görsel optimizasyonu, kod minifikasyonu ve önbellek kullanımı gibi tekniklerle sitenizin hızını artırabilirsiniz.</p>
      
      <h3>2. Mobil Uyumluluk</h3>
      <p>Günümüzde internet trafiğinin büyük bir kısmı mobil cihazlardan gelmektedir. Web sitenizin tüm cihazlarda (akıllı telefonlar, tabletler, masaüstü bilgisayarlar) sorunsuz çalışması ve iyi görünmesi, kullanıcı deneyimi için kritik öneme sahiptir.</p>
      
      <h3>3. Sezgisel Navigasyon</h3>
      <p>Kullanıcıların sitenizde aradıklarını kolayca bulabilmeleri için sezgisel bir navigasyon yapısı oluşturun. Menüler mantıklı bir şekilde düzenlenmeli, önemli sayfalar kolayca erişilebilir olmalı ve site içi arama özelliği sunulmalıdır.</p>
      
      <h3>4. Tutarlı Tasarım</h3>
      <p>Sitenizin tüm sayfalarında tutarlı bir tasarım dili kullanın. Renk şeması, tipografi, buton stilleri ve diğer tasarım öğeleri, sitenin tamamında uyumlu olmalıdır. Bu tutarlılık, kullanıcıların sitenizde gezinirken kendilerini rahat hissetmelerini sağlar.</p>
      
      <h3>5. İçerik Okunabilirliği</h3>
      <p>İçeriğinizin okunabilir olması, kullanıcı deneyiminin önemli bir parçasıdır. Uygun font boyutları, satır aralıkları ve kontrast oranları kullanarak içeriğinizin herkes tarafından kolayca okunabilmesini sağlayın.</p>
      
      <h3>6. Çağrı Aksiyonu Butonları</h3>
      <p>Kullanıcıların ne yapması gerektiğini açıkça belirten çağrı aksiyonu butonları kullanın. Bu butonlar, dikkat çekici, kolay fark edilebilir ve anlaşılır olmalıdır.</p>
      
      <h3>7. Kullanıcı Geri Bildirimi</h3>
      <p>Kullanıcıların eylemlerine anında geri bildirim sağlayın. Örneğin, bir form gönderildiğinde başarı mesajı gösterin veya bir butona tıklandığında görsel bir değişiklik olsun. Bu geri bildirimler, kullanıcıların sitenizle etkileşimde olduklarını hissetmelerini sağlar.</p>
      
      <h2>Sonuç</h2>
      <p>Web sitesi tasarımında kullanıcı deneyimi, ziyaretçilerin sitenizle olan etkileşimini ve memnuniyetini belirleyen kritik bir faktördür. İyi bir kullanıcı deneyimi, dönüşüm oranlarını artırır, marka algısını güçlendirir, SEO performansını iyileştirir ve müşteri sadakatini artırır.</p>
      
      <p>Retto Creative olarak, kullanıcı deneyimi odaklı web sitesi tasarımı hizmetleri sunuyoruz. Markanızın hedeflerine ve kullanıcılarınızın ihtiyaçlarına uygun, etkileyici ve kullanıcı dostu web siteleri tasarlıyoruz. Profesyonel web sitesi tasarımı için bizimle iletişime geçebilirsiniz.</p>
    `,
    author: "Retto Creative Ekibi",
    date: "20 Haziran 2024",
    category: "Web Tasarımı",
    tags: ["web tasarımı", "kullanıcı deneyimi", "UX", "dönüşüm optimizasyonu"],
    image: "/images/responsive-website-mockup.png",
    readTime: "10 dakika",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
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
