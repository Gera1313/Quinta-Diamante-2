export default function Hero({ onBook }) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="relative h-screen">
        {/* Placeholder for hero image - replace URL with actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: 'url("/hero_image.JPG")'
            backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 h-full flex items-center">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
              Welcome to Quinta Diamante
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
              Experience luxury and relaxation at our exclusive pool venue. Perfect for events, celebrations, or a private day of leisure in Acuña, Coahuila.
            </p>
            <div className="mt-10 flex gap-x-6">
              <button
                onClick={onBook}
                className="rounded-md bg-quinta-gold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-quinta-gold/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quinta-gold"
              >
                Book Now
              </button>
              <a
                href="#amenities"
                className="text-sm font-semibold leading-6 text-white hover:text-quinta-gold"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}