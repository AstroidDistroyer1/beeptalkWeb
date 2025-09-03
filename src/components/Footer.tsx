import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 to-yellow-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Information</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Be a Listener</a></li>
              <li><a href="#privacy" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div id="contact">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} />
                <span>levelon.in@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} />
                <span>+91 8179031543</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin size={18} className="mt-0.5" />
                <span>
                  LEVEL ON TECHNOLOGIES PRIVATE LIMITED, Andhrapradesh, Guntur, Amaravathi
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-yellow-400/30 text-center">
          <p className="text-gray-700">
            © 2025 Beeptalk. App coming soon on App Store and Google Play. Powered by LEVEL ON TECHNOLOGIES PRIVATE LIMITED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;