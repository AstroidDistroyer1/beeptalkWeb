import React from 'react';
import { Shield, Users, MessageSquare, Heart, Lock, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Friendship through a Matchmaker on Audio Streaming in Your Regional Language",
      description: "Connect with people who speak your language and share your interests"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "You can meet numerous people on the platform and talk to them",
      description: "Expand your social circle and make meaningful connections"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "You can earn the money while talking to others",
      description: "Monetize your conversations and help others while earning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Moderated / Non-sleazy Community",
      description: "Safe, respectful environment with active moderation"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "100% safe and secure",
      description: "You have the freedom to block and unblock accounts as needed"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Authentic Connections",
      description: "At Beeptalk, we promote meaningful and authentic connections. No fake profiles, no waiting—instantly connect with your host."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What's makes <span className="text-yellow-600">BEEPTALK</span> special?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50"
            >
              <div className="text-yellow-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative avatars */}
        <div className="flex justify-center mt-16 space-x-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className={`w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;