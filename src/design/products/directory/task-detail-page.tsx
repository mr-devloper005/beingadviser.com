import Link from 'next/link'
import { ChevronLeft, Globe, Mail, MapPin, Phone, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { DirectoryImageGallery } from '@/components/tasks/directory-image-gallery'
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
  const descriptionHtml = formatRichHtml(description, 'Details coming soon.')
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

        <section className="space-y-8">
          <article className="rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
              <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4">
                <div className="relative h-28 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-32">
                  <ContentImage src={images[0]} alt={post.title} fill className="object-cover" />
                </div>
                <p className="mt-3 line-clamp-2 text-sm font-semibold text-slate-900">{post.title}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Link href="#reviews" className="text-sm font-semibold text-amber-600 hover:underline">
                    See all reviews
                  </Link>
                  {location ? (
                    <p className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{location}</span>
                    </p>
                  ) : null}
                </div>
                <div className="mt-4 border-t border-slate-200 pt-4" />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                    <Tag className="h-3.5 w-3.5" />
                    {category || taskLabel}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex min-w-[152px] items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-600"
                    >
                      Send Email
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex min-w-[152px] cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
                      disabled
                    >
                      Email Unavailable
                    </button>
                  )}
                  {phone ? (
                    <a
                      href={`tel:${phone}`}
                      className="inline-flex min-w-[152px] items-center justify-center rounded-md border border-amber-400 bg-white px-5 py-3 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-50"
                    >
                      Call
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex min-w-[152px] cursor-not-allowed items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-400"
                      disabled
                    >
                      Call Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <article className="rounded-[1rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
              <h2 className="text-[30px] font-semibold tracking-[-0.02em] text-slate-900">About</h2>
              <RichContent html={descriptionHtml} className="mt-4 max-w-none text-sm leading-8 text-slate-600" />

              {highlights.length ? (
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {highlights.slice(0, 6).map((item) => (
                    <div key={item} className="rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
              {website ? (
                <p className="mt-8 text-sm font-semibold italic text-amber-600">{cleanWebsite}</p>
              ) : null}
            </article>

            <aside className="space-y-6">
              <article className="rounded-[1rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                <h3 className="text-[30px] font-semibold tracking-[-0.02em] text-slate-900">Contact</h3>
                {location ? (
                  <p className="mt-4 inline-flex items-start gap-2 text-sm leading-7 text-slate-600">
                    <MapPin className="mt-1 h-4 w-4 shrink-0" />
                    <span>{location}</span>
                  </p>
                ) : null}

                <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 text-sm">
                  {phone ? (
                    <div className="flex items-center justify-between gap-3 py-3">
                      <span className="font-semibold text-slate-900">Office</span>
                      <a href={`tel:${phone}`} className="text-slate-600 hover:underline">
                        {phone}
                      </a>
                    </div>
                  ) : null}
                  {phone ? (
                    <div className="flex items-center justify-between gap-3 py-3">
                      <span className="font-semibold text-slate-900">Mobile</span>
                      <a href={`tel:${phone}`} className="text-slate-600 hover:underline">
                        {phone}
                      </a>
                    </div>
                  ) : null}
                  {email ? (
                    <div className="flex items-center justify-between gap-3 py-3">
                      <span className="font-semibold text-slate-900">Email</span>
                      <a href={`mailto:${email}`} className="break-all text-slate-600 hover:underline">
                        {email}
                      </a>
                    </div>
                  ) : null}
                  {website ? (
                    <div className="flex items-center justify-between gap-3 py-3">
                      <span className="font-semibold text-slate-900">Website</span>
                      <a href={website} target="_blank" rel="noreferrer" className="text-slate-600 hover:underline">
                        {cleanWebsite}
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>

              {mapEmbedUrl ? (
                <article className="overflow-hidden rounded-[1rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                  <div className="border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Location map</p>
                  </div>
                  <iframe
                    src={mapEmbedUrl}
                    title={`${post.title} map`}
                    className="h-[260px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </article>
              ) : null}

            </aside>
          </div>
        </section>

        {images.length > 1 ? (
          <section className="mt-8 rounded-[1rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <DirectoryImageGallery images={images.slice(1, 5)} title={post.title} />
          </section>
        ) : null}

        {related.length ? (
          <section id="reviews" className="mt-10 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : (
          <section id="reviews" className="mt-10 rounded-[1rem] border border-slate-200 bg-white p-8 text-center text-sm text-slate-600 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            No listing found.
          </section>
        )}
      </main>
    </div>
  )
}
