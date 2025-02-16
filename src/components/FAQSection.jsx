const FAQSection = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What is capital gains tax?</h3>
            <p>Capital gains tax is a tax on the profit made from selling assets like cryptocurrency.</p>
          </div>
          <div>
            <h3 className="font-semibold">How is crypto tax calculated?</h3>
            <p>Crypto tax is calculated based on the profit made after deducting the purchase cost and expenses.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need to pay tax if I don’t sell my crypto?</h3>
            <p>No, you are only taxed when you sell or exchange cryptocurrency for another asset.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQSection;