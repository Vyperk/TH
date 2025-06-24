import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { 
    code: 'en', 
    name: 'English',
    flag: (
      <svg className="w-5 h-5" viewBox="0 0 512 512">
        <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z"/>
        <path fill="#d80027" d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"/>
        <path fill="#0052b4" d="M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z"/>
        <path fill="#f0f0f0" d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"/>
        <path fill="#0052b4" d="M90.341 315.356L0 365.546v-50.19zM200.348 329.51v97.151H25.491z"/>
        <path fill="#d80027" d="M143.693 315.358L0 395.188v31.474l200.348-111.304z M154.508 315.358L0 426.662h46.511l153.997-85.556z"/>
        <path fill="#0052b4" d="M90.341 196.634L0 146.444v50.19zM200.348 182.482V85.331H25.491z"/>
        <path fill="#d80027" d="M143.693 196.634L0 116.804V85.33l200.348 111.304z M154.508 196.634L0 85.33h46.511l153.997 85.556z"/>
        <path fill="#0052b4" d="M421.659 196.636L512 146.446v50.19zM311.652 182.484V85.333h174.857z"/>
        <path fill="#d80027" d="M368.307 196.636L512 116.806V85.332L311.652 196.636z M357.492 196.636L512 85.332h-46.511l-153.997 85.556z"/>
      </svg>
    )
  },
  { 
    code: 'es', 
    name: 'Español',
    flag: (
      <svg className="w-5 h-5" viewBox="0 0 512 512">
        <path fill="#ffda44" d="M0 85.331h512v341.337H0z"/>
        <path fill="#d80027" d="M0 85.331h512v113.775H0zM0 312.882h512v113.775H0z"/>
      </svg>
    )
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[1]; // Default to Spanish

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-[#3366ff] transition-colors duration-300">
        {currentLang.flag}
      </button>
      <div className="absolute right-0 mt-2 w-36 py-2 bg-black border border-[#1a1a1a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-[#111] transition-colors duration-300 flex items-center space-x-2 ${
              i18n.language === lang.code ? 'text-[#3366ff]' : 'text-white'
            }`}
          >
            {lang.flag}
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
