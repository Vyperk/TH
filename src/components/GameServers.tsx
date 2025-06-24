import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Hammer, Car, Users2 } from 'lucide-react';

const GameServers = () => {
  const { t } = useTranslation();

  const gameServers = [
    {
      name: "Minecraft",
      image: "./minecraft.jpg",
      price: 14.99,
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      name: "Rust",
      image: "/rust.png",
      price: 24.99,
      icon: <Hammer className="w-8 h-8" />
    },
    {
      name: "MTA",
      image: "mta.png",
      price: 19.99,
      icon: <Car className="w-8 h-8" />
    },
    {
      name: "SA:MP",
      image: "samp.jpg",
      price: 16.99,
      icon: <Users2 className="w-8 h-8" />
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo de la imagen sin parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-6 relative z-10 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t('gameServers.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {gameServers.map((server, index) => (
            <div key={index} className="group relative aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src={server.image}
                alt={server.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Capa de fondo semitransparente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Vista predeterminada */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-[#b2071d]">{server.icon}</div>
                <h3 className="text-2xl font-bold">{server.name}</h3>
              </div>

              {/* Vista al hacer hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  onClick={() => server.name === "Minecraft" ? window.location.href = "/minecraft-hosting" : null}
                  className="w-full max-w-[200px] py-3 bg-[#b2071d] hover:bg-[#cc0000] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {server.name === "Minecraft" ? t('gameServers.orderNow') : t('gameServers.Soon')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameServers;