import { useEffect, useRef, useState } from 'react';
import {
  FaDownload,
  FaEye,
  FaCircle,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTimes,
  FaCode,
  FaDatabase,
  FaServer,
  FaCloud,
  FaRocket
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';
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

// 3D Floating Sphere Component
const FloatingSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} scale={2}>
      <meshStandardMaterial 
        color="#3b82f6" 
        roughness={0.2} 
        metalness={0.8} 
        transparent 
        opacity={0.8}
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
};

// 3D Background Particles
const Particles = () => {
  const particlesRef = useRef();
  const positions = useRef([]);
  const speeds = useRef([]);
  
  useEffect(() => {
    const count = 200;
    const tempPositions = new Float32Array(count * 3);
    const tempSpeeds = new Float32Array(count);
    const tempColors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      tempPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      tempPositions[i3 + 1] = radius * Math.cos(phi);
      tempPositions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      
      tempSpeeds[i] = 0.1 + Math.random() * 0.3;
      
      // Add color variation (blue shades)
      tempColors[i3] = 0.2 + Math.random() * 0.3;     // R
      tempColors[i3 + 1] = 0.4 + Math.random() * 0.4; // G
      tempColors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
    }
    
    positions.current = tempPositions;
    speeds.current = tempSpeeds;
    
    if (particlesRef.current) {
      particlesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions.current, 3));
      particlesRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(tempColors, 3));
    }
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < positions.length / 3; i++) {
        const i3 = i * 3;
        positions[i3] += Math.sin(time * speeds.current[i]) * 0.015;
        positions[i3 + 1] += Math.cos(time * speeds.current[i]) * 0.015;
        positions[i3 + 2] += Math.sin(time * speeds.current[i] * 0.7) * 0.01;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial 
        size={0.1} 
        transparent 
        opacity={0.7} 
        vertexColors 
        sizeAttenuation 
      />
    </points>
  );
};

// Floating Tech Icons
const FloatingTechIcons = () => {
  const icons = useRef([]);
  
  useFrame((state) => {
    icons.current.forEach((icon, i) => {
      if (icon) {
        const time = state.clock.elapsedTime;
        icon.position.y = Math.sin(time * 0.5 + i * 0.5) * 0.3;
        icon.rotation.y = time * 0.2 + i;
      }
    });
  });

  return (
    <>
      {/* Floating HTML tag */}
      <mesh 
        ref={el => icons.current[0] = el} 
        position={[-3, 1, 0]}
        scale={0.8}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#e34f26" />
      </mesh>
      
      {/* Floating CSS tag */}
      <mesh 
        ref={el => icons.current[1] = el} 
        position={[3, -1, 0]}
        scale={0.8}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#264de4" />
      </mesh>
      
      {/* Floating JS tag */}
      <mesh 
        ref={el => icons.current[2] = el} 
        position={[-2, -2, 0]}
        scale={0.8}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#dfcf5bff" />
      </mesh>
      
      {/* Floating React tag */}
      <mesh 
        ref={el => icons.current[3] = el} 
        position={[2, 2, 0]}
        scale={0.8}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#61dafb" />
      </mesh>
    </>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroSection = () => {
  const imageRef = useRef(null);
  const isMobile = useIsMobile();
  const [activeModal, setActiveModal] = useState(null);

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
    link.download = 'Ame_Majid_FullStack_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* 3D Background */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <FloatingSphere />
            <Particles />
            <FloatingTechIcons />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      )}



      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4 shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaCircle className="text-green-500 text-xs mr-2 animate-pulse mt-2" />
                <span>Open to work</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Abdul Majid</span>
              </motion.h1>
              
              <motion.div 
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 font-semibold">
                  Full Stack Developer
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I craft responsive, full-stack web applications with exceptional user experiences. My focus is on clean, maintainable code and modern web technologies across both frontend and backend.
              </motion.p>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { name: 'Frontend', icon: <FaCode className="mr-2" />, modal: 'frontend', color: 'from-blue-500 to-blue-600' },
                { name: 'Backend', icon: <FaServer className="mr-2" />, modal: 'backend', color: 'from-blue-600 to-blue-700' },
                { name: 'Database', icon: <FaDatabase className="mr-2" />, modal: 'database', color: 'from-blue-700 to-blue-800' },
                { name: 'DevOps', icon: <FaCloud className="mr-2" />, modal: 'devops', color: 'from-blue-800 to-blue-900' }
              ].map((tech) => (
                <motion.button
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(tech.modal)}
                  className={`flex items-center px-4 py-2 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${tech.color}`}
                >
                  {tech.icon} {tech.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <FaDownload className="transition-transform duration-300 group-hover:scale-110" /> 
                Download CV
              </motion.button>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <FaEye className="transition-transform duration-300 group-hover:scale-110" /> 
                View Projects
              </motion.a>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Animated background shapes */}
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
                
                <div
                  ref={imageRef}
                  className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10 transition-all duration-300 ease-in-out"
                >
                  <img 
                    src={profile} 
                    alt="Majid - Full Stack Developer" 
                    className="w-full h-full object-cover" 
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

              {/* Social Icons */}
              <motion.div
                className="flex justify-center gap-5 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {[{
                  icon: FaLinkedin,
                  url: 'https://www.linkedin.com/in/abdul-majid-tangri-882522351/',
                  color: 'bg-blue-600 hover:bg-blue-700 text-white',
                  tooltip: 'LinkedIn'
                }, {
                  icon: FaGithub,
                  url: 'https://github.com/AbdulMajidtangri',
                  color: 'bg-gray-800 hover:bg-gray-900 text-white',
                  tooltip: 'GitHub'
                }, {
                  icon: FaFacebook,
                  url: 'https://web.facebook.com/a.majid.tangri', 
                  color: 'bg-blue-600 hover:bg-blue-700 text-white',
                  tooltip: 'Facebook'
                }, {
                  icon: FaInstagram,
                  url: 'https://www.instagram.com/a.majidtangri/',
                  color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
                  tooltip: 'Instagram'
                }].map(({ icon: Icon, url, color, tooltip }, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${color} rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative group`}
                    aria-label={tooltip}
                  >
                    <Icon size={20} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {tooltip}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <Modal isOpen={activeModal === 'frontend'} onClose={closeModal} title="Frontend Expertise">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            I have extensive experience with frontend technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            <li>React.js, Next.js, and modern JavaScript (ES6+)</li>
            <li>HTML5, CSS3, and responsive design principles</li>
            <li>State management with Redux, Context API, and Zustand</li>
            <li>UI frameworks like Bootstrap, Tailwind CSS, and Material-UI</li>
            <li>Performance optimization and accessibility best practices</li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'backend'} onClose={closeModal} title="Backend Skills">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            I specialize in backend development with expertise in:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Node.js, Express.js, and server-side JavaScript</li>
            <li>RESTful API design and development</li>
            <li>Authentication and authorization (JWT, OAuth)</li>
            <li>Server deployment and management</li>
            <li>Microservices architecture and implementation</li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'database'} onClose={closeModal} title="Database Proficiency">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            I'm skilled at working with various database technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            <li>SQL databases like MySQL, PostgreSQL, and SQL Server</li>
            <li>NoSQL databases like MongoDB and Firebase</li>
            <li>Database design, optimization, and indexing</li>
            <li>ORM tools like Sequelize and Mongoose</li>
            <li>Database migration and management</li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'devops'} onClose={closeModal} title="DevOps & Deployment">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            I'm proficient with deployment and DevOps practices:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Version control with Git and GitHub</li>
            <li>CI/CD pipelines and automated testing</li>
            <li>Cloud platforms like AWS, Heroku, and Netlify</li>
            <li>Docker containerization</li>
            <li>Server management and monitoring</li>
          </ul>
        </div>
      </Modal>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;