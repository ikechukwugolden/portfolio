import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaCheck,
} from "react-icons/fa";

const confettiPieces = [
  { x: -70, y: -26, color: "#22c55e" },
  { x: -52, y: -48, color: "#a855f7" },
  { x: -28, y: -58, color: "#06b6d4" },
  { x: -8, y: -44, color: "#ec4899" },
  { x: 14, y: -56, color: "#f59e0b" },
  { x: 34, y: -46, color: "#3b82f6" },
  { x: 56, y: -30, color: "#84cc16" },
  { x: -60, y: -8, color: "#14b8a6" },
  { x: -34, y: -16, color: "#f43f5e" },
  { x: 8, y: -18, color: "#8b5cf6" },
  { x: 36, y: -12, color: "#10b981" },
  { x: 62, y: -6, color: "#eab308" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("idle");
  const [emailError, setEmailError] = useState("");
  const [emailShake, setEmailShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const timeoutRefs = useRef([]);

  // Real-time clock for Nigeria
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const queueTimeout = (callback, delay) => {
    const timeoutId = setTimeout(callback, delay);
    timeoutRefs.current.push(timeoutId);
  };

  const triggerHaptic = (pattern = 20) => {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(pattern);
    }
  };

  const targetInbox = "ikechukwuv074@gmail.com";

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const triggerEmailShake = () => {
    setEmailShake(false);
    requestAnimationFrame(() => setEmailShake(true));
    queueTimeout(() => setEmailShake(false), 380);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (value.trim() === "" || isEmailValid(value)) {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid(formData.email)) {
      setEmailError("Please enter a valid email address.");
      triggerEmailShake();
      triggerHaptic(12);
      return;
    }

    setEmailError("");
    setStatus("sending");
    const emailSubject = formData.subject.trim() || "New Project Inquiry";
    const emailBody = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      "",
      "Project Brief:",
      formData.message.trim(),
      "",
      `Sent from portfolio form (${new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos" })})`,
    ].join("\n");

    const mailtoLink = `mailto:${targetInbox}?subject=${encodeURIComponent(`[Portfolio] ${emailSubject}`)}&body=${encodeURIComponent(emailBody)}`;

    await new Promise((resolve) => setTimeout(resolve, 350));
    window.location.href = mailtoLink;

    setStatus("success");
    setShowConfetti(true);
    triggerHaptic([20, 40, 20]);
    setFormData({ name: "", email: "", subject: "", message: "" });

    queueTimeout(() => setShowConfetti(false), 900);
    queueTimeout(() => setStatus("idle"), 2600);
  };

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "ikechukwuv074@gmail.com",
      link: "mailto:ikechukwuv074@gmail.com",
      color: "text-purple-500",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+234 904 581 7261",
      link: "tel:+2349045817261",
      color: "text-blue-500",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Abia, Nigeria",
      link: "https://maps.google.com/?q=Abia+Nigeria",
      color: "text-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-white dark:bg-[#030712] text-black dark:text-white py-32 px-5 relative transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            {contactDetails.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.title === "Location" ? "_blank" : undefined}
                rel={item.title === "Location" ? "noreferrer" : undefined}
                whileHover={{ x: 10 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-[2rem] transition-all group"
              >
                <div className={`text-2xl ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.title}</p>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{item.info}</p>
                </div>
              </motion.a>
            ))}

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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Identify Yourself</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white"
                    placeholder="NAME / COMPANY"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Digital Address</label>
                  <motion.input
                    animate={emailShake ? { x: [0, -7, 7, -5, 5, -2, 2, 0] } : { x: 0 }}
                    transition={{ duration: 0.35 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 bg-white dark:bg-white/5 border rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white ${
                      emailError ? "border-red-400 focus:border-red-400 animate-input-shake" : "border-gray-200 dark:border-white/5"
                    }`}
                    placeholder="EMAIL@EXAMPLE.COM"
                    aria-invalid={Boolean(emailError)}
                    aria-describedby={emailError ? "email-error" : undefined}
                  />
                  {emailError && (
                    <p id="email-error" className="text-[11px] font-semibold text-red-500 pl-2">
                      {emailError}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Objective</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white"
                  placeholder="WHAT ARE WE BUILDING?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">The Vision</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl focus:border-purple-500 outline-none transition-all text-sm font-medium dark:text-white resize-none"
                  placeholder="DESCRIBE THE PROJECT..."
                />
              </div>

              <div className="relative">
                <AnimatePresence>
                  {showConfetti && (
                    <div className="absolute inset-x-0 -top-3 h-4 pointer-events-none overflow-visible">
                      {confettiPieces.map((piece, index) => (
                        <motion.span
                          key={`${piece.color}-${index}`}
                          initial={{ x: 0, y: 0, opacity: 1, scale: 0.8 }}
                          animate={{ x: piece.x, y: piece.y, opacity: 0, scale: 1.1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.85, ease: "easeOut", delay: index * 0.015 }}
                          className="absolute left-1/2 top-2 w-2 h-2 rounded-sm"
                          style={{ backgroundColor: piece.color }}
                        />
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  data-cursor-label={status === "success" ? "Sent" : "Send"}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 ${
                    status === "success"
                      ? "bg-green-500 text-white"
                      : "bg-black dark:bg-white text-white dark:text-black hover:bg-purple-600 hover:text-white shadow-xl shadow-purple-500/10"
                  } ${status === "sending" ? "cursor-not-allowed opacity-90" : ""}`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-3"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.25, 1], opacity: [0.55, 1, 0.55] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                          className="w-3 h-3 rounded-full bg-current"
                        />
                        Encrypting...
                      </motion.span>
                    )}

                    {status === "success" && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-3"
                      >
                        <motion.span initial={{ rotate: -25 }} animate={{ rotate: 0 }}>
                          <FaCheck />
                        </motion.span>
                        Transmission Received
                      </motion.span>
                    )}

                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-3"
                      >
                        <FaPaperPlane /> Beam Message To Email
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] font-bold text-gray-400 text-center">
                  Opens your email app with your message ready to send.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
