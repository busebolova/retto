import Image from "next/image"

interface BlobImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function BlobImage({ src, alt, width = 800, height = 600, className }: BlobImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-lg"
        priority={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
