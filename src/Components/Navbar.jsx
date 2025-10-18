import { useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  // Toggle mobile menu with animation
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsOpen(false)
      });
    }
  };

  // Handle navigation - updated to handle both routes and scroll sections
  const handleNavigation = (item) => {
    if (item.type === 'route') {
      // Navigate to the route page
      navigate(`/${item.id}`);
      setActiveSection(item.id);
    } else if (item.type === 'scroll') {
      // Handle scroll navigation
      if (location.pathname !== "/") {
        // If not on homepage, navigate to home with hash
        navigate(`/#${item.id}`);
        // The scroll will be handled after the page loads
      } else {
        // If already on homepage, scroll to section
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(item.id);
        }
      }
    } else if (item.type === 'link') {
      // Handle home link
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        // If already on homepage, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
    }
    
    // Close mobile menu if open
    if (isOpen) {
      toggleMenu();
    }
  };

  // Set active section based on current route and scroll position
  useEffect(() => {
    // Set active section based on current route
    if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/projects') {
      setActiveSection('projects');
    } else if (location.pathname === '/') {
      // Only track scroll sections on homepage
      const handleScroll = () => {
        const sections = ['home', 'skills', 'education-contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
        
        // If at the top of the page, set to home
        if (window.scrollY < 100) {
          setActiveSection('home');
        }
      };

      window.addEventListener('scroll', handleScroll);
      // Set initial active section
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  // Initialize dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuButton = document.getElementById('menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const darkModeButton = document.getElementById('dark-mode-button');

      if (isOpen &&
        !menuButton?.contains(event.target) &&
        !mobileMenu?.contains(event.target) &&
        !darkModeButton?.contains(event.target)) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);
  // Scroll to section after navigation to home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
        }
      }, 100);
    }
  }, [location]);

  const navItems = [
    { id: 'home', label: 'Home', type: 'link' },
    { id: 'about', label: 'About', type: 'route' },
    { id: 'projects', label: 'Projects', type: 'route' },
    { id: 'skills', label: 'Skills', type: 'scroll' },
    { id: 'education-contact', label: 'Contact', type: 'scroll' }
  ];

  // Check if current route matches item
  const isActiveRoute = (item) => {
    if (item.type === 'route') {
      return location.pathname === `/${item.id}`;
    }
    return activeSection === item.id;
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md fixed w-full z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">{"<"}</span>
                MAJID
                <span className="text-blue-600 dark:text-blue-400">{"/>"}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300 ${
                  isActiveRoute(item)
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Dark mode and mobile menu button */}
          <div className="flex items-center space-x-2 md:space-x-4">
          <button
  id="dark-mode-button"
  onClick={toggleDarkMode}
  className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
  aria-label="Toggle dark mode"
>
  {darkMode ? (
    <FaSun size={18} className="text-yellow-400" /> // Bright yellow sun
  ) : (
    <FaMoon size={18} className="text-blue-400" /> // Soft blue moon
  )}
</button>


            <button
              id="menu-button"
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 ${isOpen ? 'block' : 'hidden'}`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-center px-4 space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={el => menuItemsRef.current[index] = el}
                onClick={() => handleNavigation(item)}
                className={`text-center text-xl font-medium transition-colors ${
                  isActiveRoute(item)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;