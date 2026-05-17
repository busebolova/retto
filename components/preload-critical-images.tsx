"use client"

import { useEffect } from "react"
import { preloadCriticalImages } from "@/utils/image-optimization"

export default function PreloadCriticalImages() {
  useEffect(() => {
    // Preload the first two success story images
    const criticalImages = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portolio5-u6mlT8AUuXp3pvlqG5iCJzZI1XG2R4.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portolio1.png-CbISmHigua2pog4uqfNP1KBVH3HlNF.jpeg",
    ]

    preloadCriticalImages(criticalImages)
  }, [])

  return null
}
