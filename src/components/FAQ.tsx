import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const faqs = [
    {
      question: t('faq.questions.whatIsVps.question'),
      answer: t('faq.questions.whatIsVps.answer')
    },
    {
      question: t('faq.questions.ddosProtection.question'),
      answer: t('faq.questions.ddosProtection.answer')
    },
    {
      question: t('faq.questions.upgrade.question'),
      answer: t('faq.questions.upgrade.answer')
    },
    {
      question: t('faq.questions.ddos.question'),
      answer: t('faq.questions.ddos.answer')
    },
    {
      question: t('faq.questions.changePlan.question'),
      answer: t('faq.questions.changePlan.answer')
    },
    {
      question: t('faq.questions.support.question'),
      answer: t('faq.questions.support.answer')
    }
  ];

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://media.discordapp.net/attachments/1329622574627291260/1340533004514103306/BB.png?ex=67b2b426&is=67b162a6&hm=692683ba38bf9e0c1151efb37c665516db8f18eb960ff2a5f237f9ba64729e4a&=&format=webp&quality=lossless&width=487&height=671")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: '0.1'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">{t('faq.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#111] transition-colors duration-300"
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    >
                      <span className="font-semibold pr-4">{faq.question}</span>
                      <div className={`faq-icon ${activeAccordion === index ? 'active' : ''}`}>
                        <Plus className="w-5 h-5 text-[#ff3333] transition-transform duration-300" />
                      </div>
                    </button>
                    {activeAccordion === index && (
                      <div className="px-6 pb-4 text-gray-400 faq-content">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => (
                  <div 
                    key={index + leftColumnFaqs.length} 
                    className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden slide-up"
                    style={{ animationDelay: `${(index + leftColumnFaqs.length) * 100}ms` }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#111] transition-colors duration-300"
                      onClick={() => setActiveAccordion(activeAccordion === index + leftColumnFaqs.length ? null : index + leftColumnFaqs.length)}
                    >
                      <span className="font-semibold pr-4">{faq.question}</span>
                      <div className={`faq-icon ${activeAccordion === index + leftColumnFaqs.length ? 'active' : ''}`}>
                        <Plus className="w-5 h-5 text-[#ff3333] transition-transform duration-300" />
                      </div>
                    </button>
                    {activeAccordion === index + leftColumnFaqs.length && (
                      <div className="px-6 pb-4 text-gray-400 faq-content">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default FAQ;
