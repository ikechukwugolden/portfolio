import React from "react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with modern frameworks like ReactJS. Creating seamless user experiences with clean, maintainable code.",
    features: ["React Applications", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"],
    icon: "💻"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces that enhance user engagement and drive conversions.",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
    icon: "🎨"
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end web development with both frontend and backend integration for complete web applications.",
    features: ["API Integration", "Database Design", "Authentication", "Deployment"],
    icon: "⚡"
  },
  {
    title: "Website Optimization",
    description: "Improving website performance, SEO, and accessibility to ensure maximum reach and user satisfaction.",
    features: ["SEO Optimization", "Speed Optimization", "Accessibility", "Analytics"],
    icon: "🚀"
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and maintenance to keep your website running smoothly and securely.",
    features: ["Regular Updates", "Security Patches", "Bug Fixes", "Technical Support"],
    icon: "🔧"
  },
  {
    title: "Custom Web Applications",
    description: "Tailored solutions for specific business needs with scalable architecture and modern technologies.",
    features: ["Custom Features", "Scalable Architecture", "Third-party Integrations", "Custom CMS"],
    icon: "✨"
  }
];

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl mb-4">{service.icon}</div>
        <span className="text-xs font-semibold bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
          Service
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-300 mb-5 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
            <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="mt-6 w-full py-2 bg-purple-600/20 text-purple-400 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">
        Learn More
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I provide comprehensive web development solutions tailored to your needs. 
            From concept to deployment, I ensure quality, performance, and user satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-10">
            My <span className="text-purple-400">Development Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs & goals" },
              { step: "02", title: "Planning", desc: "Creating roadmap & architecture" },
              { step: "03", title: "Development", desc: "Building with modern technologies" },
              { step: "04", title: "Launch", desc: "Deployment & ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-purple-600/20 border-2 border-purple-500/30 rounded-full flex items-center justify-center text-2xl font-bold text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 mb-4">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-700 group-hover:bg-purple-500 transition-colors duration-300"></div>
                  )}
                </div>
                <h4 className="font-bold text-lg mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8 text-lg">
            Have a project in mind? Let's work together to bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
              Start a Project
            </button>
            <button className="px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
              View My Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;