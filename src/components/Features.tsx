import { Shield, Users, MessageSquare, Heart, Lock, Zap, Star, Globe, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Regional Language Matchmaking",
      description: "Connect with people who speak your language and share your interests through audio streaming",
      gradient: "from-pink-500 to-orange-500",
      bgGradient: "from-pink-50 to-orange-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meet Amazing People",
      description: "Expand your social circle and make meaningful connections with thousands of users",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Earn While You Talk",
      description: "Monetize your conversations and help others while earning rewards",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-50 to-pink-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Moderated Community",
      description: "Safe, respectful environment with 24/7 active moderation and strict guidelines",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "100% Safe & Secure",
      description: "Full control with freedom to block, unblock, and report accounts as needed",
      gradient: "from-pink-500 to-orange-500",
      bgGradient: "from-pink-50 to-orange-50"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Authentic Connections",
      description: "No fake profiles, no waiting—instantly connect with verified users",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-50 to-pink-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 animate-pulse">
            <Star size={16} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600">BEEPTALK</span> Special?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of social connections with our unique features
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-8 h-8 animate-pulse" />
                <p className="text-5xl font-extrabold">50K+</p>
              </div>
              <p className="text-lg font-semibold opacity-90">Active Users</p>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-8 h-8 animate-pulse delay-300" />
                <p className="text-5xl font-extrabold">15+</p>
              </div>
              <p className="text-lg font-semibold opacity-90">Languages Supported</p>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-8 h-8 animate-pulse delay-500" />
                <p className="text-5xl font-extrabold">100%</p>
              </div>
              <p className="text-lg font-semibold opacity-90">Safe & Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;