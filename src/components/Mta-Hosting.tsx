import React, { useState } from 'react';
import { Server, UserPlus, HardDrive, Network, Check } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const MtaHosting = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useTranslation();

  const plans = [
    {
      name: 'Básico',
      icon: <Server className="w-12 h-12 text-white-800" />,
      monthlyPrice: 4.99,
      annualPrice: 53.89,
      specs: {
        slots: '30 jugadores',
        ram: '2GB RAM DDR4',
        storage: '10GB NVMe',
      },
      features: [
        t('plans.ftp'),
        t('plans.support'),
        t('plans.ddos')
      ],
      href: 'https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-carbon'
    },
    {
      name: 'Estándar',
      icon: <Server className="w-12 h-12 text-blue-600" />,
      monthlyPrice: 7.99,
      annualPrice: 76.70,
      specs: {
        slots: '60 jugadores',
        ram: '3GB RAM DDR4',
        storage: '10GB NVMe',
      },
      features: [
        t('plans.ftp'),
        t('plans.support'),
        t('plans.ddos')
      ],
      href: 'https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-cobre'
    },
    {
      name: 'Premium',
      icon: <Server className="w-12 h-12 text-orange-500" />,
      monthlyPrice: 12.99,
      annualPrice: 140.29,
      specs: {
        slots: '100 jugadores',
        ram: '5GB RAM DDR4',
        storage: '25GB NVMe',
      },
      features: [
        t('plans.ftp'),
        t('plans.support'),
        t('plans.ddos')
      ],
      href: 'https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-hierro'
    },
    {
      name: 'Empresa',
      icon: <Server className="w-12 h-12 text-rose-700" />,
      monthlyPrice: 14.99,
      annualPrice: 161.89,
      specs: {
        slots: '150 jugadores',
        ram: '6GB RAM DDR4',
        storage: '35GB NVMe',
      },
      features: [
        t('plans.ftp'),
        t('plans.support'),
        t('plans.ddos')
      ],
      href: 'https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-oro'
    }
  ];

  return (
    <>
      <div className=" bg-black text-white">
        <Navbar/>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20  ">
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: 'url("mta2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 z-0" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#b2071d] to-white gradient-animate mt-9 p-4">
                MTA Hosting
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {t('plans.MtaDescription')}
              </p>
            </div>
          </div>
          
          {/* Degradado al final del título */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent z-10" />
        </section>

        {/* Plans */}
        <section className="relative py-20 mb-14">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/mta3.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />

          <div className="container mx-auto px-6 relative z-10 pt-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-4 bg-[#111] p-2 rounded-full">
                <span
                  className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${!isAnnual ? 'bg-[#b2071d] text-white' : 'text-gray-400'}`}
                  onClick={() => setIsAnnual(false)}
                >
                  {t('plans.monthly')}
                </span>

                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className="relative w-16 h-8 bg-black rounded-full p-1 transition-colors duration-300"
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-[#b2071d] rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}
                  />
                </button>

                <span
                  className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${isAnnual ? 'bg-[#b2071d] text-white' : 'text-gray-400'}`}
                  onClick={() => setIsAnnual(true)}
                >
                  {t('plans.annual')}
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:border hover:border-[#b2071d]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="min-w-[160px]">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <div className="mt-2">
                        <span className="text-4xl font-bold">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-400">
                          {isAnnual ? t('plans.perYear') : t('plans.perMonth')}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">{plan.icon}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <UserPlus className="w-6 h-6 text-[#b2071d]" />
                      <span>{plan.specs.slots}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HardDrive className="w-5 h-5 text-[#b2071d]" />
                      <span>{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Network className="w-5 h-5 text-[#b2071d]" />
                      <span>{plan.specs.storage}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-gray-300">
                        <Check className="w-5 h-5 text-[#b2071d]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => window.location.href = plan.href}
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-[#b2071d] text-white hover:bg-[#a1061b]"
                  >
                    {t('plans.selectPlan')}
                  </button>
                </div>
              ))}
            </div>
            </div>

            {/* Degradado arriba de la sección de planes */}
            <div className="absolute top-0 inset-x-0 h-12 bg-black z-10" />
            <div className="absolute top-12 inset-x-0 h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-0" />

              {/* Degradado abajo de la sección de planes */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default MtaHosting;