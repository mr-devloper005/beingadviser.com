import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'

const highlights = [
  { label: 'Local searches completed monthly', value: '250K+' },
  { label: 'Verified business profiles', value: '9.4K' },
  { label: 'Helpful responses on classifieds', value: '41K+' },
]

const pillars = [
  {
    title: 'Trust before traffic',
    description: 'Business profiles include stronger identity signals so visitors can decide quickly with confidence.',
  },
  {
    title: 'Clarity over clutter',
    description: 'Layouts are intentionally clean so search, comparison, and contact actions stay easy on every page.',
  },
  {
    title: 'Community-supported',
    description: 'People share practical updates, recommendations, and local opportunities that keep listings fresh.',
  },
]

const journey = [
  { year: '2022', note: 'Started as a simple listing board for local services.' },
  { year: '2024', note: 'Expanded into classifieds and profile-led discovery experiences.' },
  { year: '2026', note: 'Rebuilt with faster browsing flows and richer trust-focused page layouts.' },
]

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} helps people discover trusted businesses, useful classifieds, and local updates in one modern platform.`}
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/team">Meet the Team</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Partner with Us</Link>
          </Button>
        </>
      }
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              <Sparkles className="h-3.5 w-3.5" />
              Why we exist
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              A clearer local discovery experience for people who want answers, not noise.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">
              {SITE_CONFIG.name} is built to reduce decision fatigue. Instead of endless scrolling, we focus on useful
              information, fast filtering, and direct actions like calling, saving, or contacting in a few clicks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-5">
                <Link href="/listings">
                  Explore listings
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full px-5">
                <Link href="/classifieds">Browse classifieds</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="border-slate-200 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-slate-950">What guides every decision</h3>
            <div className="mt-5 space-y-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <CheckCircle2 className="h-4 w-4 text-slate-700" />
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-7">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <ShieldCheck className="h-4 w-4" />
              Platform journey
            </p>
            <div className="mt-5 space-y-5">
              {journey.map((item) => (
                <div key={item.year} className="border-l-2 border-slate-200 pl-4">
                  <p className="text-sm font-semibold text-slate-950">{item.year}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">People behind the platform</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">Team members focused on quality and trust</h3>
          </div>
          <Link href="/team" className="text-sm font-semibold text-slate-950 hover:opacity-70">
            View full team
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <Card key={member.id} className="border-slate-200 bg-white transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{member.name}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{member.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                <p className="mt-3 text-xs text-slate-500">{member.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
