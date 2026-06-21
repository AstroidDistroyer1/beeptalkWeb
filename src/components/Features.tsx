import { Shield, Users, MessageSquare, Heart, Lock, Zap, Globe, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Regional Language Matchmaking",
      description: "Connect with people who speak your language and share your interests through audio streaming.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meet Amazing People",
      description: "Expand your social circle and make meaningful connections with thousands of users.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Earn While You Talk",
      description: "Monetize your conversations and help others while earning rewards.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Moderated Community",
      description: "Safe, respectful environment with 24/7 active moderation and strict guidelines.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "100% Safe & Secure",
      description: "Full control with freedom to block, unblock, and report accounts as needed.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Authentic Connections",
      description: "No fake profiles, no waiting—instantly connect with verified users.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What Makes <span className="text-violet-600">BEEPTALK</span> Special?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Experience the future of social connections with our unique features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-7 rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-50 group-hover:bg-violet-600 rounded-xl text-violet-600 group-hover:text-white mb-5 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-10">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-6 h-6 text-violet-400" />
                <p className="text-4xl font-extrabold">50K+</p>
              </div>
              <p className="text-slate-400 text-sm font-medium">Active Users</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Globe className="w-6 h-6 text-violet-400" />
                <p className="text-4xl font-extrabold">15+</p>
              </div>
              <p className="text-slate-400 text-sm font-medium">Languages Supported</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="w-6 h-6 text-violet-400" />
                <p className="text-4xl font-extrabold">100%</p>
              </div>
              <p className="text-slate-400 text-sm font-medium">Safe & Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
