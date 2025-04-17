import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-quinta-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Get in touch with us for any questions or reservations
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-quinta-gold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-quinta-gold/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quinta-gold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="mt-2 text-gray-300">
                123 Quinta Street<br />
                Acuña, Coahuila<br />
                Mexico
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              <p className="mt-2 text-gray-300">
                Email: info@quintadiamante.com<br />
                Phone: +52 (123) 456-7890<br />
                WhatsApp: +52 (123) 456-7890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Hours of Operation</h3>
              <p className="mt-2 text-gray-300">
                Monday - Sunday: 11:00 AM - 7:00 PM<br />
                Private events: Available upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}