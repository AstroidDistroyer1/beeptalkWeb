import { Mail, MapPin, Shield, Users } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.beeptalk2025.app&pcampaignid=web_share';

const PlayStoreIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.4-10.3 17.4-29.4 0-39.7l-1.2-.1zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="currentColor"/>
  </svg>
);

const Footer = () => {
  return (
    <footer style={{background: '#0d0d0d'}} className="text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] rounded-full blur-3xl opacity-5" style={{background: '#FADA7A'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <img
              src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006245.png"
              alt="Beeptalk Logo"
              className="h-11 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-5" style={{color: '#6B6B6B'}}>
              Building meaningful connections, one conversation at a time.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black transition-opacity hover:opacity-90"
              style={{background: '#FADA7A'}}
            >
              <PlayStoreIcon />
              Get on Play Store
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/#about' },
                { label: 'Features', href: '/#features' },
                { label: 'Terms', href: '/terms' },
                { label: 'Community Guidelines', href: '/community-guidelines' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white" style={{color: '#6B6B6B'}}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Legal</h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Child Safety Policy', href: '/child-safety-policy' },
                { label: 'Refund Policy', href: '/refund-policy' },
                { label: 'Coins Policy', href: '/coins-policy' },
                { label: 'Delete Account FAQ', href: '/delete-account-faq' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white" style={{color: '#6B6B6B'}}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={15} style={{color: '#FADA7A'}} className="flex-shrink-0" />
                <span className="text-sm" style={{color: '#6B6B6B'}}>Beeptalkapp@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} style={{color: '#FADA7A'}} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed" style={{color: '#6B6B6B'}}>
                  Electronic City, Bangalore,<br />
                  Karnataka 560100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: <Shield className="w-5 h-5" />, label: '100% Safe' },
            { icon: <Users className="w-5 h-5" />, label: '50K+ Users' },
            { icon: <Shield className="w-5 h-5" />, label: 'Trusted Platform' },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border rounded-lg px-5 py-2.5 transition-colors hover:border-[#FADA7A]"
              style={{borderColor: '#222', color: '#FADA7A'}}
            >
              {b.icon}
              <span className="text-sm font-medium text-white">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm" style={{color: '#6B6B6B'}}>© 2025 Beeptalk. All rights reserved.</p>
          <p className="text-xs" style={{color: '#444'}}>
            Coming soon on App Store · Powered by Levelon Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
