import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, themes, changeTheme, themeName } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  return (
    <>
      {/* Floating Theme Button with Liquid Glass */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-2xl transition-shadow duration-300 liquid-glass-button"
        aria-label="Change theme"
      >
        <FaPalette size={24} />
      </motion.button>

      {/* Theme Picker Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content with Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-premium liquid-glass-apple rounded-2xl p-6 md:p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Choose Your <span className="text-primary">Theme</span>
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Current Theme */}
                <div className="mb-6 p-4 bg-primary/20 border border-primary/30 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Current Theme</p>
                  <p className="text-base md:text-lg font-semibold text-white">
                    {themeName}
                  </p>
                </div>

                {/* Theme Options */}
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 theme-scrollbar">
                  {themes.map((theme) => (
                    <motion.button
                      key={theme.key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        changeTheme(theme.key);
                        setTimeout(() => setIsOpen(false), 300);
                      }}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left liquid-glass-apple ${
                        currentTheme === theme.key
                          ? "border-primary bg-primary/20 shadow-lg shadow-primary/20"
                          : "border-gray-700 hover:border-gray-600 bg-dark/50 hover:bg-dark/70"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold text-sm md:text-base">
                          {theme.name}
                        </span>
                        {currentTheme === theme.key && (
                          <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                            Active
                          </span>
                        )}
                      </div>

                      {/* Color Preview */}
                      <div className="flex gap-2">
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg ring-1 ring-white/10"
                          style={{ backgroundColor: theme.colors.primary }}
                          title="Primary"
                        />
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg ring-1 ring-white/10"
                          style={{ backgroundColor: theme.colors.secondary }}
                          title="Secondary"
                        />
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg ring-1 ring-white/10"
                          style={{ backgroundColor: theme.colors.accent }}
                          title="Accent"
                        />
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg ring-1 ring-gray-600"
                          style={{ backgroundColor: theme.colors.dark }}
                          title="Dark"
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Info */}
                <p className="mt-6 text-xs md:text-sm text-gray-400 text-center">
                  ✨ Theme preference is saved automatically
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
