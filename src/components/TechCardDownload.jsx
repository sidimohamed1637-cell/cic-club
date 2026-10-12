import React, { useState } from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { 
  FileText, 
  Download, 
  X, 
  FileCheck, 
  Eye 
} from 'lucide-react';

export default function TechCardDownload() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CLUB_CONFIG.documents.pdfUrl || './documents/البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf';
    link.download = CLUB_CONFIG.documents.fileName || 'البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="tech-card" className="py-16 bg-[#0b0f19] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#121824] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Right: Info */}
            <div className="lg:col-span-8 space-y-4 text-right">
              <span className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider block">
                الوثائق المعتمدة
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                البطاقة التقنية لنادي الإبداع والابتكار
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                وثيقة رسمية تتضمن التعريف بالنادي، أهدافه الهندسية، محاور التكوين المعتمدة، وشروط العضوية والانخراط في رحاب {CLUB_CONFIG.faculty} - {CLUB_CONFIG.university}.
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="bg-[#0b0f19] border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
                  الجهة: {CLUB_CONFIG.faculty}
                </span>
                <span className="bg-[#0b0f19] border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
                  الموسم: {CLUB_CONFIG.academicYear}
                </span>
                <span className="bg-[#0b0f19] border border-slate-800 px-3 py-1.5 rounded-lg text-[#00A8E8]">
                  صيغة الوثيقة: وثيقة رسمية معتمدة
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={handleDownload}
                  className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>تحميل البطاقة التقنية</span>
                </button>

                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all"
                >
                  <Eye className="w-4 h-4 text-[#00A8E8]" />
                  <span>معاينة المحتوى</span>
                </button>

              </div>
            </div>

            {/* Left: Card Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-[#0b0f19] border border-slate-700 rounded-xl p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-[#0072B1]/15 text-[#00A8E8] flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">الملف التقني المعتمد</h3>
                <p className="text-xs text-slate-400 mb-4">وثيقة رسمية للنادي ومساراته</p>
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="w-full py-2 bg-[#121824] hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#00A8E8]" />
                  <span>معاينة محتوى البطاقة</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#121824] border border-slate-700 rounded-2xl p-6 max-w-xl w-full text-right relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowPreviewModal(false)}
              className="absolute top-4 left-4 p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-1">
              محتوى البطاقة التقنية للنادي
            </h3>
            <p className="text-xs text-[#00A8E8] mb-4">
              {CLUB_CONFIG.name} ({CLUB_CONFIG.faculty})
            </p>

            <div className="space-y-4 text-xs text-slate-300 bg-[#0b0f19] p-4 rounded-xl border border-slate-800">
              <div>
                <h4 className="font-bold text-white text-sm mb-1">1. الرؤية والتبعية الأكاديمية:</h4>
                <p className="leading-relaxed">
                  نادي الإبداع والابتكار (STI) معتمد برحاب {CLUB_CONFIG.faculty} - {CLUB_CONFIG.university}. يسعى لتأسيس قطب طلابي متميز في الروبوتات والأنظمة الذكية.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm mb-1">2. المحاور التكوينية:</h4>
                <ul className="space-y-1 list-disc list-inside leading-relaxed">
                  <li>برمجة المتحكمات الدقيقة وتطبيقات الأنظمة المدمجة (Arduino / ESP32).</li>
                  <li>ميكاترونيكس وتصميم الروبوتات الذكية والمستقلة.</li>
                  <li>تصميم الدوائر الإلكترونية المطبوعة (PCB).</li>
                  <li>البرمجة وتطوير النماذج الأولية.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm mb-1">3. شروط العضوية:</h4>
                <p className="leading-relaxed">
                  التسجيل مفتوح لطلبة جامعة تامنغست من خلال إرفاق الشهادة المدرسية وبطاقة الطالب عبر استمارة الموقع.
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                إغلاق
              </button>
              <button
                onClick={handleDownload}
                className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>تحميل الملف الآن</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
