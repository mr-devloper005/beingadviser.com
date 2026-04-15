import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  return (
    <PageShell
      title="Press"
      description="Media resources, brand assets, announcements, and press coverage."
    >
      <section className="mb-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Everything media teams need in one place</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          Access brand visuals, approved product descriptions, and current company information for accurate coverage.
        </p>
      </section>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold text-slate-950">Press Kit</h2>
            <p className="text-sm text-slate-600">
              Media-ready assets for logos, screenshots, and platform messaging.
            </p>
            <div className="grid gap-2">
              {mockPressAssets.map((asset) => (
                <div key={asset.id} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-950">{asset.title}</p>
                      <p className="text-xs text-slate-500">{asset.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{asset.fileType}</Badge>
                      <Badge variant="outline">Media-safe</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {mockPressCoverage.map((item) => (
            <Card key={item.id} className="border-slate-200 bg-white transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-xs uppercase tracking-wide text-slate-500">{item.outlet}</div>
                <p className="mt-2 text-sm text-slate-950">{item.headline}</p>
                <p className="mt-2 text-xs text-slate-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
