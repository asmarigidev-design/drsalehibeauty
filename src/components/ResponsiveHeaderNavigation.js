import React, { useState, useEffect } from "react";

// کامپوننت هدر واکنش‌گرا با منوی ناوبری - Responsive header with navigation menu
const ResponsiveHeaderNavigation = () => {
  const [isNavFixed, setIsNavFixed] = useState(false); // وضعیت چسبندگی هدر هنگام اسکرول - Sticky header state on scroll
  const [isNavOpen, setIsNavOpen] = useState(false); // وضعیت باز بودن منوی موبایل - Mobile menu open state

  useEffect(() => {
    const handleScroll = () => {
      const scrollTopFix = document.documentElement.scrollTop; // مقدار اسکرول صفحه - Scroll position
      if (window.innerWidth > 991) { // فقط در حالت دسکتاپ - Only for desktop view
        if (scrollTopFix > 100) {
          setIsNavFixed(true); // فعال‌سازی حالت چسبنده - Enable sticky mode
        } else {
          setIsNavFixed(false); // غیرفعال‌سازی حالت چسبنده - Disable sticky mode
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // افزودن شنونده اسکرول - Add scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // حذف شنونده هنگام پاکسازی - Cleanup scroll listener
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen); // تغییر وضعیت منوی موبایل - Toggle mobile menu
  };

  return (
    <>
      <header className={isNavFixed ? "fixed" : ""}> {/* کلاس چسبنده برای هدر - Sticky header class */}
        <div className="container">
          <div className="row align-items">
            <div className="navbar">
              <div className={`hamburger-menu ${isNavOpen ? "active" : ""}`} onClick={toggleNavbar}> {/* منوی همبرگری برای موبایل - Hamburger menu for mobile */}
                <div></div>
              </div>
              <ul className={`navbar-responsive ${isNavOpen ? "show" : ""}`}> {/* منوی ناوبری واکنش‌گرا - Responsive navigation menu */}
                <li><a href="#home" className="">صفحه نخست</a></li> {/* لینک به بخش خانه - Link to Home section */}
                <li><a href="#about">درباره ما</a></li> {/* لینک به بخش درباره ما - Link to About section */}
                <li><a href="#services">خدمات</a></li> {/* لینک به بخش خدمات - Link to Services section */}
                <li><a href="#skill">نتایج</a></li> {/* لینک به بخش نتایج - Link to Results section */}
                <li><a href="#portfolio">نمونه کارها</a></li> {/* لینک به بخش نمونه کارها - Link to Portfolio section */}
                <li><a href="#blogs">بلاگ</a></li> {/* لینک به بخش بلاگ - Link to Blog section */}
                <li><a href="#contact">تماس با ما</a></li> {/* لینک به بخش تماس با ما - Link to Contact section */}
              </ul>
            </div>
            <div className="brand-name">
              <a href="/" className="logo">Salehi</a> {/* لوگو یا نام برند - Brand logo or name */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ResponsiveHeaderNavigation; 
