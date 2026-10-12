import React, { useState, useEffect } from 'react';
import { clubService } from '../firebase';
import CourseRegistrationModal from './CourseRegistrationModal';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  UserCheck, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export default function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await clubService.getCourses();
      setCourses(data);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section id="courses" className="py-24 sm:py-32 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
            <BookOpen className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-2">
            التكوين والورشات
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            الدورات التدريبية المتاحة
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            ورشات وتكوينات معتمدة من إدارة النادي. يمكنك التسجيل المباشر لحجز مقعدك.
          </p>
        </div>

        {/* Courses List */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-slate-300 border-t-[#0072B1] rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-slate-500 text-xs">جاري تحميل الدورات...</p>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-slate-300 p-10 max-w-md mx-auto shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h4 className="text-base font-bold text-slate-900 mb-2">لا توجد ورشات معلنة حالياً</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              يقوم مسؤولو النادي بإعداد ورشات جديدة للموسم، وسيتم نشرها هنا فور اعتمادها.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-slate-300 hover:border-[#0072B1] rounded-3xl p-8 flex flex-col justify-between text-right shadow-md hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0072B1]">
                      {course.category || 'ورشة تطبيقية'}
                    </span>
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      مفتوح للتسجيل
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>

                  <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border-2 border-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#0072B1] shrink-0" />
                      <span>المؤطر: <strong className="text-slate-900">{course.instructor || 'مؤطرو النادي'}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0072B1] shrink-0" />
                      <span>المدة: <strong className="text-slate-900">{course.duration || 'محدد في البرنامج'}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0072B1] shrink-0" />
                      <span>التوقيت: <strong className="text-slate-900">{course.date || 'حسب التنسيق'}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>تسجيل في الدورة</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Registration Modal */}
      {selectedCourse && (
        <CourseRegistrationModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onSuccess={() => {}}
        />
      )}
    </section>
  );
}
