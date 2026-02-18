import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaPaperPlane, FaClock, FaLinkedin, FaGithub, FaTelegram 
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [time, setTime] = useState("");
  const [status, setStatus] = useState(""); // For form feedback

  // 1. Real-time Clock for Nigeria
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Functional Submission (Connecting to a service like Formspree)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Replace 'YOUR_FORMSPREE_ID' with your actual ID from formspree.io
    // Or keep this as a simulation for now
    setTimeout(() => {
      console.log("Mission Control Received:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  const contactDetails = [
    { icon: <FaEnvelope />, title: "Email", info: "ikechukwuv074@gmail.com", link: "mailto:ikechukwuv074@gmail.com", color: "text-purple-500" },
    { icon: <FaPhone />, title: "Phone", info: "+234 904 581 7261", link: "tel:+2349045817261", color: "text-blue-500" },
    { icon: <FaMapMarkerAlt />, title: "Location", info: "Abia, Nigeria", color: "text-pink-500" }
  ];

  return (
    <section id="contact" className="w-full bg-white dark:bg-[#030712] text-black dark:text-white py-32 px-5 relative transition-colors duration-500 overflow-hidden">
      
      {/* Ambient Background Orbs (Visible mostly in Dark Mode) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">Secure Line</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-4">
            LET'S <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">SYNC</span> UP
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-[0.4em] text-[10px]">Worldwide Collaboration Available</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-4"
          >
            {contactDetails.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-[2rem] transition-all group"
              >
                <div className={`text-2xl ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.title}</p>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{item.info}</p>
                </div>
              </motion.a>
            ))}

            {/* Nigeria Time Card */}
            <div className="p-8 bg-linear-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/20 dark:border-white/10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-purple-600 dark:text-purple-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">Abia, Nigeria</span>
                </div>
                <h4 className="text-4xl font-black tracking-tighter text-gray-800 dark:text-white mb-2">{time || "Syncing..."}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">GMT +1 (West Africa Time)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Identify Yourself</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white"
                    placeholder="NAME / COMPANY"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Digital Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white"
                    placeholder="EMAIL@EXAMPLE.COM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Objective</label>
                <input
                  type="text" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white"
                  placeholder="WHAT ARE WE BUILDING?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">The Vision</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows="4"
                  className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white resize-none"
                  placeholder="DESCRIBE THE PROJECT..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 ${
                  status === "success" 
                  ? "bg-green-500 text-white" 
                  : "bg-black dark:bg-white text-white dark:text-black hover:bg-purple-600 hover:text-white shadow-xl shadow-purple-500/10"
                }`}
              >
                {status === "sending" ? "Encrypting..." : status === "success" ? "Transmission Received" : <><FaPaperPlane /> Beam Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;