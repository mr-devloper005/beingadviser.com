import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Essential Cookies', body: 'Required for authentication and core features.' },
  { title: 'Analytics Cookies', body: 'Help us understand how the platform is used.' },
  { title: 'Preference Cookies', body: 'Remember your settings and saved filters.' },
]

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookie Policy"
      description="Details about the cookies we use."
    >
      <section className="mb-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Cookie usage focused on performance and experience</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          Cookies help with authentication, analytics, and saved preferences while supporting stable platform
          performance.
        </p>
      </section>
      <Card className="border-slate-200 bg-white">
        <CardContent className="p-6 space-y-4">
          <p className="text-xs text-slate-500">Last updated: March 16, 2026</p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-950">{section.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
