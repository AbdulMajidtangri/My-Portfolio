import { useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const location = useLocation();

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

  // Handle scroll to section (only works on homepage)
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on homepage, redirect first
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      toggleMenu();
    }
  };

  // Set active section on scroll
  useEffect(() => {
    if (location.pathname !== "/") return; // only track sections on homepage

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education-contact'];
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navItems = [
    { id: 'home', label: 'Home', type: 'link' },
    { id: 'about', label: 'About', type: 'route' }, // new page
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'skills', label: 'Skills', type: 'scroll' },
    { id: 'education-contact', label: 'Contact', type: 'scroll' }
  ];

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
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className={`px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === `/${item.id}`
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Dark mode and mobile menu button */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              id="dark-mode-button"
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
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
            {navItems.map((item, index) =>
              item.type === 'route' ? (
                <Link
                  key={item.id}
                  ref={el => menuItemsRef.current[index] = el}
                  to={`/${item.id}`}
                  onClick={toggleMenu}
                  className={`text-center text-xl font-medium transition-colors ${
                    location.pathname === `/${item.id}`
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  ref={el => menuItemsRef.current[index] = el}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-center text-xl font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
