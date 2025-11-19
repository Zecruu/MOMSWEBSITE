"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { Menu, X, Phone, MapPin, Clock, Globe, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navLinks = [
    { href: '/', label: language === 'en' ? 'Home' : 'Inicio' },
    { href: '/products', label: language === 'en' ? 'Services' : 'Servicios' },
    { href: '/discos-herniados', label: language === 'en' ? 'Herniated Discs' : 'Discos Herniados' },
    { href: '/reviews', label: language === 'en' ? 'Reviews' : 'Testimonios' },
    { href: '/locate', label: language === 'en' ? 'Location' : 'Ubicación' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 h-[70px]">
      <div className="container mx-auto h-full px-4 flex items-center justify-between max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/images/pr-decompression-centers-logo.png" 
            alt="PR Decompression Centers" 
            className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,217,255,0.3)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[active]:text-white font-semibold")}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] border-none text-white hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300 shadow-lg"
          >
            {language === 'en' ? 'Español' : 'English'}
          </Button>

          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 gap-2 font-semibold border border-white/10 hover:border-white/30"
              >
                <Menu className="h-4 w-4" />
                {language === 'en' ? 'Menu' : 'Menú'}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/95 border-none text-white sm:max-w-[500px] p-0 overflow-hidden">
              <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-[#009fff] to-[#ec2f4b] -z-10" />
              <div className="bg-black p-6 h-full w-full rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-[#009fff] to-[#ec2f4b] text-transparent bg-clip-text mb-6">
                    {language === 'en' ? 'Contact Information' : 'Información de Contacto'}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Office Hours */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-[#00d9ff]">
                      <Clock className="h-5 w-5" /> {language === 'en' ? 'Office Hours' : 'Horario de Oficina'}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <span>{language === 'en' ? 'Monday' : 'Lunes'}</span><span className="text-right">9:00 AM - 11:30 AM</span>
                      <span></span><span className="text-right">1:30 PM - 4:00 PM</span>
                      <span>{language === 'en' ? 'Tuesday' : 'Martes'}</span><span className="text-right">9:00 AM - 11:30 AM</span>
                      <span></span><span className="text-right">1:30 PM - 4:00 PM</span>
                      <span>{language === 'en' ? 'Wednesday' : 'Miércoles'}</span><span className="text-right">9:00 AM - 11:30 AM</span>
                      <span></span><span className="text-right">1:30 PM - 4:00 PM</span>
                      <span>{language === 'en' ? 'Thursday' : 'Jueves'}</span><span className="text-right">9:00 AM - 11:30 AM</span>
                      <span></span><span className="text-right">1:30 PM - 4:00 PM</span>
                      <span>{language === 'en' ? 'Friday' : 'Viernes'}</span><span className="text-right">9:00 AM - 11:30 AM</span>
                      <span>{language === 'en' ? 'Saturday' : 'Sábado'}</span><span className="text-right">{language === 'en' ? 'Closed' : 'Cerrado'}</span>
                      <span>{language === 'en' ? 'Sunday' : 'Domingo'}</span><span className="text-right">{language === 'en' ? 'Closed' : 'Cerrado'}</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-[#00d9ff]">
                      <Phone className="h-5 w-5" /> {language === 'en' ? 'Contact Us' : 'Contáctanos'}
                    </h3>
                    <Button asChild className="w-full bg-gradient-to-r from-[#009fff] to-[#ec2f4b] hover:from-[#ec2f4b] hover:to-[#009fff] text-white border-none">
                      <a href="tel:7872618258">
                        {language === 'en' ? 'Call Our Office' : 'Llamar a Nuestra Oficina'}
                      </a>
                    </Button>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-[#00d9ff]">
                      <MapPin className="h-5 w-5" /> {language === 'en' ? 'Directions' : 'Direcciones'}
                    </h3>
                    <Button asChild className="w-full bg-gradient-to-r from-[#009fff] to-[#ec2f4b] hover:from-[#ec2f4b] hover:to-[#009fff] text-white border-none">
                      <a href="https://www.google.com/maps/dir/?api=1&destination=PR+Decompression+Centers+Toa+Baja" target="_blank" rel="noopener noreferrer">
                        {language === 'en' ? 'Get Directions' : 'Obtener Direcciones'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="text-white hover:bg-white/10"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-white/10 text-white w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left text-white border-b border-white/10 pb-4">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link 
                      href={link.href}
                      className="text-lg font-semibold hover:text-[#00d9ff] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                
                <div className="h-px bg-white/10 my-4" />
                
                <div className="px-4">
                  <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                    {language === 'en' ? 'Contact' : 'Contacto'}
                  </h4>
                  <div className="space-y-4">
                     <a href="tel:7872618258" className="flex items-center gap-3 text-sm hover:text-[#00d9ff] transition-colors">
                      <Phone className="h-4 w-4" /> 787-261-8258
                    </a>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=PR+Decompression+Centers+Toa+Baja" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-[#00d9ff] transition-colors"
                    >
                      <MapPin className="h-4 w-4" /> {language === 'en' ? 'Directions' : 'Cómo llegar'}
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

