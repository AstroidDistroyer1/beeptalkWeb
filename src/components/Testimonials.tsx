import { Star, Quote, Heart, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "PS",
      text: "Beeptalk helped me find amazing friends in my native language. The audio calls feel so natural and safe!",
      rating: 5,
      gradient: "from-pink-500 to-orange-500"
    },
    {
      name: "Rahul Verma",
      location: "Delhi, India",
      avatar: "RV",
      text: "I love how I can earn while helping others. The platform is genuinely safe and well-moderated.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Anita Reddy",
      location: "Hyderabad, India",
      avatar: "AR",
      text: "Finally, a platform where I can be myself without worrying about fake profiles. Highly recommend!",
      rating: 5,
      gradient: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 animate-pulse">
            <Heart size={16} />
            <span>User Love Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            What Our Users Say About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600">BEEPTALK</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who found connections on Beeptalk
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full flex items-center justify-center">
                <Quote className="text-yellow-500 w-12 h-12 opacity-60" />
              </div>
              
              {/* Avatar */}
              <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {testimonial.avatar}
              </div>

              {/* Review text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg relative z-10">
                "{testimonial.text}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* User info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    📍 {testimonial.location}
                  </p>
                </div>
                
                <div className="text-green-500">
                  <ThumbsUp className="w-6 h-6" />
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-tr-full`}></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-12 shadow-2xl text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="text-5xl font-extrabold mb-2">4.9/5</div>
              <p className="text-lg font-semibold opacity-90">Average Rating</p>
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-extrabold mb-2">10K+</div>
              <p className="text-lg font-semibold opacity-90">Happy Users</p>
              <p className="text-sm opacity-75 mt-2">And counting every day</p>
            </div>
            <div className="text-white">
              <div className="text-5xl font-extrabold mb-2">98%</div>
              <p className="text-lg font-semibold opacity-90">Would Recommend</p>
              <p className="text-sm opacity-75 mt-2">To friends and family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;