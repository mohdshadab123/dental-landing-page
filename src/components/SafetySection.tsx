import { Shield, Sparkles, Cpu } from 'lucide-react';

export default function SafetySection() {
  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Uncompromised Safety',
      description: '10X Safety Protocols for a secure and worry-free dental experience',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Assuring Cleanliness',
      description: 'Rigid 4-Step Sterilization process, assuring a safe and spotless clinic.',
      gradient: 'from-teal-500 to-teal-600',
    },
    {
      icon: Cpu,
      title: 'Experience AIPS',
      description: 'Our AI-Powered Sterilization (AIPS) Monitoring system from DORI, USA Exclusively at Clove',
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Safety, Precision, and Innovation
          </h2>
          <p className="text-lg text-gray-600">
            Advanced care with top safety, sterilization, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`}></div>

              <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                <div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {feature.description}
                  </p>
                </div>

                <button className="self-start text-white font-semibold hover:underline flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">4.9</div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Google Reviews</div>
                  <div className="text-gray-600">(1.6 Lakh +) Verified Google Ratings</div>
                </div>
              </div>
            </div>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-semibold">
              Read All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
