import { getContent } from '@/utils/content'
import EventsClient from '@/components/EventsClient'

const mockEvents = [
  {
    id: '1',
    title: 'Community Meeting: Local Issues',
    date: 'February 15, 2025',
    location: 'Castle Vale Community Centre',
    description: 'Join us for an open discussion about local issues affecting Castle Vale and surrounding areas. Share your concerns and ideas for improvement.',
    imageUrl: '/images/events-hero.jpg',
    registrationUrl: '/events/community-meeting',
  },
  {
    id: '2',
    title: 'Reform UK Erdington Campaign Launch',
    date: 'February 20, 2025',
    location: 'Erdington Community Centre',
    description: 'Be part of our official campaign launch in Erdington. Learn about our vision for the area and how you can get involved.',
    imageUrl: '/images/hero.jpg',
    registrationUrl: '/events/campaign-launch',
  },
  {
    id: '3',
    title: 'Local Business Forum',
    date: 'March 1, 2025',
    location: 'Pype Hayes Community Hall',
    description: 'A forum for local business owners to discuss economic growth opportunities and challenges in the Erdington area.',
    imageUrl: '/images/growth-hero.jpg',
    registrationUrl: '/events/business-forum',
  },
]

export default function EventsPage() {
  const content = getContent()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-reform-dark to-reform-primary dark:from-black dark:to-reform-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl text-white/90">
              {content.events.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <EventsClient events={mockEvents} />
    </div>
  )
}
