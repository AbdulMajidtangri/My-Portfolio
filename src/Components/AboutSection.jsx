import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaMobileAlt, FaRocket, FaLightbulb, FaPalette, FaServer } from 'react-icons/fa';
import aboutImage from '../assets/profile.png'; // Replace with your image

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my skills, experience, and what drives me as a developer
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
              
              <motion.div 
                className="absolute inset-0 border-4 border-blue-400/30 dark:border-blue-600/30 rounded-full transform rotate-6 transition-colors duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-0 border-4 border-blue-300/20 dark:border-blue-700/20 rounded-full transform -rotate-12 transition-colors duration-500"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img 
                  src={aboutImage} 
                  alt="Abdul Majid - Full Stack Developer"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating elements around the image */}
              <motion.div 
                className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
              <motion.div 
                className="absolute top-4 -left-4 w-5 h-5 bg-blue-600 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              ></motion.div>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Abdul Majid</span>, a Full Stack Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              With 1.5 years of professional experience, I specialize in creating responsive, 
              user-friendly web applications. I completed my remote internship as a Frontend 
              Developer at Husbar, where I built multiple projects through team collaboration 
              and consistently satisfied clients with my work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                  <FaCode />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Clean Code</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Writing maintainable, efficient code with best practices and modern patterns
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                  <FaServer />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Full Stack</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building complete applications with both frontend and backend technologies
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                  <FaUsers />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Teamwork</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Collaborating effectively using Git, Agile methods, and clear communication
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                  <FaRocket />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Fast Delivery</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Delivering high-quality solutions quickly with efficient development processes
                </p>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
                  { name: 'React', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
                  { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
                  { name: 'Express', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
                  { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
                  { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' },
                  { name: 'Git', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
                  { name: 'AWS', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
                ].map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;