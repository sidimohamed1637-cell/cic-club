import React, { useState } from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send 
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CLUB_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendQuickMessage = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    const mailto = `mailto:${CLUB_CONFIG.email}?subject=استفسار من: ${encodeURIComponent(contactForm.name)}&body=${encodeURIComponent(contactForm.message + "\n\nالبريد: " + contactForm.email)}`;
    window.open(mailto, '_blank');
    setMessageSent(true);
  };

  const inputClass = "w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] transition-colors";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
            <Mail className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-2">
            التواصل الرسمي
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            تواصل مع إدارة النادي
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            نسعد باستقبال كافة الاستفسارات، الأفكار الهندسية، والشراكات الطلابية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-7 space-y-5 text-right">
            
            {/* Official Email Box */}
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center shrink-0 border-2 border-blue-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">البريد الإلكتروني الرسمي:</span>
                    <a
                      href={`mailto:${CLUB_CONFIG.email}`}
                      className="text-base sm:text-lg font-mono font-bold text-slate-900 hover:text-[#0072B1] transition-colors dir-ltr block"
                    >
                      {CLUB_CONFIG.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الإيميل</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & WhatsApp Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center mb-3 border-2 border-emerald-200">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900">واتساب النادي الرسمي</h4>
                {CLUB_CONFIG.whatsappNumber ? (
                  <p className="text-xs text-slate-600 font-mono dir-ltr text-right">{CLUB_CONFIG.whatsappNumber}</p>
                ) : (
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                      سيتوفر قريباً
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">سيتم تفعيل خط التواصل المباشر ومجموعات النادي قريباً</p>
                  </div>
                )}
              </div>

              <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-3 border-2 border-blue-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">المقر الرسمي</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{CLUB_CONFIG.address}</p>
              </div>
            </div>

            {/* Social Media Links with Official Logos */}
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
              <h4 className="text-xs font-bold text-slate-900 mb-4">
                صفحات النادي على شبكات التواصل الاجتماعي:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Facebook (Official Logo & Active Link) */}
                <a
                  href={CLUB_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-blue-50/50 border-2 border-blue-200 hover:border-blue-500 text-slate-800 hover:text-blue-700 flex items-center justify-between gap-3 text-xs font-bold transition-all shadow-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="group-hover:text-blue-700">فيسبوك</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">متاح الآن</span>
                </a>

                {/* WhatsApp (Official Logo & Clean Placeholder/Link) */}
                {CLUB_CONFIG.socialLinks.whatsapp ? (
                  <a
                    href={CLUB_CONFIG.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-50/50 border-2 border-emerald-200 hover:border-emerald-500 text-slate-800 hover:text-emerald-700 flex items-center justify-between gap-3 text-xs font-bold transition-all shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                      </svg>
                      <span>واتساب</span>
                    </div>
                  </a>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-600 flex items-center justify-between gap-3 text-xs font-medium">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5 text-[#25D366] opacity-75 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                      </svg>
                      <span className="font-bold text-slate-700">واتساب</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      قريباً
                    </span>
                  </div>
                )}

                {/* Instagram (Official Logo & Clean Placeholder/Link) */}
                {CLUB_CONFIG.socialLinks.instagram ? (
                  <a
                    href={CLUB_CONFIG.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-pink-50/50 border-2 border-pink-200 hover:border-pink-500 text-slate-800 hover:text-pink-700 flex items-center justify-between gap-3 text-xs font-bold transition-all shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5 text-[#E4405F] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>انستغرام</span>
                    </div>
                  </a>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-600 flex items-center justify-between gap-3 text-xs font-medium">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5 text-[#E4405F] opacity-75 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="font-bold text-slate-700">انستغرام</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-pink-50 text-pink-700 border border-pink-200 font-bold">
                      قريباً
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-7 sm:p-8 text-right shadow-md">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                إرسال استفسار مباشر
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                تفتح رسالتك في تطبيق البريد لإرسالها مباشرة لإدارة النادي
              </p>

              {messageSent ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6 text-center space-y-2">
                  <h4 className="text-xs font-bold text-emerald-800">تم تجهيز رسالتك للإرسال!</h4>
                  <p className="text-[11px] text-emerald-700">شكراً لتواصلك مع نادي الإبداع والابتكار CIC.</p>
                  <button
                    onClick={() => setMessageSent(false)}
                    className="text-xs text-[#0072B1] hover:underline pt-1 block mx-auto"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendQuickMessage} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">الاسم الكامل</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="اكتب اسمك الكامل هنا..."
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="email@example.com"
                      className={inputClass + " text-left dir-ltr"}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">الرسالة أو الاستفسار</label>
                    <textarea
                      rows="4"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="اكتب استفسارك هنا..."
                      required
                      className={inputClass + " resize-none"}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>إرسال الاستفسار</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
