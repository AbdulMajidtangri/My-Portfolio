import { useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCode, FaLaptop } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import wajedoThumb from '../assets/wajedo internationa.png';
import hackathonThumb from '../assets/hackathon.png';
import wadejoThumb from '../assets/Wajedo oo.png';
import ecommerceThumb from '../assets/E-Commerce.png';
import marsevThumb from '../assets/image.png';
import hubar from '../assets/husbar1.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Wajedo International",
      description: "A corporate website with modern design and responsive layout built for international business representation.",
      tags: ["JavaScript", "React.js", "Tailwind CSS"],
      liveUrl: "https://wajedo-international-corporation.vercel.app/",
      codeUrl: "https://github.com/AbdulMajidtangri/Wajedo_international_Corporation",
      thumbnail: wajedoThumb,
      featured: true
    },
    {
      title: "Husbar",
      description: "A professional business website tailored for branding and service presentation, built with a clean interface and responsive design.",
      tags: ["JavaScript", "React.js", "Tailwind CSS"],
      liveUrl: "https://www.husbar.com/",
      codeUrl: "https://github.com/AbdulMajidtangri/Husbar",
      thumbnail: hubar,
      featured: true
    },
    {
      title: "MarsevTech",
      description: "A platform showcasing innovative tech solutions with modern UI/UX and seamless functionality.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://www.marsevtech.com/",
      codeUrl: "https://github.com/raza-abbas-23sw/MarsevTech",
      thumbnail: marsevThumb,
      featured: true
    },
    {
      title: "Wadejo Site",
      description: "Portfolio website with smooth animations and modern design principles for optimal user experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://wadejosite.vercel.app/",
      codeUrl: "https://github.com/AbdulMajidtangri/Wadejosite",
      thumbnail: wadejoThumb,
      featured: false
    },
    {
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce website with product listings, cart functionality, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
      thumbnail: ecommerceThumb,
      featured: false
    },
    {
      title: "Hackathon Project",
      description: "A competition project built under time constraints showcasing problem-solving and rapid development skills.",
      tags: ["React", "Firebase", "Material UI"],
      liveUrl: "#",
      codeUrl: "#",
      thumbnail: hackathonThumb,
      featured: false
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'featured' ? project.featured : project.tags.includes(filter)
      );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise through real-world applications and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['all', 'featured', 'React', 'JavaScript', 'Node.js'].map((filterItem, index) => (
            <motion.button
              key={index}
              variants={filterVariants}
              onClick={() => setFilter(filterItem)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === filterItem
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group"
            >
              {/* Thumbnail Image with Hover Effect */}
              <div 
                className="h-56 relative cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                    Featured
                  </div>
                )}
                
                {/* Project Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.button 
                    onClick={() => openModal(project)}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCode size={14} /> Details
                  </motion.button>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300"
                    title="Live Demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLaptop className="text-gray-700 dark:text-gray-300" size={16} />
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300"
                    title="View Code"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-gray-700 dark:text-gray-300" size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal - Fixed positioning */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Project Details
                      </p>
                    </div>
                  </div>
                  
                  <motion.button 
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Close modal"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes className="text-gray-700 dark:text-gray-300" size={24} />
                  </motion.button>
                </div>
                
                {/* Project Content */}
                <div className="flex-1 overflow-auto p-6">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <img 
                      src={selectedProject.thumbnail} 
                      alt={selectedProject.title}
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                        <FaCode className="text-blue-600 dark:text-blue-400" /> Description
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                        <FaLaptop className="text-blue-600 dark:text-blue-400" /> Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-4 bg-white dark:bg-gray-800">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={16} /> Source Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;