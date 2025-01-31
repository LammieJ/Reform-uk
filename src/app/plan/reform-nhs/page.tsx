import Image from 'next/image'
import Link from 'next/link'

export default function ReformNHSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/nhs-hero.jpg"
          alt="NHS Reform"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Reform the NHS
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our plan to cut waiting lists and deliver better healthcare for Erdington residents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Key Points */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Our NHS Reform Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Cut Waiting Lists</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We will take immediate action to reduce NHS waiting lists and ensure faster access to treatment.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Increase use of private sector capacity</li>
                    <li>Streamline referral processes</li>
                    <li>Expand diagnostic capabilities</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Improve GP Access</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We will ensure everyone can see a GP within a reasonable timeframe and restore the doctor-patient relationship.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>7-day GP access</li>
                    <li>More face-to-face appointments</li>
                    <li>Better use of technology</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Mental Health Services</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We will improve access to mental health services and reduce waiting times for treatment.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Expand community mental health teams</li>
                    <li>Increase crisis support</li>
                    <li>Better integration with social care</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 p-8 rounded-xl">
                <p className="text-lg text-gray-700 mb-6">
                  Our NHS reform plan will deliver real improvements for Erdington residents:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-4">
                  <li>Shorter waiting times at local hospitals</li>
                  <li>Better access to GP services</li>
                  <li>Improved local mental health support</li>
                  <li>More efficient use of NHS resources</li>
                  <li>Better integration of health and social care</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our NHS Reform Plan</h2>
              <p className="text-lg mb-8">
                Join us in building a better NHS that works for everyone in Erdington.
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
