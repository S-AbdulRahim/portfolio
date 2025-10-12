import { motion } from "framer-motion";
import { skillsData, specializations } from "../data/constants";
import AnimatedBackground from "./AnimatedBackground";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
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
            <span className="text-primary">Technical</span>{" "}
            <span className="text-white">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Expertise across modern web technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-tinted liquid-glass-apple rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30">
                  {category.level}
                </span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-frosted liquid-glass-apple rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Key <span className="text-primary">Specializations</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-primary/30 hover:text-primary transition-all text-sm font-medium"
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
