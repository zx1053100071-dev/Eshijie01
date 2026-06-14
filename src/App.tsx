/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioSlider from './components/PortfolioSlider';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import { portfolioItems } from './data';
import { PortfolioItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Apply dark mode styling class onto root element on state modification
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Prevent scroll propagation when modal/lightbox overlay is active
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  // Filter specific categorized segments for the rows
  const brandItems = portfolioItems.filter((item) => item.category === 'brand');
  const fieldsItems = portfolioItems.filter((item) => item.category === 'good-fields');
  const bossItems = portfolioItems.filter((item) => item.category === 'big-boss');

  // Handle previous slide inside the active category row
  const handlePrevItem = () => {
    if (!selectedItem) return;
    const categoryPool = portfolioItems.filter((item) => item.category === selectedItem.category);
    const cursorIdx = categoryPool.findIndex((item) => item.id === selectedItem.id);
    const prevIdx = (cursorIdx - 1 + categoryPool.length) % categoryPool.length;
    setSelectedItem(categoryPool[prevIdx]);
  };

  // Handle next slide inside the active category row
  const handleNextItem = () => {
    if (!selectedItem) return;
    const categoryPool = portfolioItems.filter((item) => item.category === selectedItem.category);
    const cursorIdx = categoryPool.findIndex((item) => item.id === selectedItem.id);
    const nextIdx = (cursorIdx + 1) % categoryPool.length;
    setSelectedItem(categoryPool[nextIdx]);
  };

  const getFilteredCategoryIndex = () => {
    if (!selectedItem) return { current: 0, total: 0 };
    const categoryPool = portfolioItems.filter((item) => item.category === selectedItem.category);
    const cursorIdx = categoryPool.findIndex((item) => item.id === selectedItem.id);
    return {
      current: cursorIdx,
      total: categoryPool.length
    };
  };

  const { current: activeIndex, total: activeTotal } = getFilteredCategoryIndex();

  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio-brand');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans antialiased">
      {/* 1. Header component containing navbar and theme toggle */}
      <Header isDark={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />

      {/* 2. Fullscreen Video Hero Intro background */}
      <Hero onDiscoverClick={handleScrollToPortfolio} />

      {/* 3. Company Introduction & Timeline History */}
      <About />

      {/* 4. Portfolio Marquees Section Rows */}
      <div className="flex flex-col">
        {/* Row 1: Brand Designs and Mascot */}
        <PortfolioSlider
          id="portfolio-brand"
          title="品牌与IP系统设计"
          subtitle="益世界企业品牌形象、吉祥物「益小萌」衍生及全球宣传视觉策划"
          items={brandItems}
          onItemSelect={setSelectedItem}
        />

        {/* Row 2: 这城有良田 Designs */}
        <PortfolioSlider
          id="portfolio-fields"
          title="《这城有良田》精品原画集"
          subtitle="明星模拟经营项目，融入国风青绿山水与传统水墨飞檐美学概念"
          items={fieldsItems}
          onItemSelect={setSelectedItem}
        />

        {/* Row 3: 我是大东家 Designs */}
        <PortfolioSlider
          id="portfolio-boss"
          title="《我是大东家》商业视觉集"
          subtitle="爆款商贸模拟经营，诙谐幽默唐风动漫与重量IP联动视觉全家福"
          items={bossItems}
          onItemSelect={setSelectedItem}
        />
      </div>

      {/* 5. Contact Info Footer */}
      <Footer />

      {/* 6. Detail Image Lightbox Dialog overlay */}
      <Lightbox
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        onPrev={handlePrevItem}
        onNext={handleNextItem}
        currentIndex={activeIndex}
        totalIndex={activeTotal}
      />
    </div>
  );
}
