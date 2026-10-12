import React from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Compass, 
  Target, 
  CheckCircle2,
  Cpu,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function HeroAbout() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Affiliation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs text-purple-300">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>{CLUB_CONFIG.university}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>{CLUB_CONFIG.faculty}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-xs text-[#00A8E8]">
            <Sparkles className="w-3.5 h-3.5 text-[#00A8E8]" />
            <span>{CLUB_CONFIG.name}</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Side: Text & Actions (RTL) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-5">
            <div className="inline-block px-3 py-1 rounded-md bg-[#121824] border border-slate-700 text-slate-300 text-xs font-semibold">
              ST CLUB / STI • نادي الإبداع والابتكار
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              نادي الإبداع والابتكار <br />
              <span className="text-[#00A8E8]">{CLUB_CONFIG.englishName}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              النادي العلمي والتقني المعتمد بـ <span className="text-white font-medium">{CLUB_CONFIG.faculty}</span>. 
              فضاء تطبيقي مخصص لطلبة الجامعة لاكتساب المهارات العملية في الروبوتات، برمجة الأنظمة المدمجة، والإلكترونيات الذكية.
            </p>

            {/* CTAs with Reliable Smooth Scroll */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollTo('membership-form')}
                className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <span>طلب الانضمام للعضوية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('courses')}
                className="border border-[#0072B1] hover:bg-[#0072B1]/10 text-[#00A8E8] px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>الدورات المتاحة</span>
              </button>

              <button
                onClick={() => scrollTo('tech-card')}
                className="bg-[#121824] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 px-5 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-[#00A8E8]" />
                <span>البطاقة التقنية</span>
              </button>
            </div>

            {/* University & Faculty Badges */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-center lg:justify-start gap-5">
              <div className="flex items-center gap-2.5">
                <img
                  src={CLUB_CONFIG.images.facultyLogo}
                  alt={CLUB_CONFIG.faculty}
                  className="w-7 h-7 rounded-full object-contain bg-white/5 p-0.5 border border-slate-700"
                />
                <span className="text-xs text-slate-400 font-medium">كلية العلوم والتكنولوجيا</span>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={CLUB_CONFIG.images.universityLogo}
                  alt={CLUB_CONFIG.university}
                  className="w-7 h-7 rounded-full object-contain bg-white/5 p-0.5 border border-slate-700"
                />
                <span className="text-xs text-slate-400 font-medium">جامعة تامنغست</span>
              </div>
            </div>
          </div>

          {/* Left Side: Clean Club Logo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#121824] border border-slate-800 rounded-2xl p-6 text-center shadow-lg">
              
              <div className="w-36 h-36 mx-auto rounded-xl p-2 bg-[#0b0f19] border border-slate-700 mb-5 flex items-center justify-center">
                <img
                  src={CLUB_CONFIG.images.clubLogo}
                  alt={CLUB_CONFIG.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <h2 className="text-lg font-bold text-white mb-1">
                {CLUB_CONFIG.name}
              </h2>
              <p className="text-xs text-[#00A8E8] font-mono tracking-wider mb-4">
                STI - ST CLUB
              </p>

              <div className="space-y-2 text-right text-xs pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between py-1.5 px-3 rounded bg-[#0b0f19] border border-slate-800">
                  <span className="text-slate-400">التبعية:</span>
                  <span className="text-white font-medium">{CLUB_CONFIG.faculty}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded bg-[#0b0f19] border border-slate-800">
                  <span className="text-slate-400">التخصص الأساسي:</span>
                  <span className="text-[#00A8E8] font-medium">إلكترونيات، روبوتات وأنظمة مدمجة</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded bg-[#0b0f19] border border-slate-800">
                  <span className="text-slate-400">العضوية:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    مفتوحة لطلبة الجامعة
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Section: "About The Club" (عن النادي) - Clean, Realistic, Structured */}
        <div id="about" className="mt-20 pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider block mb-1">
              التعريف بالنادي
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              عن نادي الإبداع والابتكار (STI)
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              نادي علمي طلابي يهدف إلى ربط المعرفة النظرية بالتطبيق العملي الهندسي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Vision */}
            <div className="club-card rounded-xl p-6 text-right space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0072B1]/15 text-[#00A8E8] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">رؤية النادي</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                أن يشكل النادي حاضنة علمية جامعية متميزة تُعنى بتطوير القدرات التقنية للطلبة في مجالات الإلكترونيات والتصنيع الذكي وعلوم الروبوتات.
              </p>
            </div>

            {/* Mission */}
            <div className="club-card rounded-xl p-6 text-right space-y-3 border-[#0072B1]/50">
              <div className="w-10 h-10 rounded-lg bg-[#0072B1] text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">رسالة النادي</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                إتاحة ورشات تطبيقية حقيقية وتوفير بيئة عمل تعاونية للطلبة تتيح لهم بناء واختبار مشاريعهم ونماذجهم الأولية للمشاركة في التظاهرات العلمية.
              </p>
            </div>

            {/* Goals */}
            <div className="club-card rounded-xl p-6 text-right space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0072B1]/15 text-[#00A8E8] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">أهدافنا الأساسية</h3>
              <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 leading-relaxed">
                <li>• تدريب الطلبة على برمجة العتاد والمتحكمات.</li>
                <li>• مساعدة الطلبة في إنجاز مشاريع تخرج نوعية.</li>
                <li>• تبادل الخبرات بين الدفعات والمستويات المختلفة.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
