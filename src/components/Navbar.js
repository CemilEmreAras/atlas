import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
      // Ana sayfaya yönlendirdikten sonra scroll işlemi için timeout
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
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={goToHome}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Anasayfa
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Faaliyet Alanları
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-gray-800 hover:text-yellow-500 transition-colors"
            >
              İletişim
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-800">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 