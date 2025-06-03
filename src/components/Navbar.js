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
    <nav className={`fixed top-0 left-0 right-0 w-full shadow-lg z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white backdrop-blur-lg bg-opacity-90' 
        : 'bg-white bg-opacity-80 backdrop-blur-sm'
    }`}>
      <div className="max-w-[90rem] w-full mx-auto px-2">
        <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="MetalTech Logo" 
              className="h-6 xs:h-7 sm:h-8 md:h-10 w-auto cursor-pointer"
              onClick={goToHome}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 xl:space-x-8">
            <button 
              onClick={goToHome}
              className="text-sm xl:text-base text-gray-800 hover:text-yellow-500 transition-colors whitespace-nowrap"
            >
              Anasayfa
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="text-sm xl:text-base text-gray-800 hover:text-yellow-500 transition-colors whitespace-nowrap"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="text-sm xl:text-base text-gray-800 hover:text-yellow-500 transition-colors whitespace-nowrap"
            >
              Faaliyet Alanları
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-sm xl:text-base text-gray-800 hover:text-yellow-500 transition-colors whitespace-nowrap"
            >
              İletişim
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-500 transition-colors p-1"
              aria-label="Menu"
            >
              <svg className="h-4 w-4 xs:h-5 xs:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="fixed inset-0 top-[3rem] xs:top-[3.5rem] sm:top-[4rem] md:top-[5rem] bg-white lg:hidden">
            <div className="flex flex-col w-full h-full">
              <button 
                onClick={goToHome}
                className="w-full text-left px-4 py-3 text-sm sm:text-base text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                Anasayfa
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="w-full text-left px-4 py-3 text-sm sm:text-base text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="w-full text-left px-4 py-3 text-sm sm:text-base text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                Faaliyet Alanları
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="w-full text-left px-4 py-3 text-sm sm:text-base text-gray-800 hover:text-yellow-500 hover:bg-gray-50 transition-colors border-b border-gray-100"
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