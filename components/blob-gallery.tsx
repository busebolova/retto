"use client"

import { useState, useEffect } from "react"
import BlobImageComponent from "./blob-image"

interface Image {
  url: string
  pathname: string
  size: number
  uploadedAt: string
}

export default function BlobGallery() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/list-blob-images")

        if (!response.ok) {
          throw new Error("Görsel listesi alınamadı")
        }

        const data = await response.json()
        setImages(data.images)
      } catch (err) {
        setError("Görseller yüklenirken bir hata oluştu")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) {
    return <div className="flex justify-center p-8">Görseller yükleniyor...</div>
  }

  if (error) {
    return <div className="text-red-500 p-8">{error}</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <BlobImageComponent
            src={image.url || "/placeholder.svg"}
            alt={`Görsel ${index + 1}`}
            className="w-full h-64"
          />
          <div className="p-4 bg-white">
            <p className="text-sm text-gray-500 truncate">{image.pathname}</p>
            <p className="text-xs text-gray-400">{new Date(image.uploadedAt).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
