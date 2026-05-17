/**
 * Image optimization utilities
 */

// Function to generate optimized image URLs with width and quality parameters
export function getOptimizedImageUrl(url: string, width = 800, quality = 80): string {
  // For blob.v0.dev URLs, we can't add parameters directly
  // For production, you might want to use a proper image CDN like Cloudinary or Imgix
  return url
}

// Function to preload critical images
export function preloadCriticalImages(imageUrls: string[]): void {
  if (typeof window === "undefined") return

  imageUrls.forEach((url) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = url
    document.head.appendChild(link)
  })
}

// Function to generate low-quality image placeholders (LQIP)
// This would normally be done at build time, but we're simulating it here
export function generatePlaceholderUrl(width = 20, height = 15): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`
}
