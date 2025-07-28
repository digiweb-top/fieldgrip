export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            About Fieldgrip Private Limited
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering farmers with innovative agricultural solutions since our inception
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Fieldgrip Private Limited was founded with a vision to revolutionize agriculture 
                through innovative, sustainable solutions. We understand the challenges faced by 
                modern farmers and are committed to providing products that not only increase 
                yields but also protect the environment.
              </p>
              <p>
                Our comprehensive range of 9 specialized products covers every aspect of 
                crop nutrition, from soil conditioning to harvest optimization. Each product is 
                carefully formulated using the latest agricultural science and tested extensively 
                to ensure maximum effectiveness.
              </p>
              <p>
                We believe in building partnerships with farmers, providing not just products 
                but complete agricultural solutions that help them achieve sustainable success.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Our Mission</h4>
              <p className="text-gray-700">
                To empower farmers with innovative, sustainable agricultural solutions that 
                maximize crop productivity while preserving environmental health for future generations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Our Vision</h4>
              <p className="text-gray-700">
                To be the leading provider of agricultural solutions in India, recognized for 
                our commitment to innovation, quality, and farmer success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}