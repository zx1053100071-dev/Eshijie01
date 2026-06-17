/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, Play, Sparkles } from 'lucide-react';

const logoImg = '/logo2.png';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white"
    >
      {/* 1. Full screen background video layer */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 select-none pointer-events-none"
          id="background-video-player"
          style={{ pointerEvents: 'none' }}
        >
          {/* High-end design particle line abstract looping video */}
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b0a2d201c40f0c05dfab45db1&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Secondary backup stock video */}
          <source
            src="https://vjs.zencdn.net/v/oceans.mp4"
            type="video/mp4"
          />
        </video>
        {/* Color overlays to blend with light / dark mode and the violet points */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white dark:to-gray-950 duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/15 via-transparent to-blue-900/15" />
      </div>

      {/* 2. Overlaid Text & Visual Elements */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 xl:px-12 text-center select-none pointer-events-auto">
        {/* Small Tagline */ }
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 lg:bg-white/15 dark:bg-gray-950/60 backdrop-blur-md border border-white/30 dark:border-white/10 mb-8 shadow-lg select-none">
          <img
            src={logoImg}
            alt="Logo"
            className="h-5 sm:h-6 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
          <span className="font-sans font-semibold text-xs sm:text-sm tracking-wide text-white leading-none">
            益世界 设计中心 · 2026官方作品集
          </span>
        </div>

        {/* Giant Main Display Heading */}
        <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[1.05] selection:bg-indigo-500 mb-6 drop-shadow-sm flex flex-col items-center">
          <span className="text-white">用好游戏</span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent italic tracking-tight font-extrabold pb-2">
            创造快乐
          </span>
        </h1>

        {/* Short Subheading / Slogan */}
        <p className="max-w-2xl mx-auto font-sans font-light text-sm sm:text-lg md:text-xl text-gray-200/90 dark:text-gray-300/80 leading-relaxed mb-10 tracking-wide">
          益世界设计群组官方平台。在这里，我们用视觉诠释故事，用像素重塑文化的数字桥梁。
        </p>

        {/* Call to action trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onDiscoverClick}
            className="w-full sm:w-auto px-8 py-3.5 font-sans font-bold text-xs rounded-full bg-white text-gray-950 hover:bg-white/90 transition-all cursor-pointer shadow-xl shadow-black/10 flex items-center justify-center gap-1.5 tracking-wider uppercase"
          >
            <Sparkles size={13} className="text-indigo-600" /> 浏览精选作品
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('about-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 font-sans font-medium text-xs rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer flex items-center justify-center gap-1.5 tracking-wider uppercase"
          >
            关于我们
          </button>
        </div>
      </div>

      {/* 3. Infinite Floating Scroll Down Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none animate-bounce">
        <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
          Scroll Down
        </span>
        <div
          onClick={() => {
            const el = document.getElementById('about-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all"
        >
          <ArrowDown size={14} className="text-white" />
        </div>
      </div>
    </section>
  );
}
