import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-emerald-400' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between relative">
          <Link 
            to="/" 
            className="relative z-[101]"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <img 
              src="https://hamzabelgacem.tn/storage/logo/logo_hamma.png" 
              alt="Logo"
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
          
          <button 
            className="relative z-[101] md:hidden p-2 hover:text-emerald-400 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-mono hover:text-emerald-400 transition ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/services" className={`text-sm font-mono hover:text-emerald-400 transition ${isActive('/services')}`}>
              Services
            </Link>
            <Link to="/resume" className={`text-sm font-mono hover:text-emerald-400 transition ${isActive('/resume')}`}>
              Resume
            </Link>
            <Link to="/work" className={`text-sm font-mono hover:text-emerald-400 transition ${isActive('/work')}`}>
              Work
            </Link>
            <Link to="/contact" className={`text-sm font-mono hover:text-emerald-400 transition ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-emerald-400 text-black px-6 py-2 rounded-full hover:bg-emerald-500 transition font-mono text-sm"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg md:hidden transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
              <Link 
                to="/" 
                className={`text-2xl font-mono ${isActive('/')} hover:text-emerald-400 transition`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`text-2xl font-mono ${isActive('/services')} hover:text-emerald-400 transition`}
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/resume" 
                className={`text-2xl font-mono ${isActive('/resume')} hover:text-emerald-400 transition`}
                onClick={toggleMenu}
              >
                Resume
              </Link>
              <Link 
                to="/work" 
                className={`text-2xl font-mono ${isActive('/work')} hover:text-emerald-400 transition`}
                onClick={toggleMenu}
              >
                Work
              </Link>
              <Link 
                to="/contact" 
                className={`text-2xl font-mono ${isActive('/contact')} hover:text-emerald-400 transition`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-emerald-400 text-black px-8 py-3 rounded-full hover:bg-emerald-500 transition font-mono text-xl"
                onClick={toggleMenu}
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}