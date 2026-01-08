const Hero = () => {
  return (
    <section className="bg-justpay-green text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your virtual card. Global freedom. Instant access.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Redeem, activate, and spend in minutes. The secure virtual prepaid card accepted everywhere a credit card is accepted. For online and digital stores. Trusted by 1000+ users worldwide.
          </p>
          <button className="bg-white text-justpay-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Redeem card
          </button>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="w-full h-64 md:h-96 bg-gray-300 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Hero Image - Group of people</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

