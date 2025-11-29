export default function TreatmentsSection() {
  const treatments = [
    {
      title: 'Root Canal Treatment',
      subtitle: 'Ideal for infected or damaged tooth',
      types: [
        'Root Canal Treatment',
        'Split RCT',
        'Split RCT with rubber dam',
        'Split RCT with laser',
      ],
      price: '₹ 19,999',
      icon: '🦷',
    },
    {
      title: 'Re-Root Canal Treatment',
      subtitle: 'Ideal issues that persist or recur after an initial root canal treatment',
      types: [
        'Re-RCT with rubber dam',
        'Re-RCT laser specialist',
        'Re-RCT with retrieval of old RCT filling',
      ],
      price: '₹ 19,999',
      icon: '🔄',
    },
  ];

  return (
    <section id="treatments" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Root Canal Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {treatment.title}
              </h3>
              <p className="text-gray-600 mb-6">{treatment.subtitle}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Types of RCT</h4>
                <ul className="space-y-2">
                  {treatment.types.map((type, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                  <div className="text-2xl font-bold text-gray-900">{treatment.price}</div>
                </div>
                <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
                  Get Free Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
