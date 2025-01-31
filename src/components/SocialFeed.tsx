export default function SocialFeed() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-reform-primary/5 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">ReformUK Erdington Facebook Group</h3>
            <p className="text-lg text-gray-700 mb-6">
              Join our Facebook group to connect with local supporters, stay updated on events, and be part of the conversation.
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
        </div>
      </div>
    </div>
  )
}
