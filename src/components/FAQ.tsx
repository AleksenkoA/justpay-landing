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
      answer: "You can use your JustPay card anywhere Visa or Mastercard® is accepted, both online and in physical stores. It works globally for local and international transactions."
    },
    {
      question: "How do I add to Apple Pay?",
      answer: "Simply open your digital wallet app (Apple Wallet or Google Pay), tap the '+' button, and follow the instructions to add your JustPay card. The process takes just seconds."
    },
    {
      question: "Is it secure?",
      answer: "Yes, JustPay cards are fully secure. We use industry-standard encryption and security measures. All transactions are protected, and your identity is verified through a secure, legal process."
    },
    {
      question: "Do I have to register?",
      answer: "Yes, you need to complete a quick identity verification process when redeeming your card. This is a one-time process that ensures security and compliance with financial regulations."
    },
    {
      question: "Can I reload my card?",
      answer: "Yes, you can reload your JustPay card. Contact our support team or use the reload feature in your account dashboard to add funds to your card."
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
          <p className="text-lg mb-4 text-gray-300">
            Our support team is here to assist you anytime.
          </p>
          <button className="bg-justpay-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

