import type { Metadata } from "next"
import OlaStudioClient from "./ola-studio-client"

export const metadata: Metadata = {
  title: "Ola Studio - Yazılım & Tasarım Ekibi | Retto Creative",
  description:
    "Retto Creative'in yenilikçi yazılım geliştirme ve dijital tasarım stüdyosu. Modern web uygulamaları, mobil çözümler ve kompleks dijital sistemler geliştiriyoruz.",
}

export default function OlaStudioPage() {
  return <OlaStudioClient />
}
