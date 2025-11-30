import { MapPin, ArrowRight } from "lucide-react";

// 
const citiesList = [
  { name: "Delhi / NCR", count: 190 },
          { name: "Bangalore", count: 110 },
  { name: "Mumbai", count: 40 },
    { name: "Chennai", count: 59 },
  { name: "Hyderabad", count: 76 },
        { name: "Punjab", count: 27 },
  { name: "Pune", count: 76 },
     { name: "Ahmedabad", count: 27 }
];

export default function LocationsSection() {
  function handleCitySelect(cityName) {
    console.log("Selected city:", cityName);
  }

  return (
    <section id="locations" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Find Us Across India
          </h2>
          <p       className="text-lg text-gray-600 max-w-2xl mx-auto">


            With 500+ clinics across the country, it's easy to locate a Clove Dental clinic near you.
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {citiesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCitySelect(item.name)}


              className="bg-gradient-to-br from-teal-50 to-blue-50 p-5 rounded-lg
                                                cursor-pointer hover:shadow-md transition group"
            >
              <div className="flex items-start justify-between mb-2">
                <MapPin className="w-6 h-6 text-teal-600" />
                <ArrowRight
                  className="w-5 h-5 text-gray-400 group-hover:text-teal-600 
                             group-hover:translate-x-1 transition"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="text-teal-600 font-medium mt-1">
                {item.count} Clinics
              </p>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12">
          <button
            className="bg-teal-600 text-white px-8 py-3 rounded-md font-semibold
                       hover:bg-teal-700 inline-flex items-center transition"
          >
            View All Locations
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

  
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white
                        rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Can't Find Your City?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">


                We're adding clinics regularly. Share your details and we'll
                notify you when we launch in your city.
              </p>
              <button
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold
                           hover:bg-gray-100 transition"
              >
                Register Interest
              </button>
            </div>

          
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg">


                <div className="text-3xl font-bold">600+</div>

                <div className="text-sm text-gray-300">Total Clinics</div>
              </div>

              <div className="text-center p-4 bg-white/10 rounded-lg">
                                         <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Cities Covered</div>
              </div>



            </div>


          </div>
        </div>

      </div>








    </section>
  );
}
