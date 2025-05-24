import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaMobileAlt } from 'react-icons/fa';
import aboutImage from '../assets/profile.png'; // Replace with your image

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Image Section - Made smaller */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-3 border-2 border-blue-500/30 dark:border-blue-400/30 rounded-xl rotate-3"></div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={aboutImage} 
                  alt="Abdul Majid - Frontend Developer"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5 w-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
              I'm <span className="text-blue-600 dark:text-blue-400">Abdul Majid</span>, a Frontend Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
              With 1.5 years of professional experience, I specialize in creating responsive, 
              user-friendly web applications. I completed my remote internship as a Frontend 
              Developer at Husbar, where I built multiple projects through team collaboration 
              and consistently satisfied clients with my work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl mb-2">
                  <FaCode />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">Clean Code</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  Writing maintainable, efficient code with best practices
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl mb-2">
                  <FaLaptopCode />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">Web Apps</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  Building responsive applications with modern frameworks
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl mb-2">
                  <FaUsers />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">Teamwork</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  Collaborating effectively using Git and Agile methods
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl mb-2">
                  <FaMobileAlt />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">Mobile First</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  Prioritizing mobile experiences in all designs
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;