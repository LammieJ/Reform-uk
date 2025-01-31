import { getContent } from '@/utils/content'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { Metadata } from 'next'

const EventsClient = dynamic(() => import('@/components/EventsClient'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Events | Reform UK Erdington',
  description: 'Join Reform UK Erdington at our local events. Get involved in our community activities, political discussions, and help shape the future of Erdington.',
  openGraph: {
    title: 'Events | Reform UK Erdington',
    description: 'Join us at our local events and help shape the future of Erdington. Find out about upcoming meetings, community activities, and political discussions.',
    images: [{ url: '/images/events-hero.jpg', width: 1200, height: 630, alt: 'Reform UK Erdington Events' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | Reform UK Erdington',
    description: 'Join us at our local events and help shape the future of Erdington. Find out about upcoming meetings, community activities, and political discussions.',
    images: ['/images/events-hero.jpg'],
  },
}

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
          alt="Reform UK Erdington Events"
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <EventsClient content={events} />
        </div>
      </section>
    </div>
  )
}
