import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  personalInfo,
  socialLinksData,
  professionalStatus,
} from "../data/constants";
import AnimatedBackground from "./AnimatedBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending message..." });

    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }, 1500);
  };

  const socialLinks = socialLinksData.filter((link) => link.name !== "Email");

  const iconMap = {
    GitHub: <FaGithub className="text-2xl" />,
    LinkedIn: <FaLinkedin className="text-2xl" />,
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: personalInfo.location,
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      <AnimatedBackground variant="minimal" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-primary">Get In</span>{" "}
            <span className="text-white">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Interested in collaborating? Let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info with Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-premium liquid-glass-apple rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-frosted liquid-glass-apple rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="text-gray-400 group-hover:text-primary transition-colors">
                      {iconMap[social.name]}
                    </div>
                    <div>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {social.name === "GitHub"
                          ? "S-AbdulRahim"
                          : "sayyed-abdulrahim"}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Status */}
            <div className="glass-frosted liquid-glass-apple rounded-2xl p-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                {professionalStatus.message}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form with Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-liquid liquid-glass-apple rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : status.type === "error"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "bg-primary/20 text-primary border border-primary/30"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full px-8 py-3 bg-primary text-white font-semibold rounded-full liquid-glass-button hover:bg-primary/90 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
