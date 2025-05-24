import { useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import wajedoThumb from '../assets/wajedo internationa.png';
import hackathonThumb from '../assets/hackathon.png';
import wadejoThumb from '../assets/Wajedo oo.png';
import ecommerceThumb from '../assets/E-Commerce.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Wajedo International",
      description: "A corporate website with modern design and responsive layout",
      tags: ["Javascript", "React.js", "Tailwind CSS"],
      liveUrl: "https://wajedo-international-corporation.vercel.app/",
      codeUrl: "#",
      thumbnail: wajedoThumb,
    },
    {
      title: "Frontend Hackathon",
      description: "Competition project showcasing frontend skills",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://raza-abbas-23sw.github.io/Frontend-Hackathon-2k25/",
      codeUrl: "#",
      thumbnail: hackathonThumb,
    },
    {
      title: "Wadejo Site",
      description: "Portfolio website with smooth animations",
     tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://wadejosite.vercel.app/",
      codeUrl: "#",
      thumbnail: wadejoThumb,
    },
    {
      title: "E-Commerce Store",
      description: "Online shopping platform with product listings",
     tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://e-commerce-website-t.vercel.app/",
      codeUrl: "#",
      thumbnail: ecommerceThumb,
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Card variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400 relative">
              Projects
              <motion.span 
                className="absolute bottom-1 left-0 w-full h-[6px] bg-blue-600/20 dark:bg-blue-400/20 rounded-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Showcasing my expertise through real-world applications and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              {/* Thumbnail Image with Hover Effect */}
              <div 
                className="h-56 sm:h-48 md:h-52 lg:h-56 relative cursor-pointer overflow-hidden group"
                onClick={() => openModal(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Project Title Badge on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-bold text-lg sm:text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.button 
                    onClick={() => openModal(project)}
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300"
                    title="Live Demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-gray-700 dark:text-gray-300" size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
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
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-10 bg-blue-600 rounded-full" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Project Details
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-gray-700 dark:text-gray-300" size={20} />
                  </button>
                </div>
                
                {/* Project Content */}
                <div className="flex-1 overflow-auto p-6">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={selectedProject.thumbnail} 
                      alt={selectedProject.title}
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Modal Footer */}
                <div className="p-5 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-4 bg-white dark:bg-gray-800">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={14} /> View Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={16} /> View Code
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