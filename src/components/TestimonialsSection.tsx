import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: 'Shubham', location: 'Indore', treatment: 'Aligners', rating: 5 },
    { name: 'Shubpreet', location: 'Indore', treatment: 'RCT', rating: 5 },
    { name: 'Anita', location: 'Bangalore', treatment: 'Laser Treatment', rating: 5 },
    { name: 'Aarti', location: 'Indore', treatment: 'Dentures', rating: 5 },
    { name: 'Aditya', location: 'Indore', treatment: 'Implant', rating: 5 },
    { name: 'Nikita', location: 'Indore', treatment: 'Orthodontics', rating: 5 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real smiles, real stories. Here's what our patients love about their CLOVE Dental experience!
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 h-full">
                    <div className="w-16 h-16 bg-teal-200 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-teal-700">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{testimonial.location}</p>
                    <span className="inline-block bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
