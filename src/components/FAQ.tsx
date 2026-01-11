import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Where can I use it?",
      answer: "Your card works anywhere Visa or Mastercard is accepted globally. Use it online, in-store, or add it to your digital wallet for contactless payments. It's accepted at millions of retailers worldwide."
    },
    {
      question: "How do I add to Apple Pay?",
      answer: "Once your card is active, open your digital wallet and tap to add your card. It takes one tap and works instantly for contactless payments in-store and online."
    },
    {
      question: "Is it secure?",
      answer: "Yes. Your card is PCI-DSS compliant with 3D Secure protection and passwordless login. Bank-grade security protects every transaction you make."
    },
    {
      question: "Do funds expire?",
      answer: "Your funds remain available for the duration of your card validity. Check your card details for the specific expiration date and any terms that apply to your balance."
    },
    {
      question: "Can I reload my card?",
      answer: "Reload options depend on your card type and issuer. Contact support to learn about reload methods available for your specific card."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Everything you need to know about JustPay card and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                </h3>
                <span className="text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need more help?
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            Our support team is ready to assist you anytime.
          </p>
          <button className="border-2 border-white text-white bg-transparent px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

