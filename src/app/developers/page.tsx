import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const resources = [
  { title: 'API overview', description: 'Understand authentication, routes, and common integration flows.' },
  { title: 'Webhooks', description: 'Get real-time events for listings, profiles, and classified updates.' },
  { title: 'SDK guides', description: 'Reference examples for frontend and server integrations.' },
]

export default function DevelopersPage() {
  return (
    <PageShell
      title="Developers"
      description="Build integrations and workflows on top of Being Adviser with reliable developer resources."
      actions={
        <Button asChild>
          <Link href="/contact">Request API access</Link>
        </Button>
      }
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <p className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
          <Code2 className="h-3.5 w-3.5" />
          Developer hub
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Launch integrations quickly with clear docs and support</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          Use APIs and webhooks to automate listings, sync profile data, and keep content updated across your systems.
        </p>
        <Button asChild className="mt-5 rounded-full px-5">
          <Link href="/status">
            View platform status
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.title} className="border-slate-200 bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-950">{resource.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </PageShell>
  )
}
