import Navbar from "./components/Navbar";
import RightContainer from "./components/RightContainer";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

import Tax from "./components/Tax";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
       
        <div className="flex flex-col sm:flex-row gap-6 max-w-5xl w-full">
          <Tax className="w-full sm:w-1/2" />
          <RightContainer className="w-full sm:w-1/2" />
        </div>

     
        <div className="w-full max-w-5xl mt-10">
          <FAQSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
