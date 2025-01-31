import { getContent } from '@/utils/content'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const EventsClient = dynamic(() => import('@/components/EventsClient'), {
  ssr: false
})

export default function EventsPage() {
  const content = getContent()
  const { events } = content

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/events-hero.jpg"
          alt="ReformUK Erdington Events"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Events
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              {events.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <EventsClient content={events} />
        </div>
      </section>
    </div>
  )
}
