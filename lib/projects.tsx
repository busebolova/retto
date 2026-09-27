import { Layers, Type, Palette, Move, Gem, Crown } from "lucide-react"

export const projectsData = {
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
