import Image from 'next/image'
import { EventbriteEvent, formatEventDate } from '@/utils/eventbrite'

interface EventCardProps {
  event: EventbriteEvent
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {event.logo?.url && (
        <div className="relative h-48 w-full">
          <Image
            src={event.logo.url}
            alt={event.name.text}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.name.text}</h3>
        
        <div className="mb-4 text-reform-secondary">
          <time dateTime={event.start.local}>
            {formatEventDate(event.start.local)}
          </time>
        </div>
        
        <div className="mb-6 text-gray-600 line-clamp-3">
          {event.description.text}
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold ${
            event.is_free ? 'text-green-600' : 'text-reform-primary'
          }`}>
            {event.is_free ? 'Free Event' : 'Paid Event'}
          </span>
          
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  )
}
