import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity, FaSchool, FaPaperPlane, FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [activeTimeline, setActiveTimeline] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    try {
      const response = await fetch('https://formsubmit.co/ajax/majidalitangri7@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: "New message from your portfolio!"
        })
      });
      
      const data = await response.json();
      
      if (data.success === "true") {
        setMessage({ text: 'Message sent successfully!', type: 'success' });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="education-contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-9">
        {/* Education Section - ENHANCED */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3"
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white">
              <FaUniversity className="text-xl" />
            </div>
            <span>Education Journey</span>
          </motion.h2>
     
          
          {/* Timeline Content */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-blue-200 dark:bg-gray-600 rounded-full"></div>
            
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 ml-2 relative ${activeTimeline !== index ? 'opacity-60' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-9 top-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-gray-800">
                  {edu.icon}
                </div>
                <div className="ml-10 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-md border border-blue-200 dark:border-gray-600">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {edu.institution}
                    </h3>
                    <span className="flex items-center gap-1 text-sm bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      <FaCalendarAlt className="text-xs" /> {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.degree}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {edu.details}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                    
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Achievements:</span>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                    {edu.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section with WORKING FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3"
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white">
              <FaEnvelope className="text-xl" />
            </div>
            <span>Get In Touch</span>
          </motion.h2>
          
          <div className="space-y-5">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-blue-200 dark:border-gray-600"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Email</h3>
                <a href="mailto:majidalitangri@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  majidalitangri@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-blue-200 dark:border-gray-600"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Phone</h3>
                <a href="tel:+923310249986" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +92 331 0249986
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-blue-200 dark:border-gray-600"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Hyderabad, Sindh, Pakistan
                </p>
              </div>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit} 
              className="mt-6 space-y-4"
            >
              {message.text && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-3 rounded-md ${
                    message.type === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                >
                  {message.text}
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea 
                  name="message"
                  placeholder="Type your message here..." 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 w-full disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;