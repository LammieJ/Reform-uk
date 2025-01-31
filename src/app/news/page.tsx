import { getContent } from '@/utils/content'
import NewsletterSignup from '@/components/NewsletterSignup'
import SocialFeed from '@/components/SocialFeed'

export default function NewsPage() {
  const content = getContent()
  const { intro, featured } = content.news

  // Split featured news into array of articles
  const articles = featured.split('\n').filter(Boolean).map((article, index) => {
    const [title, ...contentParts] = article.split(':')
    return {
      id: index + 1,
      title: title.trim(),
      content: contentParts.join(':').trim(),
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-reform-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest News
          </h1>
          <div className="prose prose-xl prose-invert">
            <p>{intro}</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <time className="text-sm text-reform-secondary">
                    {article.date}
                  </time>
                  <h2 className="text-2xl font-bold mt-2 mb-4">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.content}
                  </p>
                  <a
                    href="#"
                    className="text-reform-primary hover:text-reform-secondary transition-colors font-semibold"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="bg-reform-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Social Media Updates
          </h2>
          <SocialFeed />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container max-w-xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
