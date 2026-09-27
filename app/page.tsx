import { pageMetadata } from "@/lib/seo"
import ScrollablePage from "../presentation"

export const metadata = pageMetadata(
  "Web Sitesi, Logo Tasarımı ve Kurumsal Kimlik Ajansı",
  "Retto Creative: İzmir merkezli web sitesi, logo tasarımı ve kurumsal kimlik ajansı. Hizmetlerimizi ve projelerimizi inceleyin, markanız için iletişime geçin.",
  "/",
)

export default function Page() {
  return <ScrollablePage />
}
