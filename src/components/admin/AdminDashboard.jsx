import React, { useState, useEffect } from 'react';
import { clubService, isLiveFirebase } from '../../firebase';
import { CLUB_CONFIG } from '../../config/clubConfig';
import MembersManager from './MembersManager';
import CoursesManager from './CoursesManager';
import RegistrationsManager from './RegistrationsManager';
import BoardManager from './BoardManager';
import { 
  Users, 
  BookOpen, 
  UserCheck, 
  ShieldCheck,
  LogOut, 
  RefreshCw, 
  ExternalLink 
} from 'lucide-react';

export default function AdminDashboard({ adminUser, onLogout }) {
  const [activeTab, setActiveTab] = useState('members');
  
  const [members, setMembers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [supervisor, setSupervisor] = useState(CLUB_CONFIG.supervisor);
  const [boardMembers, setBoardMembers] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadAllData = async () => {
    try {
      setRefreshing(true);
      const [membersData, coursesData, regsData, supData, boardData] = await Promise.all([
        clubService.getMembers(),
        clubService.getCourses(),
        clubService.getCourseRegistrations(),
        clubService.getSupervisor(),
        clubService.getExecutiveBoard()
      ]);
      setMembers(membersData);
      setCourses(coursesData);
      setRegistrations(regsData);
      setSupervisor(supData);
      setBoardMembers(boardData);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleDeleteMember = async (memberId) => {
    try {
      await clubService.deleteMember(memberId);
      setMembers(prev => prev.filter(m => m.id !== memberId));
    } catch (err) {
      alert('فشل حذف العضو: ' + err.message);
    }
  };

  const handleAddCourse = async (courseData) => {
    const created = await clubService.addCourse(courseData);
    setCourses(prev => [created, ...prev]);
  };

  const handleUpdateCourse = async (courseId, updatedData) => {
    await clubService.updateCourse(courseId, updatedData);
    setCourses(prev => prev.map(c => (c.id === courseId ? { ...c, ...updatedData } : c)));
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الدورة من الموقع؟')) {
      await clubService.deleteCourse(courseId);
      setCourses(prev => prev.filter(c => c.id !== courseId));
    }
  };

  // Board Handlers
  const handleUpdateSupervisor = async (updatedSup) => {
    await clubService.updateSupervisor(updatedSup);
    setSupervisor(updatedSup);
  };

  const handleAddBoardMember = async (memberData) => {
    const created = await clubService.addExecutiveMember(memberData);
    setBoardMembers(prev => [...prev, created]);
  };

  const handleUpdateBoardMember = async (memberId, updatedData) => {
    await clubService.updateExecutiveMember(memberId, updatedData);
    setBoardMembers(prev => prev.map(m => (String(m.id) === String(memberId) ? { ...m, ...updatedData } : m)));
  };

  const handleDeleteBoardMember = async (memberId) => {
    await clubService.deleteExecutiveMember(memberId);
    setBoardMembers(prev => prev.filter(m => String(m.id) !== String(memberId)));
  };

  const handleResetBoardDefaults = async () => {
    const res = await clubService.resetBoardToDefaults();
    setSupervisor(res.supervisor);
    setBoardMembers(res.executiveBoard);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-right">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5">
              <img
                src={CLUB_CONFIG.images.clubLogo}
                alt={CLUB_CONFIG.name}
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  لوحة تحكم إدارة النادي
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0072B1] border border-blue-200">
                  CIC ADMIN
                </span>
              </div>
              <p className="text-[10px] text-slate-500">
                {CLUB_CONFIG.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
            >
              <span>معاينة الموقع</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={loadAllData}
              disabled={refreshing}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
              title="تحديث البيانات"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-[#0072B1]' : ''}`} />
            </button>

            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>خروج</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Tabs - Simple, Clean, Organized */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-1.5 flex flex-wrap gap-2 shadow-xs">
          
          <button
            onClick={() => setActiveTab('members')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === 'members'
                ? 'bg-[#0072B1] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>طلبات الانضمام</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'members' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              {members.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === 'courses'
                ? 'bg-[#0072B1] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>إدارة الدورات</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'courses' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              {courses.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('registrations')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === 'registrations'
                ? 'bg-[#0072B1] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>المسجلون في الدورات</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'registrations' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              {registrations.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('board')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === 'board'
                ? 'bg-[#0072B1] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>المكتب التنفيذي والمشرف</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'board' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              {boardMembers.length}
            </span>
          </button>

        </div>

        {/* Tab Content */}
        {loading ? (
          <div className="py-16 text-center">
            <div className="w-8 h-8 border-2 border-slate-300 border-t-[#0072B1] rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-slate-500 text-xs">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <div>
            {activeTab === 'members' && (
              <MembersManager
                members={members}
                onDeleteMember={handleDeleteMember}
                onRefresh={loadAllData}
              />
            )}

            {activeTab === 'courses' && (
              <CoursesManager
                courses={courses}
                onAddCourse={handleAddCourse}
                onUpdateCourse={handleUpdateCourse}
                onDeleteCourse={handleDeleteCourse}
              />
            )}

            {activeTab === 'registrations' && (
              <RegistrationsManager
                registrations={registrations}
                courses={courses}
              />
            )}

            {activeTab === 'board' && (
              <BoardManager
                supervisor={supervisor}
                boardMembers={boardMembers}
                onUpdateSupervisor={handleUpdateSupervisor}
                onAddMember={handleAddBoardMember}
                onUpdateMember={handleUpdateBoardMember}
                onDeleteMember={handleDeleteBoardMember}
                onResetDefaults={handleResetBoardDefaults}
              />
            )}
          </div>
        )}

      </main>
    </div>
  );
}
