import { useState, useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCode, FaLaptop, FaFilter, FaStar, FaMobile, FaDesktop, FaDatabase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import wajedoThumb from '../assets/wajedo internationa.png';
import purepickthumbnail from '../assets/mpurepick.png'
import hackathonThumb from '../assets/hackathon.png';
import wadejoThumb from '../assets/Wajedo oo.png';
import ecommerceThumb from '../assets/E-Commerce.png';
import marsevThumb from '../assets/image.png';
import hubar from '../assets/husbar1.png';
import softotic from '../assets/softotic.png'
import lifeinsurance from '../assets/lifeinsurnace.png'

const ProjectsPage = () => {
  const projects = [
    {
      title: "PurePick",
      description: "A full-stack e-commerce website built with Next.js, offering seamless product browsing, authentication, and dynamic data management with a clean, responsive interface.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Full Stack", "MongoDB"],
      liveUrl: "https://mpurepick.vercel.app/",
      codeUrl: "https://github.com/AbdulMajidtangri/Full-Stack-E-Commerce-Store.git",
      thumbnail: purepickthumbnail,
      status: 'completed',
      featured: true,
      year: '2025',
      category: 'fullstack'
    },
    {
      title: "Husbar",
      description: "A professional business website tailored for branding and service presentation, built with a clean interface and responsive design.",
      tags: ["JavaScript", "React.js", "Tailwind CSS"],
      liveUrl: "https://www.husbar.com/",
      codeUrl: "https://github.com/AbdulMajidtangri/Husbar",
      thumbnail: hubar,
      status: 'completed',
      featured: true,
      year: '2025',
      category: 'business'
    },
    {
      title: "Wajedo International",
      description: "A corporate website with modern design and responsive layout built for international business representation.",
      tags: ["JavaScript", "React.js", "Tailwind CSS"],
      liveUrl: "https://wajedo-international-corporation.vercel.app/",
      codeUrl: "https://github.com/AbdulMajidtangri/Wajedo_international_Corporation",
      thumbnail: wajedoThumb,
      status: 'completed',
      featured: true,
      year: '2025',
      category: 'corporate'
    },
    {
      title: "MarsevTech",
      description: "A platform showcasing innovative tech solutions with modern UI/UX and seamless functionality.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://www.marsevtech.com/",
      codeUrl: "https://github.com/raza-abbas-23sw/MarsevTech",
      thumbnail: marsevThumb,
      status: 'completed',
      featured: true,
      year: '2025',
      category: 'corporate'
    },
    {
      title: "Softotic",
      description: "Softotic is a sleek, animated portfolio platform crafted with modern design principles to deliver a fluid, engaging user experience.",
      tags: ["JavaScript", "React.js", "Tailwind CSS"],
      liveUrl: "https://softotic.com/",
      codeUrl: "https://github.com/Softotic/softotic_website",
      thumbnail: softotic,
      status: 'completed',
      featured: true,
      year: '2025',
      category: 'portfolio'
    },
    {
      title: "State Life Insurance",
      description: "This fully developed website is built for a life insurance company, offering complete navigation, service listings, and customer engagement features.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://statelifeinsurance-demo.netlify.app/",
      codeUrl: "https://github.com/raza-abbas-23sw/Life-Insurance-Management-System",
      thumbnail: lifeinsurance,
      status: 'completed',
      featured: false,
      year: '2025',
      category: 'corporate'
    },
    {
      title: "Wadejo Site",
      description: "Portfolio website with smooth animations and modern design principles for optimal user experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://wadejosite.vercel.app/",
      codeUrl: "https://github.com/AbdulMajidtangri/Wadejosite",
      thumbnail: wadejoThumb,
      status: 'completed',
      featured: false,
      year: '2025',
      category: 'portfolio'
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  // Filter options
  const filters = [
    { key: 'all', label: 'All Projects', icon: FaFilter },
    { key: 'featured', label: 'Featured', icon: FaStar },
    { key: 'corporate', label: 'Corporate', icon: FaDesktop },
    { key: 'business', label: 'Business', icon: FaLaptop },
    { key: 'fullstack', label: 'Full Stack', icon: FaDatabase },
    { key: 'portfolio', label: 'Portfolio', icon: FaMobile }
  ];

  const sortOptions = [
    { key: 'featured', label: 'Featured First' },
    { key: 'newest', label: 'Newest First' },
    { key: 'oldest', label: 'Oldest First' }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  // Filter and sort projects
  const filteredAndSortedProjects = projects
    .filter(project => {
      if (filter === 'all') return true;
      if (filter === 'featured') return project.featured;
      return project.category === filter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.year - a.year;
        case 'oldest':
          return a.year - b.year;
        case 'featured':
        default:
          return b.featured - a.featured;
      }
    });

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
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
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    completed: projects.filter(p => p.status === 'completed').length,
    categories: [...new Set(projects.map(p => p.category))].length
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Showcasing my journey through innovative web solutions and creative implementations
          </p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Total Projects', value: stats.total },
              { label: 'Featured', value: stats.featured },
              { label: 'Completed', value: stats.completed },
              { label: 'Categories', value: stats.categories }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filters and Sort Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {filters.map((filterItem, index) => {
                const IconComponent = filterItem.icon;
                return (
                  <motion.button
                    key={filterItem.key}
                    variants={filterVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onClick={() => setFilter(filterItem.key)}
                    className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      filter === filterItem.key
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={14} />
                    {filterItem.label}
                  </motion.button>
                );
              })}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 dark:bg-gray-700 border-0 rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map(option => (
                  <option key={option.key} value={option.key}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredAndSortedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col group relative"
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-20 ${
                project.status === 'completed' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
              }`}>
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold z-20 flex items-center gap-1">
                  <FaStar size={10} /> Featured
                </div>
              )}

              {/* Thumbnail Image */}
              <div 
                className="h-56 relative cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Project Title on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.year} • {project.category}
                  </p>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-1 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.button 
                    onClick={() => openModal(project)}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCode size={12} /> View Details
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
                    <FaLaptop className="text-gray-700 dark:text-gray-300" size={14} />
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
                    <FaGithub className="text-gray-700 dark:text-gray-300" size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your filters to see more projects
            </p>
          </motion.div>
        )}

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
              tabIndex={0}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Modal Header - FIXED LAYOUT */}
                <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full mt-1" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span>{selectedProject.year}</span>
                        <span>•</span>
                        <span className="capitalize">{selectedProject.category}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          selectedProject.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}>
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button 
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ml-4"
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
                        <FaCode className="text-blue-600 dark:text-blue-400" /> Project Overview
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{selectedProject.year}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Year</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 capitalize">{selectedProject.category}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Category</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 capitalize">{selectedProject.status}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
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
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex-1 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-all duration-300 flex-1 text-center"
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

export default ProjectsPage;