import React, { useState } from 'react';
import { clubService } from '../../firebase';
import { 
  ShieldCheck, 
  GraduationCap, 
  UserPlus, 
  Pencil, 
  Trash2, 
  Upload, 
  X, 
  Check, 
  Loader2, 
  AlertCircle, 
  User, 
  RotateCcw,
  Camera,
  ImageOff
} from 'lucide-react';

export default function BoardManager({
  supervisor,
  boardMembers,
  onUpdateSupervisor,
  onAddMember,
  onUpdateMember,
  onDeleteMember,
  onResetDefaults
}) {
  // Supervisor Form State
  const [supForm, setSupForm] = useState({
    name: supervisor?.name || '',
    role: supervisor?.role || 'الأستاذ المشرف على النادي',
    department: supervisor?.department || 'كلية العلوم والتكنولوجيا - جامعة تامنغست',
    description: supervisor?.description || '',
    image: supervisor?.image || ''
  });
  const [isSavingSup, setIsSavingSup] = useState(false);
  const [supSuccessMsg, setSupSuccessMsg] = useState('');
  const [isUploadingSupImage, setIsUploadingSupImage] = useState(false);

  // Board Member Modal State (Add / Edit)
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null); // null for new, or object for edit
  const [memberForm, setMemberForm] = useState({
    name: '',
    role: 'رئيس النادي',
    badge: 'الرئاسة',
    specialty: '',
    image: ''
  });
  const [isSubmittingMember, setIsSubmittingMember] = useState(false);
  const [memberError, setMemberError] = useState('');
  const [isUploadingMemberImage, setIsUploadingMemberImage] = useState(false);

  // Common quick role presets for convenience
  const rolePresets = [
    { role: 'رئيس النادي', badge: 'الرئاسة' },
    { role: 'نائب رئيس النادي', badge: 'الإدارة' },
    { role: 'الأمين العام', badge: 'الأمانة العامة' },
    { role: 'مسؤول الإعلام والاتصال', badge: 'الإعلام' },
    { role: 'مسؤول الأنشطة والمشاريع', badge: 'الأنشطة' },
    { role: 'مسؤول المالية والعتاد', badge: 'اللوجستيك' },
    { role: 'مسؤول العلاقات العامة', badge: 'العلاقات' },
    { role: 'مؤطر تقني', badge: 'التأطير' }
  ];

  // ============================
  // 1. SUPERVISOR HANDLERS
  // ============================
  const handleSupChange = (e) => {
    const { name, value } = e.target;
    setSupForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSupImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploadingSupImage(true);
      const res = await clubService.uploadFile(file, 'supervisor');
      setSupForm(prev => ({ ...prev, image: res.url }));
    } catch (err) {
      alert('فشل رفع صورة الأستاذ: ' + err.message);
    } finally {
      setIsUploadingSupImage(false);
    }
  };

  const handleRemoveSupImage = () => {
    setSupForm(prev => ({ ...prev, image: '' }));
  };

  const handleSaveSupervisor = async (e) => {
    e.preventDefault();
    setSupSuccessMsg('');

    try {
      setIsSavingSup(true);
      await onUpdateSupervisor({
        ...supForm,
        name: supForm.name.trim(),
        role: supForm.role.trim(),
        department: supForm.department.trim(),
        description: supForm.description.trim()
      });
      setSupSuccessMsg('تم حفظ وتحديث بيانات الأستاذ المشرف بنجاح!');
      setTimeout(() => setSupSuccessMsg(''), 4000);
    } catch (err) {
      alert('حدث خطأ أثناء الحفظ: ' + err.message);
    } finally {
      setIsSavingSup(false);
    }
  };

  // ============================
  // 2. MEMBER MODAL HANDLERS
  // ============================
  const openAddMemberModal = () => {
    setEditingMember(null);
    setMemberForm({
      name: '',
      role: 'عضو المكتب التنفيذي',
      badge: 'العضوية',
      specialty: '',
      image: ''
    });
    setMemberError('');
    setShowMemberModal(true);
  };

  const openEditMemberModal = (member) => {
    setEditingMember(member);
    setMemberForm({
      name: member.name || '',
      role: member.role || '',
      badge: member.badge || '',
      specialty: member.specialty || '',
      image: member.image || ''
    });
    setMemberError('');
    setShowMemberModal(true);
  };

  const handleMemberFormChange = (e) => {
    const { name, value } = e.target;
    setMemberForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectPreset = (preset) => {
    setMemberForm(prev => ({
      ...prev,
      role: preset.role,
      badge: preset.badge
    }));
  };

  const handleMemberImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploadingMemberImage(true);
      const res = await clubService.uploadFile(file, 'board_members');
      setMemberForm(prev => ({ ...prev, image: res.url }));
    } catch (err) {
      alert('فشل رفع صورة العضو: ' + err.message);
    } finally {
      setIsUploadingMemberImage(false);
    }
  };

  const handleRemoveMemberImage = () => {
    setMemberForm(prev => ({ ...prev, image: '' }));
  };

  const handleSaveMember = async (e) => {
    e.preventDefault();
    setMemberError('');

    if (!memberForm.name.trim() || !memberForm.role.trim()) {
      setMemberError('يرجى تحديد اسم العضو ومنصبه في النادي.');
      return;
    }

    try {
      setIsSubmittingMember(true);
      const payload = {
        name: memberForm.name.trim(),
        role: memberForm.role.trim(),
        badge: memberForm.badge.trim() || 'عضو المكتب',
        specialty: memberForm.specialty.trim(),
        image: memberForm.image || '' // can be completely empty as requested!
      };

      if (editingMember) {
        await onUpdateMember(editingMember.id, payload);
      } else {
        await onAddMember(payload);
      }

      setIsSubmittingMember(false);
      setShowMemberModal(false);
    } catch (err) {
      setIsSubmittingMember(false);
      setMemberError(err.message || 'فشل حفظ بيانات العضو.');
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Top Welcome / Guidance Banner */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0072B1]"></span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              إدارة الهيكل التنظيمي والمكتب التنفيذي
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            يمكنك تخصيص بيانات الأستاذ المشرف وأعضاء المكتب التنفيذي. 
            <strong className="text-slate-700 mx-1">الصور اختيارية تماماً</strong>؛ 
            في حال عدم توفر صورة سيتم عرض أيقونة أنيقة افتراضياً دون أن يتأثر مظهر الموقع.
          </p>
        </div>

        {onResetDefaults && (
          <button
            onClick={() => {
              if (window.confirm('هل تريد استرجاع البيانات الافتراضية للمكتب والمشرف؟')) {
                onResetDefaults();
              }
            }}
            className="text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
            title="استرجاع البيانات الافتراضية الأولية"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>استرجاع الافتراضي</span>
          </button>
        )}
      </div>

      {/* ======================================================== */}
      {/* SECTION 1: SUPERVISING PROFESSOR (الأستاذ المشرف) */}
      {/* ======================================================== */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center border border-blue-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900">بيانات الأستاذ المشرف على النادي</h4>
              <p className="text-xs text-slate-500">المؤطر الأكاديمي المعتمد من الكلية</p>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-[#0072B1] border border-blue-200">
            بطاقة التأطير
          </span>
        </div>

        {supSuccessMsg && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{supSuccessMsg}</span>
          </div>
        )}

        <form onSubmit={handleSaveSupervisor} className="space-y-5">
          
          {/* Avatar & Photo Management */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {/* Image Preview / Empty Icon */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0072B1] bg-white flex items-center justify-center shrink-0 shadow-xs relative group">
              {supForm.image ? (
                <img
                  src={supForm.image}
                  alt={supForm.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '';
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#0072B1]">
                  <GraduationCap className="w-10 h-10" />
                  <span className="text-[9px] font-bold mt-1 text-slate-400">بدون صورة</span>
                </div>
              )}
            </div>

            {/* Photo controls */}
            <div className="flex-1 text-center sm:text-right space-y-2">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                الصورة الشخصية للأستاذ (اختيارية)
              </h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                يمكنك رفع صورة من جهازك، أو تركها فارغة وسيتم عرض أيقونة الأستاذ المشرف تلقائياً بشكل رسمي وأنيق.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                <label className="cursor-pointer bg-white hover:bg-slate-100 text-slate-700 border-2 border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors">
                  <Camera className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>{isUploadingSupImage ? 'جاري الرفع...' : 'رفع صورة من الجهاز'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSupImageUpload}
                    disabled={isUploadingSupImage}
                    className="hidden"
                  />
                </label>

                {supForm.image && (
                  <button
                    type="button"
                    onClick={handleRemoveSupImage}
                    className="bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 px-3 py-1.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <ImageOff className="w-3.5 h-3.5" />
                    <span>إزالة الصورة (تركها فارغة)</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                اسم ولقب الأستاذ المشرف *
              </label>
              <input
                type="text"
                name="name"
                value={supForm.name}
                onChange={handleSupChange}
                placeholder="مثال: د. عبد الرحمن بن سالم"
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                الصفة / الرتبة *
              </label>
              <input
                type="text"
                name="role"
                value={supForm.role}
                onChange={handleSupChange}
                placeholder="الأستاذ المشرف على النادي / أستاذ محاضر"
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              القسم والكلية
            </label>
            <input
              type="text"
              name="department"
              value={supForm.department}
              onChange={handleSupChange}
              placeholder="كلية العلوم والتكنولوجيا - جامعة تامنغست"
              className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              نبذة توجيهية أو كلمة المشرف
            </label>
            <textarea
              name="description"
              rows="2"
              value={supForm.description}
              onChange={handleSupChange}
              placeholder="مرافقة وتأطير علمي وأكاديمي لنشاطات النادي ومشاريع الطلبة في الكلية..."
              className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSavingSup}
              className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs disabled:opacity-50"
            >
              {isSavingSup ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>جاري الحفظ...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>حفظ بيانات الأستاذ المشرف</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>

      {/* ======================================================== */}
      {/* SECTION 2: EXECUTIVE BOARD MEMBERS (أعضاء المكتب التنفيذي) */}
      {/* ======================================================== */}
      <div className="space-y-5">
        
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                أعضاء المكتب التنفيذي ({boardMembers.length})
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              أضف الأعضاء (الرئيس، نائب الرئيس، الأمين العام، مسؤولي الخلايا والأنشطة). 
              يمكنك كتابة الاسم وتحديد المنصب وترك الصورة فارغة.
            </p>
          </div>

          <button
            onClick={openAddMemberModal}
            className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm shrink-0"
          >
            <UserPlus className="w-4 h-4" />
            <span>+ إضافة عضو جديد في المكتب</span>
          </button>
        </div>

        {/* Board Members Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {boardMembers.length === 0 ? (
            <div className="col-span-full bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center text-slate-400">
              <User className="w-12 h-12 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-bold text-slate-600 mb-1">لم يتم إضافة أي عضو في المكتب بعد</p>
              <p className="text-xs text-slate-400 mb-4">اضغط على زر "إضافة عضو جديد" للبدء في تشكيل المكتب التنفيذي</p>
              <button
                onClick={openAddMemberModal}
                className="bg-[#0072B1] text-white px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
              >
                <UserPlus className="w-4 h-4" />
                <span>إضافة أول عضو</span>
              </button>
            </div>
          ) : (
            boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-right flex flex-col justify-between shadow-xs hover:border-[#0072B1] transition-all relative"
              >
                <div>
                  
                  {/* Top Bar: Badge & Action Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0072B1] border border-blue-200">
                      {member.badge || 'المكتب التنفيذي'}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => openEditMemberModal(member)}
                        className="p-1.5 text-slate-500 hover:text-[#0072B1] hover:bg-blue-50 rounded-lg transition-colors"
                        title="تعديل بيانات العضو"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`هل أنت متأكد من حذف (${member.name}) من المكتب التنفيذي؟`)) {
                            onDeleteMember(member.id);
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="حذف هذا العضو"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Avatar + Info */}
                  <div className="flex items-center gap-4 mb-3">
                    {/* Member Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-50 shrink-0 flex items-center justify-center p-0.5">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-blue-50 text-[#0072B1] rounded-full"><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-50 text-[#0072B1] rounded-full">
                          <User className="w-7 h-7" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h5 className="text-sm font-black text-slate-900 truncate">
                        {member.name}
                      </h5>
                      <p className="text-xs text-[#0072B1] font-bold truncate mt-0.5">
                        {member.role}
                      </p>
                      {member.specialty && (
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {member.specialty}
                        </p>
                      )}
                    </div>
                  </div>

                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{member.image ? 'صورة مخصصة' : 'بدون صورة (رمز افتراضي)'}</span>
                  <span className="text-emerald-600 font-semibold">ظاهر في الموقع</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* ======================================================== */}
      {/* ADD / EDIT BOARD MEMBER MODAL */}
      {/* ======================================================== */}
      {showMemberModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-right relative shadow-2xl max-h-[88vh] overflow-y-auto border-2 border-slate-200">
            
            <button
              onClick={() => setShowMemberModal(false)}
              className="absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-900 mb-1">
              {editingMember ? 'تعديل بيانات عضو في المكتب' : 'إضافة عضو جديد في المكتب التنفيذي'}
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              أدخل اسم العضو ومنصبه في النادي. الصورة اختيارية ويمكن تركها فارغة.
            </p>

            {memberError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{memberError}</span>
              </div>
            )}

            <form onSubmit={handleSaveMember} className="space-y-4">
              
              {/* Member Photo Preview & Upload (Optional) */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-300 bg-white shrink-0 flex items-center justify-center">
                  {memberForm.image ? (
                    <img
                      src={memberForm.image}
                      alt="معاينة"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <User className="w-8 h-8 text-[#0072B1]" />
                  )}
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">الصورة الشخصية</span>
                    <span className="text-[10px] text-slate-400 font-semibold">(اختيارية)</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <label className="cursor-pointer bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1 shadow-xs transition-colors">
                      <Camera className="w-3 h-3 text-[#0072B1]" />
                      <span>{isUploadingMemberImage ? 'جاري الرفع...' : 'رفع صورة'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleMemberImageUpload}
                        disabled={isUploadingMemberImage}
                        className="hidden"
                      />
                    </label>

                    {memberForm.image && (
                      <button
                        type="button"
                        onClick={handleRemoveMemberImage}
                        className="bg-white hover:bg-red-50 text-red-600 border border-red-200 px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1 shadow-xs"
                      >
                        <ImageOff className="w-3 h-3" />
                        <span>حذف الصورة</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  الاسم الكامل للعضو *
                </label>
                <input
                  type="text"
                  name="name"
                  value={memberForm.name}
                  onChange={handleMemberFormChange}
                  placeholder="مثال: أحمد عبد الله"
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                />
              </div>

              {/* Quick Presets for Role */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  اختيار سريع للمنصب أو كتابة منصب مخصص:
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {rolePresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${
                        memberForm.role === preset.role
                          ? 'bg-[#0072B1] text-white border-[#0072B1]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      {preset.role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    المنصب في النادي *
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={memberForm.role}
                    onChange={handleMemberFormChange}
                    placeholder="رئيس النادي / نائب الرئيس..."
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all font-bold text-[#0072B1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    شارة المنصب (Badge)
                  </label>
                  <input
                    type="text"
                    name="badge"
                    value={memberForm.badge}
                    onChange={handleMemberFormChange}
                    placeholder="الرئاسة / الإدارة / الإعلام..."
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  التخصص الدراسي / الشعبة (اختياري)
                </label>
                <input
                  type="text"
                  name="specialty"
                  value={memberForm.specialty}
                  onChange={handleMemberFormChange}
                  placeholder="مثال: هندسة كهربائية وإلكترونيات / إعلام آلي"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmittingMember}
                  className="bg-[#0072B1] hover:bg-[#005a8e] text-white flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
                >
                  {isSubmittingMember ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري الحفظ...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{editingMember ? 'حفظ التعديلات' : 'إضافة العضو للمكتب'}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowMemberModal(false)}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 bg-slate-100"
                >
                  إلغاء
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
