import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


import TreatmentsSection from "./components/TreatmentsSection";


import WhyChooseSection from "./components/WhyChooseSection"; 
 import TestimonialsSection from "./components/TestimonialsSection";
import SafetySection from "./components/SafetySection";
 
    import LocationsSection from "./components/LocationsSection";
import Footer from "./components/Footer";

function App() {

  
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <TreatmentsSection />

        <WhyChooseSection />

        <TestimonialsSection />
        <SafetySection />

        <LocationsSection />
        
      </main>



      <Footer />


    </div>
  );
}

export default App;
