import { useState } from 'react';
import { Menu, X, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img
              src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006245.png"
              alt="Beeptalk Logo"
              className="h-11 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-violet-600 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfjc_a-FSwWzH5AzKKHT7P3POjqDQ1Vd6XMHlU9n5DNyIiDzw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm font-semibold"
            >
              <UserPlus size={16} />
              Host Request
            </a>
            <a
              href="#"
              className="border border-slate-200 hover:border-violet-300 hover:text-violet-600 text-slate-700 px-5 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#32BBFF"/>
                <path d="M14.5 12.707l3.443 3.443-11.77 6.747a.998.998 0 01-.564.098L14.5 12.707z" fill="#FFCC00"/>
                <path d="M17.943 9.85L14.5 13.293 5.609 4.005a.997.997 0 01.564-.098l11.77 6.747-.001-.804z" fill="#F2103F"/>
                <path d="M17.943 9.85l-3.443 3.443 3.443 3.443a.997.997 0 00.497-1.218l-2.69-4.668 2.69-4.668a.997.997 0 00-.497-1.218v4.886z" fill="#32BBFF"/>
              </svg>
              Play Store
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-violet-600 transition-colors p-2"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfjc_a-FSwWzH5AzKKHT7P3POjqDQ1Vd6XMHlU9n5DNyIiDzw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-violet-600 text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <UserPlus size={16} />
                  Host Request
                </a>
                <a
                  href="#"
                  className="w-full border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  Play Store
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
