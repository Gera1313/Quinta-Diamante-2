import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('private-event');

  const handleBooking = (eventType = 'private-event') => {
    setSelectedEventType(eventType);
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-quinta-black">
        <Navbar onBook={handleBooking} />
        <main>
          <Hero onBook={handleBooking} />
          <Amenities />
          <Gallery />
          <Pricing onBook={handleBooking} />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BookingModal 
          isOpen={isBookingOpen} 
          setIsOpen={setIsBookingOpen}
          initialEventType={selectedEventType}
        />
      </div>
    </Router>
  );
}

export default App;