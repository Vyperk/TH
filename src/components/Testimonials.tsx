import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: t('testimonials.roles.proGamer'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "GameServe's VPS has transformed my streaming setup. The performance is unmatched!"
    },
    {
      name: "Marcus Rodriguez",
      role: t('testimonials.roles.esportsManager'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "We host all our tournament servers on GameServe. Reliability when it matters most."
    },
    {
      name: "Emily Watson",
      role: t('testimonials.roles.gameDev'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The perfect platform for testing and deploying our game servers. Simply outstanding!"
    },
    {
      name: "David Park",
      role: t('testimonials.roles.contentCreator'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Since switching to GameServe, my stream quality has improved dramatically. Zero lag, zero issues!"
    },
    {
      name: "Lisa Thompson",
      role: t('testimonials.roles.communityManager'),
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The best gaming infrastructure I've ever used. Customer support is phenomenal!"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/second.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.3'
        }}
      />
      {/* Gradient Overlay */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 ">{t('testimonials.title')}</h2>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={55}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonials-swiper pb-16 "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff3333]/10 border border-white/5">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#b2071d] rounded-full flex items-center justify-center transform rotate-12">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#3366ff] ring-offset-2 ring-offset-black">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#3366ff] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#3366ff]">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Quote Text */}
                  <div className="flex-grow">
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="mt-6 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-5 h-5 text-[#b2071d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
