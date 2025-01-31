'use client'

import { useState } from 'react'
import EventCard from './EventCard'

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  imageUrl: string
  registrationUrl: string
}

interface EventsClientProps {
  events: Event[]
}

export default function EventsClient({ events }: EventsClientProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-center mb-6 text-reform-dark dark:text-white">
            Upcoming Events
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Join us at our upcoming events to learn more about our vision for Erdington and how you can get involved in making positive change in our community.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-reform-primary dark:focus:ring-reform-light"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2 text-reform-dark dark:text-white">No events found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or check back later for new events.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
