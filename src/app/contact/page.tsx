import Link from 'next/link'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const lanes = [
  {
    icon: Building2,
    title: 'Listings & business profiles',
    body: 'Get help publishing, updating, or verifying your business so customers see accurate details.',
  },
  {
    icon: Phone,
    title: 'Partnerships & sales',
    body: 'Discuss bulk onboarding, integrations, or programs that fit your organization.',
  },
  {
    icon: MapPin,
    title: 'Coverage & local programs',
    body: 'Request new areas, categories, or community initiatives we should prioritize.',
  },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <PageShell
      title="Contact Us"
      description={`Tell ${SITE_CONFIG.name} what you need—support, partnerships, or feedback—and we will route it to the right team.`}
      actions={
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/help">Help Center</Link>
        </Button>
      }
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">We respond with context, not generic replies</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          Share enough detail in your message so we can suggest the next step quickly—whether that is account help, a
          listing change, or a partnership conversation.
        </p>
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          {lanes.map((lane) => (
            <Card key={lane.title} className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <lane.icon className="h-5 w-5 text-slate-700" />
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{lane.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{lane.body}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="flex flex-wrap items-center gap-4 p-6">
              <Mail className="h-5 w-5 text-slate-700" />
              <div>
                <p className="text-sm font-semibold text-slate-950">Prefer email?</p>
                <p className="text-sm text-slate-600">Use the form — replies go to the address you provide.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">Fields below are for UI only until a backend form is connected.</p>
            <form className="mt-6 grid gap-4">
              <input
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 placeholder:text-slate-400"
                placeholder="Your name"
                name="name"
                autoComplete="name"
              />
              <input
                type="email"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 placeholder:text-slate-400"
                placeholder="Email address"
                name="email"
                autoComplete="email"
              />
              <input
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 placeholder:text-slate-400"
                placeholder="Subject (e.g. Listing update, partnership)"
                name="subject"
              />
              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
                placeholder="Share the full context so we can respond with the right next step."
                name="message"
              />
              <Button type="submit" className="h-12 rounded-full font-semibold">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
