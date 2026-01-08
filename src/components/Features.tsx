const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Global Acceptance Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Global acceptance everywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shop everywhere. Visa or Mastercard® accepted. Perfect for local and international authorizations.
          </p>
        </div>

        {/* Feature 1: Activation without the wait */}
        <div className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
                  <p className="text-gray-500">Woman with phone</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Activation without the wait
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                No waiting days for your bank card. Get your details instantly and start spending.
              </p>
              <button className="bg-justpay-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Redeem card
              </button>
            </div>
          </div>
        </div>

        {/* Feature 2: Apple and Google Pay ready */}
        <div className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Apple and Google Pay ready
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Add to your digital wallet in seconds for contactless in-store payments.
              </p>
              <button className="bg-justpay-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Redeem card
              </button>
            </div>
            <div>
              <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                  <p className="text-gray-500">Person using phone at payment terminal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Gift, reward or share */}
        <div className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-teal-200 flex items-center justify-center">
                  <p className="text-gray-500">Office workers group</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Gift, reward or share with family or friends
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Instantly redeem, share a gift, or create personalized cards suitable for every occasion.
              </p>
              <button className="bg-justpay-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Redeem card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

