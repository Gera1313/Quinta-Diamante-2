import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What's included in the venue rental?",
    answer: "The venue rental includes exclusive access to our pool area, changing rooms, restrooms, and basic setup. Additional services like bar service and sound system can be added to your package."
  },
  {
    question: "What's the maximum capacity?",
    answer: "Our venue can accommodate up to 50 guests comfortably for private events. For day passes, capacity may vary based on current bookings."
  },
  {
    question: "Can we bring our own food and drinks?",
    answer: "Outside food is allowed with prior arrangement. However, for beverages, we require using our bar service to ensure quality and safety standards."
  },
  {
    question: "What's the cancellation policy?",
    answer: "Cancellations made 7 days or more before the event date receive a full refund. Cancellations within 7 days are eligible for a 50% refund or the option to reschedule."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we provide ample secure parking space for all our guests at no additional charge."
  },
  {
    question: "Do you provide lifeguard services?",
    answer: "Yes, a certified lifeguard is present during all pool operating hours to ensure guest safety."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-quinta-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Common questions about our venue and services
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="mt-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-quinta-black/50 px-4 py-4 text-left text-sm font-medium text-white hover:bg-quinta-black/30 focus:outline-none focus-visible:ring focus-visible:ring-quinta-gold">
                    <span className="text-base">{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-quinta-gold`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}