import React, { useState } from "react";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaClock,
  FaLinkedin,
  FaGithub,
  FaTelegram
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      info: "victor@example.com",
      link: "mailto:victor@example.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      info: "+1 (234) 567-8900",
      link: "tel:+12345678900",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      info: "Lagos, Nigeria",
      link: "https://maps.google.com",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Availability",
      info: "Mon - Fri, 9AM - 6PM",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-800"
    },
    {
      icon: <FaTelegram />,
      name: "Telegram",
      url: "https://t.me/yourusername",
      color: "hover:bg-blue-400"
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      url: "https://wa.me/1234567890",
      color: "hover:bg-green-500"
    }
  ];

  const whatsappMessage = `Hello Victor! I came across your portfolio and I'm interested in discussing a project.`;

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold tracking-wider mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
            I'm always open to new collaborations and interesting conversations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaPaperPlane />
                </div>
                Contact Information
              </h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Quick Chat - Featured */}
              <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full blur-lg"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Quick Chat</h4>
                      <p className="text-gray-400 text-sm">Available now on WhatsApp</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                  >
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                  <p className="text-gray-400 text-xs text-center mt-3">
                    Typically replies within 1 hour
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4 text-gray-300">Follow & Connect</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <FaEnvelope />
                </div>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>

              {/* Response Time Info */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <FaClock className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300">Response Time</h4>
                    <p className="text-gray-400 text-sm">
                      I typically respond to emails within 24 hours. For urgent inquiries, 
                      please use WhatsApp for immediate response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button for Mobile */}
        <div className="fixed bottom-6 right-6 z-50 lg:hidden">
          <a
            href={`https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-4 text-gray-400">
            <div className="w-full h-px bg-gray-700 flex-1"></div>
            <span className="text-sm">OR</span>
            <div className="w-full h-px bg-gray-700 flex-1"></div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-400 mb-4">Prefer a quick conversation?</p>
            <a
              href={`https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              Start WhatsApp Chat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;