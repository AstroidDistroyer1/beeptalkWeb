import { Mail, MapPin, Shield, Users, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12 pb-12 border-b border-white/10">
          <div className="max-w-xs">
            <img
              src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006245.png"
              alt="Beeptalk Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Building meaningful connections, one conversation at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-1">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Home</a></li>
                <li><a href="/#about" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />About Us</a></li>
                <li><a href="/#features" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Features</a></li>
                <li><a href="/terms" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Terms</a></li>
                <li><a href="/community-guidelines" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Community Guidelines</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Privacy Policy</a></li>
                <li><a href="/child-safety-policy" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Child Safety Policy</a></li>
                <li><a href="/refund-policy" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Refund Policy</a></li>
                <li><a href="/coins-policy" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Coins Policy</a></li>
                <li><a href="/delete-account-faq" className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-1 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />Delete Account FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div id="contact">
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-violet-400 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Beeptalkapp@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-violet-400 flex-shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">
                    Electronic City, Bangalore,<br />
                    Karnataka 560100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="border border-white/10 rounded-xl p-4 text-center hover:border-violet-500/50 transition-colors">
            <Shield className="w-7 h-7 text-violet-400 mx-auto mb-2" />
            <p className="font-semibold text-sm text-white">100% Safe</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 text-center hover:border-violet-500/50 transition-colors">
            <Users className="w-7 h-7 text-violet-400 mx-auto mb-2" />
            <p className="font-semibold text-sm text-white">50K+ Users</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 text-center hover:border-violet-500/50 transition-colors">
            <Shield className="w-7 h-7 text-violet-400 mx-auto mb-2" />
            <p className="font-semibold text-sm text-white">Verified</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm">
            © 2025 Beeptalk. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            App coming soon on App Store & Google Play · Powered by Levelon Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;