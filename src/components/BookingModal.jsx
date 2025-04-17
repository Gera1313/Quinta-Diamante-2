import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingModal({ isOpen, setIsOpen, initialEventType }) {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: initialEventType,
    guests: '1'
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      eventType: initialEventType
    }));
  }, [initialEventType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', { ...formData, date: startDate });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-quinta-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-quinta-black text-gray-400 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-white mb-6">
                      Book Your Event
                    </Dialog.Title>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
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
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-white">
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          id="eventType"
                          required
                          value={formData.eventType}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                        >
                          <option value="day-pass">Day Pass</option>
                          <option value="private-event">Private Event (4 hours)</option>
                          <option value="full-day">Full Day Rental</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-white">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          name="guests"
                          id="guests"
                          min="1"
                          max="50"
                          required
                          value={formData.guests}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Date
                        </label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-quinta-gold sm:text-sm sm:leading-6"
                          minDate={new Date()}
                        />
                      </div>
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full rounded-md bg-quinta-gold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-quinta-gold/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quinta-gold"
                        >
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}