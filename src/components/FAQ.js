import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function FAQ() {
  const faqs = [
    {
      question: "Zing je ook verzoekjes?",
      answer: "Mocht je graag willen dat ik je favoriete nummer zing dan wil ik je graag verzoeken om dit op voorhand te melden zodat ik hiernaar kan kijken."
    },
    {
      question: "Verzorg je alles qua geluid etc.?",
      answer: "Ja, ik neem geluidsmateriaal inclusief geluidsman mee op locatie. Indien er op locatie al een geluidsman met apparatuur aanwezig is dan graag in overleg."
    },
    // Add more FAQ items here
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      <div className="w-full max-w-md mx-auto">
        {faqs.map((faq, index) => (
          <Disclosure as="div" className="mt-2" key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-200 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default FAQ;