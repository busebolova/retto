interface SimpleBlobImageProps {
  src: string
  alt: string
  className?: string
}

export default function SimpleBlobImage({ src, alt, className }: SimpleBlobImageProps) {
  return <img src={src || "/placeholder.svg"} alt={alt} className={`rounded-lg ${className}`} loading="lazy" />
}
