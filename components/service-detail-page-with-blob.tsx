import Image from "next/image"

interface ServiceDetailProps {
  title: string
  description: string
  features: string[]
  process: { title: string; description: string }[]
  pricing: { plan: string; price: string; features: string[] }[]
  faqs: { question: string; answer: string }[]
  heroImage: string // Blob URL
  exampleImages: string[] // Blob URL array
}

export default function ServiceDetailPageWithBlob({
  title,
  description,
  features,
  process,
  pricing,
  faqs,
  heroImage,
  exampleImages,
}: ServiceDetailProps) {
  // Komponent içeriği...

  return (
    <div>
      {/* Hero Section with Blob Image */}
      <div className="relative h-[40vh] w-full">
        <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">{title}</h1>
        </div>
      </div>

      {/* Diğer içerikler... */}

      {/* Example Images from Blob */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Örnek Çalışmalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exampleImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} örnek ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer içerikler... */}
    </div>
  )
}
