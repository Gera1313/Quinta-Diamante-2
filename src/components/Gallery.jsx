import { useState } from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Main Pool Area',
    description: 'Our signature pool with luxury lounging space'
  },
  {
    url: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Bar & Lounge',
    description: 'Full-service bar with premium drinks'
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Night Ambiance',
    description: 'Beautiful evening lighting for special events'
  },
  {
    url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Seating Area',
    description: 'Comfortable seating arrangements for guests'
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Event Setup',
    description: 'Perfect space for celebrations'
  },
  {
    url: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Pool Side',
    description: 'Relaxing pool side atmosphere'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-quinta-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Take a virtual tour of our beautiful venue
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-left">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}