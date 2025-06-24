import React, { useState } from 'react';
import { Server, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm border-b border-[#1a1a1a] z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" >
            <img src="/logo.png" className="w-12 h-12 text-[#ff3333] animate-float" />
          <Link to={"/"}>    <span className="text-lg font-orbitron font-bold">ThreadsHost</span></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('navlinks.home')}
              </a>
              
              {/* Dropdown Servicios */}
              <div className="relative">
                <button
                  className="text-sm font-medium flex items-center space-x-1 hover:text-[#3366ff] transition-all duration-300"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {t('navlinks.services.title')} <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-8 w-40 bg-black shadow-md rounded-lg py-2">
                    <a  href="/minecraft-hosting" className="block px-4 py-2 text-sm hover:text-[#3366ff]">Minecraft Hosting</a>
                    <a href="/mta-hosting" className="block px-4 py-2 text-sm hover:text-[#3366ff]">MTA Hosting</a>
                  </div>
                )}
              </div>

              <a href="https://status.threadshost.com/es" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('navlinks.status')}
              </a>
              {/* <a href="https://www.threadshost.com/#news" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('navlinks.news')}
              </a> */}
              <a href="https://threadshost.gitbook.io/threadshost/" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('navlinks.doc')}
              </a>
                <a href="#contact" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('navlinks.contact')}
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <LanguageSwitcher />
              <a href='https://client.threadshost.com/index.php?rp=/login' target='_blank' className="px-4 py-2 bg-[#b2071d] hover:bg-[#cc0000] rounded-lg text-sm font-medium transition-all duration-300">
                {t('hero.clientArea')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#3366ff] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('features.title')}
              </a>
              
              {/* Dropdown en móviles */}
              <div className="relative">
                <button
                  className="text-sm font-medium flex items-center space-x-1 hover:text-[#3366ff] transition-all duration-300"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {t('navlinks.services.title')} <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 bg-white shadow-md rounded-lg py-2">
                    <a href="/minecraft-hosting" className="block px-4 py-2 text-sm hover:bg-gray-100">Planes</a>
                  </div>
                )}
              </div>

              <a href="#status" className="text-sm font-medium hover:text-[#3366ff] transition-all duration-300">
                {t('gameServers.title')}
              </a>
              <div className="pt-4 flex items-center justify-between">
                <LanguageSwitcher />
                <button className="px-4 py-2 bg-[#b2071d] hover:bg-[#cc0000] rounded-lg text-sm font-medium transition-all duration-300">
                  {t('hero.startTrial')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
