/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Award, Briefcase, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
  onPrev: () => void;
  onNext: () => void;
  totalIndex: number;
  currentIndex: number;
}

export default function Lightbox({
  isOpen,
  onClose,
  item,
  onPrev,
  onNext,
  totalIndex,
  currentIndex
}: LightboxProps) {
  if (!isOpen || !item) return null;

  // Curated Unsplash stock imagery IDs map for ultra high-end matching
  const getImageUrl = (item: PortfolioItem) => {
    if (item.image) {
      return item.image;
    }
    
    // Generate a beautiful deterministic photorealistic or graphical background based on ID hashed to specific Unsplash IDs
    const unsplashIds: Record<string, string[]> = {
      'brand': [
        'photo-1618005182384-a83a8bd57fbe', // Abstract geometric purple
        'photo-1634017839464-5c339ebe3cb4', // 3D glossy abstract
        'photo-1611162617213-7d7a39e9b1d7', // Abstract icon mascot glass
        'photo-1558655146-d09347e92766', // Tech graphic layout
        'photo-1550684848-fac1c5b4e853', // Geometric branding booklet
        'photo-1541701494587-cb58502866ab', // Liquid chrome flow
        'photo-1558591710-4b4a1ae0f04d', // Minimal gray stone waves
        'photo-1542744094-3a31f103e35f', // Spatial design branding
        'photo-1600132806370-bf20392fecfe', // Print packaging draft
        'photo-1512486130939-2c4f79935e4f'  // Modern office layout
      ],
      'good-fields': [
        'photo-1528164344705-47542687000d', // Traditional Asian pagoda
        'photo-1493976040374-85c8e12f0c0e', // Misty mountains green
        'photo-1578183121571-0ae1071daea0', // Emerald bamboo forest
        'photo-1507525428034-b723cf961d3e', // Golden orange watercolor sunset
        'photo-1504609773096-104ff2c73ba4', // Cozy glowing lanterns
        'photo-1548013146-72479768bada', // India river dawn/traditional houses
        'photo-1627856013091-fed6e4e30025', // Chinese traditional roof details
        'photo-1599599810769-bcde5a160d32', // Jade stone smooth surface
        'photo-1590001155093-a3c66ab0c3ff', // Scroll papyrus canvas
        'photo-1569336415962-a4bd9f69cd83'  // Flowing ink drops in water
      ],
      'big-boss': [
        'photo-1540959733332-eab4deceeaf7', // Neon Japanese/Chinese vibrant streets
        'photo-1508009603885-50cf7c579365', // Red and gold paper art
        'photo-1533105079780-92b9be482077', // Dynamic splash yellow fluid
        'photo-1518173946687-a4c8a3833923', // Golden water texture
        'photo-1569003339405-ea396a5a8a90', // Vibrant cartoon silk draping
        'photo-1508672019048-805c876b67e2', // Desert sunset camel road
        'photo-1534447677768-be436bb09401', // Dreamy space starlight
        'photo-1596495578065-6e0763fa1141', // Retro colorful ink print
        'photo-1513542789411-b6a5d4f31634', // Playful illustrations yellow base
        'photo-1531058020387-3be344559be6'  // Golden festival ribbons
      ]
    };

    const category = item.category === 'brand' ? 'brand' : (item.category === 'good-fields' ? 'good-fields' : 'big-boss');
    const index = parseInt(item.id.replace(/\D/g, ''), 10) || 0;
    const pool = unsplashIds[category];
    const imageId = pool[index % pool.length];
    return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=1200&q=85`;
  };

  const getOverlayGradient = (item: PortfolioItem) => {
    const isBrand = item.category === 'brand';
    if (isBrand) {
      return `bg-gradient-to-tr from-[#4f46e5]/40 via-[#8b5cf6]/20 to-transparent`;
    }
    const isGoodFields = item.category === 'good-fields';
    if (isGoodFields) {
      return `bg-gradient-to-tr from-[#064e3b]/50 via-[#78350f]/20 to-transparent`;
    }
    return `bg-gradient-to-tr from-[#991b1b]/50 via-[#ca8a04]/20 to-transparent`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal="true"
        role="dialog"
        id="lightbox-container"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 dark:bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="lightbox-close-btn"
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 text-white transition-all cursor-pointer z-50 duration-200 border border-white/10"
          title="关闭"
        >
          <X size={24} />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          id="lightbox-prev-btn"
          className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 text-white transition-all cursor-pointer z-40 border border-white/10"
          title="上一张"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          id="lightbox-next-btn"
          className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 text-white transition-all cursor-pointer z-40 border border-white/10"
          title="下一张"
        >
          <ChevronRight size={24} />
        </button>

        {/* Main Dialog Panel */}
        <motion.div
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          id="lightbox-panel"
          className="relative w-full max-w-6xl bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-900 flex flex-col lg:flex-row h-[85vh] lg:h-[75vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Block - The Artwork Preview */}
          <div className="relative flex-1 bg-gray-900 dark:bg-black flex items-center justify-center overflow-hidden group select-none h-1/2 lg:h-full">
            {/* Visual background placeholder image */}
            <img
              src={getImageUrl(item)}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Artistic tint overlays */}
            <div className={`absolute inset-0 ${getOverlayGradient(item)}`} />

            {/* In-Artwork Label for luxury vibes */}
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-white/50 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 uppercase select-none">
              Eworld Design Center // {item.category.toUpperCase()} // REF-0{item.id.replace(/\D/g, '')}
            </div>

            {/* Interactive design card display style for aesthetic enhancement */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start bg-black/40 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 text-white md:max-w-md pointer-events-none select-none">
              <span className="text-xs font-mono font-medium tracking-wide text-indigo-400 mb-1 lg:mb-2 uppercase flex items-center gap-1">
                <Sparkles size={12} /> {item.category === 'brand' ? '品牌研发' : (item.category === 'good-fields' ? '《这城有良田》' : '《我是大东家》')}
              </span>
              <h4 className="text-md md:text-lg font-sans font-bold tracking-tight mb-1">{item.title}</h4>
              <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">{item.subtitle}</p>
            </div>
          </div>

          {/* Right Block - Metadata Description / Specifications */}
          <div className="w-full lg:w-[420px] bg-white dark:bg-gray-950 p-6 md:p-8 overflow-y-auto flex flex-col justify-between h-1/2 lg:h-full border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-gray-900">
            <div>
              {/* Category Breadcrumb */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                  PROJECT SPECIFICATION
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  {currentIndex + 1} / {totalIndex}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-normal font-sans mb-6">
                {item.subtitle}
              </p>

              <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-900 mb-6" />

              {/* Design Story Paragraph */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wide uppercase flex items-center gap-1.5">
                  <Award size={14} className="text-brand-start text-indigo-500" />
                  设计概念与说明
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans text-justify">
                  {item.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 dark:bg-gray-900/40 p-4 rounded-xl border border-gray-100/50 dark:border-gray-900/50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                    <Briefcase size={10} /> 担当业务
                  </span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                    {item.details.role}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                    <Users size={10} /> 策划团队
                  </span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                    {item.details.team}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                    <Sparkles size={10} /> 创作软件
                  </span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                    {item.details.software}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                    <Calendar size={10} /> 发布日期
                  </span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                    {item.details.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Color Chips & Controls */}
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-900">
              <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2 block">
                PALETTE / 色系调配
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 flex-1">
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-sm shrink-0"
                    style={{ backgroundColor: item.colors.primary }}
                    title={item.colors.primary}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-sm shrink-0"
                    style={{ backgroundColor: item.colors.secondary }}
                    title={item.colors.secondary}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-sm shrink-0"
                    style={{ backgroundColor: item.colors.accent }}
                    title={item.colors.accent}
                  />
                  <div className={`h-2 rounded-full flex-1 ml-1 bg-gradient-to-r ${item.colors.gradient}`} />
                </div>

                <button
                  onClick={onClose}
                  className="px-4 py-2 font-sans font-medium text-xs rounded-lg border border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 text-gray-700 dark:text-gray-300 transition-all cursor-pointer bg-transparent"
                >
                  返回作品集
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
