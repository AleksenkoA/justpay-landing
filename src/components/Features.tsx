import activationImage from '../assets/acivation_block_image.png';
import appleImage from '../assets/apple_block_image.png';
import giftImage from '../assets/gift_block_image.png';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Global Acceptance Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Global acceptance everywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shop everywhere. Visa or Mastercard® accepted. Perfect for local and international authorizations.
          </p>
        </div>

        {/* Feature 1: Activation without the wait */}
        <div className="mb-20 md:mb-32">
          <div className="border border-gray-300 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="order-1 md:order-1">
                <div className="w-full overflow-hidden">
                  <img 
                    src={activationImage} 
                    alt="Activation without the wait" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-2 md:order-2 px-4 md:px-8 lg:px-12 py-4 md:py-6 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                  Activation without the wait
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No waiting days for your bank card. Get your details instantly and start spending.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-justpay-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                    Redeem card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Apple and Google Pay ready */}
        <div className="mb-20 md:mb-32">
          <div className="border border-gray-300 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="order-1 md:order-1">
                <div className="w-full overflow-hidden">
                  <img 
                    src={appleImage} 
                    alt="Apple and Google Pay ready" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-2 md:order-2 px-4 md:px-8 lg:px-12 py-4 md:py-6 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                  Apple and Google Pay ready
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Add to your digital wallet in seconds for contactless in-store payments.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-justpay-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                    Redeem card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Gift, reward or share */}
        <div className="mb-20 md:mb-32">
          <div className="border border-gray-300 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="order-1 md:order-1">
                <div className="w-full overflow-hidden">
                  <img 
                    src={giftImage} 
                    alt="Gift, reward or share with family or friends" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-2 md:order-2 px-4 md:px-8 lg:px-12 py-4 md:py-6 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                  Gift, reward or share with family or friends
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Instantly redeem, share a gift, or create personalized cards suitable for every occasion.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-justpay-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                    Redeem card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

