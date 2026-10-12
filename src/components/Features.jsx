import React from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { 
  Code2, 
  Bot, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function Features() {
  const iconMap = {
    Cpu: Cpu,
    Bot: Bot,
    Code2: Code2,
    Layers: Layers,
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-16 bg-[#0c1018] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider block mb-1">
            المحاور التقنية
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            مجالات عمل وتدريب النادي
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            يركز النادي على تزويد الطلبة بالمهارات الهندسية التطبيقية في أربعة مسارات أساسية:
          </p>
        </div>

        {/* Features Grid (Simple, Clean, Organized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLUB_CONFIG.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Cpu;
            return (
              <div
                key={feature.id || idx}
                className="club-card rounded-xl p-5 text-right flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0072B1]/15 text-[#00A8E8] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => scrollTo('membership-form')}
                    className="text-xs text-[#00A8E8] hover:text-white transition-colors"
                  >
                    شارك في هذا المسار ←
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
