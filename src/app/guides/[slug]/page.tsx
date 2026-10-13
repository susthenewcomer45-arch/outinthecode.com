import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { GuideBody } from "@/components/GuideBody"
import { getGuide, guides } from "@/lib/guides"

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return {
    title: `${guide.title} — outinthecode`,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()
  return <GuideBody guide={guide} />
}
