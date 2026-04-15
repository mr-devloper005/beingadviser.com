import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account information, usage analytics, and content you submit.' },
  { title: 'How We Use Data', body: 'To personalize your experience, improve search, and keep the platform secure.' },
  { title: 'Your Choices', body: 'You can manage email preferences and delete your account at any time.' },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How we collect, use, and protect your information."
    >
      <section className="mb-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Privacy-first data handling with clear user control</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          We collect only what is needed to operate and improve the platform, with transparency about usage and choices.
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
