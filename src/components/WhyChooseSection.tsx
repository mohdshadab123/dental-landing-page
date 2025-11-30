import React from "react";
import { Shield, Sparkles, Award, Cog, CheckCircle } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-gray-50">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Clove Dental
          </h2>


          <p className="text-lg text-gray-600">
            Clove Dental is India's Leading dental care brand with 600+ clinics nationwide
          </p>
        </div>

    
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">


            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-600" />


            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              DORI - A.I. enabled Dental chair
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced AI technology for precise treatment
            </p>


          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">


            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">


              10x Safety and 4 steps sterilization process
            </h3>
            <p className="text-gray-600 text-sm">
              Rigorous cleaning protocols for your safety
            </p>


          </div>

          {/* Card 3 */}


          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Experienced and Certified implantologist
            </h3>
            <p className="text-gray-600 text-sm">
              Expert professionals with proven track records
            </p>
          </div>

          {/* Card 4 */}



          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">

            
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Cog className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Updated with world class equipments
            </h3>
            <p className="text-gray-600 text-sm">
              Latest technology for best outcomes
            </p>
          </div>

          {/* Card 5 */}


          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">




            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">


                         <CheckCircle className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Regular audits for safety protocols
            </h3>
            <p className="text-gray-600 text-sm">


              Continuous monitoring and improvement


            </p>
          </div>
        </div>

        {/* Bottom Banner */}



        <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">


            Experience World-Class Dental Care
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join 30+ lakh happy patients who trust Clove Dental


          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold">


            Book Your Consultation




          </button>
        </div>


      </div>


    </section>
  );
}
