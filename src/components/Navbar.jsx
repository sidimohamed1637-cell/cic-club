import React, { useState } from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { Menu, X, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'عن النادي', id: 'about-club' },
    { name: 'الدورات التدريبية', id: 'courses' },
    { name: 'تواصل معنا', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo & Club Title */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3.5 text-right group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 shadow-xs">
              <img
                src={CLUB_CONFIG.images.clubLogo}
                alt={CLUB_CONFIG.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0072B1] transition-colors">
                  {CLUB_CONFIG.name}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-[#0072B1]/10 text-[#0072B1] rounded-md border border-[#0072B1]/20">
                  CIC
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                {CLUB_CONFIG.faculty} - {CLUB_CONFIG.university}
              </p>
            </div>
          </button>

          {/* Minimalist Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#0072B1] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Main Direct CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection('membership')}
              className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-xs"
            >
              <UserPlus className="w-4 h-4" />
              <span>طلب العضوية</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('membership')}
              className="bg-[#0072B1] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold sm:hidden"
            >
              انضمام
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0072B1] transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100">
              <button
                onClick={() => scrollToSection('membership')}
                className="w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>نموذج الانضمام للعضوية</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
