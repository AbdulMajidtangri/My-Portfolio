import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity, FaSchool, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

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

  return (
    <section id="education-contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Section - FULLY RESTORED */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <FaUniversity className="text-blue-600 dark:text-blue-400" />
            <span>Education</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Mehran University of Engineering and Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Bachelor's in Computer Science (2023-2027)
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Completed 2nd Year
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Pakturk International School
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Higher Secondary Education (2023)
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Matriculation (2021)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section with WORKING FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <FaEnvelope className="text-blue-600 dark:text-blue-400" />
            <span>Get In Touch</span>
          </h2>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Email</h3>
                <a href="mailto:majidalitangri@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  majidalitangri@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Phone</h3>
                <a href="tel:+923310249986" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +92 331 0249986
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Hyderabad, Sindh, Pakistan
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {message.text && (
                <div className={`p-3 rounded-md ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {message.text}
                </div>
              )}
              
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                required
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                required
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 w-full disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;