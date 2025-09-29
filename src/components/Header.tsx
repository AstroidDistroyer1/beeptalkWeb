import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Beeptalk</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="/#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Be A Listener</a>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About Us</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact Us</a>
            <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">TERMS OF SERVICE</a>
          </nav>

          <div className="hidden md:flex items-center">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200 flex items-center gap-2">
              <Download size={16} />
              Coming Soon
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="/#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Be A Listener</a>
              <a href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact Us</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">TERMS OF SERVICE</a>
              <button className="w-full mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2">
                <Download size={16} />
                Coming Soon
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;