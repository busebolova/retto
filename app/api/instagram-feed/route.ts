import { NextResponse } from "next/server"
import { fetchInstagramPosts } from "@/lib/instagram-api"

export async function GET() {
  try {
    // Environment variable'dan access token al
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

    if (!accessToken) {
      console.warn("Instagram access token bulunamadı")
      return NextResponse.json({
        posts: [],
        error: "Instagram access token yapılandırılmamış",
      })
    }

    const posts = await fetchInstagramPosts(accessToken, 12)

    return NextResponse.json({
      posts,
      success: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Instagram API error:", error)

    return NextResponse.json(
      {
        posts: [],
        error: "Instagram feed yüklenemedi",
        success: false,
      },
      { status: 500 },
    )
  }
}

export const revalidate = 3600 // 1 saat cache
