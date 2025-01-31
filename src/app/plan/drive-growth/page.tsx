import Image from 'next/image'
import Link from 'next/link'

export default function DriveGrowthPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/growth-hero.jpg"
          alt="Economic Growth"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Drive Growth
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our plan to boost economic growth through deregulation and business support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Key Points */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our Growth Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Cut Red Tape</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will slash bureaucracy and make it easier to do business in Erdington.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Simplify business regulations</li>
                    <li>Speed up planning processes</li>
                    <li>Reduce paperwork burden</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Support Local Business</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will create the conditions for local businesses to thrive and expand.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Reduce business rates by 50%</li>
                    <li>Support for startups and entrepreneurs</li>
                    <li>Improve access to finance</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Attract Investment</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will make Erdington a magnet for new business and investment.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Create enterprise zones</li>
                    <li>Improve local infrastructure</li>
                    <li>Develop skilled workforce</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our growth plan will deliver real benefits for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>More local jobs and opportunities</li>
                  <li>Thriving high street businesses</li>
                  <li>Increased investment in local area</li>
                  <li>Better paid employment</li>
                  <li>Stronger local economy</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Growth Plan</h2>
              <p className="text-lg mb-8">
                Join us in building a more prosperous Erdington with more jobs and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/join"
                  className="bg-white text-reform-primary px-8 py-4 rounded-lg font-semibold hover:bg-reform-light hover:text-white transition-colors duration-200"
                >
                  Join Reform UK
                </Link>
                <a
                  href="https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-reform-primary transition-colors duration-200"
                >
                  Read Our Contract
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
