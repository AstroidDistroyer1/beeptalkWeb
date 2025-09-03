 
import { Download, MessageCircle, Phone, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Don't Worry We Have Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Back</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-600">Feeling sad and lonely?</p>
                <p className="text-lg text-gray-600">Don't worry now you can connect with people</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Stay anonymous
                  </span>
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <MessageCircle size={14} />
                    Chat
                  </span>
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Video size={14} />
                    Audio & Video calls
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 text-lg font-medium group">
              <Download size={20} />
              Coming Soon
              <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
            </button>

            {/* Chat bubble */}
            <div className="relative">
              <div className="bg-pink-500 text-white px-6 py-3 rounded-2xl rounded-bl-none inline-block text-2xl font-bold shadow-lg">
                Hi
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Phone mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                {/* Phone screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-orange-400">
                  <div className="p-6 text-white">
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-semibold">Talk to People</h3>
                      <p className="text-sm opacity-90">Audio & Video calls</p>
                    </div>
                    
                    {/* Mock profile cards */}
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="font-medium">Krishna</p>
                          <p className="text-sm opacity-80">Online</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="font-medium">Telugu</p>
                          <p className="text-sm opacity-80">Say Hello</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom navigation */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-2 flex justify-around">
                  <Phone className="text-yellow-400" size={20} />
                  <MessageCircle className="text-white" size={20} />
                  <Video className="text-white" size={20} />
                </div>
              </div>
            </div>

            {/* 100% Safe badge */}
            <div className="absolute top-10 -right-10 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform rotate-12">
              100% Safe & Secure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;