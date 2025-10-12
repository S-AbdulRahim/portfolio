import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCheckCircle,
  FaSpinner,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { getSortedCertifications } from "../data/constants";
import AnimatedBackground from "./AnimatedBackground";

const Certifications = () => {
  const certifications = getSortedCertifications();

  const getStatusIcon = (status) => {
    if (status === "Certified")
      return <FaCheckCircle className="text-accent" />;
    if (status === "In Progress") return <FaSpinner className="text-primary" />;
    return <FaCertificate className="text-gray-400" />;
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-dark relative overflow-hidden"
    >
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
            <span className="text-primary">Certifications</span>{" "}
            <span className="text-white">& Learning</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-frosted liquid-glass-apple rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaCertificate className="text-primary text-xl" />
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(cert.status)}
                  <span
                    className={`text-xs font-medium ${
                      cert.status === "Certified"
                        ? "text-accent"
                        : "text-primary"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
              {cert.year && (
                <p className="text-xs text-gray-500 mb-4">{cert.year}</p>
              )}

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
                >
                  <span>View Credential</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              ) : (
                <span className="text-xs text-gray-500 italic">
                  Certificate pending
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
