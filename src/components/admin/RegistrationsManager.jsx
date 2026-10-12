import React, { useState, useEffect } from 'react';
import { CLUB_CONFIG } from '../../config/clubConfig';
import { 
  Search, 
  Printer, 
  Phone, 
  FileSpreadsheet, 
  BookOpen, 
  UserCheck, 
  Calendar, 
  Clock, 
  ShieldAlert, 
  FileText 
} from 'lucide-react';

export default function RegistrationsManager({ registrations = [], courses = [] }) {
  // Select first course by default if available
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  // Update selected course if courses change and nothing is selected
  useEffect(() => {
    if (courses.length > 0 && selectedCourseId === 'all') {
      setSelectedCourseId(courses[0].id);
    }
  }, [courses]);

  // Current active course object
  const currentCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  // Registrations for the currently active course
  const courseRegistrations = registrations.filter(r => {
    if (!currentCourse) return true;
    return r.courseId === currentCourse.id || r.courseTitle === currentCourse.title;
  });

  // Filtered by search within this course
  const filteredStudents = courseRegistrations.filter(r => {
    const term = searchTerm.toLowerCase();
    const name = (r.fullName || '').toLowerCase();
    const major = (r.major || '').toLowerCase();
    const phone = (r.whatsapp || '').toLowerCase();
    return name.includes(term) || major.includes(term) || phone.includes(term);
  });

  // Export to PDF function (STRICTLY WITHOUT phone or private info)
  const handleExportPDF = (course, students) => {
    if (!course) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('يرجى السماح بالنوافذ المنبثقة (Popups) في المتصفح لمعاينة وطباعة ملف الـ PDF.');
      return;
    }

    const courseTitle = course.title || 'دورة تدريبية';
    const instructor = course.instructor || 'مؤطرو النادي';
    const courseDate = course.date || 'حسب الإعلان';
    const courseDuration = course.duration || '3 أسابيع';

    const rowsHtml = students.map((s, idx) => `
      <tr>
        <td style="text-align: center; font-weight: bold; width: 35px;">${idx + 1}</td>
        <td style="font-weight: bold; font-size: 13px;">${s.fullName || '-'}</td>
        <td>${s.major || '-'}</td>
        <td style="text-align: center; width: 110px;">${s.studyYear || '-'}</td>
        <td style="text-align: center; color: #475569; font-size: 11px; width: 95px;">${s.registrationDateFormatted || (s.createdAt ? new Date(s.createdAt).toLocaleDateString('ar-DZ') : '-')}</td>
        <td style="width: 100px;"></td>
      </tr>
    `).join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>قائمة الطلبة المقبولين - ${courseTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          * {
            box-sizing: border-box;
          }
          body {
            font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
            color: #0f172a;
            margin: 0;
            padding: 20px;
            direction: rtl;
            background: #ffffff;
            font-size: 12px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #0072B1;
            padding-bottom: 12px;
            margin-bottom: 16px;
          }
          .header-text {
            font-size: 11px;
            line-height: 1.6;
          }
          .header-title {
            font-weight: 800;
            color: #0072B1;
            font-size: 13px;
            margin-top: 2px;
          }
          .doc-badge {
            text-align: left;
            font-size: 10px;
            color: #64748b;
            line-height: 1.5;
          }
          .title-box {
            background-color: #f8fafc;
            border: 1.5px solid #cbd5e1;
            border-radius: 10px;
            padding: 12px 16px;
            margin-bottom: 16px;
            text-align: center;
          }
          .title-box h1 {
            margin: 0 0 4px 0;
            font-size: 17px;
            color: #0f172a;
            font-weight: 900;
          }
          .course-name {
            font-size: 14px;
            font-weight: 800;
            color: #0072B1;
          }
          .meta-tags {
            display: flex;
            justify-content: center;
            gap: 16px;
            font-size: 11px;
            color: #334155;
            margin-top: 6px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 11px;
          }
          th, td {
            border: 1px solid #cbd5e1;
            padding: 7px 9px;
            text-align: right;
          }
          th {
            background-color: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            font-size: 11px;
          }
          tr:nth-child(even) {
            background-color: #f8fafc;
          }
          .footer-note {
            margin-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 10px;
            color: #475569;
          }
          .stamp-box {
            border: 1.5px dashed #94a3b8;
            border-radius: 8px;
            width: 150px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-weight: bold;
            font-size: 10px;
          }
          @media print {
            body {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-text">
            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
            <div>وزارة التعليم العالي والبحث العلمي</div>
            <div><strong>${CLUB_CONFIG.university}</strong></div>
            <div>${CLUB_CONFIG.faculty}</div>
            <div class="header-title">${CLUB_CONFIG.name}</div>
          </div>
          <div class="doc-badge">
            <div>الموسم الجامعي: ${CLUB_CONFIG.academicYear}</div>
            <div>تاريخ الإصدار: ${new Date().toLocaleDateString('ar-DZ')}</div>
            <div style="margin-top: 4px; color: #0072B1; font-weight: bold;">وثيقة رسمية للإعلان والنشر</div>
          </div>
        </div>

        <div class="title-box">
          <h1>قائمة الطلبة المقبولين لحضور الدورة</h1>
          <div class="course-name">${courseTitle}</div>
          <div class="meta-tags">
            <span>المؤطر: <strong>${instructor}</strong></span>
            <span>•</span>
            <span>الموعد: <strong>${courseDate}</strong></span>
            <span>•</span>
            <span>المدة: <strong>${courseDuration}</strong></span>
            <span>•</span>
            <span>إجمالي المقبولين: <strong>${students.length} طالب</strong></span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 35px; text-align: center;">#</th>
              <th>اسم ولقب الطالب</th>
              <th>التخصص الجامعي</th>
              <th style="width: 110px; text-align: center;">السنة الدراسية</th>
              <th style="width: 95px; text-align: center;">تاريخ التسجيل</th>
              <th style="width: 100px; text-align: center;">توقيع الحضور</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml || '<tr><td colspan="6" style="text-align: center; padding: 20px; color: #94a3b8;">لا يوجد طلبة مسجلون في هذه الدورة حالياً</td></tr>'}
          </tbody>
        </table>

        <div class="footer-note">
          <div>
            <p style="margin: 0 0 3px 0;"><strong>تنبيه وإرشادات للطلبة:</strong></p>
            <p style="margin: 0; color: #64748b;">• يرجى من جميع الطلبة الواردة أسماؤهم الالتزام بمواعيد الدورة المقررة في الكلية.</p>
            <p style="margin: 0; color: #64748b;">• هذه القائمة مخصصة للإعلان والنشر العام، ولا تحتوي على أي بيانات تواصل خاصة.</p>
          </div>
          <div class="stamp-box">
            ختم وتوقيع إدارة النادي
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  // Export to Excel for Admin Internal Records (Clean, UTF-8 XML format, never scrambled)
  const exportToExcel = (course, students) => {
    if (students.length === 0) {
      alert('لا توجد بيانات لتصديرها في هذه الدورة.');
      return;
    }
    const headers = ['#', 'اسم الطالب', 'الدورة', 'الهاتف (واتساب)', 'البريد الإلكتروني', 'التخصص', 'السنة', 'تاريخ التسجيل'];
    const rowsHtml = students.map((s, idx) => `
      <tr>
        <td style="text-align:center;">${idx + 1}</td>
        <td style="font-weight:bold;">${s.fullName || ''}</td>
        <td>${course?.title || ''}</td>
        <td style="direction:ltr; text-align:left;">${s.whatsapp || ''}</td>
        <td style="direction:ltr; text-align:left;">${s.email || ''}</td>
        <td>${s.major || ''}</td>
        <td style="text-align:center;">${s.studyYear || ''}</td>
        <td style="text-align:center;">${s.registrationDateFormatted || s.createdAt || ''}</td>
      </tr>
    `).join('');

    const excelHtml = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>المسجلين في الدورة</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayRightToLeft/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; }
          table { border-collapse: collapse; width: 100%; direction: rtl; }
          th { background-color: #0072B1; color: #ffffff; border: 1px solid #005a8e; padding: 8px 12px; font-weight: bold; font-size: 13px; text-align: right; }
          td { border: 1px solid #cbd5e1; padding: 6px 10px; font-size: 12px; text-align: right; }
        </style>
      </head>
      <body dir="rtl">
        <table>
          <thead>
            <tr>
              ${headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </body>
      </html>
    `;

    const blob = new Blob([excelHtml], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `قائمة_المسجلين_${(course?.title || 'دورة').replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.xls`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      
      {/* Course Selection Bar - Each course separate */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700">اختر الدورة لعرض قائمتها وتصديرها:</span>
          <span className="text-[11px] text-slate-500">إجمالي الدورات: {courses.length}</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {courses.map((course) => {
            const count = registrations.filter(
              r => r.courseId === course.id || r.courseTitle === course.title
            ).length;
            const isSelected = selectedCourseId === course.id;

            return (
              <button
                key={course.id}
                onClick={() => {
                  setSelectedCourseId(course.id);
                  setSearchTerm('');
                }}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all border-2 text-right ${
                  isSelected
                    ? 'bg-[#0072B1] text-white border-[#0072B1] shadow-md ring-2 ring-[#0072B1]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#0072B1]'}`} />
                <span className="max-w-[200px] truncate">{course.title}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Course Dedicated Panel */}
      {currentCourse ? (
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
          
          {/* Course Details & Export Actions Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-[#0072B1] border border-blue-100">
                  {currentCourse.category || 'تكوين تقني'}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  المقاعد: {currentCourse.seats || 20}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                {currentCourse.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>المحاضر: <strong className="text-slate-800">{currentCourse.instructor}</strong></span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>الموعد: <strong className="text-slate-800">{currentCourse.date}</strong></span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>المدة: <strong className="text-slate-800">{currentCourse.duration}</strong></span>
                </span>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              {/* PRIMARY ACTION: Export PDF for Publishing (No Phone) */}
              <button
                onClick={() => handleExportPDF(currentCourse, courseRegistrations)}
                className="flex-1 lg:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                title="تصدير وثيقة PDF رسمية جاهزة للطباعة والنشر خالية من أرقام الهواتف"
              >
                <Printer className="w-4 h-4" />
                <span>📄 تصدير القائمة للنشر (PDF)</span>
              </button>

              {/* Secondary: Export Excel for Admin */}
              <button
                onClick={() => exportToExcel(currentCourse, courseRegistrations)}
                className="border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                title="تصدير ملف Excel مع أرقام الهواتف لسجلات الإدارة الداخلية"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>تصدير Excel</span>
              </button>
            </div>
          </div>

          {/* Privacy Notice Banner */}
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <p className="leading-relaxed">
              <strong>حماية الخصوصية:</strong> عند الضغط على <strong>"تصدير القائمة للنشر (PDF)"</strong>، يتم استخراج وثيقة رسمية تتضمن فقط (الاسم، التخصص، والمستوى الدراسي) بدون أي أرقام هواتف أو بريد إلكتروني، لتكون آمنة وجاهزة للنشر والإعلان للطلبة.
            </p>
          </div>

          {/* Search within this course */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="بحث في طلبة هذه الدورة بالاسم أو التخصص..."
              className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all pr-10 text-right"
            />
            <Search className="w-4 h-4 text-slate-400 absolute top-2.5 right-3.5 pointer-events-none" />
          </div>

          {/* Students Table for Selected Course */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold">
                  <tr>
                    <th className="py-3 px-3.5 text-center w-12">#</th>
                    <th className="py-3 px-3.5">اسم الطالب الكامل</th>
                    <th className="py-3 px-3.5">التخصص الجامعي</th>
                    <th className="py-3 px-3.5 text-center">السنة الدراسية</th>
                    <th className="py-3 px-3.5">تاريخ التسجيل</th>
                    <th className="py-3 px-3.5">الاتصال (للأدمن فقط)</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-12 text-center text-slate-400">
                        <BookOpen className="w-8 h-8 mx-auto text-slate-300 mb-1.5" />
                        <p className="text-xs font-semibold">
                          {courseRegistrations.length === 0 
                            ? 'لا يوجد مسجلون في هذه الدورة حالياً' 
                            : 'لا توجد نتائج مطابقة لبحثك'}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((reg, index) => {
                      const whatsappClean = (reg.whatsapp || '').replace(/[^0-9]/g, '');
                      const whatsappLink = whatsappClean.startsWith('0') 
                        ? `https://wa.me/213${whatsappClean.slice(1)}` 
                        : `https://wa.me/${whatsappClean}`;

                      return (
                        <tr key={reg.id || index} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-3.5 font-mono text-slate-400 text-center font-bold">
                            {index + 1}
                          </td>

                          <td className="py-3 px-3.5 font-bold text-slate-900 text-sm">
                            {reg.fullName}
                          </td>

                          <td className="py-3 px-3.5 text-slate-800 font-medium">
                            {reg.major || '-'}
                          </td>

                          <td className="py-3 px-3.5 text-center">
                            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#0072B1] font-bold text-[11px]">
                              {reg.studyYear || '-'}
                            </span>
                          </td>

                          <td className="py-3 px-3.5 text-slate-500 font-mono text-[11px]">
                            {reg.registrationDateFormatted || (reg.createdAt ? new Date(reg.createdAt).toLocaleDateString('ar-DZ') : '-')}
                          </td>

                          {/* Contact Info (Only visible in admin dashboard, not in published PDF) */}
                          <td className="py-3 px-3.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-[11px] dir-ltr">{reg.whatsapp}</span>
                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200"
                                title="محادثة واتساب مباشرة"
                              >
                                <Phone className="w-3 h-3" />
                              </a>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono dir-ltr text-right mt-0.5 truncate max-w-[150px]">
                              {reg.email}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      ) : (
        <div className="p-8 text-center bg-white border border-slate-200 rounded-2xl text-slate-400">
          يرجى إضافة دورات أولاً لعرض المسجلين
        </div>
      )}

    </div>
  );
}
