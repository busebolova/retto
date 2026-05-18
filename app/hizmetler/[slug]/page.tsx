import { notFound } from 'next/navigation'
import ServiceDetailPage from "@/components/service-detail-page"
import ScrollHeader from "@/components/scroll-header"
import MobileBottomNav from "@/components/mobile-bottom-nav"

// Service data
const services = [
  {
    id: "logo",
    slug: "logo-tasarimi",
    title: "Logo Tasarımı",
    subtitle: "Markanızın kimliğini yansıtan özgün logo tasarımları",
    description: "Markanızın kurumsal kimliğini güçlendirecek kapsamlı logo tasarımı ve marka rehberi çalışması",
    longDescription:
      "Logo tasarımı, markanızın ilk izlenimini oluşturan en kritik unsurdur. Retto Creative olarak, markanızın değerlerini, vizyonunu ve kişiliğini yansıtan özgün logo tasarımı yaratıyoruz. Her logo, derinlemesine araştırma ve yaratıcı süreçlerden geçerek ortaya çıkar. Tüm logo çalışmalarımızda markanızın benzersiz hikayesini yaratıyor, bu hikayeyi görsel kimliğinize yansıtıyoruz.",
    features: [
      {
        title: "3 Özgün Logo Alternatifi",
        description: "Farklı konseptlerde 3 adet profesyonel logo tasarımı",
      },
      {
        title: "Brand Guide (Marka Rehberi)",
        description: "Logo kullanım kuralları, renk paleti ve tipografi rehberi PDF formatında",
      },
      {
        title: "Vektörel Formatlar",
        description: "AI, EPS, PNG, JPG, SVG formatlarında teslim",
      },
      {
        title: "2 Revize Hakkı",
        description: "Seçilen tasarım üzerinde 2 kez revizyon imkanı",
      },
      {
        title: "Telif Hakkı Devri",
        description: "Tasarımın tüm hakları size ait olur",
      },
      {
        title: "Hızlı Teslimat",
        description: "3-7 iş günü içerisinde teslim",
      },
    ],
    process: [
      {
        step: "Keşif & Analiz",
        description: "Markanızı, hedef kitlenizi ve sektörünüzü derinlemesine analiz ediyoruz",
      },
      {
        step: "Konsept Geliştirme",
        description: "3 farklı yaratıcı konsept geliştirip size sunuyoruz",
      },
      {
        step: "Tasarım & Sunum",
        description: "Seçilen konsepti detaylandırıp profesyonel sunum hazırlıyoruz",
      },
      {
        step: "Revizyon & Onay",
        description: "Geri bildirimleriniz doğrultusunda gerekli revizyonları yapıyoruz",
      },
      {
        step: "Teslim & Rehber",
        description: "Final dosyaları ve marka kullanım rehberini teslim ediyoruz",
      },
    ],
    deliveryTime: "3-7 iş günü",
    examples: [
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/1-1CVWO87KO0Gstjg130hhy5YO2VaHYb.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/2-s0Z16eWB0ObOWsJBvY6kCLSgHHDDBo.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/3-f5iv15Nt40VbgFksdzqoxVDiZCO1sA.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/4-xsGMA5Nkf1QFs3WnABhrAENzHoKu41.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/5-69m7pvOUgA7QNhBriPMoGYJcvYWWqx.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/6-iElbjA3VwKBlNt7mn2EMNpDnf5n4Et.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/7-BUUReHTeDELkueuZ89i40mwE4lfLmf.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/8-wW2otoM2C7Z2aam1whinziuzyTqL3d.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/9-XxeTdXV6fHe5fgSPAH7IstCBptM6GB.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/10-sSPtcE1rvm6TsMjpW59nhaCyNBfDts.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/12-Ua2JJuN8Qc6pzkfJo0j4zCs4Na3KPo.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/logo/13-Z62Q8B3dIHEaR7CMaPjwvUkZWNjqYF.png",
    ],
  },
  {
    id: "identity",
    slug: "kurumsal-kimlik",
    title: "Kurumsal Kimlik",
    subtitle: "Tutarlı ve profesyonel kurumsal kimlik tasarımları",
    description: "Kartvizitlerden antetli kağıtlara, tüm kurumsal materyallerinizde tutarlı bir görsel dil oluşturun",
    longDescription:
      "Kurumsal kimlik, markanızın tüm dokunuş noktalarında tutarlı bir görsel dil oluşturur. Logo tasarımından başlayarak, kartvizit, antet, zarf, not defteri ve dijital imza tasarımlarına kadar tüm kurumsal materyallerinizi profesyonel bir bütünlük içinde tasarlıyoruz.",
    features: [
      {
        title: "Kartvizit Tasarımı",
        description: "Çift taraflı, özel kesim seçenekleri ile profesyonel kartvizit",
      },
      {
        title: "Antet & Zarf Tasarımı",
        description: "Kurumsal yazışmalar için antetli kağıt ve zarf tasarımı",
      },
      {
        title: "Not Defteri Tasarımı",
        description: "Markanızı yansıtan özel not defteri ve ajanda tasarımları",
      },
      {
        title: "Mail İmza Tasarımı",
        description: "Profesyonel e-posta imza şablonları",
      },
      {
        title: "Dosya Klasörü Tasarımı",
        description: "Kurumsal evrak düzeni için özel klasör tasarımları",
      },
      {
        title: "Kurumsal Şablon Seti",
        description: "Sunum, rapor ve döküman şablonları",
      },
    ],
    process: [
      {
        step: "Logo Onayı",
        description: "Mevcut logonuzu analiz eder veya yeni logo tasarımı yaparız",
      },
      {
        step: "Materyal Planlaması",
        description: "İhtiyacınız olan tüm kurumsal materyalleri belirleriz",
      },
      {
        step: "Tasarım Geliştirme",
        description: "Tüm materyalleri tutarlı bir görsel dil ile tasarlarız",
      },
      {
        step: "Sunum & Revizyon",
        description: "Tasarımları sunar ve geri bildirimlerinizi alırız",
      },
      {
        step: "Baskı Hazırlığı",
        description: "Baskıya hazır dosyaları ve teknik şartnameleri teslim ederiz",
      },
    ],
    deliveryTime: "10-15 iş günü",
    examples: [
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/8-737UMbSlbiMRfvhMdTOTuRNpllPgPv.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/11-uAx5ZPycT9JIj6svIBwDe5rjAlOA1s.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/12-zdB3Ig3YmRvZeHeJ8HBGiku6OEjdat.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/9-bN44jDnl1MZtoNTPwvWGgNuCxf4Ndg.png",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/bag2-BB2ewxYuOAlJ5wajVetJOVvixGftaK.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/concept_04-VrfMjKwvI1HfgyXFLhS84UKyh97vDk.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/concept_05-XmTNmOHdv9WxHEkcvZlZ6ULt2qV889.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/eca_nav1.jpg-loBRlAuKY0oxxmKCdnVJcODkryPAK1.jpeg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/kurumsal%20kimlik/kurumsal2-ZRTsa9r2BVwLDGbDyjepWBaad1FCRD.png",
    ],
  },
  {
    id: "website",
    slug: "web-sitesi",
    title: "Web Sitesi",
    subtitle: "Modern, responsive ve kullanıcı dostu web siteleri",
    description: "Kullanıcı deneyimini ön planda tutan, modern teknolojilerle geliştirilmiş web siteleri tasarlıyoruz",
    longDescription:
      "Web siteniz, dijital dünyadaki en önemli temsilcinizdir. Retto Creative olarak, sadece güzel görünen değil, aynı zamanda işlevsel, hızlı ve SEO uyumlu web siteleri tasarlıyoruz. Her proje, markanızın ihtiyaçlarına özel olarak geliştirilir.",
    features: [
      {
        title: "Responsive Tasarım",
        description: "Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi",
      },
      {
        title: "SEO Optimizasyonu",
        description: "Arama motorlarında üst sıralarda yer almanız için teknik SEO",
      },
      {
        title: "Hızlı Yükleme",
        description: "Optimize edilmiş kodlama ile saniyeler içinde yüklenen sayfalar",
      },
      {
        title: "Yönetim Paneli",
        description: "Kolay içerik yönetimi için kullanıcı dostu admin paneli",
      },
      {
        title: "Güvenlik Sertifikası",
        description: "SSL sertifikası ve güvenlik önlemleri dahil",
      },
      {
        title: "Analitik Entegrasyonu",
        description: "Google Analytics ve diğer analiz araçları kurulumu",
      },
    ],
    process: [
      {
        step: "İhtiyaç Analizi",
        description: "Web sitenizin amacını, hedef kitlesini ve özelliklerini belirleriz",
      },
      {
        step: "Tasarım & Prototip",
        description: "Wireframe ve tasarım mockup'larını hazırlarız",
      },
      {
        step: "Geliştirme",
        description: "Modern teknolojilerle kodlama ve entegrasyonları yaparız",
      },
      {
        step: "Test & Optimizasyon",
        description: "Tüm cihazlarda test eder ve performans optimizasyonu yaparız",
      },
      {
        step: "Yayınlama & Eğitim",
        description: "Siteyi yayınlar ve yönetim paneli eğitimi veririz",
      },
    ],
    deliveryTime: "1-4 iş günü",
    examples: [
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/1-iXqNTWXIkjNfqTrPFWzKcjkR2gRu9L.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/2-shnSqpOA1T6EJBGRlDaA6SsowPAiOB.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/3-bnlU3nPokAJFPPuJUaKSZ0lNhaOwpi.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/4-ogrTJcLoaOQT61IuwmQO8ejM6BDc1n.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/5-usi4dob8CH7ymzmLJeBwLuwNlDASvh.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/6-K0yUPOU4vgkfKhCQYFNvfdI5qg1ezC.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/7-rv6pp2S74YGqfGS8CFwRnIUhp4j7Gr.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/8-vbBuksIXjRdosDNu0kaHUUwsp04JeG.jpg",
      "https://aifgfzhlyyimravy.public.blob.vercel-storage.com/web%20sitesi/9-rPPMzrauZXleVzCisyjYt8fo9EakiP.jpg",
    ],
  },
  {
    id: "social",
    slug: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    subtitle: "Etkili sosyal medya stratejileri ve içerik yönetimi",
    description: "Markanızın sosyal medyada etkin bir şekilde var olması için stratejik içerik planlaması yapıyoruz",
    longDescription:
      "Sosyal medya, markanızın müşterilerinizle doğrudan iletişim kurduğu en önemli kanal. Retto Creative olarak, markanızın sosyal medya varlığını güçlendiren, etkileşimi artıran ve satışları destekleyen kapsamlı sosyal medya stratejileri geliştiriyoruz.",
    features: [
      {
        title: "İçerik Stratejisi",
        description: "Hedef kitlenize uygun, etkileşim odaklı içerik planlaması",
      },
      {
        title: "Görsel Tasarım",
        description: "Markanıza uygun, profesyonel sosyal medya görselleri",
      },
      {
        title: "Topluluk Yönetimi",
        description: "Yorumlar, mesajlar ve etkileşimlerin profesyonel yönetimi",
      },
      {
        title: "Performans Analizi",
        description: "Detaylı raporlama ve performans ölçümü",
      },
      {
        title: "Reklam Yönetimi",
        description: "Facebook, Instagram ve Google Ads kampanya yönetimi",
      },
      {
        title: "İnfluencer İşbirlikleri",
        description: "Uygun influencer'larla işbirliği organizasyonu",
      },
    ],
    process: [
      {
        step: "Sosyal Medya Analizi",
        description: "Mevcut durumunuzu ve rakiplerinizi analiz ederiz",
      },
      {
        step: "Strateji Geliştirme",
        description: "Hedeflerinize uygun sosyal medya stratejisi oluştururuz",
      },
      {
        step: "İçerik Üretimi",
        description: "Düzenli olarak kaliteli içerikler üretir ve paylaşırız",
      },
      {
        step: "Topluluk Yönetimi",
        description: "Takipçilerinizle aktif iletişim kurar, etkileşimi artırırız",
      },
      {
        step: "Analiz & Raporlama",
        description: "Aylık performans raporları ile sonuçları paylaşırız",
      },
    ],
    deliveryTime: "Sürekli hizmet",
    examples: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
      "/images/6.png",
    ],
  },
  {
    id: "brand",
    slug: "marka-tescil",
    title: "Marka Tescil",
    subtitle: "Markanızı koruma altına alan tescil işlemleri",
    description: "Markanızın yasal haklarını korumak için tescil süreçlerini profesyonel şekilde yönetiyoruz",
    longDescription:
      "Marka tescili, fikri mülkiyet haklarınızı korumak için kritik bir adımdır. Retto Creative olarak, marka tescil sürecinin tüm aşamalarında yanınızdayız. Hukuki danışmanlıktan başvuru sürecine, takipten tescil sonrası koruma stratejilerine kadar tüm süreci profesyonelce yönetiyoruz.",
    features: [
      {
        title: "Marka Araştırması",
        description: "Detaylı benzerlik araştırması ve uygunluk analizi",
      },
      {
        title: "Başvuru Hazırlığı",
        description: "Tüm gerekli evrakların hazırlanması ve kontrolü",
      },
      {
        title: "Hukuki Takip",
        description: "Başvuru sürecinin profesyonel hukuki takibi",
      },
      {
        title: "Tescil Süreci",
        description: "TPE ile tüm yazışmaların yönetimi",
      },
      {
        title: "Koruma Danışmanlığı",
        description: "Tescil sonrası marka koruma stratejileri",
      },
      {
        title: "Yenileme Takibi",
        description: "10 yıllık süre sonunda yenileme hatırlatması",
      },
    ],
    process: [
      {
        step: "Ön Araştırma",
        description: "Markanızın tescil edilebilirliğini araştırırız",
      },
      {
        step: "Sınıf Belirleme",
        description: "Markanızın hangi sınıflarda tescil edileceğini belirleriz",
      },
      {
        step: "Başvuru Hazırlığı",
        description: "Tüm gerekli evrakları hazırlar ve başvuruyu yaparız",
      },
      {
        step: "Süreç Takibi",
        description: "6-12 aylık tescil sürecini takip ederiz",
      },
      {
        step: "Tescil Tamamlama",
        description: "Tescil belgenizi alır ve koruma stratejilerini paylaşırız",
      },
    ],
    deliveryTime: "6-12 ay",
    examples: [],
  },
  {
    id: "production",
    slug: "produksiyon",
    title: "Video & Fotoğraf Prodüksiyon",
    subtitle: "Profesyonel video ve fotoğraf prodüksiyon hizmetleri",
    description:
      "Markanızın hikayesini etkili bir şekilde anlatacak profesyonel video ve fotoğraf çekimleri gerçekleştiriyoruz",
    longDescription:
      "Görsel içerik, günümüzün en güçlü iletişim aracıdır. Retto Creative olarak, markanızın hikayesini en etkili şekilde anlatacak profesyonel video ve fotoğraf prodüksiyonları gerçekleştiriyoruz. Konseptten post prodüksiyona kadar tüm süreci yönetiyoruz.",
    features: [
      {
        title: "Video Prodüksiyon",
        description: "Kurumsal tanıtım, ürün tanıtımı ve sosyal medya videoları",
      },
      {
        title: "Fotoğraf Çekimi",
        description: "Ürün, kurumsal ve sosyal medya fotoğraf çekimleri",
      },
      {
        title: "Drone Çekimi",
        description: "Havadan görüntüleme ve sinematik drone çekimleri",
      },
      {
        title: "Post Prodüksiyon",
        description: "Montaj, renk düzeltme, ses düzenleme ve efekt çalışmaları",
      },
      {
        title: "Sosyal Medya İçerikleri",
        description: "Platform özelinde optimize edilmiş video ve fotoğraf içerikleri",
      },
      {
        title: "Canlı Yayın",
        description: "Etkinlik ve lansmanlar için canlı yayın hizmetleri",
      },
    ],
    process: [
      {
        step: "Konsept Geliştirme",
        description: "Projenin amacını belirler ve yaratıcı konsept geliştiririz",
      },
      {
        step: "Ön Prodüksiyon",
        description: "Senaryo, storyboard ve çekim planlaması yaparız",
      },
      {
        step: "Prodüksiyon",
        description: "Profesyonel ekipmanlarla çekim gerçekleştiririz",
      },
      {
        step: "Post Prodüksiyon",
        description: "Montaj, renk düzeltme ve ses çalışmalarını yaparız",
      },
      {
        step: "Teslim & Revizyon",
        description: "Final dosyaları teslim eder, gerekirse revizyon yaparız",
      },
    ],
    deliveryTime: "10-20 iş günü",
    examples: [],
  },
]

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <ScrollHeader />
      <ServiceDetailPage service={service} />
      <MobileBottomNav />
    </>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | Retto Creative",
    }
  }

  return {
    title: `${service.title} | Retto Creative İzmir`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} izmir`,
      "retto creative",
      "reklam ajansı izmir",
      "tasarım ajansı",
    ],
    alternates: {
      canonical: `https://rettocreative.com/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Retto Creative`,
      description: service.description,
      url: `https://rettocreative.com/hizmetler/${service.slug}`,
      type: "website",
      locale: "tr_TR",
      siteName: "Retto Creative",
      images: [
        {
          url: "/images/retto-logo.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - Retto Creative İzmir`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Retto Creative`,
      description: service.description,
      images: ["/images/retto-logo.png"],
    },
  }
}
