import Image from 'next/image'
import Link from 'next/link'

export default function FightCrimePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/crime-hero.jpg"
          alt="Fighting Crime"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Fight Crime
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our plan to make Erdington safer with tougher policing and stronger sentences.
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
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our Crime Fighting Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">More Police on Streets</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will increase visible policing and ensure officers spend more time on the beat.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Increased police presence in Erdington</li>
                    <li>Focus on neighborhood policing</li>
                    <li>Rapid response to emergencies</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Tougher Sentences</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will ensure criminals face proper punishment and victims see justice done.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Mandatory minimum sentences</li>
                    <li>End early release for violent offenders</li>
                    <li>Better support for victims</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Community Safety</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will work with communities to prevent crime and make neighborhoods safer.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Expand CCTV coverage</li>
                    <li>Better street lighting</li>
                    <li>Support neighborhood watch schemes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our crime fighting plan will deliver real improvements for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>Safer streets and public spaces</li>
                  <li>Reduced anti-social behavior</li>
                  <li>Better protection for local businesses</li>
                  <li>Faster police response times</li>
                  <li>Stronger community partnerships</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Crime Fighting Plan</h2>
              <p className="text-lg mb-8">
                Join us in making Erdington safer for everyone with tougher policing and stronger justice.
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
