import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative  flex items-center justify-center h-[100vh] px-6 section-bg">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/first.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl pb-2 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#b2071d] to-[#3366ff] gradient-animate">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://client.threadshost.com/register.php" className="bg-[#b2071d] hover:bg-[#cc0000] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('hero.startTrial')}
            </a>
            <a href='https://client.threadshost.com/index.php?rp=/store/game-servers' className="border border-[#3366ff] hover:bg-[#3366ff]/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              {t('hero.viewPlans')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
