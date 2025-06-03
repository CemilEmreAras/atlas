import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goToHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full shadow-lg z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white backdrop-blur-lg bg-opacity-90' 
        : 'bg-white bg-opacity-80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="MetalTech Logo" 
              className="h-12 w-auto cursor-pointer"
              onClick={goToHome}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <button 
              onClick={goToHome}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Anasayfa
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Faaliyet Alanları
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              İletişim
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-500 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={goToHome}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
              >
                Anasayfa
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
              >
                Faaliyet Alanları
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
              >
                İletişim
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 