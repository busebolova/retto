import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  slug: string
}

export default function ServiceCard({ title, description, imageUrl, slug }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/hizmetler/${slug}`}
          className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Detaylar
        </Link>
      </div>
    </div>
  )
}
