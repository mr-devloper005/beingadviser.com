import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { mockTeamMembers } from '@/data/mock-data'

export default function TeamPage() {
  return (
    <PageShell
      title="Team"
      description="The people shaping product quality, trust, and community growth at Being Adviser."
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Built by specialists, guided by users</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          Our team blends product, design, engineering, and community operations to make local discovery faster and
          more trustworthy for everyone.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
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
              <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">{member.location}</p>
                <Badge variant="outline">Core Team</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </PageShell>
  )
}
