const packages = [
  {
    name: 'Day Pass',
    price: '$50',
    duration: 'Per person',
    eventType: 'day-pass',
    features: [
      'Pool access from 11 AM to 7 PM',
      'Lounge chair',
      'Access to restrooms',
      'Basic amenities'
    ]
  },
  {
    name: 'Private Event',
    price: '$500',
    duration: '4 hours',
    eventType: 'private-event',
    features: [
      'Exclusive pool access',
      'Full venue rental',
      'Basic setup included',
      'Up to 30 guests',
      'Bar service available',
      'Sound system access'
    ],
    featured: true
  },
  {
    name: 'Full Day Rental',
    price: '$900',
    duration: '8 hours',
    eventType: 'full-day',
    features: [
      'Exclusive pool access',
      'Full venue rental',
      'Extended hours',
      'Up to 50 guests',
      'Bar service available',
      'Sound system access',
      'Basic decoration included'
    ]
  }
];

export default function Pricing({ onBook }) {
  return (
    <section id="pricing" className="py-24 bg-quinta-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Choose the perfect package for your event
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                pkg.featured
                  ? 'bg-quinta-gold/10 border-2 border-quinta-gold ring-1 ring-quinta-gold'
                  : 'bg-quinta-black/50 border border-gray-800 hover:border-quinta-gold/50 hover:bg-quinta-gold/5'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-quinta-gold text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                {pkg.price}
                <span className="text-base font-normal text-gray-300"> / {pkg.duration}</span>
              </p>
              <ul className="mt-8 space-y-3 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-300">
                    <svg className="h-6 w-6 flex-none text-quinta-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onBook(pkg.eventType)}
                className={`mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  pkg.featured
                    ? 'bg-quinta-gold text-white hover:bg-quinta-gold/90 focus-visible:outline-quinta-gold'
                    : 'text-quinta-gold ring-1 ring-inset ring-quinta-gold hover:bg-quinta-gold hover:text-white'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}