import { getContent } from '@/utils/content'
import Image from 'next/image'
import Link from 'next/link'

const mockArticles = [
  {
    title: 'Reform UK Erdington Launches Local Campaign',
    date: 'January 30, 2025',
    excerpt: 'Reform UK has officially launched its campaign in Erdington, focusing on key local issues including community safety, economic growth, and public services.',
    image: '/images/hero.jpg',
    url: '/news/campaign-launch',
  },
  {
    title: 'Local Business Initiative Announced',
    date: 'January 28, 2025',
    excerpt: 'New proposals to support local businesses in Erdington, including reduced business rates and improved infrastructure.',
    image: '/images/growth-hero.jpg',
    url: '/news/business-initiative',
  },
  {
    title: 'Community Safety Plan Revealed',
    date: 'January 25, 2025',
    excerpt: 'Comprehensive plan to address community safety concerns in Erdington, including increased police presence and youth programs.',
    image: '/images/crime-hero.jpg',
    url: '/news/safety-plan',
  },
  {
    title: 'Healthcare Services Improvement Plan',
    date: 'January 23, 2025',
    excerpt: 'Detailed proposals for improving local healthcare services, including reduced waiting times and better access to GP services.',
    image: '/images/nhs-hero.jpg',
    url: '/news/healthcare-plan',
  },
  {
    title: 'Local Transport Infrastructure Update',
    date: 'January 20, 2025',
    excerpt: 'Plans revealed for improving local transport links and infrastructure in Erdington and surrounding areas.',
    image: '/images/about-hero.jpg',
    url: '/news/transport-update',
  },
  {
    title: 'Education Investment Program',
    date: 'January 18, 2025',
    excerpt: 'New initiative announced to invest in local schools and education programs in the Erdington area.',
    image: '/images/events-hero.jpg',
    url: '/news/education-program',
  },
]

export default function NewsPage() {
  const content = getContent()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-reform-dark to-reform-primary dark:from-black dark:to-reform-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-white/90">
              Stay informed about our campaign and local developments in Erdington.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-reform-dark dark:text-white">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.url}
                    className="inline-flex items-center text-reform-primary dark:text-reform-light hover:text-reform-primary/80 dark:hover:text-reform-light/80 font-medium group"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-reform-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-reform-dark dark:text-white">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for regular updates on our campaign and local news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-reform-primary dark:focus:ring-reform-light"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-reform-primary dark:bg-reform-dark text-white rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
