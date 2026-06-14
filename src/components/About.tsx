/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Globe, Sparkles, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { companyInfo, milestones } from '../data';

export default function About() {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>("m5"); // Default expand the hot 2023 milestone

  const toggleMilestone = (id: string) => {
    if (expandedMilestone === id) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(id);
    }
  };

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
              ABOUT THE STUDIO // 公司介绍
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
            
            {/* Elegant Quotation block */}
            <blockquote className="relative pl-6 border-l-2 border-indigo-500/50 italic text-gray-600 dark:text-gray-400 font-serif text-sm lg:text-base mb-4 leading-relaxed">
              “ {companyInfo.quote} ”
              <cite className="block not-italic font-sans font-semibold text-xs tracking-wider text-gray-800 dark:text-gray-200 mt-3 uppercase text-right">
                — {companyInfo.quoteAuthor}
              </cite>
            </blockquote>
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
                CHRONOLOGY // 发展历程
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight mt-1">
                时光刻度与里程碑
              </h3>
            </div>
            <p className="max-w-md font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              益世界设计团队历经十四载，秉持对艺术的信仰，将无数个灵感瞬间固化为商业爆款。
            </p>
          </div>

          {/* Timeline Node Chain */}
          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-24 pl-8 md:pl-16 space-y-10 py-4">
            {milestones.map((milestone) => {
              const isExpanded = expandedMilestone === milestone.id;
              
              return (
                <div key={milestone.id} className="relative group" id={`milestone-${milestone.id}`}>
                  
                  {/* Timeline circular absolute bullet switcher */}
                  <div
                    onClick={() => toggleMilestone(milestone.id)}
                    className={`absolute -left-[45px] md:-left-[77px] w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                      isExpanded
                        ? 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-indigo-500/25'
                        : 'bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 group-hover:border-indigo-500 group-hover:text-indigo-500'
                    }`}
                  >
                    <Calendar size={13} />
                  </div>

                  {/* Year Tag Column block */}
                  <div className="absolute -left-[54px] md:-left-[122px] top-1 Hidden md:flex flex-col items-end">
                    <span className="font-mono text-lg font-black tracking-tighter text-gray-900 dark:text-white leading-none">
                      {milestone.year}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-indigo-400 font-bold uppercase mt-0.5">
                      Year
                    </span>
                  </div>

                  {/* Main card box details */}
                  <div
                    onClick={() => toggleMilestone(milestone.id)}
                    className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      isExpanded
                        ? 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-900/50 shadow-xl shadow-gray-200/40 dark:shadow-none'
                        : 'bg-transparent border-transparent hover:bg-gray-100/40 dark:hover:bg-gray-900/10'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        {/* Mobile Year indicator */}
                        <span className="md:hidden font-mono text-xs font-black text-indigo-500 tracking-wider block mb-1">
                          {milestone.year}年
                        </span>
                        <h4 className="font-sans font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">
                          {milestone.title}
                        </h4>
                      </div>

                      {/* Expand Chevron */}
                      <div className="text-gray-400 dark:text-gray-500 shrink-0 ml-4">
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    <p className="mt-3 font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Expandable key projects lists */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-800/80 space-y-2.5">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-500 dark:text-indigo-400 font-bold block mb-2.5">
                              Key Visual Accomplishments // 核心设计项目贡献:
                            </span>
                            {milestone.expandDetails.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-sans"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
