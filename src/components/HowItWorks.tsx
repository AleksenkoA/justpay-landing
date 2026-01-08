const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Redeem your code",
      description: "Give your unique ID to redeem your card."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verify your identity",
      description: "Complete legally, secure identity check."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Spend without limits",
      description: "Your card is active, use it to pay for products."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From code to cash in three steps
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything happens fast. Redeem your code, verify who you are, and your card works immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-white">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-justpay-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
            Redeem card
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

