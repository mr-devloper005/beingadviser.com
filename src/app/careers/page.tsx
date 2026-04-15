import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'

const roles = [
  { title: 'Product Designer', location: 'Remote', type: 'Full-time', level: 'Mid' },
  { title: 'Frontend Engineer', location: 'New York, NY', type: 'Full-time', level: 'Senior' },
  { title: 'Community Lead', location: 'Remote', type: 'Part-time', level: 'Mid' },
]

const benefits = [
  'Flexible schedules and remote-first culture',
  'Health, dental, and vision coverage',
  'Annual learning stipend',
  'Quarterly offsites and team retreats',
]

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`Help us build the future of community-driven publishing at ${SITE_CONFIG.name}.`}
      actions={
        <Button asChild>
          <Link href="/contact">Apply Now</Link>
        </Button>
      }
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Join a mission-driven team building trusted local discovery</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          We are focused on quality, speed, and thoughtful execution. If you care about solving real-world discovery
          and trust problems, we would love to hear from you.
        </p>
        <Button asChild className="mt-5 rounded-full px-5">
          <Link href="/contact">
            Start your application
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {roles.map((role) => (
            <Card key={role.title} className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{role.level}</Badge>
                  <Badge variant="outline">{role.type}</Badge>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">{role.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{role.location}</p>
                <Button variant="outline" className="mt-4 rounded-full" asChild>
                  <Link href="/contact">View Role</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-950">Why {SITE_CONFIG.name}</h3>
            <p className="mt-2 text-sm text-slate-600">
              We are building a product that helps people discover and share the best knowledge on the web.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                  {benefit}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
