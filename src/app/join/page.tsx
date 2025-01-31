export default function JoinPage() {
  const membershipTypes = [
    {
      title: "Member",
      description: "Full membership with voting rights and exclusive benefits",
      benefits: ["Voting rights", "Members-only events", "Policy input", "Regular newsletters"],
      url: "https://www.reformparty.uk/join_member",
      bgColor: "bg-reform-primary"
    },
    {
      title: "Under 25",
      description: "Special membership for young reformers",
      benefits: ["All member benefits", "Youth events", "Network with young reformers", "Shape the future"],
      url: "https://www.reformparty.uk/join_young_member",
      bgColor: "bg-reform-secondary"
    },
    {
      title: "Supporter",
      description: "Show your support for Reform UK",
      benefits: ["Support our campaigns", "Stay informed", "Local event invitations", "Make a difference"],
      url: "https://www.reformparty.uk/donate-1",
      bgColor: "bg-reform-dark"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Reform UK</h1>
            <p className="text-lg md:text-xl text-white/90">
              Choose how you want to support Reform UK and help us reform Britain
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {membershipTypes.map((type, index) => (
              <a
                key={index}
                href={type.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`${type.bgColor} text-white rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:shadow-black/30`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                    <p className="text-white/90 mb-4">{type.description}</p>
                    <ul className="space-y-2 mb-6">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-white/90">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center text-white group-hover:translate-x-1 transition-transform">
                      <span className="mr-2">Join Now</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-reform-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-reform-dark dark:text-white">Make a Difference</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join Reform UK today and help us build a better Britain. Your support will help us campaign for real change.
            </p>
            <a
              href="https://www.reformparty.uk/join_member"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-reform-primary dark:bg-reform-dark text-white rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
