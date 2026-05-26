"use client"

import React from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../context/LanguageContext'
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  // Helper to get translation safely
  const safeT = (key: string) => {
    const val = t(key);
    return typeof val === 'string' ? val : key;
  };

  return (
    <footer className="w-full bg-[#0f2138] border-t border-[#00f2fe33] p-8 md:p-12 text-white relative overflow-hidden mt-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(0,242,254,0.18),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(79,172,254,0.12),transparent_28%),linear-gradient(180deg,#102a45_0%,#0b1728_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent opacity-70" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <button onClick={() => router.push('/')} className="block hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,217,255,0.3)]">
            <img 
              src="/images/pr-decompression-centers-logo.png" 
              alt="PR Decompression Centers" 
              className="h-20 w-auto"
            />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Contact Us */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-[#00f2fe] font-semibold uppercase tracking-wider text-sm">
              {safeT('contactUs')}
            </h3>
            <a href="tel:7872618258" className="hover:text-[#00f2fe] hover:translate-x-1 transition-all duration-200 flex items-center gap-2 text-white/80">
              <Phone className="h-4 w-4" /> 787-261-8258
            </a>
            <button 
              onClick={() => router.push('/locate')}
              className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all duration-200 flex flex-col md:flex-row items-center md:items-start gap-2 text-white/80"
            >
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div>
                <p>RH-16 Ave. Building, Los Dominicos,</p>
                <p>Toa Baja, Levittown, Puerto Rico (PR)</p>
              </div>
            </button>
          </div>

          {/* Office Hours */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="text-[#00f2fe] font-semibold uppercase tracking-wider text-sm mb-2">
              {safeT('officeHours')}
            </h3>
            <div className="space-y-1 text-sm text-white/80 w-full max-w-[250px]">
              <div className="flex justify-between"><span className="font-medium">{safeT('monday')}:</span> <span>{safeT('hours1')}</span></div>
              <div className="flex justify-end text-xs text-gray-400 mb-1"><span>{safeT('hours2')}</span></div>
              
              <div className="flex justify-between"><span className="font-medium">{safeT('tuesday')}:</span> <span>{safeT('hours1')}</span></div>
              <div className="flex justify-end text-xs text-gray-400 mb-1"><span>{safeT('hours2')}</span></div>

              <div className="flex justify-between"><span className="font-medium">{safeT('wednesday')}:</span> <span>{safeT('hours1')}</span></div>
              <div className="flex justify-end text-xs text-gray-400 mb-1"><span>{safeT('hours2')}</span></div>

              <div className="flex justify-between"><span className="font-medium">{safeT('thursday')}:</span> <span>{safeT('hours1')}</span></div>
              <div className="flex justify-end text-xs text-gray-400 mb-1"><span>{safeT('hours2')}</span></div>

              <div className="flex justify-between"><span className="font-medium">{safeT('friday')}:</span> <span>{safeT('hours1')}</span></div>

              <div className="flex justify-between"><span className="font-medium">{safeT('saturday')}/{safeT('sunday')}:</span> <span>{safeT('closed')}</span></div>
            </div>
            <Button 
              variant="link" 
              className="text-[#00f2fe] p-0 h-auto justify-center md:justify-start mt-2 hover:text-white"
              onClick={() => router.push('/locate')}
            >
              {safeT('directions')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Services & Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 w-full">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h3 className="text-[#00f2fe] font-semibold uppercase tracking-wider text-sm">
                {safeT('services')}
              </h3>
              <button onClick={() => router.push('/products#chiropractic')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {safeT('chiropractic')}
              </button>
              <button onClick={() => router.push('/products#decompression')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {safeT('decompression')}
              </button>
              <button onClick={() => router.push('/discos-herniados')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {language === 'en' ? 'Herniated Discs' : 'Discos Herniados'}
              </button>
              <button onClick={() => router.push('/products#laser')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {safeT('laserTherapy')}
              </button>
            </div>

            <div className="flex flex-col gap-3 items-center md:items-start">
              <h3 className="text-[#00f2fe] font-semibold uppercase tracking-wider text-sm">
                {safeT('quickLinks')}
              </h3>
              <button onClick={() => router.push('/discos-herniados')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {language === 'en' ? 'Herniated Discs' : 'Discos Herniados'}
              </button>
              <button onClick={() => router.push('/reviews')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {safeT('reviews')}
              </button>
              <button onClick={() => router.push('/insights')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {language === 'en' ? 'Insights' : 'Artículos'}
              </button>
              <button onClick={() => router.push('/locate')} className="text-left hover:text-[#00f2fe] hover:translate-x-1 transition-all text-sm text-white/80">
                {safeT('locateUs')}
              </button>
            </div>
          </div>

        </div>
      </div>

      <Separator className="relative z-10 max-w-[1200px] mx-auto my-8 bg-white/10" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
        <p className="text-center md:text-left">&copy; {currentYear} PR Decompression Centers</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span>{language === 'en' ? 'Powered by Nexulon LLC' : 'Desarrollado por Nexulon LLC'}</span>
          <img src="/images/nexulon-logo-2.png" alt="Nexulon LLC" className="h-7 w-auto rounded-sm bg-white/90 px-1 py-0.5" />
          <a href="https://www.nexulonllc.com/en" target="_blank" rel="noopener noreferrer" className="text-[#00f2fe] hover:text-white font-semibold transition-colors">
            {language === 'en' ? 'More Info' : 'Mas informacion'}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
