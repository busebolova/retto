import HeadingShowcase from "@/components/heading-showcase"

export default function HeadingStylesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-medium mb-8 text-center">Alternatif Başlık Stilleri</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Aşağıda siteniz için kullanabileceğiniz farklı başlık stilleri ve efektleri bulunmaktadır. Beğendiğiniz stili
          seçerek sitenize uygulayabilirsiniz.
        </p>
        <HeadingShowcase />
      </div>
    </div>
  )
}
