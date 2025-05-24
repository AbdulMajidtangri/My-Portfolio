import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Abdul</span> Majid
            </h3>
            <p className="text-gray-400">
              Frontend Developer specializing in creating beautiful, functional web experiences with React.js.
            </p>
            <div className="flex space-x-4 md:hidden">
              <a href="https://www.linkedin.com/in/abdul-majid-tangri-882522351/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/AbdulMajidtangri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://web.facebook.com/a.majid.tangri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="http://instagram.com/a.majidtangri/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#education-contact" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.linkedin.com/in/abdul-majid-tangri-882522351/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/AbdulMajidtangri" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a 
                href="https://web.facebook.com/a.majid.tangri" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="http://instagram.com/a.majidtangri/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-blue-400 flex-shrink-0" />
                <p>Hyderabad, Sindh, Pakistan</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a href="mailto:majidalitangri@gmail.com" className="hover:text-white transition-colors">
                  majidalitangri@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" />
                <a href="tel:+923310249986" className="hover:text-white transition-colors">
                  +92 331 0249986
                </a>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>© {currentYear} Abdul Majid. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;