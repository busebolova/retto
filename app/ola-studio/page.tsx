import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import OlaStudioClient from "./ola-studio-client"

export const metadata = pageMetadata("Ola Studio – Yazılım ve Tasarım", "Retto Creative yazılım geliştirme ve dijital tasarım stüdyosu.", "/ola-studio")

export default function OlaStudioPage() {
  return <OlaStudioClient />
}
