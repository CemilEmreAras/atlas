import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white  shadow-lg z-50 text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold  w-20">
            <img src="../assets/logo-small.png" alt="logo" className='w-full' />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" title="Ana Sayfa" />
            <NavLink href="#services" title="Hakkımızda" />
            <NavLink href="#products" title="Faaliyet Alanları" />
           
            <NavLink href="#contact" title="İletişim" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <MobileNavLink href="#home" title="Ana Sayfa" setIsOpen={setIsOpen} />
            <MobileNavLink href="#services" title="Hakkımızda" setIsOpen={setIsOpen} />
            <MobileNavLink href="#products" title="Faaliyet Alanları" setIsOpen={setIsOpen} />
     
            <MobileNavLink href="#contact" title="İletişim" setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, title }) => (
  <a
    href={href}
    className="text-black hover:text-blue-900 transition-colors"
  >
    {title}
  </a>
);

const MobileNavLink = ({ href, title, setIsOpen }) => (
  <a
    href={href}
    className="block text-white hover:text-yellow-500 py-2"
    onClick={() => setIsOpen(false)}
  >
    {title}
  </a>
);

export default Navbar; 