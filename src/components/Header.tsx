import { useState } from 'react';
import { Menu, X, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-xl fixed w-full top-0 z-50 shadow-lg border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo only - removed text */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006245.png" 
                alt="Beeptalk Logo" 
                className="relative h-14 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">Home</a>
            <a href="/#features" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">Features</a>
            <a href="/#about" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">About</a>
            <a href="/#contact" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">Contact</a>
            <a href="/terms" className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">Terms</a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Host Request Button */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfjc_a-FSwWzH5AzKKHT7P3POjqDQ1Vd6XMHlU9n5DNyIiDzw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-bold hover:scale-105"
            >
              <UserPlus size={20} />
              Host Request
            </a>

            {/* Play Store Button */}
            <a 
              href="#"
              className="bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-bold hover:scale-105 hover:border-gray-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                {/* Real colorful Google Play icon */}
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#32BBFF"/>
                <path d="M14.5 12.707l3.443 3.443-11.77 6.747a.998.998 0 01-.564.098L14.5 12.707z" fill="#FFCC00"/>
                <path d="M17.943 9.85L14.5 13.293 5.609 4.005a.997.997 0 01.564-.098l11.77 6.747-.001-.804z" fill="#F2103F"/>
                <path d="M17.943 9.85l-3.443 3.443 3.443 3.443a.997.997 0 00.497-1.218l-2.69-4.668 2.69-4.668a.997.997 0 00-.497-1.218v4.886z" fill="#32BBFF"/>
                <path d="M17.943 14.736l2.691 4.668a1 1 0 01-.061.596l-2.63-4.56v-.704z" fill="#FFCC00"/>
                <path d="M17.943 9.85v-.804l2.691-4.668a1 1 0 01.061.596l-2.752 4.876z" fill="#F2103F"/>
                <linearGradient id="playGradient1" x1="8.677" y1="7.416" x2="15.645" y2="14.384" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fff" stopOpacity=".1"/>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </linearGradient>
                <path d="M17.943 9.046l-11.77-6.747a1.01 1.01 0 00-.564-.098L14.5 11.293l3.443-3.443v1.196z" fill="url(#playGradient1)"/>
              </svg>
              Play Store
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-b-2xl border-t border-purple-100">
              <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-purple-600 rounded-xl transition-all font-semibold">Home</a>
              <a href="/#features" className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-purple-600 rounded-xl transition-all font-semibold">Features</a>
              <a href="/#about" className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-purple-600 rounded-xl transition-all font-semibold">About</a>
              <a href="/#contact" className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-purple-600 rounded-xl transition-all font-semibold">Contact</a>
              <a href="/terms" className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-purple-600 rounded-xl transition-all font-semibold">Terms</a>
              
              {/* Mobile buttons */}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfjc_a-FSwWzH5AzKKHT7P3POjqDQ1Vd6XMHlU9n5DNyIiDzw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg"
              >
                <UserPlus size={18} />
                Host Request
              </a>

              <a 
                href="#"
                className="w-full bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg hover:border-gray-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#32BBFF"/>
                  <path d="M14.5 12.707l3.443 3.443-11.77 6.747a.998.998 0 01-.564.098L14.5 12.707z" fill="#FFCC00"/>
                  <path d="M17.943 9.85L14.5 13.293 5.609 4.005a.997.997 0 01.564-.098l11.77 6.747-.001-.804z" fill="#F2103F"/>
                  <path d="M17.943 9.85l-3.443 3.443 3.443 3.443a.997.997 0 00.497-1.218l-2.69-4.668 2.69-4.668a.997.997 0 00-.497-1.218v4.886z" fill="#32BBFF"/>
                  <path d="M17.943 14.736l2.691 4.668a1 1 0 01-.061.596l-2.63-4.56v-.704z" fill="#FFCC00"/>
                  <path d="M17.943 9.85v-.804l2.691-4.668a1 1 0 01.061.596l-2.752 4.876z" fill="#F2103F"/>
                </svg>
                Play Store
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;