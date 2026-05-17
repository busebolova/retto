// Instagram Basic Display API için tip tanımları
export interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  username?: string
}

export interface InstagramApiResponse {
  data: InstagramPost[]
  paging?: {
    cursors: {
      before: string
      after: string
    }
    next?: string
  }
}

// Instagram Basic Display API ile veri çekme
export async function fetchInstagramPosts(accessToken: string, limit = 12): Promise<InstagramPost[]> {
  try {
    const fields = "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,username"
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1 saat cache
    })

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramApiResponse = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Instagram API fetch error:", error)
    return []
  }
}

// Instagram oEmbed API ile post bilgisi alma (public posts için)
export async function fetchInstagramPostByUrl(postUrl: string) {
  try {
    const oembedUrl = `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`

    const response = await fetch(oembedUrl, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Instagram oEmbed error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Instagram oEmbed fetch error:", error)
    return null
  }
}
