const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Ready to start spending?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Redeem your code and complete your card in minutes. No waiting, no complications.
        </p>
        <button className="bg-justpay-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition">
          Redeem now
        </button>
      </div>
    </section>
  );
};

export default CTA;

