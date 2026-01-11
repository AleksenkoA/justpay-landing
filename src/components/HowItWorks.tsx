import iconGift from '../assets/icon_gift.svg';
import iconCheck from '../assets/icon_check.svg';
import iconBox from '../assets/icon_box.svg';

const HowItWorks = () => {
  const steps = [
    {
      icon: iconGift,
      title: "Redeem your code",
      description: "Click your unique link received via email."
    },
    {
      icon: iconCheck,
      title: "Verify your identity",
      description: "Complete a quick, secure identity check."
    },
    {
      icon: iconBox,
      title: "Spend without limits",
      description: "Your card is active. Use it online or tap to pay in-store."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From code to cash in three steps
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Everything happens fast. Redeem your code, verify who you are, and your card works immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-white">
                <img src={step.icon} alt={step.title} className="w-12 h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-black px-8 py-2 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            Redeem card
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

