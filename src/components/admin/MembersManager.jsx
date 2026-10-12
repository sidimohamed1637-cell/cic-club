import React, { useState } from 'react';
import { clubService } from '../../firebase';
import { 
  Search, 
  Download, 
  Eye, 
  Trash2, 
  Phone, 
  X, 
  FileText, 
  UserCheck, 
  FileSpreadsheet,
  CheckCircle,
  XCircle,
  Clock,
  Filter,
  Printer
} from 'lucide-react';

export default function MembersManager({ members, onDeleteMember, onRefresh }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'قيد المراجعة' | 'مقبول' | 'مرفوض'
  const [previewDoc, setPreviewDoc] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  // Handle Accept / Reject
  const handleUpdateStatus = async (memberId, newStatus) => {
    try {
      setUpdatingId(memberId);
      await clubService.updateMemberStatus(memberId, newStatus);
      if (onRefresh) onRefresh();
    } catch (err) {
      alert('فشل تحديث الحالة: ' + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter members based on search and status
  const filteredMembers = members.filter((m) => {
    const term = searchTerm.toLowerCase();
    const name = (m.fullName || '').toLowerCase();
    const email = (m.email || '').toLowerCase();
    const phone = (m.whatsapp || '').toLowerCase();
    const major = (m.major || '').toLowerCase();
    const matchesSearch = name.includes(term) || email.includes(term) || phone.includes(term) || major.includes(term);

    const memberStatus = m.status || 'قيد المراجعة';
    const matchesStatus = statusFilter === 'all' || memberStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Export official PDF document for members (Clean, printable, formatted)
  const handleExportPDF = () => {
    if (filteredMembers.length === 0) {
      alert('لا توجد بيانات لتصديرها في القائمة المحددة حالياً.');
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('يرجى السماح بالنوافذ المنبثقة (Popups) في المتصفح لمعاينة وطباعة ملف الـ PDF.');
      return;
    }

    const filterTitle = statusFilter === 'all' 
      ? 'جميع الطلبة المسجلين' 
      : statusFilter === 'مقبول' 
      ? 'الطلبة المقبولين رسمياً' 
      : statusFilter === 'قيد المراجعة' 
      ? 'الطلبة قيد المراجعة' 
      : 'الطلبة المرفوضين';

    const rowsHtml = filteredMembers.map((m, idx) => `
      <tr>
        <td style="text-align: center; font-weight: bold; width: 35px;">${idx + 1}</td>
        <td style="font-weight: bold; font-size: 12px;">${m.fullName || '-'}</td>
        <td>${m.major || '-'}</td>
        <td style="text-align: center; width: 110px;">${m.studyYear || '-'}</td>
        <td style="text-align: center; width: 90px; font-weight: bold; color: ${m.status === 'مقبول' ? '#047857' : m.status === 'مرفوض' ? '#b91c1c' : '#b45309'};">${m.status || 'قيد المراجعة'}</td>
        <td style="text-align: center; color: #475569; font-size: 10.5px; width: 95px;">${m.registrationDate || (m.createdAt ? new Date(m.createdAt).toLocaleDateString('ar-DZ') : '-')}</td>
        <td style="width: 90px;"></td>
      </tr>
    `).join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>قائمة أعضاء نادي الإبداع والابتكار - ${filterTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          * { box-sizing: border-box; }
          body {
            font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
            color: #0f172a;
            margin: 0;
            padding: 20px;
            direction: rtl;
            background: #ffffff;
            font-size: 11.5px;
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
            font-size: 16px;
            color: #0f172a;
            font-weight: 900;
          }
          .sub-title {
            font-size: 13px;
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
            padding: 7px 8px;
            text-align: right;
          }
          th {
            background-color: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            font-size: 11px;
          }
          tr:nth-child(even) { background-color: #f8fafc; }
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
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-text">
            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
            <div>وزارة التعليم العالي والبحث العلمي</div>
            <div><strong>جامعة تامنغست</strong></div>
            <div>كلية العلوم والتكنولوجيا</div>
            <div class="header-title">نادي الإبداع والابتكار (CIC)</div>
          </div>
          <div class="doc-badge">
            <div>الموسم الجامعي: 2026 / 2027</div>
            <div>تاريخ الإصدار: ${new Date().toLocaleDateString('ar-DZ')}</div>
            <div style="margin-top: 4px; color: #0072B1; font-weight: bold;">وثيقة رسمية لإدارة النادي</div>
          </div>
        </div>

        <div class="title-box">
          <h1>قائمة أعضاء وطلبة نادي الإبداع والابتكار</h1>
          <div class="sub-title">${filterTitle}</div>
          <div class="meta-tags">
            <span>التصنيف: <strong>${statusFilter === 'all' ? 'الكل' : statusFilter}</strong></span>
            <span>•</span>
            <span>العدد الإجمالي: <strong>${filteredMembers.length} طالب</strong></span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 35px; text-align: center;">#</th>
              <th>اسم ولقب الطالب</th>
              <th>التخصص الجامعي</th>
              <th style="width: 110px; text-align: center;">السنة الدراسية</th>
              <th style="width: 90px; text-align: center;">حالة الطلب</th>
              <th style="width: 95px; text-align: center;">تاريخ التسجيل</th>
              <th style="width: 90px; text-align: center;">ملاحظات / التأشيرة</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml || '<tr><td colspan="7" style="text-align: center; padding: 20px; color: #94a3b8;">لا توجد بيانات مطابقة</td></tr>'}
          </tbody>
        </table>

        <div class="footer-note">
          <div>
            <p style="margin: 0 0 3px 0;"><strong>ملاحظات الإدارة:</strong></p>
            <p style="margin: 0; color: #64748b;">• وثيقة رسمية معتمدة خاصة بقوائم الطلبة المسجلين بنادي الإبداع والابتكار بكلية العلوم والتكنولوجيا.</p>
          </div>
          <div class="stamp-box">
            ختم وتأشيرة إدارة النادي
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

  // Export to Excel (Clean, UTF-8 encoded XML spreadsheet, never scrambled or garbled)
  const exportToExcel = () => {
    if (filteredMembers.length === 0) {
      alert('لا توجد بيانات لتصديرها.');
      return;
    }

    const headers = ['#', 'الاسم الكامل', 'حالة الطلب', 'التخصص الجامعي', 'السنة الدراسية', 'رقم الواتساب', 'البريد الإلكتروني', 'تاريخ التسجيل'];
    const rowsHtml = filteredMembers.map((m, idx) => `
      <tr>
        <td style="text-align:center;">${idx + 1}</td>
        <td style="font-weight:bold;">${m.fullName || ''}</td>
        <td style="text-align:center;">${m.status || 'قيد المراجعة'}</td>
        <td>${m.major || ''}</td>
        <td style="text-align:center;">${m.studyYear || ''}</td>
        <td style="direction:ltr; text-align:left;">${m.whatsapp || ''}</td>
        <td style="direction:ltr; text-align:left;">${m.email || ''}</td>
        <td style="text-align:center;">${m.registrationDate || m.createdAt || ''}</td>
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
                <x:Name>قائمة الأعضاء</x:Name>
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
    link.download = `أعضاء_نادي_الابداع_والابتكار_${new Date().toISOString().slice(0, 10)}.xls`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadFile = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'document';
    link.target = '_blank';
    link.click();
  };

  return (
    <div className="space-y-5">
      
      {/* Top Filter and Actions Bar */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Status Tabs (Where the admin manages approval!) */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              الجميع ({members.length})
            </button>
            <button
              onClick={() => setStatusFilter('قيد المراجعة')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                statusFilter === 'قيد المراجعة'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>قيد المراجعة ({members.filter(m => (m.status || 'قيد المراجعة') === 'قيد المراجعة').length})</span>
            </button>
            <button
              onClick={() => setStatusFilter('مقبول')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                statusFilter === 'مقبول'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>المقبولون ({members.filter(m => m.status === 'مقبول').length})</span>
            </button>
            <button
              onClick={() => setStatusFilter('مرفوض')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                statusFilter === 'مرفوض'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-red-700 hover:bg-red-50'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>المرفوضون ({members.filter(m => m.status === 'مرفوض').length})</span>
            </button>
          </div>

          {/* Export Actions (PDF Primary & Smooth Excel) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleExportPDF}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              title="تصدير وثيقة PDF رسمية جاهزة للطباعة والتوقيع"
            >
              <Printer className="w-4 h-4" />
              <span>📄 تصدير القائمة (PDF)</span>
            </button>

            <button
              onClick={exportToExcel}
              className="border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              title="تصدير جدول Excel سلس ومنظم (باللغة العربية)"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>📊 تصدير Excel</span>
            </button>
          </div>

        </div>

        {/* Search Field */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="بحث بالاسم، البريد، التخصص أو رقم الهاتف..."
            className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all pr-10 text-right"
          />
          <Search className="w-4 h-4 text-slate-400 absolute top-3 right-3.5 pointer-events-none" />
        </div>

      </div>

      {/* Members Table */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-slate-50 text-slate-700 border-b-2 border-slate-200 font-bold">
              <tr>
                <th className="py-3.5 px-3.5">#</th>
                <th className="py-3.5 px-3.5">الطالب المترشح</th>
                <th className="py-3.5 px-3.5">التخصص والسنة</th>
                <th className="py-3.5 px-3.5">الوثائق الجامعية</th>
                <th className="py-3.5 px-3.5">حالة الطلب</th>
                <th className="py-3.5 px-3.5 text-center">قرار الأدمن (قبول / رفض)</th>
                <th className="py-3.5 px-3.5 text-center">إجراءات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400">
                    <UserCheck className="w-8 h-8 mx-auto text-slate-300 mb-1.5" />
                    <p className="text-xs font-semibold">لا يوجد طلبات في هذا القسم</p>
                  </td>
                </tr>
              ) : (
                filteredMembers.map((member, index) => {
                  const status = member.status || 'قيد المراجعة';
                  const whatsappClean = (member.whatsapp || '').replace(/[^0-9]/g, '');
                  
                  // WhatsApp customized approval message link
                  const acceptMsg = encodeURIComponent(`السلام عليكم ورحمة الله يا ${member.fullName}،\nيسعدنا إعلامك بأنه تم قبول طلب انضمامك رسمياً إلى نادي الإبداع والابتكار (STI) بجامعة تامنغست!\nمرحباً بك في مجتمعنا التقني.`);
                  const whatsappLink = whatsappClean.startsWith('0') 
                    ? `https://wa.me/213${whatsappClean.slice(1)}?text=${acceptMsg}` 
                    : `https://wa.me/${whatsappClean}?text=${acceptMsg}`;

                  return (
                    <tr key={member.id || index} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-3.5 font-mono text-slate-400 font-bold">
                        {index + 1}
                      </td>

                      {/* Name & Phone */}
                      <td className="py-3.5 px-3.5">
                        <div className="font-bold text-slate-900 text-sm">
                          {member.fullName}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono dir-ltr text-right">
                          {member.email}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="font-mono text-[11px] text-slate-600 dir-ltr">{member.whatsapp}</span>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200"
                            title="مراسلة الطالب بالواتساب"
                          >
                            <Phone className="w-3 h-3" />
                          </a>
                        </div>
                      </td>

                      {/* Major & Year */}
                      <td className="py-3.5 px-3.5">
                        <div className="text-slate-800 font-bold">{member.major}</div>
                        <div className="text-[11px] text-[#0072B1] font-semibold">{member.studyYear}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{member.registrationDate || '-'}</div>
                      </td>

                      {/* Documents (Cert & Card) */}
                      <td className="py-3.5 px-3.5">
                        <div className="space-y-1">
                          {member.schoolCertUrl && (
                            <button
                              onClick={() => setPreviewDoc({
                                url: member.schoolCertUrl,
                                title: `الشهادة المدرسية - ${member.fullName}`,
                                filename: member.schoolCertName || 'school_certificate.jpg'
                              })}
                              className="px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-[#0072B1] font-bold flex items-center gap-1 text-[11px] w-full"
                            >
                              <Eye className="w-3 h-3" />
                              <span className="truncate">الشهادة المدرسية</span>
                            </button>
                          )}
                          {member.studentCardUrl && (
                            <button
                              onClick={() => setPreviewDoc({
                                url: member.studentCardUrl,
                                title: `بطاقة الطالب - ${member.fullName}`,
                                filename: member.studentCardName || 'student_id_card.jpg'
                              })}
                              className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1 text-[11px] w-full"
                            >
                              <Eye className="w-3 h-3" />
                              <span className="truncate">بطاقة الطالب</span>
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3.5 px-3.5">
                        {status === 'مقبول' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                            <CheckCircle className="w-3 h-3" />
                            <span>مقبول</span>
                          </span>
                        )}
                        {status === 'مرفوض' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                            <XCircle className="w-3 h-3" />
                            <span>مرفوض</span>
                          </span>
                        )}
                        {status === 'قيد المراجعة' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
                            <Clock className="w-3 h-3" />
                            <span>قيد المراجعة</span>
                          </span>
                        )}
                      </td>

                      {/* Accept / Reject Decision Buttons (WHERE THE ADMIN ACCEPTS!) */}
                      <td className="py-3.5 px-3.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => handleUpdateStatus(member.id, 'مقبول')}
                            disabled={updatingId === member.id || status === 'مقبول'}
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                              status === 'مقبول'
                                ? 'bg-emerald-100 text-emerald-800 opacity-60 cursor-default'
                                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                            }`}
                            title="قبول طلب العضوية"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>قبول</span>
                          </button>

                          <button
                            onClick={() => handleUpdateStatus(member.id, 'مرفوض')}
                            disabled={updatingId === member.id || status === 'مرفوض'}
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                              status === 'مرفوض'
                                ? 'bg-red-100 text-red-800 opacity-60 cursor-default'
                                : 'bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200'
                            }`}
                            title="رفض طلب العضوية"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            <span>رفض</span>
                          </button>
                        </div>
                      </td>

                      {/* Delete */}
                      <td className="py-3.5 px-3.5 text-center">
                        {confirmDeleteId === member.id ? (
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() => {
                                onDeleteMember(member.id);
                                setConfirmDeleteId(null);
                              }}
                              className="px-2 py-0.5 bg-red-600 text-white rounded text-[10px] font-bold"
                            >
                              تأكيد
                            </button>
                            <button
                              onClick={() => setConfirmDeleteId(null)}
                              className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-[10px]"
                            >
                              إلغاء
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmDeleteId(member.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="حذف العضو نهائياً"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-5 sm:p-6 max-w-2xl w-full text-right relative shadow-2xl max-h-[85vh] flex flex-col border-2 border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0072B1]" />
                <h3 className="text-sm font-bold text-slate-900">{previewDoc.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadFile(previewDoc.url, previewDoc.filename)}
                  className="border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>تحميل</span>
                </button>
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto my-3 flex items-center justify-center bg-slate-50 rounded-2xl p-4 border border-slate-200">
              {previewDoc.url.startsWith('data:application/pdf') || previewDoc.url.endsWith('.pdf') ? (
                <iframe
                  src={previewDoc.url}
                  title="Document Preview"
                  className="w-full h-[55vh] rounded-xl"
                ></iframe>
              ) : (
                <img
                  src={previewDoc.url}
                  alt={previewDoc.title}
                  className="max-h-[55vh] max-w-full object-contain rounded-xl shadow-xs"
                />
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
