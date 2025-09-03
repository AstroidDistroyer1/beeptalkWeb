import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India", 
      text: "Beeptalk helped me find amazing friends in my native language. The audio calls feel so natural and safe!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      location: "Delhi, India",
      text: "I love how I can earn while helping others. The platform is genuinely safe and well-moderated.",
      rating: 5
    },
    {
      name: "Anita Reddy",
      location: "Hyderabad, India",
      text: "Finally, a platform where I can be myself without worrying about fake profiles. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What our users saying about <span className="text-yellow-600">BEEPTALK</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="text-yellow-500 w-8 h-8 mb-4 opacity-60" />
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User avatar */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-2xl flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;