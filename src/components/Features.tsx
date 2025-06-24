import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Zap, Shield, Globe2, Cpu, 
  Clock, Server, Gauge, HeartHandshake 
} from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#ff3333]" />,
      title: t('features.ultraLowLatency.title'),
      description: t('features.ultraLowLatency.description')
    },
    {
      icon: <Shield className="w-8 h-8 text-[#3366ff]" />,
      title: t('features.ddosProtection.title'),
      description: t('features.ddosProtection.description')
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#3366ff]" />,
      title: t('features.highPerformance.title'),
      description: t('features.highPerformance.description')
    },
    {
      icon: <Server className="w-8 h-8 text-[#3366ff]" />,
      title: t('features.instantSetup.title'),
      description: t('features.instantSetup.description')
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#ff3333]" />,
      title: t('features.resourceControl.title'),
      description: t('features.resourceControl.description')
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#3366ff]" />,
      title: t('features.support.title'),
      description: t('features.support.description')
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden  ">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black  z-0"  />
      
      <div className="container mx-auto px-6 relative z-10 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('features.title')}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
