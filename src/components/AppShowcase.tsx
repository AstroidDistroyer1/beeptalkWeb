 
import { Download, Play } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Connect, Chat, and Care
              <br />
              <span className="text-blue-600">All in One App</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Anonymous Chat</h3>
                  <p className="text-gray-600">Stay anonymous while making genuine connections with people around you.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Audio & Video Calls</h3>
                  <p className="text-gray-600">High-quality calls to build deeper connections with your matches.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Moderated Community</h3>
                  <p className="text-gray-600">Safe, respectful environment with 24/7 moderation and community guidelines.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center gap-3 group">
                <Download size={20} />
                Coming Soon for iOS
                <div className="group-hover:scale-110 transition-transform duration-200">📱</div>
              </button>
              
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 flex items-center gap-3 group">
                <Play size={20} />
                Coming Soon for Android
                <div className="group-hover:scale-110 transition-transform duration-200">🤖</div>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Multiple phone mockups */}
            <div className="relative">
              {/* Main phone */}
              <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl z-10">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-lg font-bold">Beeptalk</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    {/* Chat interface mockup */}
                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-xl rounded-br-none max-w-xs">
                          Hey! How are you doing today?
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl rounded-bl-none max-w-xs">
                          I'm doing great! Thanks for asking 😊
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-xl rounded-br-none max-w-xs">
                          Would you like to have a voice call?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background phone */}
              <div className="absolute -top-8 -left-16 w-64 h-[480px] bg-gray-300 rounded-[2.5rem] opacity-30 transform rotate-12"></div>
              <div className="absolute -bottom-8 -right-16 w-64 h-[480px] bg-gray-300 rounded-[2.5rem] opacity-20 transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;