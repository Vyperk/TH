import React from 'react';
import { useTranslation } from 'react-i18next';
import { Server } from 'lucide-react';
import Twitter from './Twitter'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Discord from './Discord'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#111] py-12 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img className="w-12 h-12 text-[#ff3333]" src="/logo.png" />
              <span className="text-lg font-bold text-white">ThreadsHost</span>
            </div>
            <p className="text-gray-400">
Premium game server solutions for the most demanding players.
            </p>
            <div className="flex flex-row gap-x-4 py-2 justify-start items-left">
              <a href='https://twitter.com/ThreadsHost'><img src='x.png' className='w-8'/></a>
              <a href='https://www.facebook.com/profile.php?id=61576582041276'><img src='fb.png' className='w-8'/></a>
              <a href='https://instagram.com/ThreadsHost'><img src='ig.png' className='w-8'/></a>
              <a href='https://discord.gg/threadshost'><img src='dc.png' className='w-8'/></a>
              <a href='https://www.tiktok.com/@threadshost'><img src='tk.png' className='w-8'/></a>
              
            </div>
            <div className="trustpilot-widget  relative right-12 p-2" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc"  data-businessunit-id="67b27d8e3abf0d2eed0d968d" data-style-height="43px" data-style-width="100%">
<a href="https://www.trustpilot.com/review/threadshost.com" target="_blank" rel="noopener" className='text-start'>Trustpilot</a>
</div>


          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.contact')}</a></li>
              <li><a href="https://client.threadshost.com/affiliates.php" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.partner')}</a></li>
              <li><a href="https://www.trustpilot.com/review/threadshost.com" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.trust')}</a></li>
              <li><a href="/terms.pdf" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.terms')}</a></li>
              <li><a href="/privacy.pdf" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.privacy')}</a></li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.support')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://discord.gg/threadshost" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.community')}</a></li>
              <li><a href="https://client.threadshost.com/submitticket.php" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.contact')}</a></li>
              <li><a href="https://threadshost.gitbook.io/threadshost/" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.report')}</a></li>
              <li><a href="https://status.threadshost.com/es" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.status')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.service')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/minecraft-hosting" className="hover:text-[#3366ff] transition-colors duration-300">Minecraft Hosting</a></li>
              <li><a href="/mta-hosting" className="hover:text-[#3366ff] transition-colors duration-300">MTA Hosting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.account')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://client.threadshost.com/clientarea.php?action=services" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.my')}</a></li>
              <li><a href="https://client.threadshost.com/clientarea.php?action=invoices" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.renew')}</a></li>
              <li><a href="https://client.threadshost.com/index.php?rp=/login" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.login')}</a></li>
              <li><a href="https://client.threadshost.com/register.php" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.register')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;