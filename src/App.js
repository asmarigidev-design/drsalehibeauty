import { React, useState, useEffect } from 'react';
// کامپوننت‌های اصلی صفحه - Main page components
import ResponsiveHeaderNavigation from './components/ResponsiveHeaderNavigation'; // ناوبری واکنش‌گرا - Responsive navigation bar
import SkillsPortfolio from './components/SkillsPortfolio'; // بخش خدمات و نمونه‌کارها - Services and portfolio section
import LatestBlogsSection from './components/LatestBlogsSection'; // بخش آخرین مقالات تخصصی - Latest blog posts section
import MainIntroSections from './components/MainIntroSections'; // معرفی اولیه سایت - Main introduction section
import { Contact, Footer, Lightbox } from './components/Contact'; // تماس، فوتر و لایت‌باکس - Contact, footer, and lightbox
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      {/* ناوبری بالای صفحه - Top navigation */}
      <ResponsiveHeaderNavigation />

      {/* معرفی اولیه - Intro section */}
      <MainIntroSections />

      {/* خدمات و نمونه‌کارها - Services and portfolio */}
      <SkillsPortfolio  />

      {/* مقالات تخصصی - Blog section */}
      <LatestBlogsSection />

      {/* فرم تماس با ما - Contact form */}
      <Contact />

      {/* فوتر سایت - Website footer */}
      <Footer />

      {/* نمایش تصویر بزرگ - Lightbox for images */}
      <Lightbox />
    </>
  );
}

export default App; 
