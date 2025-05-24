import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiGreensock, SiBootstrap, SiCplusplus, SiVercel, SiNetlify 
} from 'react-icons/si'; // ✅ VS Code icon here
import { DiJava } from 'react-icons/di';
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
        { name: "React JS", icon: <FaReact className="text-blue-400" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
        { name: "GSAP", icon: <SiGreensock className="text-green-500" />, level: 75 },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, level: 80 }
      ]
    },
    {
      title: "Languages",
      icon: "",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-blue-600" />, level: 60 },
        { name: "Java", icon: <DiJava className="text-red-500" size={24} />, level: 70 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 }
      ]
    },
    {
      title: "Tools",
      icon: "",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, level: 90 },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, level: 80 },
        { name: "Netlify", icon: <SiNetlify className="text-teal-500" />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-blue-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
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
    </section>
  );
};

export default SkillsSection;
