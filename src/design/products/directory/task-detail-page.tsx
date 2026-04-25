import Link from 'next/link'
import { ArrowRight, ChevronLeft, Globe, Mail, MapPin, Phone, ShieldCheck, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const cleanWebsite = website.replace(/^https?:\/\//i, '').replace(/\/$/, '')
  const trustCues = [
    phone ? 'Verified phone contact' : 'Contact-ready listing',
    website ? 'Direct website access' : 'Public listing visibility',
    location ? 'Address and map context' : 'Category-aligned business card',
    related.length ? 'Related listings nearby' : 'Focused listing profile',
  ]

  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-950">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href={taskRoute}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
        >
          <ChevronLeft className="h-4 w-4" /> Back to {taskLabel}
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <ContentImage src={images[0]} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 backdrop-blur">
                    {category || taskLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent p-5">
                  <h1 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">{post.title}</h1>
                </div>
              </div>

              {images.length > 1 ? (
                <div className="grid grid-cols-4 gap-3 border-t border-slate-200 p-4 sm:gap-4">
                  {images.slice(1, 5).map((image) => (
                    <div key={image} className="relative h-20 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-24">
                      <ContentImage src={image} alt={post.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">About this listing</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Business overview</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">{description}</p>

              {highlights.length ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.slice(0, 6).map((item) => (
                    <div key={item} className="rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          </div>

          <aside className="space-y-6">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-7 lg:sticky lg:top-24">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Contact and trust</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Listing snapshot</h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {location ? (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <p className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <MapPin className="h-3.5 w-3.5" /> Address
                    </p>
                    <p>{location}</p>
                  </div>
                ) : null}
                {phone ? (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <p className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <Phone className="h-3.5 w-3.5" /> Phone
                    </p>
                    <a href={`tel:${phone}`} className="hover:underline">
                      {phone}
                    </a>
                  </div>
                ) : null}
                {email ? (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <p className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <Mail className="h-3.5 w-3.5" /> Email
                    </p>
                    <a href={`mailto:${email}`} className="break-all hover:underline">
                      {email}
                    </a>
                  </div>
                ) : null}
                {website ? (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <p className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <Globe className="h-3.5 w-3.5" /> Website
                    </p>
                    <a href={website} target="_blank" rel="noreferrer" className="break-all hover:underline">
                      {cleanWebsite}
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {website ? (
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Visit website <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
                <Link
                  href={taskRoute}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Browse more
                </Link>
              </div>
            </article>

            {mapEmbedUrl ? (
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Location map</p>
                </div>
                <iframe
                  src={mapEmbedUrl}
                  title={`${post.title} map`}
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </article>
            ) : null}

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Quick trust cues</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {trustCues.map((item) => (
                  <div key={item} className="rounded-[1.1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </aside>
        </section>

        {related.length ? (
          <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Related surfaces</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Keep browsing nearby matches.</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                <Tag className="h-3.5 w-3.5" /> {category || taskLabel}
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
