 
import { Download, Play, MessageCircle, Video, Phone, CheckCircle, Smile } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Smile size={16} />
                <span>All-in-One Platform</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-gray-800">Connect, Chat, and</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Care All in One App</span>
              </h2>

              <p className="text-xl text-gray-600">
                Everything you need to build meaningful connections, all in one beautiful platform
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                    Anonymous Chat
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </h3>
                  <p className="text-gray-600">Stay anonymous while making genuine connections with people around you</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                    Audio & Video Calls
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </h3>
                  <p className="text-gray-600">Crystal-clear HD calls to build deeper connections with your matches</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                    Moderated Community
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </h3>
                  <p className="text-gray-600">Safe, respectful environment with 24/7 moderation and community guidelines</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group hover:scale-105 font-semibold">
                <Download size={22} />
                Coming Soon for iOS
                <div className="group-hover:scale-125 transition-transform duration-200">📱</div>
              </button>
              
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group hover:scale-105 font-semibold">
                <Play size={22} />
                Coming Soon for Android
                <div className="group-hover:scale-125 transition-transform duration-200">🤖</div>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Illustration placeholder with modern design */}
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-800">Experience Beeptalk</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mock chat interface */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                      <div className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-sm text-gray-700">Hey! Would you like to chat? 😊</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl rounded-tr-none">
                        <p className="text-sm text-white">Yes! Let's connect! ✨</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full"></div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"></div>
                      <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-sm text-gray-700">Audio call? 📞</p>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      <MessageCircle className="inline w-5 h-5 mr-2" />
                      Chat
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      <Phone className="inline w-5 h-5 mr-2" />
                      Call
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl animate-bounce-slow">
                💬 100K+ Chats
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl animate-bounce-slow delay-300">
                🎯 Safe & Secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;