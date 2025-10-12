import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/constants";
import AnimatedBackground from "./AnimatedBackground";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
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
            <span className="text-primary">Featured</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Showcasing enterprise-grade applications built with modern
            technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Premium Glass Card with Liquid Effect */}
              <div className="glass-premium liquid-glass-apple rounded-2xl p-8 h-full transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full mb-4 text-xs md:text-sm border border-primary/20">
                  {project.role}
                </span>

                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-gray-300 text-xs md:text-sm">
                    <span className="font-semibold text-white">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm md:text-base"
                    >
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm md:text-base"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
