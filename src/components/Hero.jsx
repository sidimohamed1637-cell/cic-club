import React from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { ArrowLeft, BookOpen, GraduationCap, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="pt-28 pb-24 lg:pt-40 lg:pb-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Affiliation Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {/* جامعة تامنغست - أرجواني وقور */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 shadow-xs hover:bg-purple-100/70 transition-colors">
            <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
            <span>{CLUB_CONFIG.university}</span>
          </div>

          {/* كلية العلوم والتكنولوجيا - أخضر زمردي تقني */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 shadow-xs hover:bg-emerald-100/70 transition-colors">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>{CLUB_CONFIG.faculty}</span>
          </div>

          {/* نادي الإبداع والابتكار - أزرق تقني خاص بالنادي */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0072B1] shadow-xs hover:bg-blue-100/70 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#0072B1]" />
            <span>{CLUB_CONFIG.name}</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text and Actions */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-8">
            
            <div className="inline-block px-4 py-2 rounded-xl bg-blue-50 border-2 border-blue-200 text-[#0072B1] text-xs font-bold">
              نادي الإبداع والابتكار • CIC
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-normal sm:leading-snug">
              نادي الإبداع والابتكار <br />
              <span className="text-[#0072B1]">{CLUB_CONFIG.englishName}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              النادي العلمي والتقني المعتمد بـ <strong className="text-slate-900 font-bold">{CLUB_CONFIG.faculty}</strong>. 
              فضاء جامعي تطبيقي لتطوير المهارات الهندسية في الروبوتات، الإلكترونيات، وبرمجة الأنظمة المدمجة الذكية.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('membership')}
                className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-md"
              >
                <span>طلب الانضمام للعضوية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('courses')}
                className="border-2 border-slate-400 hover:border-[#0072B1] hover:text-[#0072B1] text-slate-800 bg-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-[#0072B1]" />
                <span>استعراض الدورات المتاحة</span>
              </button>
            </div>

            {/* University & Faculty Logos */}
            <div className="pt-6 border-t border-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white px-4 py-2.5 rounded-xl border-2 border-slate-300 shadow-sm">
                <img
                  src={CLUB_CONFIG.images.facultyLogo}
                  alt={CLUB_CONFIG.faculty}
                  className="w-6 h-6 rounded-full object-contain"
                />
                <span>كلية العلوم والتكنولوجيا</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white px-4 py-2.5 rounded-xl border-2 border-slate-300 shadow-sm">
                <img
                  src={CLUB_CONFIG.images.universityLogo}
                  alt={CLUB_CONFIG.university}
                  className="w-6 h-6 rounded-full object-contain"
                />
                <span>جامعة تامنغست</span>
              </div>
            </div>

          </div>

          {/* Left Side: Logo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white border-2 border-slate-300 rounded-3xl p-8 text-center shadow-lg">
              <div className="w-44 h-44 mx-auto rounded-2xl p-3 bg-slate-50 border-2 border-slate-300 mb-6 flex items-center justify-center shadow-sm">
                <img
                  src={CLUB_CONFIG.images.clubLogo}
                  alt={CLUB_CONFIG.name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <h2 className="text-xl font-black text-slate-900 mb-1">
                {CLUB_CONFIG.name}
              </h2>
              <p className="text-xs text-[#0072B1] font-bold tracking-wider mb-6">
                CIC — Creativity & Innovation Club
              </p>

              <div className="space-y-3 text-right text-xs pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border-2 border-slate-300">
                  <span className="text-slate-500 font-medium">الجهة المشرفة:</span>
                  <span className="text-slate-900 font-bold">{CLUB_CONFIG.faculty}</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border-2 border-slate-300">
                  <span className="text-slate-500 font-medium">الموسم الدراسي:</span>
                  <span className="text-slate-900 font-bold">{CLUB_CONFIG.academicYear}</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-50 border-2 border-emerald-300">
                  <span className="text-slate-600 font-medium">حالة التسجيل:</span>
                  <span className="text-emerald-700 font-black flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    مفتوحة للطلبة
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
