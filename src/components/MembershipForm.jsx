import React, { useState } from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { clubService } from '../firebase';
import { 
  UserPlus, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Phone, 
  Mail, 
  GraduationCap, 
  User, 
  FileCheck 
} from 'lucide-react';

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    major: '',
    studyYear: 'السنة الأولى ليسانس (L1)',
  });

  const [schoolCertFile, setSchoolCertFile] = useState(null);
  const [studentCardFile, setStudentCardFile] = useState(null);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatusText, setUploadStatusText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const studyYears = [
    'السنة الأولى ليسانس (L1)',
    'السنة الثانية ليسانس (L2)',
    'السنة الثالثة ليسانس (L3)',
    'السنة الأولى ماستر (M1)',
    'السنة الثانية ماستر (M2)',
    'دكتوراه / باحث'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('حجم الملف كبير جداً. يرجى اختيار ملف بحجم أقل من 10 ميغابايت.');
      return;
    }

    setErrorMessage('');
    if (type === 'schoolCert') {
      setSchoolCertFile(file);
    } else if (type === 'studentCard') {
      setStudentCardFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim() || !formData.major.trim()) {
      setErrorMessage('يرجى ملء كافة الحقول الإلزامية.');
      return;
    }

    if (!schoolCertFile) {
      setErrorMessage('يرجى رفع ملف الشهادة المدرسية.');
      return;
    }

    if (!studentCardFile) {
      setErrorMessage('يرجى رفع ملف بطاقة الطالب.');
      return;
    }

    try {
      setIsSubmitting(true);
      setUploadProgress(15);
      setUploadStatusText('جاري رفع الشهادة المدرسية...');

      const certResult = await clubService.uploadFile(
        schoolCertFile,
        'members/school_certificates',
        (prog) => setUploadProgress(Math.round(prog * 0.45))
      );

      setUploadStatusText('جاري رفع بطاقة الطالب...');

      const cardResult = await clubService.uploadFile(
        studentCardFile,
        'members/student_cards',
        (prog) => setUploadProgress(45 + Math.round(prog * 0.45))
      );

      setUploadProgress(95);
      setUploadStatusText('جاري حفظ البيانات في قاعدة البيانات...');

      const memberPayload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        whatsapp: formData.whatsapp.trim(),
        major: formData.major.trim(),
        studyYear: formData.studyYear,
        schoolCertUrl: certResult.url,
        schoolCertName: certResult.name,
        studentCardUrl: cardResult.url,
        studentCardName: cardResult.name,
        status: 'قيد المراجعة',
        registrationDate: new Date().toLocaleDateString('ar-DZ'),
      };

      const savedDoc = await clubService.submitMembership(memberPayload);

      setUploadProgress(100);
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setSubmittedData(savedDoc);

    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'حدث خطأ أثناء إرسال البيانات. يرجى إعادة المحاولة.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      major: '',
      studyYear: 'السنة الأولى ليسانس (L1)',
    });
    setSchoolCertFile(null);
    setStudentCardFile(null);
    setSubmittedSuccess(false);
    setSubmittedData(null);
    setUploadProgress(0);
    setErrorMessage('');
  };

  const inputClass = "w-full bg-white border-2 border-slate-300 focus:border-[#0072B1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all";

  return (
    <section id="membership" className="py-24 sm:py-32 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
            <UserPlus className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-2">
            الانضمام للنادي
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-snug">
            استمارة طلب العضوية
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            املأ البيانات وأرفق وثائقك الجامعية لتأكيد عضويتك الرسمية في نادي الإبداع والابتكار.
          </p>
        </div>

        {/* Success Card */}
        {submittedSuccess ? (
          <div className="bg-white border-2 border-emerald-300 rounded-3xl p-10 sm:p-12 text-center shadow-lg animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border-2 border-emerald-300">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-3">
              تم استلام طلب عضويتك بنجاح!
            </h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              شكراً لك يا <strong className="text-slate-900">{submittedData?.fullName}</strong>. تم تسجيل بياناتك وحفظ وثائقك، وستقوم إدارة النادي بمراجعة طلبك وإشعارك بالقبول عبر الواتساب.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm"
            >
              تقديم طلب عضوية جديد
            </button>
          </div>
        ) : (
          /* Form */
          <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border-2 border-red-300 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2 text-right">
                    الاسم واللقب الكامل <span className="text-[#0072B1]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="اكتب اسمك الكامل هنا..."
                      required
                      className={inputClass + " pr-11"}
                    />
                    <User className="w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2 text-right">
                    البريد الإلكتروني <span className="text-[#0072B1]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="student@univ-tam.dz"
                      required
                      className={inputClass + " pr-11 text-left dir-ltr"}
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Phone & Major */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2 text-right">
                    رقم الهاتف (واتساب) <span className="text-[#0072B1]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="06 XX XX XX XX"
                      required
                      className={inputClass + " pr-11 text-left dir-ltr"}
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2 text-right">
                    التخصص الجامعي <span className="text-[#0072B1]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      placeholder="إلكترونيات، إعلام آلي، هندسة..."
                      required
                      className={inputClass + " pr-11"}
                    />
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Study Year */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2 text-right">
                  السنة الدراسية <span className="text-[#0072B1]">*</span>
                </label>
                <select
                  name="studyYear"
                  value={formData.studyYear}
                  onChange={handleInputChange}
                  className={inputClass}
                >
                  {studyYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              {/* Document Upload Boxes */}
              <div className="pt-2">
                <div className="border-t-2 border-slate-300 pt-6 mb-4">
                  <h4 className="text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#0072B1]" />
                    <span>الوثائق المطلوبة للتأكيد الجامعي</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    يرجى رفع صور واضحة أو ملفات PDF للشهادة المدرسية وبطاقة الطالب.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className={`bg-slate-50 border-2 border-dashed rounded-2xl p-6 text-center relative transition-colors ${schoolCertFile ? 'border-[#0072B1] bg-blue-50/30' : 'border-slate-400 hover:border-[#0072B1]'}`}>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => handleFileChange(e, 'schoolCert')}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-3 border-2 border-blue-200">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-slate-900 mb-1">
                      الشهادة المدرسية <span className="text-[#0072B1]">*</span>
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {schoolCertFile ? (
                        <span className="text-[#0072B1] font-bold">{schoolCertFile.name}</span>
                      ) : 'انقر أو اسحب الملف هنا'}
                    </p>
                  </div>

                  <div className={`bg-slate-50 border-2 border-dashed rounded-2xl p-6 text-center relative transition-colors ${studentCardFile ? 'border-[#0072B1] bg-blue-50/30' : 'border-slate-400 hover:border-[#0072B1]'}`}>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => handleFileChange(e, 'studentCard')}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-3 border-2 border-blue-200">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-slate-900 mb-1">
                      بطاقة الطالب <span className="text-[#0072B1]">*</span>
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {studentCardFile ? (
                        <span className="text-[#0072B1] font-bold">{studentCardFile.name}</span>
                      ) : 'انقر أو اسحب الملف هنا'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Upload Progress */}
              {isSubmitting && (
                <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-4 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-700 font-bold">
                    <span>{uploadStatusText}</span>
                    <span className="font-mono text-[#0072B1]">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0072B1] h-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري إرسال الطلب وحفظ الملفات...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span>تأكيد وإرسال طلب العضوية</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
