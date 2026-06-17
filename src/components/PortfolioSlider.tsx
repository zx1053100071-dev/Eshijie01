/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect, useState, MouseEvent, TouchEvent } from 'react';
import { CornerRightDown, Sparkles, MoveRight, Eye, Smartphone, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioSliderProps {
  id: string;
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  onItemSelect: (item: PortfolioItem) => void;
}

export default function PortfolioSlider({
  id,
  title,
  subtitle,
  items,
  onItemSelect
}: PortfolioSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const dragDistance = useRef(0);
  const scrollPosRef = useRef(0);

  // Auto-scroll loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    scrollPosRef.current = container.scrollLeft;
    
    // Auto speed parameter
    const scrollSpeed = 0.5;

    const scrollLoop = () => {
      if (!isPaused && !isDragging) {
        scrollPosRef.current += scrollSpeed;
        
        // Loop wrapping point
        const halfWidth = container.scrollWidth / 2;
        if (scrollPosRef.current >= halfWidth) {
          scrollPosRef.current = 0;
        }
        
        container.scrollLeft = scrollPosRef.current;
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Synchronize on scroll events (safeguards wheeling or browser-level scrolling)
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || isDragging) return;
    scrollPosRef.current = container.scrollLeft;
  };

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Drag Gesture Listeners for mouse
  const handleMouseDown = (e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - container.offsetLeft;
    dragScrollLeft.current = container.scrollLeft;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const container = containerRef.current;
    if (!container || !isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    dragDistance.current = Math.abs(x - dragStartX.current);
    
    let newScrollLeft = dragScrollLeft.current - walk;
    const halfWidth = container.scrollWidth / 2;
    
    if (newScrollLeft < 0) {
      newScrollLeft += halfWidth;
    } else if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
    }
    
    container.scrollLeft = newScrollLeft;
    scrollPosRef.current = newScrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  // Drag Touchscreen Gestures for mobile
  const handleTouchStart = (e: TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStartX.current = e.touches[0].pageX - container.offsetLeft;
    dragScrollLeft.current = container.scrollLeft;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const container = containerRef.current;
    if (!container || !isDragging) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    dragDistance.current = Math.abs(x - dragStartX.current);
    
    let newScrollLeft = dragScrollLeft.current - walk;
    const halfWidth = container.scrollWidth / 2;
    
    if (newScrollLeft < 0) {
      newScrollLeft += halfWidth;
    } else if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
    }
    
    container.scrollLeft = newScrollLeft;
    scrollPosRef.current = newScrollLeft;
  };

  const handleCardClick = (item: PortfolioItem, e: MouseEvent | TouchEvent) => {
    // Only invoke lightbox if user mouse wasn't heavily shuffling (distinguishing clicks from drags)
    if (dragDistance.current < 6) {
      onItemSelect(item);
    }
  };

  // Double the portfolio items array to enable infinite looping
  const doubledItems = [...items, ...items];

  // Helper mapping IDs to gorgeous curated background image urls for high quality
  const getCardBgUrl = (item: PortfolioItem, idx: number) => {
    if (item.image) {
      return item.image;
    }
    
    const unsplashIds: Record<string, string[]> = {
      'brand': [
        'photo-1618005182384-a83a8bd57fbe',
        'photo-1634017839464-5c339ebe3cb4',
        'photo-1611162617213-7d7a39e9b1d7',
        'photo-1558655146-d09347e92766',
        'photo-1550684848-fac1c5b4e853',
        'photo-1541701494587-cb58502866ab',
        'photo-1558591710-4b4a1ae0f04d',
        'photo-1542744094-3a31f103e35f',
        'photo-1600132806370-bf20392fecfe',
        'photo-1512486130939-2c4f79935e4f'
      ],
      'good-fields': [
        'photo-1528164344705-47542687000d',
        'photo-1493976040374-85c8e12f0c0e',
        'photo-1578183121571-0ae1071daea0',
        'photo-1507525428034-b723cf961d3e',
        'photo-1504609773096-104ff2c73ba4',
        'photo-1548013146-72479768bada',
        'photo-1627856013091-fed6e4e30025',
        'photo-1599599810769-bcde5a160d32',
        'photo-1590001155093-a3c66ab0c3ff',
        'photo-1569336415962-a4bd9f69cd83'
      ],
      'big-boss': [
        'photo-1540959733332-eab4deceeaf7',
        'photo-1508009603885-50cf7c579365',
        'photo-1533105079780-92b9be482077',
        'photo-1518173946687-a4c8a3833923',
        'photo-1569003339405-ea396a5a8a90',
        'photo-1508672019048-805c876b67e2',
        'photo-1534447677768-be436bb09401',
        'photo-1596495578065-6e0763fa1141',
        'photo-1513542789411-b6a5d4f31634',
        'photo-1531058020387-3be344559be6'
      ]
    };

    const idxKey = item.category === 'brand' ? 'brand' : (item.category === 'good-fields' ? 'good-fields' : 'big-boss');
    const index = parseInt(item.id.replace(/\D/g, ''), 10) || 0;
    const pool = unsplashIds[idxKey];
    const imageId = pool[index % pool.length];
    return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=600&q=80`;
  };

  // Helper decoration elements depending on visual categorisation
  const renderCardInlaySvg = (item: PortfolioItem) => {
    switch (item.imageType) {
      case 'vector':
        return (
          <svg className="absolute right-4 top-4 w-12 h-12 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        );
      case 'chinese-ink':
        return (
          <svg className="absolute right-4 top-4 w-16 h-16 text-white/5 opacity-50" fill="currentColor" viewBox="0 0 100 100">
            {/* Ink drop stain path simulation */}
            <path d="M50 20 C25 20, 10 35, 10 50 C10 75, 40 90, 50 90 C60 90, 90 75, 90 50 C90 35, 75 20, 50 20 Z" />
          </svg>
        );
      case 'geometry':
        return (
          <svg className="absolute right-4 top-4 w-12 h-12 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <polygon points="12,2 22,8.5 22,20 12,14 2,20 2,8.5" />
            <line x1="12" y1="2" x2="12" y2="14" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id={id}
      className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-900 overflow-hidden text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between">
        
        {/* Section Title Header */}
        <div>
          <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-indigo-500 uppercase flex items-center gap-1.5">
            <Sparkles size={11} /> PORTFOLIO SECTION
          </span>
          <h3 className="font-sans font-black text-2xl sm:text-3xl text-gray-950 dark:text-white mt-1 tracking-tight">
            {title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Tip indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50 p-2.5 px-4 rounded-xl border border-gray-100/30 dark:border-gray-900">
          <CornerRightDown size={12} className="text-indigo-500" />
          <span>可鼠标横向拖放 · 鼠标悬浮自动暂停</span>
        </div>
      </div>

      {/* Slider Carousel Wrapper for Navigation buttons & gradients */}
      <div className="relative group/slider">
        {/* Left Gradient Overlay & Navigation Button */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-gray-950 dark:via-gray-950/70 pointer-events-none z-20 flex items-center pl-4 md:pl-8">
          <button
            onClick={handleScrollLeft}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 dark:bg-gray-900/95 text-gray-800 dark:text-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md pointer-events-auto transform opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
        </div>

        {/* Slider Carousel Container Grid */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseOver={() => setIsPaused(true)}
          className={`flex items-stretch gap-6 overflow-x-hidden select-none px-6 sm:px-12 pb-6 pt-2 scroll-smooth ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
          id={`${id}-scroller-viewport`}
        >
          {doubledItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={(e) => handleCardClick(item, e)}
              id={`card-${item.id}-${idx}`}
              className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 h-[380px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-none bg-gray-900 dark:bg-gray-900 border border-transparent hover:border-indigo-500/30 transition-all duration-300 group flex flex-col justify-between p-6 cursor-pointer"
            >
              {/* Visual background stock photo */}
              <img
                src={getCardBgUrl(item, idx)}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-75 md:opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
              />
              
              {/* High-contrast linear gradients and solid masks */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-[1] pointer-events-none select-none" />
              
              {/* Dynamic category colored light aura on group hover */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${item.colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-[1] pointer-events-none`} />

              {/* Decorative Vector SVG */}
              <div className="relative z-10 select-none">{renderCardInlaySvg(item)}</div>

              {/* CARD HEADER SECTION */}
              <div className="relative z-10 flex items-start gap-1.5 select-none">
                {/* Ref Indexing Block */}
                <span className="font-mono text-[9px] text-white/40 tracking-widest bg-white/10 px-2 py-1 rounded border border-white/5 uppercase">
                  #REF-0{(idx % items.length) + 1}
                </span>
                
                {/* Creative tag pills */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 1).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-sans font-medium text-[9px] text-indigo-200 bg-indigo-500/20 px-2 py-1 rounded border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CARD FOOTER INFO */}
              <div className="relative z-10 select-none text-left">
                <span className="text-[10px] font-mono tracking-wider text-gray-300 flex items-center gap-1 mb-1.5 uppercase">
                  {item.imageType === 'chinese-ink' ? <Cpu size={10} className="text-emerald-400" /> : <Smartphone size={10} className="text-purple-400" />}
                  {item.details.software.split(',')[0]} // Design Node
                </span>
                <h4 className="font-sans font-black text-lg md:text-xl text-white tracking-tight leading-snug group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed font-light opacity-90">
                  {item.subtitle}
                </p>

                {/* View Overlay Button */}
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-white/50 group-hover:text-white transition-colors">
                  <span className="font-mono text-[9px] tracking-wider uppercase">
                    Explore Fine Detail
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <Eye size={13} />
                    <span className="font-sans">大图查看</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Right Gradient Overlay & Navigation Button */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-gray-950 dark:via-gray-950/70 pointer-events-none z-20 flex items-center justify-end pr-4 md:pr-8">
          <button
            onClick={handleScrollRight}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 dark:bg-gray-900/95 text-gray-800 dark:text-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md pointer-events-auto transform opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
