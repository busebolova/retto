import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Tüm blob dosyalarını listele (veya prefix ile filtreleme yapabilirsiniz)
    const { blobs } = await list()

    // Sadece URL'leri ve metadata'yı döndür
    const images = blobs.map((blob) => ({
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }))

    return NextResponse.json({ images })
  } catch (error) {
    console.error("Blob görsellerini listelerken hata:", error)
    return NextResponse.json({ error: "Görsel listesi alınamadı" }, { status: 500 })
  }
}
