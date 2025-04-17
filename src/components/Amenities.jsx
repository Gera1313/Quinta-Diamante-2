import { FaSwimmingPool, FaGlassMartiniAlt, FaRestroom, FaChair, FaMusic, FaParking } from 'react-icons/fa';

const amenities = [
  {
    name: 'Luxury Pool',
    description: 'Spacious swimming pool with temperature control and night lighting',
    icon: FaSwimmingPool
  },
  {
    name: 'Full-Service Bar',
    description: 'Premium drinks and cocktails available with professional service',
    icon: FaGlassMartiniAlt
  },
  {
    name: 'Modern Restrooms',
    description: 'Clean and well-maintained facilities for all guests',
    icon: FaRestroom
  },
  {
    name: 'Comfortable Seating',
    description: 'Loungers, tables, and covered areas for relaxation',
    icon: FaChair
  },
  {
    name: 'Sound System',
    description: 'Professional audio equipment for music and announcements',
    icon: FaMusic
  },
  {
    name: 'Ample Parking',
    description: 'Secure parking space for all your guests',
    icon: FaParking
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-quinta-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Amenities
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Everything you need for the perfect pool day or event
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="flex flex-col items-center p-6 bg-quinta-black/50 rounded-lg border border-gray-800">
              <amenity.icon className="h-12 w-12 text-quinta-gold" />
              <h3 className="mt-4 text-xl font-semibold text-white">{amenity.name}</h3>
              <p className="mt-2 text-gray-300 text-center">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}