import { MessageCircle, Video, Shield, Star, Users, Download } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.beeptalk2025.app&pcampaignid=web_share';

const PlayStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.4-10.3 17.4-29.4 0-39.7l-1.2-.1zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="currentColor"/>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{background: '#FADA7A'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border" style={{background: '#FADA7A22', color: '#9a7c00', borderColor: '#FADA7A'}}>
              <span className="w-2 h-2 rounded-full" style={{background: '#FADA7A'}}></span>
              India's Most Trusted Platform
            </span>

            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                <span style={{color: '#FADA7A'}}>Don't Worry</span><br />
                <span className="text-black">We Have Your</span><br />
                <span className="text-black">Back</span>
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-md">
                Connect with caring people who truly understand you. Make friends, have conversations, and never feel alone again.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full" style={{background: '#FADA7A'}}></span>
                Stay Anonymous
              </span>
              <span className="flex items-center gap-2 border border-gray-200 text-[#6B6B6B] px-4 py-2 rounded-full text-sm font-medium hover:border-[#FADA7A] hover:text-black transition-colors cursor-default">
                <MessageCircle size={13} />
                Instant Chat
              </span>
              <span className="flex items-center gap-2 border border-gray-200 text-[#6B6B6B] px-4 py-2 rounded-full text-sm font-medium hover:border-[#FADA7A] hover:text-black transition-colors cursor-default">
                <Video size={13} />
                Audio & Video
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-colors duration-200 font-semibold text-sm"
              >
                <PlayStoreIcon />
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-normal leading-none mb-0.5">GET IT ON</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </a>
              <button
                className="flex items-center gap-3 border-2 border-black hover:bg-black hover:text-white text-black px-6 py-3.5 rounded-xl transition-all duration-200 font-semibold text-sm"
              >
                <Download size={18} />
                <div className="text-left">
                  <div className="text-xs text-[#6B6B6B] font-normal leading-none mb-0.5 group-hover:text-gray-300">COMING SOON</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#FADA7A', '#111', '#6B6B6B'].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{background: c}}></div>
                  ))}
                </div>
                <span className="text-sm text-[#6B6B6B] font-medium">50K+ users</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FADA7A] text-[#FADA7A]" />
                ))}
                <span className="text-sm text-[#6B6B6B] font-medium ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right: App screenshot */}
          <div className="relative">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 pointer-events-none" style={{background: '#FADA7A'}}></div>
              <img
                src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006242.png"
                alt="Beeptalk App Interface"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

            <div className="absolute -top-3 -right-3 bg-black text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg">
              <Shield size={13} style={{color: '#FADA7A'}} />
              100% Safe & Secure
            </div>
            <div className="absolute -bottom-3 -left-3 text-black px-4 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-2" style={{background: '#FADA7A'}}>
              <Users size={13} />
              Verified Users
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Languages', value: '15+' },
              { label: 'App Rating', value: '4.9★' },
              { label: 'Safe & Verified', value: '100%' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold text-black">{stat.value}</div>
                <div className="text-xs text-[#6B6B6B] font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
