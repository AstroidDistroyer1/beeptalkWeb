import { Star, ThumbsUp, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "PS",
      text: "Beeptalk helped me find amazing friends in my native language. The audio calls feel so natural and safe! I never expected to find such genuine connections.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      location: "Delhi, India",
      avatar: "RV",
      text: "I love how I can earn while helping others through conversations. The platform is genuinely safe and very well-moderated. Highly recommend!",
      rating: 5,
    },
    {
      name: "Anita Reddy",
      location: "Hyderabad, India",
      avatar: "AR",
      text: "Finally, a platform where I can be myself without worrying about fake profiles. It's real people, real conversations. Absolutely love it!",
      rating: 5,
    },
    {
      name: "Karthik Nair",
      location: "Bangalore, India",
      avatar: "KN",
      text: "The regional language feature is brilliant. I can now connect with people in Telugu and it feels just like talking to a friend from back home.",
      rating: 5,
    },
    {
      name: "Meena Iyer",
      location: "Chennai, India",
      avatar: "MI",
      text: "Random Call is my favourite feature. Every time I use it I meet someone interesting. Safe, fun, and always a good experience.",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      location: "Pune, India",
      avatar: "AS",
      text: "As a host I earn every month just by talking and helping others. The coins system is great and the payouts are real. Amazing platform!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border mb-5" style={{background: '#FADA7A22', color: '#9a7c00', borderColor: '#FADA7A'}}>
            User Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
            What Our Users Say About{' '}
            <span style={{color: '#FADA7A'}}>BEEPTALK</span>
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto text-base">
            Real stories from real people who found genuine connections on Beeptalk
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#FADA7A] hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 opacity-10 text-black" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FADA7A] text-[#FADA7A]" />
                ))}
              </div>

              <p className="text-[#6B6B6B] mb-6 leading-relaxed text-sm">"{t.text}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-black text-xs font-bold flex-shrink-0" style={{background: '#FADA7A'}}>
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm">{t.name}</h4>
                    <p className="text-xs text-[#6B6B6B]">{t.location}</p>
                  </div>
                </div>
                <ThumbsUp className="w-4 h-4" style={{color: '#FADA7A'}} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="rounded-2xl p-10 text-center" style={{background: '#111111'}}>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-extrabold mb-1">
                4.9<span style={{color: '#FADA7A'}}>/5</span>
              </div>
              <p className="text-sm font-medium" style={{color: '#6B6B6B'}}>Average Rating</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FADA7A] text-[#FADA7A]" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-1">
                50K<span style={{color: '#FADA7A'}}>+</span>
              </div>
              <p className="text-sm font-medium" style={{color: '#6B6B6B'}}>Happy Users</p>
              <p className="text-xs mt-1" style={{color: '#444'}}>Growing every day</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-1">
                98<span style={{color: '#FADA7A'}}>%</span>
              </div>
              <p className="text-sm font-medium" style={{color: '#6B6B6B'}}>Would Recommend</p>
              <p className="text-xs mt-1" style={{color: '#444'}}>To friends and family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
