import { Star, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "PS",
      text: "Beeptalk helped me find amazing friends in my native language. The audio calls feel so natural and safe!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      location: "Delhi, India",
      avatar: "RV",
      text: "I love how I can earn while helping others. The platform is genuinely safe and well-moderated.",
      rating: 5,
    },
    {
      name: "Anita Reddy",
      location: "Hyderabad, India",
      avatar: "AR",
      text: "Finally, a platform where I can be myself without worrying about fake profiles. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            User Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What Our Users Say About{' '}
            <span className="text-violet-600">BEEPTALK</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Real stories from real people who found connections on Beeptalk
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                ))}
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm">"{t.text}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.location}</p>
                  </div>
                </div>
                <ThumbsUp className="w-4 h-4 text-violet-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-10 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-extrabold mb-1">4.9<span className="text-violet-400">/5</span></div>
              <p className="text-slate-400 text-sm font-medium">Average Rating</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-1">10K<span className="text-violet-400">+</span></div>
              <p className="text-slate-400 text-sm font-medium">Happy Users</p>
              <p className="text-xs text-slate-600 mt-1">And counting every day</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-1">98<span className="text-violet-400">%</span></div>
              <p className="text-slate-400 text-sm font-medium">Would Recommend</p>
              <p className="text-xs text-slate-600 mt-1">To friends and family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
