import { Download, MessageCircle, Video, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl opacity-40 translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 px-4 py-1.5 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                India's Most Trusted Platform
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-violet-600">Don't Worry</span>
                <br />
                <span className="text-slate-900">We Have Your</span>
                <br />
                <span className="text-slate-900">Back</span>
              </h1>

              <div className="space-y-3">
                <p className="text-lg font-medium text-slate-700">
                  Feeling sad and lonely?
                </p>
                <p className="text-slate-500 text-base leading-relaxed">
                  Don't worry! Connect with caring people who understand you.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                    Stay Anonymous
                  </span>
                  <span className="flex items-center gap-2 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:border-violet-300 hover:text-violet-600 transition-colors">
                    <MessageCircle size={14} />
                    Instant Chat
                  </span>
                  <span className="flex items-center gap-2 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:border-violet-300 hover:text-violet-600 transition-colors">
                    <Video size={14} />
                    Audio & Video
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl transition-colors duration-200 flex items-center gap-3 text-base font-semibold group w-fit">
              <Download size={20} />
              Coming Soon
              <span className="group-hover:translate-x-1 transition-transform duration-200 text-violet-300">→</span>
            </button>

            <div className="flex gap-3">
              <div className="bg-slate-900 text-white px-5 py-2.5 rounded-xl rounded-bl-none inline-block text-base font-semibold">
                Hi! 👋
              </div>
              <div className="bg-violet-600 text-white px-5 py-2.5 rounded-xl rounded-br-none inline-block text-sm font-medium">
                Let's talk! 💬
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 bg-violet-100 rounded-3xl blur-2xl opacity-60"></div>
              <img
                src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006242.png"
                alt="Beeptalk App Interface"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
              <Shield size={14} className="text-violet-400" />
              100% Safe & Secure
            </div>

            <div className="absolute -bottom-4 -left-4 bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
              ✓ Verified Users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
