import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              clove<span className="text-teal-600">)</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#treatments" className="text-gray-700 hover:text-teal-600 transition">Treatments</a>
            <a href="#why-choose" className="text-gray-700 hover:text-teal-600 transition">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition">Testimonials</a>
            <a href="#locations" className="text-gray-700 hover:text-teal-600 transition">Locations</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:985-6589-510" className="flex items-center text-teal-600 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              985-6589-510
            </a>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
              Book Appointment
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#treatments" className="text-gray-700 hover:text-teal-600">Treatments</a>
              <a href="#why-choose" className="text-gray-700 hover:text-teal-600">Why Choose Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600">Testimonials</a>
              <a href="#locations" className="text-gray-700 hover:text-teal-600">Locations</a>
              <a href="tel:985-6589-510" className="text-teal-600 font-semibold">
                985-6589-510
              </a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 w-full">
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
