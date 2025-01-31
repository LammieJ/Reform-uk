export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Join Reform UK
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Be part of the change. Help us build a better Britain.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Membership Options */}
            <div className="grid gap-8 mb-16">
              {/* Standard Membership */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">Standard Membership</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Join Reform UK and help us bring real change to Britain. Your membership includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>Membership card</li>
                  <li>Regular updates from Reform UK</li>
                  <li>Invitations to local and national events</li>
                  <li>Opportunity to shape party policy</li>
                </ul>
                <a
                  href="https://www.reformparty.uk/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-reform-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-light transition-colors duration-200"
                >
                  Join Now
                </a>
              </div>

              {/* Armed Forces Membership */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">Armed Forces Membership</h2>
                <p className="text-lg text-gray-700 mb-6">
                  For serving and veteran members of HM Armed Forces:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>All standard membership benefits</li>
                  <li>Recognition of your service</li>
                  <li>Special Armed Forces events</li>
                </ul>
                <a
                  href="https://www.reformparty.uk/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-reform-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-light transition-colors duration-200"
                >
                  Join Now
                </a>
              </div>

              {/* Young Reformers */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">Young Reformers (Under 25)</h2>
                <p className="text-lg text-gray-700 mb-6">
                  For members under 25 years old:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>All standard membership benefits</li>
                  <li>Young Reformers network</li>
                  <li>Special youth events and activities</li>
                </ul>
                <a
                  href="https://www.reformparty.uk/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-reform-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-light transition-colors duration-200"
                >
                  Join Now
                </a>
              </div>
            </div>

            {/* Local Group */}
            <div className="bg-reform-primary/5 p-8 rounded-xl text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Join Our Local Group</h2>
              <p className="text-lg text-gray-700 mb-6">
                Connect with Reform UK supporters in Erdington. Get involved in local campaigns and events.
              </p>
              <a
                href="https://www.facebook.com/groups/916932353577131/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-reform-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-light transition-colors duration-200"
              >
                Join Facebook Group
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-reform-primary/5 p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-gray-700 mb-6">
                Subscribe to our newsletter for updates on local events, campaigns, and ways to get involved.
              </p>
              <a
                href="/contact"
                className="inline-block bg-reform-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-light transition-colors duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
