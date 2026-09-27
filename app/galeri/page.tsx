import { pageMetadata } from "@/lib/seo"
import BlobGallery from "@/components/blob-gallery"

export const metadata = pageMetadata("Görsel Galerisi", "Retto Creative tasarım çalışmalarından görseller.", "/galeri")

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Görsel Galerisi</h1>
      <BlobGallery />
    </div>
  )
}
