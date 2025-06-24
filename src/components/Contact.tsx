import React from 'react';
import { MessageSquare, Mail, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="h-[500px] relative mb-20">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("5.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black z-0" />
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ff3333] to-[#3366ff] gradient-animate">
            {t('contact.title')}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Soporte por Ticket */}
          <a href="https://client.threadshost.com/submitticket.php" target="_blank" rel="noopener noreferrer">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#1a1a1a] hover:border-[#ff3333] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="w-12 h-12 text-[#ff3333] mb-4" />
                <h2 className="text-xl font-bold mb-4">{t('contact.ticket.title')}</h2>
                <p className="text-gray-400 mb-4">{t('contact.ticket.subtitle')}</p>
                <p className="text-gray-400">
                  {t('contact.ticket.description')}
                </p>
              </div>
            </div>
          </a>

          {/* Soporte por Email */}
          <a href="mailto:support@threadshost.com">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#1a1a1a] hover:border-[#3366ff] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <Mail className="w-12 h-12 text-[#3366ff] mb-4" />
                <h2 className="text-xl font-bold mb-4">{t('contact.email.title')}</h2>
                <p className="text-gray-400 mb-4">{t('contact.email.subtitle')}</p>
                <p className="text-gray-400">
                  {t('contact.email.description')}
                </p>
              </div>
            </div>
          </a>

          {/* Comunidad Discord */}
          <a href="https://discord.gg/threadshost" target="_blank" rel="noopener noreferrer" className=''>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#1a1a1a] hover:border-[#ff3333] transition-all duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-[#ff3333] mb-4" />
                <h2 className="text-xl font-bold mb-4">{t('contact.discord.title')}</h2>
                <p className="text-gray-400 mb-4">
                  {t('contact.discord.subtitle', { 
                    here: (chunks) => (
                      <span className="text-[#3366ff] hover:text-[#254db3] transition-colors duration-300">
                        {chunks}
                      </span>
                    )
                  })}
                </p>
                <p className="text-gray-400">{t('contact.discord.description')}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;