import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const featured = {
  title: 'How local-first discovery improves trust and response quality',
  summary:
    'A practical look at why structured listings and clear profile context outperform generic social-style feeds.',
  category: 'Product',
}

const posts = [
  {
    title: 'Designing listing pages that convert faster',
    category: 'Design',
    readTime: '6 min read',
  },
  {
    title: 'Moderation workflows for healthy community spaces',
    category: 'Community',
    readTime: '8 min read',
  },
  {
    title: 'Metadata patterns that improve local search quality',
    category: 'Engineering',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="Fresh product updates, practical guides, and insights from the Being Adviser team."
    >
      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <Badge className="bg-slate-950 text-white">Featured story</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{featured.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">{featured.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="rounded-full px-5">
            <Link href="/articles">
              Read latest posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-5">
            <Link href="/about">About our editorial approach</Link>
          </Button>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="border-slate-200 bg-white transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-500">{post.readTime}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </PageShell>
  )
}
