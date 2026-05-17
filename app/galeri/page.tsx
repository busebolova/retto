import BlobGallery from "@/components/blob-gallery"

export const metadata = {
  title: "Görsel Galerisi | Retto",
  description: "Retto tarafından oluşturulan görsel galerisi",
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Görsel Galerisi</h1>
      <BlobGallery />
    </div>
  )
}
