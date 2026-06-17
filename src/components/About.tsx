/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Palette, Globe, Sparkles, Award } from 'lucide-react';
import { companyInfo, milestones } from '../data';

export default function About() {
  // Maps icon string to actual Lucide Icon Component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="text-indigo-600 dark:text-indigo-400" size={20} />;
      case 'Globe':
        return <Globe className="text-purple-600 dark:text-purple-400" size={20} />;
      case 'Sparkles':
        return <Sparkles className="text-blue-600 dark:text-blue-400" size={20} />;
      default:
        return <Award className="text-indigo-600" size={20} />;
    }
  };

  return (
    <section
      id="about-section"
      className="py-24 md:py-32 xl:py-36 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-12">
        
        {/* ================= 1. Company Name & Intro ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 mb-24 md:mb-32">
          
          {/* Left: Heading block */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4">
              ABOUT THE STUDIO
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl tracking-normal text-gray-900 dark:text-white mb-6 leading-tight">
              益世界
              <span className="block text-xl font-mono text-gray-400 dark:text-gray-500 font-light mt-1 tracking-widest uppercase">
                Eworld Design Center
              </span>
            </h2>
            
            {/* Custom Slogan Tag */}
            <div className="p-1 px-4 self-start rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300 font-sans tracking-widest mb-8">
              用好游戏创造快乐
            </div>
          </div>

          {/* Right: Intro paragraphs & Highlight features */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6 text-gray-600 dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed text-justify mb-10">
              {companyInfo.introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Special features row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {companyInfo.features.map((feat, idx) => (
                <div
                  key={idx}
                  id={`feature-card-${idx}`}
                  className="bg-white dark:bg-gray-900/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-900/60 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 border border-gray-100/50 dark:border-gray-800">
                    {getIconComponent(feat.icon)}
                  </div>
                  <h4 className="font-sans font-bold text-sm text-gray-900 dark:text-white tracking-tight mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 2. Development History Timeline ================= */}
        <div className="mt-16 md:mt-24" id="history-block">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 dark:border-gray-900 pb-8">
            <div className="mb-4 md:mb-0">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase">
                CHRONOLOGY
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight mt-1">
                时光刻度与里程碑
              </h3>
              <p className="max-w-md font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                用好游戏创造快乐，记录每一项里程碑式的璀璨刻度。
              </p>
            </div>
          </div>

          {/* Timeline Node Chain without absolute overlapping positions */}
          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-8 space-y-10 py-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="relative pl-8 md:pl-12 group" id={`milestone-${milestone.id}`}>
                
                {/* Glowing bullet accurately centered on the vertical border-l */}
                <div
                  className="absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-gray-950 transition-all duration-300 group-hover:scale-125 group-hover:bg-indigo-500 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                />

                {/* Elegant interactive card utilizing split grid for screen-adaptive responsive display */}
                <div
                  className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-900/60 bg-white dark:bg-gray-900/20 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-500/50 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50/10 dark:hover:from-gray-900/80 dark:hover:to-indigo-950/30 dark:hover:shadow-indigo-900/20 transition-all duration-300 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    
                    {/* Left: Year range / epoch display */}
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col">
                      <span className="font-mono text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight leading-none">
                        {milestone.year}
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase mt-1.5">
                        Company Epoch
                      </span>
                    </div>

                    {/* Right: Milestone titles & textual content descriptions */}
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-start">
                      <h4 className="font-sans font-black text-base sm:text-lg text-gray-900 dark:text-white tracking-tight leading-snug">
                        {milestone.title}
                      </h4>
                      {milestone.description && (
                        <p className="mt-3 font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line text-justify">
                          {milestone.description}
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
