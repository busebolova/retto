import Image from "next/image"

interface BlobHeroProps {
  imageUrl: string
  title: string
  subtitle?: string
}

export default function BlobHero({ imageUrl, title, subtitle }: BlobHeroProps) {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      {/* Hero Görsel */}
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority sizes="100vw" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* İçerik */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
        {subtitle && <p className="mt-4 text-xl md:text-2xl max-w-2xl text-center">{subtitle}</p>}
      </div>
    </div>
  )
}
