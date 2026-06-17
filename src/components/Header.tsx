/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Menu, X } from 'lucide-react';

const logoWhite = '/logo-完整1-白色字.png';
const logoBlack = '/logo-完整1-黑色字.png';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '公司介绍', targetId: 'about-section' },
    { name: '品牌视觉', targetId: 'portfolio-brand' },
    { name: '这城有良田', targetId: 'portfolio-fields' },
    { name: '我是大东家', targetId: 'portfolio-boss' },
    { name: '业务联系', targetId: 'contact-section' }
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white/80 dark:bg-gray-950/85 backdrop-blur-md border-b border-gray-100/30 dark:border-gray-900/35 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-12 flex items-center justify-between">
        {/* Brand logo details */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="header-brand-logo"
        >
          <img
            src={isDark ? logoWhite : (scrolled ? logoBlack : logoWhite)}
            alt="益世界・设计中心 Logo"
            className="h-8 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <span className={`font-sans font-bold text-sm tracking-tight transition-colors duration-300 leading-none ${
            !isDark && scrolled ? 'text-black' : 'text-white'
          }`}>
            设计中心
          </span>
        </div>

        {/* Desktop Menu navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-navigation">
          {menuItems.map((item) => {
            const getLinkClass = () => {
              const base = "font-sans font-medium text-xs transition-colors tracking-wide relative py-1 cursor-pointer ";
              if (isDark) {
                return base + "text-gray-300 hover:text-white";
              }
              if (scrolled) {
                return base + "text-black hover:text-indigo-600";
              }
              return base + "text-white/90 hover:text-white";
            };
            return (
              <button
                key={item.targetId}
                onClick={() => handleScrollTo(item.targetId)}
                className={getLinkClass()}
              >
                {item.name}
                {/* Thin underline indicator */}
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-indigo-500 transform scale-x-0 origin-right transition-transform hover:scale-x-100" />
              </button>
            );
          })}
        </nav>

        {/* Action Controls Frame */}
        <div className="flex items-center gap-3" id="header-action-controls">
          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            className={
              isDark
                ? "p-2 rounded-full hover:bg-gray-900 text-gray-300 transition-colors cursor-pointer border border-transparent hover:border-gray-800/50"
                : scrolled
                ? "p-2 rounded-full hover:bg-gray-100 text-black transition-colors cursor-pointer border border-transparent hover:border-gray-200/50"
                : "p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer border border-transparent hover:border-white/15"
            }
            title={isDark ? '切换亮色主题' : '切换暗黑模式'}
            id="theme-toggle-btn"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400 animate-spin-slow" />
            ) : (
              <Moon size={17} className={scrolled ? "text-black" : "text-white"} />
            )}
          </button>

          {/* Quick portfolio button for tech feel */}
          <button
            onClick={() => handleScrollTo('portfolio-brand')}
            className="hidden lg:flex items-center gap-1 px-4 py-2 font-sans font-medium text-[11px] rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white transition-all cursor-pointer shadow-md shadow-indigo-500/10 dark:shadow-none uppercase tracking-wider"
          >
            <Sparkles size={11} /> 探索作品
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={
              isDark
                ? "p-2 md:hidden rounded-lg bg-gray-900 border border-gray-800 text-gray-300 transition-colors cursor-pointer"
                : scrolled
                ? "p-2 md:hidden rounded-lg bg-gray-50 border border-gray-100 text-black transition-colors cursor-pointer"
                : "p-2 md:hidden rounded-lg bg-white/10 border border-white/15 text-white transition-colors cursor-pointer"
            }
            id="mobile-menu-burger"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide and navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-x-0 top-[72px] bottom-0 z-30 bg-white/95 dark:bg-gray-950/98 backdrop-blur-lg border-t border-gray-100 dark:border-gray-900 flex flex-col p-8 md:hidden shadow-xl"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase">
              导航目录
            </span>
            {menuItems.map((item, index) => (
              <button
                key={item.targetId}
                onClick={() => handleScrollTo(item.targetId)}
                className="text-left font-sans font-bold text-lg text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors border-b border-gray-50 dark:border-gray-900 pb-3"
              >
                <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 mr-3">
                  0{index + 1}.
                </span>
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleScrollTo('contact-section')}
              className="mt-4 w-full py-3 font-sans font-medium text-xs rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg text-center cursor-pointer flex items-center justify-center gap-1"
            >
              <Sparkles size={12} /> 联系设计部门
            </button>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100 dark:border-gray-900 flex justify-between items-center text-xs text-gray-400 font-mono">
            <span>© 2026 EWORLD DESIGN</span>
            <span>POWERED BY CREATIVITY</span>
          </div>
        </div>
      )}
    </header>
  );
}
