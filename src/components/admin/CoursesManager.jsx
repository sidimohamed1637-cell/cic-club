import React, { useState } from 'react';
import { 
  PlusCircle, 
  Trash2, 
  Calendar, 
  Clock, 
  UserCheck, 
  X, 
  Check, 
  Loader2, 
  AlertCircle, 
  BookPlus,
  Pencil
} from 'lucide-react';

export default function CoursesManager({ courses, onAddCourse, onUpdateCourse, onDeleteCourse }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [editError, setEditError] = useState('');

  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    instructor: '',
    date: '',
    duration: '3 أسابيع',
    seats: 20,
    category: 'روبوتات وإلكترونيات',
    tagsInput: 'Arduino, Robotics'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setEditError('');

    if (!editingCourse.title.trim() || !editingCourse.date.trim()) {
      setEditError('يرجى تحديد عنوان الدورة وموعدها على الأقل.');
      return;
    }

    try {
      setIsUpdating(true);
      await onUpdateCourse(editingCourse.id, {
        title: editingCourse.title.trim(),
        description: editingCourse.description?.trim() || '',
        instructor: editingCourse.instructor?.trim() || '',
        date: editingCourse.date.trim(),
        duration: editingCourse.duration || '3 أسابيع',
        seats: Number(editingCourse.seats) || 20,
        category: editingCourse.category || 'تكوين تقني'
      });
      setIsUpdating(false);
      setEditingCourse(null);
    } catch (err) {
      setIsUpdating(false);
      setEditError(err.message || 'فشل حفظ التعديلات.');
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!newCourse.title.trim() || !newCourse.description.trim() || !newCourse.instructor.trim() || !newCourse.date.trim()) {
      setErrorMessage('يرجى ملء جميع الحقول المطلوبة (العنوان، الوصف، المحاضر، والتاريخ).');
      return;
    }

    try {
      setIsSubmitting(true);
      const tags = newCourse.tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      const payload = {
        title: newCourse.title.trim(),
        description: newCourse.description.trim(),
        instructor: newCourse.instructor.trim(),
        date: newCourse.date.trim(),
        duration: newCourse.duration.trim(),
        seats: Number(newCourse.seats) || 20,
        category: newCourse.category,
        tags: tags.length > 0 ? tags : ['STI'],
        status: 'open'
      };

      await onAddCourse(payload);
      setIsSubmitting(false);
      setShowAddModal(false);

      setNewCourse({
        title: '',
        description: '',
        instructor: '',
        date: '',
        duration: '3 أسابيع',
        seats: 20,
        category: 'روبوتات وإلكترونيات',
        tagsInput: 'Arduino, Robotics'
      });
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'فشلت إضافة الدورة.');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Prominent Action Banner for Adding Courses */}
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              إدارة الدورات التدريبية ({courses.length})
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            يمكنك من هنا إضافة دورات تدريبية جديدة تظهر فوراً لجميع طلبة وزوار الموقع للتسجيل فيها.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm shrink-0"
        >
          <BookPlus className="w-4 h-4" />
          <span>+ إضافة دورة تدريبية جديدة</span>
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border-2 border-slate-200 rounded-2xl p-5 flex flex-col justify-between text-right shadow-xs hover:border-[#0072B1] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0072B1] border border-blue-100">
                  {course.category || 'تكوين تقني'}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditingCourse({ ...course })}
                    className="p-1.5 text-slate-500 hover:text-[#0072B1] hover:bg-blue-50 rounded-lg transition-colors"
                    title="تعديل تفاصيل أو موعد الدورة"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDeleteCourse(course.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="حذف هذه الدورة نهائياً"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">
                {course.title}
              </h4>

              <p className="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4">
                <div className="flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>المحاضر: <strong className="text-slate-900">{course.instructor}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>الموعد: <strong className="text-slate-900">{course.date}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0072B1]" />
                  <span>المدة: <strong className="text-slate-900">{course.duration}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                ظاهرة في الموقع العام
              </span>
              <span className="font-semibold">المقاعد: {course.seats || 20}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Course Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-right relative shadow-2xl max-h-[85vh] overflow-y-auto border-2 border-slate-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-900 mb-1">إضافة دورة تدريبية جديدة</h3>
            <p className="text-xs text-slate-500 mb-5">املأ تفاصيل الدورة لتظهر فوراً لطلبة الكلية في الموقع العام</p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleCreateCourse} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">عنوان الدورة التدريبية *</label>
                <input
                  type="text"
                  name="title"
                  value={newCourse.title}
                  onChange={handleChange}
                  placeholder="مثال: دورة برمجة متحكمات ESP32 وإنترنت الأشياء"
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">وصف الدورة والمكتسبات التعليمية *</label>
                <textarea
                  name="description"
                  rows="3"
                  value={newCourse.description}
                  onChange={handleChange}
                  placeholder="اكتب نبذة عن الدورة ومحتواها وما سيتعلمه الطالب عملياً..."
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">اسم المؤطر / المحاضر *</label>
                  <input
                    type="text"
                    name="instructor"
                    value={newCourse.instructor}
                    onChange={handleChange}
                    placeholder="م. أمين بلقاسم"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">الموعد والتوقيت *</label>
                  <input
                    type="text"
                    name="date"
                    value={newCourse.date}
                    onChange={handleChange}
                    placeholder="السبت 10:00 صباحاً"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">المدة</label>
                  <input
                    type="text"
                    name="duration"
                    value={newCourse.duration}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">عدد المقاعد</label>
                  <input
                    type="number"
                    name="seats"
                    value={newCourse.seats}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">التصنيف</label>
                  <input
                    type="text"
                    name="category"
                    value={newCourse.category}
                    onChange={handleChange}
                    placeholder="روبوتات / إلكترونيات"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0072B1] hover:bg-[#005a8e] text-white flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري حفظ ونشر الدورة...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>حفظ ونشر الدورة فوراً في الموقع</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-3.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 bg-slate-100"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Course Modal */}
      {editingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-right relative shadow-2xl max-h-[85vh] overflow-y-auto border-2 border-slate-200">
            <button
              onClick={() => setEditingCourse(null)}
              className="absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-900 mb-1">تعديل بيانات الدورة</h3>
            <p className="text-xs text-slate-500 mb-5">عدّل التوقيت أو الموعد أو التفاصيل وسيتم تحديثها فوراً في الموقع</p>

            {editError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{editError}</span>
              </div>
            )}

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">عنوان الدورة *</label>
                <input
                  type="text"
                  name="title"
                  value={editingCourse.title || ''}
                  onChange={handleEditChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">الموعد والتوقيت *</label>
                  <input
                    type="text"
                    name="date"
                    value={editingCourse.date || ''}
                    onChange={handleEditChange}
                    placeholder="مثال: السبت والثلاثاء 14:00"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all font-bold text-[#0072B1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">اسم المؤطر / المحاضر</label>
                  <input
                    type="text"
                    name="instructor"
                    value={editingCourse.instructor || ''}
                    onChange={handleEditChange}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">المدة</label>
                  <input
                    type="text"
                    name="duration"
                    value={editingCourse.duration || ''}
                    onChange={handleEditChange}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">عدد المقاعد</label>
                  <input
                    type="number"
                    name="seats"
                    value={editingCourse.seats || 20}
                    onChange={handleEditChange}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">التصنيف</label>
                  <input
                    type="text"
                    name="category"
                    value={editingCourse.category || ''}
                    onChange={handleEditChange}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">وصف الدورة</label>
                <textarea
                  name="description"
                  rows="3"
                  value={editingCourse.description || ''}
                  onChange={handleEditChange}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="bg-[#0072B1] hover:bg-[#005a8e] text-white flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
                >
                  {isUpdating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري حفظ التعديلات...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>حفظ التعديلات فوراً</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="px-5 py-3.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 bg-slate-100"
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
