import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  { name: 'Web App', status: 'Operational' },
  { name: 'API', status: 'Operational' },
  { name: 'Media CDN', status: 'Operational' },
]

const incidents = [
  { date: 'Mar 12, 2026', title: 'Delayed notifications', status: 'Resolved' },
  { date: 'Feb 22, 2026', title: 'Search indexing lag', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      title="System Status"
      description="Real-time uptime and service health."
    >
      <section className="mb-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Reliable infrastructure with transparent reporting</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          We monitor core platform systems continuously and publish meaningful updates when incidents happen.
        </p>
      </section>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name} className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-slate-950">{service.name}</h2>
                <Badge className="mt-3" variant="secondary">{service.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-950">Incident History</h3>
            <div className="mt-4 space-y-3">
              {incidents.map((incident) => (
                <div key={incident.title} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="text-xs text-slate-500">{incident.date}</div>
                  <div className="text-sm font-medium text-slate-950">{incident.title}</div>
                  <div className="text-xs text-slate-500">{incident.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
