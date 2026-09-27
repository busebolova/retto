import { notFound } from "next/navigation"
import { projectsData } from "@/lib/projects"
import { pageMetadata } from "@/lib/seo"
import ProjectClient from "./project-client"

type Props = { params: { slug: string } }
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}
export function generateMetadata({ params }: Props) {
  const project = projectsData[params.slug as keyof typeof projectsData]
  if (!project) notFound()
  return pageMetadata(project.title + " – " + project.category, project.description, "/projelerimiz/" + params.slug)
}
export default function Page({ params }: Props) {
  if (!Object.hasOwn(projectsData, params.slug)) notFound()
  return <ProjectClient params={params} />
}
