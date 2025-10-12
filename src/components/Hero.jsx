import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinksData, personalInfo, heroContent } from "../data/constants";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const iconMap = {
    GitHub: <FaGithub size={28} />,
    LinkedIn: <FaLinkedin size={28} />,
    Email: <FaEnvelope size={28} />,
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="default" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white text-lg mb-4 font-medium"
          >
            {heroContent.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-primary"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Badge with Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 glass-frosted liquid-glass-button text-white font-semibold rounded-full text-sm inline-flex items-center gap-2 shadow-lg shadow-accent/20">
              <span className="text-accent text-xl">🏆</span>
              Top Performer 2024
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {heroContent.description}
          </motion.p>

          {/* Specializations with Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="glass-frosted liquid-glass-apple rounded-2xl p-6 inline-block">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {heroContent.specializations}
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons with Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <a
              href="#projects"
              className="px-6 md:px-8 py-3 bg-primary text-white font-semibold rounded-full liquid-glass-button hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              {heroContent.cta.primary}
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-3 glass-button liquid-glass-button text-white font-semibold rounded-full"
            >
              {heroContent.cta.secondary}
            </a>
          </motion.div>

          {/* Social Links with Liquid Glass */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-flex gap-6 justify-center glass-frosted liquid-glass-apple rounded-full px-8 py-4"
          >
            {socialLinksData.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {iconMap[link.name]}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
