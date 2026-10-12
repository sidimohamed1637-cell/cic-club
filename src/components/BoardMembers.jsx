import React, { useState, useEffect } from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { clubService } from '../firebase';
import { GraduationCap, ShieldCheck, User } from 'lucide-react';

export default function BoardMembers() {
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
        console.warn('Failed to load board in BoardMembers:', err);
      }
    };
    fetchBoard();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="board" className="py-16 bg-[#0c1018] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider block mb-1">
            الهيكل التنظيمي
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            المكتب التنفيذي والأستاذ المشرف
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            فريق النادي المشرف على تنظيم الورشات وتأطير النشاطات العلمية في الكلية.
          </p>
        </div>

        {/* 1. Supervising Professor Card (Clean, Simple) */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="club-card rounded-2xl p-6 border-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-right">
              
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0072B1] p-1 bg-[#0b0f19] shrink-0 flex items-center justify-center">
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
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-[#00A8E8]">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                )}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0072B1]/15 text-[#00A8E8] border border-[#0072B1]/30 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{supervisor?.role || 'الأستاذ المشرف على النادي'}</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {supervisor?.name}
                </h3>

                <p className="text-xs text-slate-400">
                  {supervisor?.department}
                </p>

                {supervisor?.description && (
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {supervisor.description}
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* 2. Executive Board Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {executiveBoard.map((member) => (
            <div
              key={member.id}
              className="club-card rounded-xl p-5 flex flex-col items-center text-center relative"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#0072B1] p-0.5 bg-[#0b0f19] mb-3 flex items-center justify-center">
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
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-[#00A8E8]">
                    <User className="w-8 h-8" />
                  </div>
                )}
              </div>

              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 mb-2">
                {member.badge || 'المكتب التنفيذي'}
              </span>

              <h4 className="text-base font-bold text-white mb-0.5">
                {member.name}
              </h4>

              <p className="text-xs text-[#00A8E8] font-medium mb-1">
                {member.role}
              </p>

              {member.specialty && (
                <p className="text-xs text-slate-400">
                  {member.specialty}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
