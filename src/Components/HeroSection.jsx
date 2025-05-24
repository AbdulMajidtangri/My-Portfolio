import { useEffect, useRef, useState } from 'react';
import {
  FaDownload,
  FaEye,
  FaCircle,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';
import cv from '../assets/majidcv.pdf';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return isMobile;
};

const HeroSection = () => {
  const imageRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${Math.sin(Date.now() / 600) * 8}px)`;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Ame_Majid_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-500">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400 transition-colors duration-500">Abdul Majid</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-2">
                <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-semibold transition-colors duration-500">
                  Frontend Developer
                </h2>
                <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full transition-colors duration-500">
                  <FaCircle className="text-green-500 text-xs" />
                  <span className="text-sm text-green-700 dark:text-green-400 transition-colors duration-500">Open to work</span>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-500">
                I specialize in building responsive, pixel-perfect web applications with exceptional user experiences.
                My focus is on clean, maintainable code and modern web technologies.
              </p>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-2 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['Javascript', 'React.js', 'Bootstrap', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-colors duration-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <FaDownload /> Download CV
              </button>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800/50 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <FaEye /> View Projects
              </a>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 border-4 border-blue-500/30 dark:border-blue-400/30 rounded-full transform rotate-6 transition-colors duration-500"></div>
                <div className="absolute inset-0 border-4 border-transparent rounded-full transform -rotate-6 transition-colors duration-500"></div>
                <div className="absolute inset-0 border-4 border-transparent rounded-full transform rotate-12 transition-colors duration-500"></div>
                <div
                  ref={imageRef}
                  className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 z-2 transition-all duration-300 ease-in-out"
                >
                  <img src={profile} alt="Majid - Frontend Developer" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Social Icons */}
              <motion.div
                className="flex justify-center gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[{
                  icon: FaLinkedin,
                  url: 'https://www.linkedin.com/in/abdul-majid-tangri-882522351/',
                  color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300',
                }, {
                  icon: FaGithub,
                  url: 'https://github.com/AbdulMajidtangri',
                  color: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                }, {
                  icon: FaFacebook,
                  url: 'https://web.facebook.com/a.majid.tangri', 
                  color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
                }, {
                  icon: FaInstagram,
                  url: 'https://www.instagram.com/a.majidtangri/',
                  color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300',
                }].map(({ icon: Icon, url, color }, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${color} rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={`Social ${i}`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;