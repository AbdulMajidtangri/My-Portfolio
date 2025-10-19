import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaUsers, 
  FaMobileAlt, 
  FaRocket, 
  FaLightbulb, 
  FaPalette, 
  FaServer,
  FaGraduationCap,
  FaAward,
  FaBriefcase,
  FaDownload,
  FaHeart,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaSchool,
  FaCalendarAlt
} from 'react-icons/fa';
import profile from '../assets/profile.png';
import cv from '../assets/majidcv (2).pdf';

// Personal Info Component
const PersonalInfo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    <div className="flex items-center">
      <div className="mr-3 text-blue-600 dark:text-blue-400">
        <FaMapMarkerAlt />
      </div>
      <div>
        <span className="font-medium text-gray-800 dark:text-white">Location:</span>
        <p className="text-gray-600 dark:text-gray-300">Hyderabad, Sindh, Pakistan</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="mr-3 text-blue-600 dark:text-blue-400">
        <FaEnvelope />
      </div>
      <div>
        <span className="font-medium text-gray-800 dark:text-white">Email:</span>
        <p className="text-gray-600 dark:text-gray-300">majidalitangri7@gmail.com</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="mr-3 text-blue-600 dark:text-blue-400">
        <FaPhone />
      </div>
      <div>
        <span className="font-medium text-gray-800 dark:text-white">Phone:</span>
        <p className="text-gray-600 dark:text-gray-300">+92 331 0249986</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="mr-3 text-blue-600 dark:text-blue-400">
      </div>
    
    </div>
  </div>
);

// Skills Tab Component
const SkillsTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Skills</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
      >
        <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
          <FaCode />
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Frontend Development</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
      >
        <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
          <FaServer />
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Backend Development</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Mongoose
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
      >
        <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
          <FaMobileAlt />
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Responsive Design</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Mobile-first approach, Cross-browser compatibility, Progressive Web Apps
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100 dark:border-gray-700"
      >
        <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
          <FaRocket />
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Tools & Technologies</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Git, GitHub, VS Code, Postman, npm,  Vercel
        </p>
      </motion.div>
    </div>
  </motion.div>
);

// Experience Tab Component
const ExperienceTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Work Experience</h3>
    <div className="space-y-6">
      {/* First Experience */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Frontend Developer Intern</h4>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium rounded-full">
            Jan 2025 – Jun 2025
          </span>
        </div>
        <p className="text-blue-600 dark:text-blue-400 mb-2">Husbar · Remote</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Developed responsive web applications using React and Tailwind CSS. Collaborated with team members 
          using Git. Built multiple projects through team collaboration and consistently 
          satisfied clients with high-quality work.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">React</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">JavaScript</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">Tailwind CSS</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">Git</span>
        </div>
      </div>

      {/* Second Experience - Updated to Softotic Internship */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Full Stack Developer Intern</h4>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium rounded-full">
            Aug 2025 – Present
          </span>
        </div>
        <p className="text-blue-600 dark:text-blue-400 mb-2">Softotic · Remote</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Building and maintaining full stack web applications with React.js, Node.js, Express.js, and MongoDB. 
          Designed and implemented RESTful APIs for seamless client-server communication. 
          Deployed applications on cloud platforms such as Vercel and Heroku, ensuring scalability and reliability. 
          Worked on real-life projects, handling end-to-end development from frontend to backend.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">React</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">Node.js</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">Express.js</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">MongoDB</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">REST API</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">Vercel</span>
        </div>
      </div>
    </div>
  </motion.div>
);


// Education Tab Component
const EducationTab = () => {
  const educationData = [
    {
      id: 1,
      institution: "Mehran University of Engineering and Technology",
      degree: "Bachelor's in Software Engineering",
      period: "2023-2027",
      status: "Completed 2nd Year",
      icon: <FaUniversity className="text-xl" />,
      details: "Currently pursuing my degree in Computer Science with a focus on software engineering and web development.",
      achievements: [ "Active in coding competitions"]
    },
    {
      id: 2,
      institution: "Pakturk International School",
      degree: "Higher Secondary Education",
      period: "2023",
      status: "Completed with Excellence",
      icon: <FaSchool className="text-xl" />,
      details: "Completed my intermediate education with focus on pre-engineering subjects.",
      achievements: ["A+ Grade in Computer Science", "1st Position in Science Fair", "Member of IT Club"]
    },
    {
      id: 3,
      institution: "Pakturk International School",
      degree: "Matriculation",
      period: "2021",
      status: "Completed with Distinction",
      icon: <FaGraduationCap className="text-xl" />,
      details: "Completed my matriculation with science subjects and developed interest in programming.",
      achievements: ["A+ Grade in Mathematics", "Top 5 in Class", "Science Project Award"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                {edu.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.institution}</h4>
                  <span className="flex items-center gap-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded-full">
                    <FaCalendarAlt className="text-xs" /> {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 mb-2 font-medium">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{edu.details}</p>
                
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <FaAward className="text-yellow-500 text-sm" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Achievements:</span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full inline-block">
                  {edu.status}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Tech Stack Component
const TechStack = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tech Stack</h3>
    <div className="flex flex-wrap gap-3">
      {[
        { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
        { name: 'React', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
        { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
        { name: 'Express.js', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
        { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
        { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' },
        { name: 'HTML5', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
        { name: 'CSS3', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
        { name: 'Git', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
        { name: 'REST APIs', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' },
        { name: 'Mongoose', color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300' },
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
);

// Profile Image Component
const ProfileImage = () => (
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
          src={profile}
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
);

// Tabs Navigation Component
const TabsNavigation = ({ activeTab, setActiveTab }) => (
  <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
    <button
      onClick={() => setActiveTab('skills')}
      className={`px-4 py-2 text-sm font-medium ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
    >
      Skills
    </button>
    <button
      onClick={() => setActiveTab('experience')}
      className={`px-4 py-2 text-sm font-medium ${activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
    >
      Experience
    </button>
    <button
      onClick={() => setActiveTab('education')}
      className={`px-4 py-2 text-sm font-medium ${activeTab === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
    >
      Education
    </button>
  </div>
);

// Main About Component
const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }, []); // Empty dependency array means this runs once when component mounts

  const handleDownloadCV = () => {
    try {
      console.log('CV file path:', cv);
      
      // Method 1: Direct download
      const link = document.createElement('a');
      link.href = cv;
      link.download = 'majidcv (2).pdf';
      link.target = '_blank';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Download initiated successfully');
      
      // Method 2: Fallback - fetch and download
      setTimeout(() => {
        fetch(cv)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link2 = document.createElement('a');
            link2.href = url;
            link2.download = 'Majid_FullStack_Developer_CV.pdf';
            document.body.appendChild(link2);
            link2.click();
            document.body.removeChild(link2);
            window.URL.revokeObjectURL(url);
          })
          .catch(error => {
            console.error('Fetch method failed:', error);
            // Method 3: Final fallback - open in new tab
            window.open(cv, '_blank');
          });
      }, 100);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Final fallback: try opening in new tab
      window.open(cv, '_blank');
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Profile Image */}
          <ProfileImage />

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5 w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Abdul Majid</span>, a Full Stack Developer
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              With 1.5 years of professional experience, I specialize in creating responsive, 
              user-friendly web applications. I completed my remote internship as a Frontend 
              Developer at Husbar, where I built multiple projects through team collaboration 
              and consistently satisfied clients with my work. Currently pursuing my Bachelor's 
              in Computer Science while working on real-world projects.
            </p>

            {/* Personal Info */}
            <PersonalInfo />

            {/* Tabs Navigation */}
            <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Tabs Content */}
            <div className="mb-8">
              {activeTab === 'skills' && <SkillsTab />}
              {activeTab === 'experience' && <ExperienceTab />}
              {activeTab === 'education' && <EducationTab />}
            </div>

            {/* Tech Stack */}
            <TechStack />

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300"
              >
                Contact Me
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Download CV button clicked');
                  handleDownloadCV();
                }}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload size={14} /> Download CV
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;