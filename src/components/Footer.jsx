import React from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { Mail, MapPin, ChevronLeft } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-right">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Club Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 p-0.5 bg-white">
                <img
                  src={CLUB_CONFIG.images.clubLogo}
                  alt={CLUB_CONFIG.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {CLUB_CONFIG.name}
                </h3>
                <span className="text-xs text-[#0072B1] font-bold">
                  CIC
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              النادي العلمي والتقني المعتمد بكلية العلوم والتكنولوجيا - جامعة تامنغست. يهدف إلى ترقية المعارف الهندسية، الروبوتات، والابتكار التقني.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-3">أقسام الموقع</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#0072B1] transition-colors flex items-center gap-1">
                  <ChevronLeft className="w-3 h-3 text-[#0072B1]" />
                  <span>الرئيسية</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about-club')} className="hover:text-[#0072B1] transition-colors flex items-center gap-1">
                  <ChevronLeft className="w-3 h-3 text-[#0072B1]" />
                  <span>عن النادي ومعلوماته</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-[#0072B1] transition-colors flex items-center gap-1">
                  <ChevronLeft className="w-3 h-3 text-[#0072B1]" />
                  <span>الدورات التدريبية</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('membership')} className="hover:text-[#0072B1] transition-colors flex items-center gap-1">
                  <ChevronLeft className="w-3 h-3 text-[#0072B1]" />
                  <span>طلب العضوية</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Affiliation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-3">التبعية الأكاديمية</h4>
            <div className="space-y-2 text-xs text-slate-500">
              <p>• {CLUB_CONFIG.faculty}</p>
              <p>• {CLUB_CONFIG.university}</p>
              <p>• الموسم الجامعي: {CLUB_CONFIG.academicYear}</p>
            </div>
          </div>

          {/* Col 4: Official Contact & Social */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-3">التواصل والشبكات</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#0072B1] shrink-0 mt-0.5" />
                <a href={`mailto:${CLUB_CONFIG.email}`} className="font-mono text-slate-700 hover:text-[#0072B1] dir-ltr text-right transition-colors break-all">
                  {CLUB_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0072B1] shrink-0 mt-0.5" />
                <span className="text-slate-500">{CLUB_CONFIG.address}</span>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={CLUB_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:bg-blue-50 text-[11px] font-bold transition-colors shadow-2xs flex items-center gap-1.5"
                  title="صفحة فيسبوك الرسمية"
                >
                  <svg className="w-3.5 h-3.5 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>فيسبوك</span>
                </a>
                <span className="px-2.5 py-1 rounded-md bg-slate-200/60 text-slate-600 text-[10px] font-medium flex items-center gap-1.5" title="سيتوفر قريباً">
                  <svg className="w-3.5 h-3.5 text-[#25D366] opacity-75 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                  </svg>
                  <span>واتساب (قريباً)</span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-200/60 text-slate-600 text-[10px] font-medium flex items-center gap-1.5" title="سيتوفر قريباً">
                  <svg className="w-3.5 h-3.5 text-[#E4405F] opacity-75 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>انستغرام (قريباً)</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-200 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© {currentYear} {CLUB_CONFIG.name} (CIC). جميع الحقوق محفوظة.</p>
          <p>{CLUB_CONFIG.faculty} - {CLUB_CONFIG.university}</p>
        </div>
      </div>
    </footer>
  );
}
