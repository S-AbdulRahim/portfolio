import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";
import Resume from "./Resume";
import { downloadResume } from "../utils/downloadResume";

const ResumeModal = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    downloadResume();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl max-h-[90vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Liquid Glass */}
            <div className="glass-premium liquid-glass-apple rounded-t-2xl p-4 md:p-6 flex items-center justify-between border-b border-white/10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Resume <span className="text-primary">Preview</span>
                </h2>
                <p className="text-sm text-gray-400">
                  View and download my professional resume
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium liquid-glass-button hover:bg-primary/90 transition-all"
                  title="Download Resume"
                >
                  <FaDownload size={14} />
                  <span className="hidden sm:inline">Download</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 glass-button liquid-glass-button rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </motion.button>
              </div>
            </div>

            {/* Scrollable Resume Content */}
            <div className="glass-frosted rounded-b-2xl p-4 md:p-8 max-h-[calc(90vh-120px)] overflow-y-auto custom-scrollbar">
              <Resume />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
