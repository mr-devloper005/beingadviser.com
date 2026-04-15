import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const spaces = [
  { title: 'Founders Circle', description: 'Conversations on local business growth and operations.' },
  { title: 'Creators Hub', description: 'Tips and resources for profile quality, content, and trust signals.' },
  { title: 'Support Exchange', description: 'Members helping members with practical platform questions.' },
]

export default function CommunityPage() {
  return (
    <PageShell
      title="Community"
      description="Join active member spaces for insights, help, and local discovery updates."
      actions={
        <Button asChild>
          <Link href="/register">Join community</Link>
        </Button>
      }
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">A practical network, not a noisy feed</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          The Being Adviser community brings together business owners, creators, and local explorers who share useful
          context that improves discovery and decisions for everyone.
        </p>
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {spaces.map((space) => (
          <Card key={space.title} className="border-slate-200 bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-950">{space.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{space.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </PageShell>
  )
}
