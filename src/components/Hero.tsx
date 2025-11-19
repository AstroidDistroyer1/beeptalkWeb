 
import { Download, MessageCircle, Video, Sparkles, Heart, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                <Sparkles size={16} />
                <span>India's Most Trusted Platform</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 animate-gradient">
                  Don't Worry
                </span>
                <br />
                <span className="text-gray-800">We Have Your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Back</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                  <Heart className="text-pink-500 animate-pulse" size={24} />
                  Feeling sad and lonely?
                </p>
                <p className="text-xl text-gray-600">Don't worry! Connect with caring people who understand you</p>
                
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Stay Anonymous
                  </span>
                  <span className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <MessageCircle size={16} />
                    Instant Chat
                  </span>
                  <span className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Video size={16} />
                    Audio & Video
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 text-lg font-bold group hover:scale-105 shadow-xl">
              <Download size={24} />
              Coming Soon
              <div className="group-hover:translate-x-2 transition-transform duration-200">→</div>
            </button>

            {/* Animated chat bubbles */}
            <div className="relative flex gap-4">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white px-6 py-3 rounded-2xl rounded-bl-none inline-block text-2xl font-bold shadow-xl animate-bounce-slow">
                Hi! 👋
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-2xl rounded-br-none inline-block text-lg font-semibold shadow-xl animate-bounce-slow delay-300">
                Let's talk! 💬
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            {/* Direct app interface image */}
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://beeptalk.s3.eu-north-1.amazonaws.com/Group+1000006242.png" 
                alt="Beeptalk App Interface" 
                className="relative w-full h-auto shadow-2xl rounded-3xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Enhanced badges */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 flex items-center gap-2 animate-bounce-slow">
              <Shield size={20} />
              100% Safe & Secure
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300 flex items-center gap-2 animate-bounce-slow delay-300">
              <Sparkles size={20} />
              Verified Users
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to index.css */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;