import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { navItems, personalInfo, socialLinksData } from "../data/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    GitHub: <FaGithub size={20} />,
    LinkedIn: <FaLinkedin size={20} />,
    Email: <FaEnvelope size={20} />,
  };

  return (
    <footer className="bg-dark border-t border-white/5 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section with Liquid Glass */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              {personalInfo.shortName}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {personalInfo.title} specializing in building secure, scalable web
              applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      ▹
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Liquid Glass Card */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="glass-frosted liquid-glass-apple rounded-2xl p-4 mb-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-primary transition-colors duration-300 block mb-2"
              >
                {personalInfo.email}
              </a>
              <p className="text-gray-400 text-sm">{personalInfo.location}</p>
            </div>

            {/* Social Links with Liquid Glass */}
            <div className="flex gap-3">
              {socialLinksData.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-button liquid-glass-button rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  {iconMap[social.name]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <FaHeart className="text-primary animate-pulse" />{" "}
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
