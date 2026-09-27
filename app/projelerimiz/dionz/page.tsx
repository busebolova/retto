import { pageMetadata } from "@/lib/seo"
import DionzClient from "./dionz-client"
export const metadata = pageMetadata("DIONZ – Marka Kimliği ve Web Sitesi", "Dijital pazarlama ajansı DIONZ için geliştirdiğimiz marka kimliği ve web sitesi tasarımı projesi.", "/projelerimiz/dionz")
export default function Page() { return <DionzClient /> }
