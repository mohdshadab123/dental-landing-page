import React, { useState } from "react";

export default function HeroSection() {
  
  const [formData, setFormData] = useState({
    name: "",

    mobile: "",
    captcha: ""
  });

  const handleSubmit = (e) => {


    e.preventDefault();


    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-12 md:py-20">
                   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-8 items-center">

        
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Painless Root Canal Treatment in Delhi
            </h1>

                          <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Expert RCT. Zero Pain. Right Here in Delhi.
            </p>

            <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition text-lg font-semibold">
              Book Appointment
            </button>

    
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">600+</div>

                <div className="text-sm text-gray-600">600+ Clinics</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">1300+</div>


                <div className="text-sm text-gray-600">1300+ Dentists</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">30L+</div>
                <div className="text-sm text-gray-600">30 L+ Happy Patients</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">35K+</div>


                <div className="text-sm text-gray-600">35K+ Ortho Cases</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">55K+</div>

                <div className="text-sm text-gray-600">55K+ Implants Placed  </div>
              </div>
            </div>
          </div>

      
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Get Expert Dental Guidance in Delhi
            </h3>

            <p className="text-gray-600 mb-6">
              Book your free consultation today and take the first step towards healthy, beautiful teeth.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

          
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

        
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />




          
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Captcha 1514"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.captcha}
                  onChange={(e) =>
                    setFormData({ ...formData, captcha: e.target.value })
                  }
                />
              </div>

            
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <label className="text-xs text-gray-600">
                  I agree to CLOVE Dental's Terms and Privacy Policy and consent to contact via phone, email, or SMS.
                </label>
              </div>





              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition font-semibold"
              >
                Book a Free Consultation
              </button>


            </form>



          </div>

        </div>


      </div>


    </section>
  );
}
