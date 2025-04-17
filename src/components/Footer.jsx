export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quinta-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quinta Diamante</h3>
            <p className="text-gray-400">Your perfect venue for events and leisure in Acuña, Coahuila.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#amenities" className="text-gray-400 hover:text-quinta-gold">Amenities</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-quinta-gold">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-quinta-gold">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-quinta-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Acuña, Coahuila, Mexico</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@quintadiamante.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {currentYear} Quinta Diamante. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}