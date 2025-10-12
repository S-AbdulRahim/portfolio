import { motion } from "framer-motion";
import { FaBriefcase, FaTrophy, FaGraduationCap } from "react-icons/fa";
import { experience, education } from "../data/constants";
import AnimatedBackground from "./AnimatedBackground";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark relative overflow-hidden">
      <AnimatedBackground variant="default" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-primary">Work</span>{" "}
            <span className="text-white">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            3+ years of professional growth in full-stack development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
              )}

              <div className="glass-premium liquid-glass-apple rounded-2xl p-8 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      {item.current ? (
                        <FaTrophy className="text-white text-xl" />
                      ) : (
                        <FaBriefcase className="text-white text-xl" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 font-semibold">
                          {item.company} • {item.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-primary">Education</span>
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-frosted liquid-glass-apple rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-primary text-2xl" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                      {edu.degree}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 ml-16">
                  <p className="text-primary font-semibold">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      {edu.period}
                    </span>
                    <span>•</span>
                    <span>{edu.field}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
