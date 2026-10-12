import React, { useState, useEffect } from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { clubService } from '../firebase';
import { 
  Compass, 
  Target, 
  Cpu, 
  Bot, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Download, 
  X, 
  User,
  GraduationCap,
  Eye
} from 'lucide-react';

export default function ClubInfo() {
  const [showDocPreview, setShowDocPreview] = useState(false);
  const [supervisor, setSupervisor] = useState(CLUB_CONFIG.supervisor);
  const [executiveBoard, setExecutiveBoard] = useState(CLUB_CONFIG.executiveBoard);

  useEffect(() => {
    let isMounted = true;
    const fetchBoard = async () => {
      try {
        const [sup, board] = await Promise.all([
          clubService.getSupervisor(),
          clubService.getExecutiveBoard()
        ]);
        if (isMounted) {
          if (sup) setSupervisor(sup);
          if (board && board.length > 0) setExecutiveBoard(board);
        }
      } catch (err) {
        console.warn('Failed to load board in ClubInfo:', err);
      }
    };
    fetchBoard();
    return () => { isMounted = false; };
  }, []);

  const iconMap = {
    Cpu: Cpu,
    Bot: Bot,
    Code2: Code2,
    Layers: Layers,
  };

  const handleDownloadCard = () => {
    const link = document.createElement('a');
    link.href = CLUB_CONFIG.documents.pdfUrl || './documents/البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf';
    link.download = CLUB_CONFIG.documents.fileName || 'البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about-club" className="py-24 sm:py-32 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-3">
            دليل ومعلومات النادي
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-snug">
            عن نادي الإبداع والابتكار
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            الرؤية، الرسالة، المحاور التقنية، وفريق التأطير المعتمد بكلية العلوم والتكنولوجيا.
          </p>
        </div>

        {/* 2. Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 text-right shadow-md hover:border-[#0072B1] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-6 border-2 border-blue-200">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">رؤية النادي</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              أن يكون النادي الحاضنة الطلابية النموذجية بكلية العلوم والتكنولوجيا لإعداد مهندسي ومبتكري المستقبل في مجالات الإلكترونيات والتصنيع الذكي وعلوم الروبوتات.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 text-right shadow-md hover:border-[#0072B1] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-6 border-2 border-blue-200">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">رسالة النادي</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              توفير بيئة تدريبية ومخبرية تطبيقية حقيقية للطلبة، ودعمهم في بناء النماذج الأولية لمشاريعهم الهندسية واختبارها للمشاركة في التظاهرات والمسابقات العلمية.
            </p>
          </div>
        </div>

        {/* 3. Core Technical Tracks */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">المحاور التقنية الأساسية</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">المجالات الهندسية والتطبيقية التي ينشط فيها النادي</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUB_CONFIG.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Cpu;
              return (
                <div
                  key={feature.id || idx}
                  className="bg-white border-2 border-slate-300 rounded-2xl p-7 text-right flex flex-col justify-between shadow-md hover:border-[#0072B1] transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-5 border-2 border-blue-200">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-300 inline-block mb-3">
                      {feature.badge}
                    </span>

                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {feature.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Supervisor & Executive Board */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">المكتب التنفيذي والأستاذ المشرف</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">تأطير أكاديمي وإداري لنشاطات النادي</p>
          </div>

          {/* Supervisor Card */}
          <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 shadow-md max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-right">
              
              {/* Supervisor Avatar (with elegant fallback if empty/missing) */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#0072B1] p-1 bg-white shrink-0 shadow-sm flex items-center justify-center">
                {supervisor?.image && supervisor.image.trim() !== '' ? (
                  <img
                    src={supervisor.image}
                    alt={supervisor.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = CLUB_CONFIG.images.memberPlaceholder;
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-[#0072B1]">
                    <GraduationCap className="w-12 h-12" />
                  </div>
                )}
              </div>

              <div className="space-y-2 flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0072B1] text-xs font-bold border-2 border-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{supervisor?.role || 'الأستاذ المشرف على النادي'}</span>
                </span>
                <h4 className="text-lg font-black text-slate-900">{supervisor?.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{supervisor?.department}</p>
                {supervisor?.description && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{supervisor.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Executive Board Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveBoard && executiveBoard.length > 0 ? (
              executiveBoard.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border-2 border-slate-300 rounded-2xl p-6 text-right flex items-center gap-5 shadow-md hover:border-[#0072B1] transition-all"
                >
                  {/* Member Avatar (with elegant fallback if empty/missing) */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-300 p-0.5 shrink-0 bg-slate-50 flex items-center justify-center">
                    {member.image && member.image.trim() !== '' ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = CLUB_CONFIG.images.memberPlaceholder;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-slate-100 text-[#0072B1] flex items-center justify-center">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0072B1] border border-blue-200 inline-block mb-1">
                      {member.badge || 'المكتب التنفيذي'}
                    </span>
                    <h5 className="text-sm font-black text-slate-900 truncate">{member.name}</h5>
                    <p className="text-xs text-[#0072B1] font-bold truncate mt-0.5">{member.role}</p>
                    {member.specialty && (
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">{member.specialty}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-slate-400">
                <p className="text-sm">سيتم الإعلان عن تشكيلة المكتب التنفيذي قريباً</p>
              </div>
            )}
          </div>
        </div>

        {/* 5. Official Tech Card */}
        <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-md">
          <div className="text-right space-y-3">
            <span className="text-xs font-bold text-[#0072B1] px-3 py-1.5 rounded-md bg-blue-50 border-2 border-blue-200 inline-block">
              الوثيقة الرسمية
            </span>
            <h3 className="text-xl font-black text-slate-900">البطاقة التقنية المعتمدة للنادي</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
              تحتوي على الرزنامة التكوينية، شروط الانخراط، والأهداف السنوية المعتمدة بكلية العلوم والتكنولوجيا.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={handleDownloadCard}
              className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm"
              title="تحميل البطاقة التقنية الرسمية كملف PDF"
            >
              <Download className="w-4 h-4" />
              <span>تحميل البطاقة التقنية (PDF)</span>
            </button>

            <button
              onClick={() => setShowDocPreview(true)}
              className="border-2 border-slate-300 hover:border-slate-400 text-slate-800 bg-white px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
              title="معاينة محتوى البطاقة التقنية"
            >
              <Eye className="w-4 h-4 text-[#0072B1]" />
              <span>معاينة المحتوى</span>
            </button>
          </div>
        </div>

      </div>

      {/* Tech Card Content Preview Modal */}

      {/* Tech Card Content Preview Modal */}
      {showDocPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-right relative shadow-2xl border-2 border-slate-300 max-h-[88vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-bold text-[#0072B1] block">وثيقة رسمية معتمدة (PDF)</span>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  البطاقة التقنية والتعريفية الشاملة لنادي الإبداع والابتكار (CIC)
                </h3>
              </div>
              <button
                onClick={() => setShowDocPreview(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100 border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs text-slate-700 leading-relaxed pr-1">
              {/* Institution Header */}
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                <p className="font-bold text-slate-900">الجمهورية الجزائرية الديمقراطية الشعبية • وزارة التعليم العالي والبحث العلمي</p>
                <p className="text-[#0072B1] font-bold">{CLUB_CONFIG.university} — {CLUB_CONFIG.faculty}</p>
                <p className="text-[11px] text-slate-500 font-medium">الموسم الجامعي: {CLUB_CONFIG.academicYear} | كود الوثيقة: CIC-DOC-01</p>
              </div>

              {/* 1. Identity */}
              <div className="border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs text-[#0072B1]">1. التعريف والتبعية الأكاديمية:</h4>
                <p>نادي الإبداع والابتكار (Creativity & Innovation Club - CIC) هو نادٍ علمي تقني طلابي معتمد برحاب كلية العلوم والتكنولوجيا بجامعة تامنغست، ينشط تحت إشراف وتأطير أساتذة الكلية.</p>
                <p className="font-semibold text-slate-800">الشعار: « فضاء طلابي لتطوير المهارات الهندسية، الروبوتات والأنظمة الذكية »</p>
              </div>

              {/* 2. Objectives */}
              <div className="border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs text-[#0072B1]">2. الأهداف الاستراتيجية والتطبيقية:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>تطوير المهارات التطبيقية للطلبة وربط المعارف النظرية بالجانب العملي في ورشات الكلية.</li>
                  <li>تشجيع الابتكار وبناء النماذج الهندسية الأولية (Prototypes) القابلة للتطبيق الميداني.</li>
                  <li>تمثيل جامعة تامنغست وكلية العلوم والتكنولوجيا في المسابقات والهاكاثونات العلمية.</li>
                  <li>تنظيم ورشات دورية ودورات تدريبية مجانية لجميع طلبة الكلية.</li>
                </ul>
              </div>

              {/* 3. Tracks */}
              <div className="border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs text-[#0072B1]">3. المحاور التكوينية المعتمدة:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block">• الإلكترونيات والأنظمة المدمجة:</strong>
                    <span>برمجة المتحكمات الدقيقة (Arduino, ESP32, STM32) والحساسات.</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block">• الروبوتات والميكاترونيكس:</strong>
                    <span>تصميم الروبوتات والأنظمة المستقلة والأذرع الآلية.</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block">• البرمجة وتطوير البرمجيات:</strong>
                    <span>لغات البرمجة C++ و Python وتطبيقات التحكم.</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block">• تصميم الدوائر المطبوعة (PCB) و IoT:</strong>
                    <span>تصميم اللوحات الإلكترونية وتطبيقات إنترنت الأشياء.</span>
                  </div>
                </div>
              </div>

              {/* 4. Membership */}
              <div className="border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs text-[#0072B1]">4. شروط الانضمام والعضوية:</h4>
                <p>• أن يكون الطالب مسجلاً بصفة نظامية بجامعة تامنغست.</p>
                <p>• إرفاق الشهادة المدرسية الحالية وبطاقة الطالب الجامعية عبر بوابة الموقع.</p>
                <p>• الالتزام بحضور الورشات التدريبية والمشاركة الفعالة في مشاريع النادي.</p>
              </div>

              {/* 5. Contacts */}
              <div className="border border-slate-200 rounded-xl p-3.5 space-y-1 text-slate-600">
                <h4 className="font-bold text-slate-900 text-xs text-[#0072B1]">5. التواصل الرسمي:</h4>
                <p>• البريد الإلكتروني: <span className="font-mono font-bold text-slate-800">{CLUB_CONFIG.email}</span></p>
                <p>• صفحة فيسبوك: <span className="font-mono text-blue-600">facebook.com/share/19guWubGZ1/</span></p>
                <p>• المقر: {CLUB_CONFIG.address}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setShowDocPreview(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                إغلاق
              </button>

              <button
                onClick={handleDownloadCard}
                className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>تحميل كملف PDF رسمي الآن</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
