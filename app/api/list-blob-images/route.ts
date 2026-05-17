import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  // Token yoksa boş liste döndür
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ images: [] })
  }

  try {
    const { blobs } = await list()

    const images = blobs.map((blob) => ({
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }))

    return NextResponse.json({ images })
  } catch (error) {
    console.error("Blob görsellerini listelerken hata:", error)
    return NextResponse.json({ images: [] }, { status: 200 })
  }
}
