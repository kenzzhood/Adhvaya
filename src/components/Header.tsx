import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Subjects', id: 'subjects' },
    { name: 'Features', id: 'features' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 text-primary-600" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Advaya Coaching</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`font-medium transition-colors hover:text-primary-600 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="p-2 text-gray-700 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-lg md:hidden">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-3 font-medium transition-colors hover:bg-gray-100 ${isScrolled ? 'text-gray-900' : 'text-gray-700'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
