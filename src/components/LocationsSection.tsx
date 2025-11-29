import { MapPin, ArrowRight } from 'lucide-react';

export default function LocationsSection() {
  const locations = [
    { city: 'Delhi/NCR', clinics: 190 },
    { city: 'Bangalore', clinics: 110 },
    { city: 'Mumbai', clinics: 40 },
    { city: 'Chennai', clinics: 59 },
    { city: 'Hyderabad', clinics: 76 },
    { city: 'Punjab', clinics: 27 },
    { city: 'Pune', clinics: 76 },
    { city: 'Ahmedabad', clinics: 27 },
  ];

  return (
    <section id="locations" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 500 clinics across India, you're never too far from a Clove Dental clinic.
            Choose your preferred city to book an appointment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <MapPin className="w-6 h-6 text-teal-600" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {location.city}
              </h3>
              <p className="text-teal-600 font-semibold">
                {location.clinics} Clinics
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-semibold inline-flex items-center">
            View All Locations
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Can't Find Your City?
              </h3>
              <p className="text-gray-300 mb-6">
                We're constantly expanding! Register your interest and we'll notify you when we open in your area.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
                Register Interest
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">600+</div>
                <div className="text-sm text-gray-300">Total Clinics</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-gray-300">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
