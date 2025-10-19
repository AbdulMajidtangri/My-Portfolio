import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaTimes,
  FaCode, FaLaptopCode, FaRocket, FaDatabase, FaServer, FaCloud
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiGreensock, SiBootstrap, SiCplusplus, SiVercel, SiNetlify,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPython, SiDjango,
  SiFlask, SiRedis, SiDocker, SiFirebase, SiNextdotjs, SiTypescript,
  SiGraphql, SiJest, SiPostman, SiNginx
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-blue-500" />,
      skills: [
        { 
          name: "HTML5", 
          icon: <FaHtml5 className="text-orange-500" />, 
          level: 95,
          description: "Semantic HTML5 markup, accessibility best practices, SEO optimization, and web standards compliance",
          projects: "Built responsive layouts for 20+ projects including e-commerce and SaaS applications"
        },
        { 
          name: "CSS3", 
          icon: <FaCss3Alt className="text-blue-500" />, 
          level: 90,
          description: "Advanced CSS3 features, Flexbox, Grid, animations, transitions, and responsive design principles",
          projects: "Created complex layouts and animations for various production applications"
        },
        { 
          name: "JavaScript (ES6+)", 
          icon: <FaJs className="text-yellow-400" />, 
          level: 90,
          description: "Modern JavaScript features, async/await, DOM manipulation, functional programming, and design patterns",
          projects: "Core language used in all full-stack projects and interactive web applications"
        },
        { 
          name: "React.js", 
          icon: <FaReact className="text-blue-400" />, 
          level: 88,
          description: "Component-based architecture, hooks, context API, state management, and performance optimization",
          projects: "Developed 10+ React applications including dashboards and real-time applications"
        },
        { 
          name: "Next.js", 
          icon: <SiNextdotjs className="text-black dark:text-white" />, 
          level: 82,
          description: "Server-side rendering, static site generation, API routes, and full-stack React framework",
          projects: "Built 4 production applications with SEO optimization and better performance"
        },
        { 
          name: "Tailwind CSS", 
          icon: <SiTailwindcss className="text-cyan-400" />, 
          level: 85,
          description: "Utility-first CSS framework, responsive design, customization, and component-based styling",
          projects: "Primary CSS framework for 8+ projects including this portfolio"
        }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-500" />,
      skills: [
        { 
          name: "Node.js", 
          icon: <SiNodedotjs className="text-green-600" />, 
          level: 87,
          description: "Runtime environment, event-driven architecture, non-blocking I/O, and backend API development",
          projects: "Built RESTful APIs and microservices for 5+ production applications"
        },
        { 
          name: "Express.js", 
          icon: <SiExpress className="text-gray-600 dark:text-gray-300" />, 
          level: 85,
          description: "Web application framework, middleware, routing, and API development best practices",
          projects: "Created backend servers for multiple full-stack applications"
        },
        { 
          name: "RESTful APIs", 
          icon: <FaCloud className="text-purple-500" />, 
          level: 90,
          description: "API design, documentation, authentication, versioning, and best practices",
          projects: "Designed and implemented 10+ REST APIs for various applications"
        }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-blue-500" />,
      skills: [
        { 
          name: "MongoDB", 
          icon: <SiMongodb className="text-green-500" />, 
          level: 85,
          description: "NoSQL database, aggregation pipelines, indexing, and Mongoose ODM",
          projects: "Primary database for 4 full-stack applications with complex data relationships"
        },
   
        { 
          name: "MySQL", 
          icon: <SiMysql className="text-blue-500" />, 
          level: 78,
          description: "SQL queries, database design, normalization, and stored procedures",
          projects: "Legacy system migrations and relational data management"
        },
        { 
          name: "Firebase", 
          icon: <SiFirebase className="text-yellow-500" />, 
          level: 80,
          description: "Authentication, Firestore, Cloud Functions, and real-time database",
          projects: "Built 3 real-time applications with Firebase backend"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaRocket className="text-purple-500" />,
      skills: [
        { 
          name: "Git & GitHub", 
          icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, 
          level: 92,
          description: "Version control, CI/CD, branching strategies, and collaborative development workflows",
          projects: "Managed codebases for 15+ projects with team collaboration"
        },
      
        { 
          name: "Postman", 
          icon: <SiPostman className="text-orange-500" />, 
          level: 85,
          description: "API testing, documentation, automation, and collaboration",
          projects: "Used for testing and documenting all backend APIs"
        },
     
      ]
    }
  ];

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  // Function to determine progress bar color based on skill level
  const getProgressColor = (level) => {
    if (level >= 85) return "from-green-500 to-emerald-600";
    if (level >= 70) return "from-blue-500 to-blue-600";
    if (level >= 60) return "from-purple-500 to-purple-600";
    return "from-rose-500 to-pink-600";
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-9">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build complete web applications from frontend to backend
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100 dark:border-gray-700"
            >
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-5 border-b border-blue-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                  <span className="text-2xl text-blue-600 dark:text-blue-400">{category.icon}</span>
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 cursor-pointer group"
                      onClick={() => openModal(skill)}
                    >
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(skill.level)}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                              viewport={{ once: true }}
                            >
                              {/* Animated shine effect */}
                              <motion.div
                                className="absolute top-0 -inset-x-12 h-full bg-white opacity-30"
                                initial={{ left: "-100%" }}
                                whileInView={{ 
                                  left: "100%",
                                  transition: { 
                                    delay: 1.5 + (skillIndex * 0.1), 
                                    duration: 0.8,
                                    repeat: 2,
                                    repeatDelay: 0.5
                                  }
                                }}
                                viewport={{ once: true }}
                              />
                            </motion.div>
                          </div>
                          
                          {/* Progress markers */}
                          <div className="absolute inset-0 flex justify-between items-center px-1">
                            {[0, 25, 50, 75, 100].map((marker) => (
                              <div 
                                key={marker}
                                className={`w-1 h-1 rounded-full ${skill.level >= marker ? 'bg-white opacity-50' : 'bg-gray-400 opacity-30'}`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Skill level indicator text */}
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Modal */}
      <AnimatePresence>
        {isModalOpen && selectedSkill && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>

                <div className="flex items-center gap-4 mb-5">
                  <div className="text-4xl">
                    {selectedSkill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedSkill.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span>Proficiency</span>
                    <span>{selectedSkill.level}%</span>
                  </div>
                  
                  {/* Enhanced progress bar for modal */}
                  <div className="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(selectedSkill.level)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      {/* Animated particles */}
                      {selectedSkill.level > 70 && (
                        <>
                          <motion.div
                            className="absolute top-1 left-1/4 w-1 h-1 bg-white rounded-full"
                            animate={{ 
                              opacity: [0, 1, 0],
                              y: [0, -3, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: 0.2
                            }}
                          />
                          <motion.div
                            className="absolute top-1 left-2/3 w-1 h-1 bg-white rounded-full"
                            animate={{ 
                              opacity: [0, 1, 0],
                              y: [0, -3, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: 0.5
                            }}
                          />
                        </>
                      )}
                    </motion.div>
                    
                    {/* Progress markers */}
                    <div className="absolute inset-0 flex justify-between items-center px-1">
                      {[0, 25, 50, 75, 100].map((marker) => (
                        <div 
                          key={marker}
                          className={`w-1 h-1 rounded-full ${selectedSkill.level >= marker ? 'bg-white opacity-50' : 'bg-gray-400 opacity-30'}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedSkill.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedSkill.projects}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;