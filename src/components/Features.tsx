import { Shield, Users, MessageSquare, Heart, Lock, Zap, Globe, Award, Mic } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Regional Language Matchmaking",
      description: "Connect with people who speak your language. Supports 15+ Indian regional languages for authentic conversations.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meet Amazing People",
      description: "Expand your social circle and make meaningful connections with thousands of verified users across India.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Earn While You Talk",
      description: "Monetize your conversations as a host. Help others and earn coins that can be redeemed for real rewards.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Moderated Community",
      description: "24/7 active moderation ensures a safe, respectful space. Strict guidelines protect every user on the platform.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "100% Safe & Secure",
      description: "Block, unblock, and report users with full control. Your safety and privacy are our top priority.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Authentic Connections",
      description: "No fake profiles, no bots—instantly connect with real, verified users for genuine conversations.",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Crystal Clear Audio",
      description: "High-quality audio and video calls ensure every conversation feels natural, close, and personal.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Anonymous Mode",
      description: "Stay anonymous until you feel comfortable. Share only what you want, when you want.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Random Call Feature",
      description: "Try our Random Call to meet someone new instantly. A fun, safe way to discover new friends.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border mb-5" style={{background: '#FADA7A22', color: '#9a7c00', borderColor: '#FADA7A'}}>
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
            What Makes <span style={{color: '#FADA7A'}}>BEEPTALK</span> Special?
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto text-base">
            A platform built for real connections, genuine conversations, and a safer social experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#FADA7A] transition-all duration-300"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-all duration-300 text-black group-hover:text-black"
                style={{background: '#FADA7A33'}}
              >
                <span className="group-hover:scale-110 transition-transform duration-200 inline-flex" style={{color: '#9a7c00'}}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-sm font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="rounded-2xl p-10 text-white" style={{background: '#111111'}}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="w-5 h-5" />, value: '50K+', label: 'Active Users' },
              { icon: <Globe className="w-5 h-5" />, value: '15+', label: 'Languages' },
              { icon: <Award className="w-5 h-5" />, value: '100%', label: 'Safe & Verified' },
              { icon: <MessageSquare className="w-5 h-5" />, value: '100K+', label: 'Conversations' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex items-center justify-center gap-2 mb-1" style={{color: '#FADA7A'}}>
                  {stat.icon}
                  <span className="text-4xl font-extrabold text-white">{stat.value}</span>
                </div>
                <p className="text-sm font-medium" style={{color: '#6B6B6B'}}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
