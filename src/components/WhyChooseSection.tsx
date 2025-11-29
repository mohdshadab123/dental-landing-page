import { Shield, Sparkles, Award, Cog, CheckCircle } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Shield,
      title: 'DORI - A.I. enabled Dental chair',
      description: 'Advanced AI technology for precise treatment',
    },
    {
      icon: Sparkles,
      title: '10x Safety and 4 steps sterilization process',
      description: 'Rigorous cleaning protocols for your safety',
    },
    {
      icon: Award,
      title: 'Experienced and Certified implantologist',
      description: 'Expert professionals with proven track records',
    },
    {
      icon: Cog,
      title: 'Updated with world class equipments',
      description: 'Latest technology for best outcomes',
    },
    {
      icon: CheckCircle,
      title: 'Regular audits for safety protocols',
      description: 'Continuous monitoring and improvement',
    },
  ];

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Clove Dental
          </h2>
          <p className="text-lg text-gray-600">
            Clove Dental is India's Leading dental care brand with 600+ clinic nationwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

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
