import { Download, Play, MessageCircle, Video, Phone, CheckCircle, Smile } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 px-4 py-1.5 rounded-full text-sm font-semibold">
                <Smile size={14} />
                All-in-One Platform
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                Connect, Chat, and<br />
                <span className="text-violet-600">Care All in One App</span>
              </h2>

              <p className="text-slate-500 text-base leading-relaxed">
                Everything you need to build meaningful connections, all in one beautiful platform.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: <MessageCircle className="w-5 h-5 text-white" />, title: 'Anonymous Chat', desc: 'Stay anonymous while making genuine connections with people around you.' },
                { icon: <Video className="w-5 h-5 text-white" />, title: 'Audio & Video Calls', desc: 'Crystal-clear HD calls to build deeper connections with your matches.' },
                { icon: <Phone className="w-5 h-5 text-white" />, title: 'Moderated Community', desc: 'Safe, respectful environment with 24/7 moderation and community guidelines.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                      {item.title}
                      <CheckCircle className="w-4 h-4 text-violet-500" />
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 text-sm font-semibold">
                <Download size={18} />
                Coming Soon for iOS
              </button>
              <button className="border border-slate-200 hover:border-violet-300 hover:text-violet-600 text-slate-700 px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 text-sm font-semibold">
                <Play size={18} />
                Coming Soon for Android
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-slate-100 p-7 rounded-2xl shadow-xl">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Experience Beeptalk</h3>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-violet-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-100 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 bg-slate-50 p-3 rounded-xl rounded-tl-none border border-slate-100">
                      <p className="text-sm text-slate-700">Hey! Would you like to chat? 😊</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="flex-1 bg-violet-600 p-3 rounded-xl rounded-tr-none">
                      <p className="text-sm text-white">Yes! Let's connect! ✨</p>
                    </div>
                    <div className="w-8 h-8 bg-slate-900 rounded-full flex-shrink-0"></div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-100 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 bg-slate-50 p-3 rounded-xl rounded-tl-none border border-slate-100">
                      <p className="text-sm text-slate-700">Audio call? 📞</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5">
                    <MessageCircle className="w-4 h-4" /> Chat
                  </button>
                  <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5">
                    <Phone className="w-4 h-4" /> Call
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
              💬 100K+ Chats
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
              🎯 Safe & Secure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
