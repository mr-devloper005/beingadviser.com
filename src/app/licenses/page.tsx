import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const licenses = [
  { name: 'Next.js', description: 'MIT License' },
  { name: 'React', description: 'MIT License' },
  { name: 'Tailwind CSS', description: 'MIT License' },
]

export default function LicensesPage() {
  return (
    <PageShell
      title="Licenses"
      description="Open source licenses and acknowledgements."
    >
      <section className="mb-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Open-source acknowledgements and license details</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          We rely on trusted open-source technologies and respect their licensing terms.
        </p>
      </section>
      <Card className="border-slate-200 bg-white">
        <CardContent className="p-6 space-y-3">
          {licenses.map((license) => (
            <div key={license.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-950">{license.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{license.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
