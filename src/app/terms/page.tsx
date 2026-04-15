import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  { title: 'Account Usage', body: 'Keep your account secure and follow community guidelines.' },
  {
    title: 'Content Ownership',
    body: 'You own the content you publish and grant the platform a license to display it.',
  },
  { title: 'Acceptable Use', body: 'No spam, harassment, or illegal content.' },
]

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
    >
      <section className="mb-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Fair use, safe participation, and clear responsibilities</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          These terms define acceptable use, publishing rights, and account responsibilities across the platform.
        </p>
      </section>
      <Card className="border-slate-200 bg-white">
        <CardContent className="space-y-4 p-6">
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
