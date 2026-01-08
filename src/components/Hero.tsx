import headerImage from '../assets/header.png';

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
          <button className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-justpay-green transition">
            Redeem card
          </button>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="w-full overflow-hidden">
        <img 
          src={headerImage} 
          alt="JustPay users" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

