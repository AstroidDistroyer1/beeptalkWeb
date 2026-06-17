import { Mail, MapPin, Heart, Shield, Users, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top section with logo and tagline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-300" size={32} />
            Beeptalk
            <Heart className="text-pink-400" size={32} />
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Building meaningful connections, one conversation at a time
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users size={24} className="text-yellow-300" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Home</a></li>
              <li><a href="/#about" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ About Us</a></li>
              <li><a href="/#features" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Features</a></li>
              <li><a href="/terms" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Terms and Conditions</a></li>
              <li><a href="/community-guidelines" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Community Guidelines</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield size={24} className="text-green-300" />
              Legal & Safety
            </h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Privacy Policy</a></li>
              <li><a href="/child-safety-policy" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Child Safety Policy</a></li>
              <li><a href="/refund-policy" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Refund Policy</a></li>
              <li><a href="/coins-policy" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Coins Policy</a></li>
              <li><a href="/delete-account-faq" className="text-purple-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 font-medium">→ Delete Account FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div id="contact">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Mail size={24} className="text-blue-300" />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all">
                <Mail size={20} className="text-blue-300 flex-shrink-0" />
                <span className="text-purple-100 font-medium">Beeptalkapp@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all">
                <MapPin size={20} className="mt-0.5 text-pink-300 flex-shrink-0" />
                <span className="text-purple-100 font-medium">
                  2-252, Palli, Thallacheruvu, 1, Palli,<br />
                  Guntur, Palnadu, Andhra Pradesh - 522409
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <Shield className="w-12 h-12 text-green-300 mx-auto mb-3" />
            <p className="font-bold text-sm">100% Safe</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <Users className="w-12 h-12 text-blue-300 mx-auto mb-3" />
            <p className="font-bold text-sm">50K+ Users</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <Heart className="w-12 h-12 text-pink-300 mx-auto mb-3" />
            <p className="font-bold text-sm">Trusted Platform</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-purple-100 text-lg font-medium mb-2">
            © 2025 Beeptalk. All rights reserved.
          </p>
          <p className="text-purple-200 text-sm">
            App coming soon on App Store and Google Play • Powered by Levelon Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;