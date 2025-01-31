export default function JoinPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-reform-dark to-reform-primary dark:from-black dark:to-reform-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Join Reform UK Erdington</h1>
            <p className="text-xl text-white/90">
              Be part of the movement to bring positive change to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-reform-dark dark:text-white">Membership Options</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose the membership level that suits you best and join us in making a difference in Erdington.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard Membership */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-reform-primary dark:hover:border-reform-dark transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Standard</h3>
                <div className="text-4xl font-bold mb-6 text-reform-primary dark:text-reform-light">£3<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Regular newsletters
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Members-only events
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Voting rights
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-reform-primary dark:bg-reform-dark text-white rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200">
                  Join Now
                </button>
              </div>

              {/* Premium Membership */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-2 border-reform-primary dark:border-reform-dark transform scale-105">
                <div className="absolute top-0 right-0 bg-reform-primary dark:bg-reform-dark text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Premium</h3>
                <div className="text-4xl font-bold mb-6 text-reform-primary dark:text-reform-light">£5<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All Standard benefits
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority event access
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusive content
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Direct access to team
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-reform-primary dark:bg-reform-dark text-white rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200">
                  Join Now
                </button>
              </div>

              {/* Supporter Membership */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-reform-primary dark:hover:border-reform-dark transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Supporter</h3>
                <div className="text-4xl font-bold mb-6 text-reform-primary dark:text-reform-light">£10<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All Premium benefits
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    VIP event invitations
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Strategy meetings
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Campaign involvement
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-reform-primary dark:bg-reform-dark text-white rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-reform-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-reform-dark dark:text-white">Why Join Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
              As a member of Reform UK Erdington, you'll be part of a growing movement dedicated to bringing positive change to our community.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-reform-dark dark:text-white">Make Your Voice Heard</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Participate in local decision-making and help shape the future of Erdington through regular member meetings and consultations.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-reform-dark dark:text-white">Connect with Others</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a community of like-minded individuals who are passionate about improving our local area and making a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
