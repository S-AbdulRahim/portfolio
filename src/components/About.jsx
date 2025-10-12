import { useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaCode, FaUsers, FaRocket } from "react-icons/fa";
import { aboutContent } from "../data/constants";
import ResumeModal from "./ResumeModal";
import AnimatedBackground from "./AnimatedBackground";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  const highlights = [
    {
      icon: <FaAward className="text-3xl" />,
      title: aboutContent.highlights[0].title,
      description: aboutContent.highlights[0].description,
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: aboutContent.highlights[1].title,
      description: aboutContent.highlights[1].description,
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: aboutContent.highlights[2].title,
      description: aboutContent.highlights[2].description,
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: aboutContent.highlights[3].title,
      description: aboutContent.highlights[3].description,
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-dark relative overflow-hidden">
        <AnimatedBackground variant="center" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-primary">About</span>{" "}
              <span className="text-white">Me</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Full Stack Developer specializing in secure, scalable web
              applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content with Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-premium liquid-glass-apple rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {aboutContent.title}
                </h3>

                <div className="space-y-4 text-gray-400">
                  {aboutContent.paragraphs.map((para, index) => (
                    <p key={index} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-full liquid-glass-button hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                  <button
                    onClick={() => setShowResume(true)}
                    className="px-6 py-3 glass-button liquid-glass-button text-white font-semibold rounded-full"
                  >
                    View Resume
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right side - Highlights grid with Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-frosted liquid-glass-apple rounded-2xl p-6 text-center transition-all duration-300"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
};

export default About;
