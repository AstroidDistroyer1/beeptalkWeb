import { MessageCircle, Video, Phone, CheckCircle, Smile, Mic, Shield, Zap } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.beeptalk2025.app&pcampaignid=web_share';

const PlayStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.4-10.3 17.4-29.4 0-39.7l-1.2-.1zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="currentColor"/>
  </svg>
);

const AppShowcase = () => {
  const features = [
    { icon: <MessageCircle className="w-5 h-5" />, title: 'Anonymous Chat', desc: 'Chat without revealing your identity until you are comfortable sharing.' },
    { icon: <Video className="w-5 h-5" />, title: 'HD Audio & Video Calls', desc: 'Crystal-clear calls so every conversation feels personal and real.' },
    { icon: <Phone className="w-5 h-5" />, title: 'Random Call', desc: 'Instantly connect with a new person and discover a new friendship.' },
    { icon: <Mic className="w-5 h-5" />, title: 'Audio Streaming Rooms', desc: 'Join live audio rooms and chat with multiple people at once.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Safe & Moderated', desc: '24/7 moderation keeps the community respectful and authentic.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Earn Rewards', desc: 'Become a host and earn coins by helping people through conversations.' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border mb-5" style={{background: '#FADA7A22', color: '#9a7c00', borderColor: '#FADA7A'}}>
            <Smile size={14} />
            All-in-One Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Connect, Chat &<br /><span style={{color: '#FADA7A'}}>Care All in One App</span>
          </h2>
          <p className="text-[#6B6B6B] text-base max-w-lg mx-auto">
            Everything you need to build real friendships and meaningful connections—in one beautiful, safe platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Feature list */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#FADA7A] hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{background: '#FADA7A22', color: '#9a7c00'}}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-black text-sm mb-1 flex items-center gap-1.5">
                  {item.title}
                  <CheckCircle className="w-3.5 h-3.5" style={{color: '#FADA7A'}} />
                </h3>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* App screenshot card */}
          <div className="relative">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none" style={{background: '#FADA7A'}}></div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-black">Beeptalk Live</h3>
                  <p className="text-xs text-[#6B6B6B]">Connect with someone new right now</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-gray-200 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-gray-200 rounded-full"></div>
                  <div className="w-2.5 h-2.5 rounded-full" style={{background: '#FADA7A'}}></div>
                </div>
              </div>

              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex-shrink-0" style={{background: '#FADA7A33'}}></div>
                  <div className="flex-1 bg-gray-50 p-3 rounded-xl rounded-tl-none border border-gray-100">
                    <p className="text-sm text-black">Hey! Would you like to chat? 😊</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 p-3 rounded-xl rounded-tr-none text-black" style={{background: '#FADA7A'}}>
                    <p className="text-sm font-medium">Yes! Let's connect! ✨</p>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full flex-shrink-0"></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex-shrink-0" style={{background: '#FADA7A33'}}></div>
                  <div className="flex-1 bg-gray-50 p-3 rounded-xl rounded-tl-none border border-gray-100">
                    <p className="text-sm text-black">Audio call? Let's go 🎙️</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 relative z-10">
                <button className="flex-1 text-black py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5" style={{background: '#FADA7A'}}>
                  <MessageCircle className="w-4 h-4" /> Chat Now
                </button>
                <button className="flex-1 bg-black hover:bg-gray-900 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5">
                  <Phone className="w-4 h-4" /> Call Now
                </button>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 text-black px-4 py-2 rounded-xl text-xs font-bold shadow-lg" style={{background: '#FADA7A'}}>
              💬 100K+ Chats
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg">
              🎯 Safe & Secure
            </div>
          </div>
        </div>

        {/* Download banner */}
        <div className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{background: '#111111'}}>
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Download Beeptalk Now
            </h3>
            <p className="text-sm" style={{color: '#6B6B6B'}}>Available on Google Play. iOS coming soon.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-colors hover:opacity-90 text-black"
              style={{background: '#FADA7A'}}
            >
              <PlayStoreIcon />
              <div className="text-left">
                <div className="text-xs font-normal leading-none mb-0.5 opacity-70">GET IT ON</div>
                <div className="text-sm font-bold leading-none">Google Play</div>
              </div>
            </a>
            <button className="flex items-center gap-3 border border-gray-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors hover:border-gray-500">
              <span className="text-lg">🍎</span>
              <div className="text-left">
                <div className="text-xs font-normal leading-none mb-0.5 opacity-50">COMING SOON ON</div>
                <div className="text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
