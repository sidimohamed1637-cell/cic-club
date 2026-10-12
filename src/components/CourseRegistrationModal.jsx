import React, { useState } from 'react';
import { clubService } from '../firebase';
import { 
  X, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  BookOpen, 
  User, 
  Mail, 
  Phone, 
  GraduationCap 
} from 'lucide-react';

export default function CourseRegistrationModal({ course, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    major: '',
    studyYear: 'سنة ثانية ليسانس (L2)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const studyYears = [
    'السنة الأولى ليسانس (L1)',
    'السنة الثانية ليسانس (L2)',
    'السنة الثالثة ليسانس (L3)',
    'السنة الأولى ماستر (M1)',
    'السنة الثانية ماستر (M2)',
    'دكتوراه / باحث'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('يرجى ملء جميع الحقول الإلزامية.');
      return;
    }

    try {
      setIsSubmitting(true);

      const regPayload = {
        courseId: course.id,
        courseTitle: course.title,
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        whatsapp: formData.whatsapp.trim(),
        major: formData.major.trim(),
        studyYear: formData.studyYear,
        registeredAt: new Date().toISOString(),
        registrationDateFormatted: new Date().toLocaleDateString('ar-DZ')
      };

      await clubService.registerForCourse(regPayload);

      setIsSubmitting(false);
      setIsSuccess(true);

      if (onSuccess) onSuccess();

    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'فشل التسجيل. يرجى المحاولة لاحقاً.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 max-w-lg w-full text-right relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              تم تأكيد تسجيلك في الدورة بنجاح!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              أهلاً بك يا <span className="text-[#0072B1] font-bold">{formData.fullName}</span> في ورشة:
              <br />
              <strong className="text-slate-900">"{course.title}"</strong>
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 space-y-1.5 text-right">
              <div className="flex justify-between">
                <span>المؤطر:</span>
                <span className="text-slate-900 font-semibold">{course.instructor || 'مؤطرو النادي'}</span>
              </div>
              <div className="flex justify-between">
                <span>الموعد:</span>
                <span className="text-[#0072B1] font-semibold">{course.date || 'سيحدد عبر مجموعة الواتساب'}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-2.5 rounded-xl font-bold text-xs mt-3 shadow-xs"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#0072B1] block">
                  تسجيل طالب في ورشة تدريبية
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                  {course.title}
                </h3>
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الاسم واللقب الكامل <span className="text-[#0072B1]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="اكتب اسمك الكامل هنا..."
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    البريد الإلكتروني <span className="text-[#0072B1]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@univ-tam.dz"
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9 text-left dir-ltr"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رقم الهاتف (واتساب) <span className="text-[#0072B1]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9 text-left dir-ltr"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    التخصص الجامعي
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      placeholder="إلكترونيات / إعلام آلي"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9"
                    />
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    السنة الدراسية
                  </label>
                  <select
                    name="studyYear"
                    value={formData.studyYear}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0072B1]"
                  >
                    {studyYears.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري تسجيل الحضور...</span>
                    </>
                  ) : (
                    <span>تأكيد التسجيل في الدورة</span>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
