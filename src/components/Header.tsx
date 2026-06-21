import { useState } from 'react';
import { Menu, X, UserPlus } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.beeptalk2025.app&pcampaignid=web_share';

const PlayStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.4-10.3 17.4-29.4 0-39.7l-1.2-.1zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="currentColor"/>
  </svg>
);

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
    <header className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
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
                className="text-[#6B6B6B] hover:text-black transition-colors duration-200 text-sm font-medium"
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
              className="bg-[#FADA7A] hover:bg-[#f5cc55] text-black px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm font-semibold"
            >
              <UserPlus size={16} />
              Host Request
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm font-semibold"
            >
              <PlayStoreIcon />
              Play Store
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#6B6B6B] hover:text-black transition-colors p-2"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-[#6B6B6B] hover:text-black hover:bg-gray-50 rounded-lg transition-all text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfjc_a-FSwWzH5AzKKHT7P3POjqDQ1Vd6XMHlU9n5DNyIiDzw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FADA7A] text-black px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <UserPlus size={16} />
                  Host Request
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <PlayStoreIcon />
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
