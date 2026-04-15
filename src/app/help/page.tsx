import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const topics = [
  { title: 'Getting Started', description: 'Create your account and publish your first post.' },
  { title: 'Bookmarks & Collections', description: 'Save links, organize folders, and share collections.' },
  { title: 'Listings & Ads', description: 'Manage your business listings and classifieds.' },
]

export default function HelpPage() {
  return (
    <PageShell
      title="Help Center"
      description="Find answers, guides, and best practices."
      actions={
        <Button asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      }
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Support designed for quick resolution</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">
          Browse topic-based help guides, then move to FAQs for common edge cases. If you still need help, our support
          team is one message away.
        </p>
      </section>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <Card key={topic.title} className="border-slate-200 bg-white transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-slate-950">{topic.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-950">FAQ</h3>
            <Accordion type="single" collapsible className="mt-4">
              {mockFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
