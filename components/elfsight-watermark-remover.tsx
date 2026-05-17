"use client"

import { useEffect } from "react"

export default function ElfsightWatermarkRemover() {
  useEffect(() => {
    // Function to hide Elfsight watermarks and admin panels
    const hideWatermarks = () => {
      const watermarkSelectors = [
        ".eapps-widget-toolbar",
        ".eapps-instagram-feed-container-free",
        ".eapps-instagram-feed-free-label",
        ".eapps-instagram-feed-header-free",
        ".eui-widget-title",
        ".eapps-instagram-feed-title",
        "[class*='eapps-widget-show']",
        "[class*='eapps-widget-toolbar']",
        "[class*='-free']",
      ]

      watermarkSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.display = "none"
            element.style.opacity = "0"
            element.style.visibility = "hidden"
            element.style.height = "0"
            element.style.overflow = "hidden"
            element.style.pointerEvents = "none"
          }
        })
      })
    }

    // Run immediately
    hideWatermarks()

    // Set up an interval to keep checking for watermarks
    const interval = setInterval(hideWatermarks, 1000)

    // Set up a mutation observer to detect when new elements are added to the DOM
    const observer = new MutationObserver((mutations) => {
      hideWatermarks()
    })

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true })

    // Clean up
    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}
