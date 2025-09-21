import React, { useState, useEffect } from "react";
import b from '../assets/b.jpg';
import bb from '../assets/bb.jpg'; 
import bbb from '../assets/bbb.jfif'; 
import bbbb from '../assets/bbbb.jfif';
import k from '../assets/k.jfif'; 
import kk from '../assets/kk.jfif'; 
import kkk from '../assets/kkk.jfif';
import l from '../assets/l.jpg'; 
import ll from '../assets/ll.jpg';
import lll from '../assets/lll.jpg';
import llll from '../assets/llll.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
// Main component for displaying services and portfolios
// کامپوننت اصلی نمایش خدمات و نمونه‌کارها
const SkillsPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lastTap, setLastTap] = useState(0);
  // Mobile device detection
  // تشخیص دستگاه تلفن همراه
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const portfolioItems = [
    { type: "portfolio", image: k, label: "کاشت ابرو" },
    { type: "portfolio", image: kk, label: "کاشت ابرو" },
    { type: "portfolio", image: kkk, label: "کاشت ابرو" },
    { type: "construction", image: b, label: "عمل بینی" },
    { type: "construction", image: bb, label: "عمل بینی" },
    { type: "construction", image: bbb, label: "عمل بینی" },
    { type: "construction", image: bbbb, label: "عمل بینی" },
    { type: "woocamerce", image: l, label: "تزریق فیلر" },
    { type: "woocamerce", image: ll, label: "تزریق فیلر" },
    { type: "woocamerce", image: lll, label: "تزریق فیلر" },
    { type: "woocamerce", image: llll, label: "تزریق فیلر" },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const openLightbox = (image) => {
    setLightboxImg(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  // Click management for mobile devices
  // مدیریت کلیک برای دستگاه‌های موبایل
  const handleItemClick = (index, image, e) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      
      if (tapLength < 300 && tapLength > 0) {
        // Double tap - open lightbox
        // دابل تاپ - باز کردن لایت‌باکس
        openLightbox(image);
        setHoveredItem(null);
      } else {
        // Simple top - enable hover mode
        // تاپ ساده - فعال کردن حالت hover
        setHoveredItem(hoveredItem === index ? null : index);
      }
      
      setLastTap(currentTime);
    } else {
      // On desktop - open lightbox with one click
      // در دسکتاپ - باز کردن لایت‌باکس با یک کلیک
      openLightbox(image);
    }
  };

  return (
    <>
      {/* بخش خدمات درمانی و زیبایی */  /* Medical and beauty services department */}
      <section id="skill" className="skill" data-aos="fade-up">
        <div className="container" >
          <div className="row align-items">
            <div className="title">
              <div className="flex">
                <h2>تأثیر خدمات سلول های بنیادی</h2>
                <div className="flexx">
                  <h2>تأثیر خدمات درمانی و زیبایی</h2>
                </div>
              </div>
            </div>

            <div className="skill-description">
              <div className="title">
                {/* توضیحات متنی درباره خدمات */  /* Text description about the service */}
              </div>

              <div className="impact-highlights" data-aos="fade-right">
                {/* لیست خدمات با آیکون و توضیح */  /* List of services with icons and descriptions */}
                {[
                  { icon: "fas fa-medkit", title: "درمان تخصصی پوست", desc: "رفع جوش، لک، چین‌وچروک و سایر مشکلات پوستی با روش‌های علمی و نوین." },
                  { icon: "fas fa-user-shield", title: "مشاوره و مراقبت پوستی", desc: "ارائه برنامه‌های مراقبتی شخصی‌سازی‌شده برای حفظ سلامت پوست در بلندمدت." },
                  { icon: "fas fa-magic", title: "زیبایی طبیعی و ماندگار", desc: "تزریق ژل، بوتاکس و خدمات تخصصی برای افزایش جذابیت چهره به‌صورت طبیعی." },
                  { icon: "fas fa-heart", title: "مراقبت‌های احساسی پوست", desc: "ترکیب آرامش ذهنی و مراقبت پوستی برای درخشش طبیعی چهره." },
                  { icon: "fas fa-sun", title: "محافظت در برابر آفتاب", desc: "استفاده از ضدآفتاب‌های تخصصی برای جلوگیری از پیری زودرس." },
                  { icon: "fas fa-seedling", title: "درمان با مواد ارگانیک", desc: "استفاده از ترکیبات گیاهی و طبیعی برای تغذیه پوست." },
                  { icon: "fas fa-thermometer-half", title: "تنظیم دمای پوست", desc: "درمان قرمزی، التهاب و حساسیت با تکنولوژی‌های خنک‌کننده." },
                  { icon: "fas fa-water", title: "هیدرودرمی و آبرسانی", desc: "تأمین رطوبت عمیق پوست با دستگاه‌های پیشرفته برای طراوت و لطافت بیشتر." },
                  { icon: "fas fa-wind", title: "اکسیژن‌تراپی پوست", desc: "تزریق اکسیژن خالص به لایه‌های پوست برای افزایش شفافیت و جوانی." },
                  { icon: "fas fa-brain", title: "درمان استرس پوستی", desc: "کاهش اثرات منفی استرس بر پوست با تکنیک‌های آرام‌سازی و مراقبت ذهنی." },
                  { icon: "fas fa-star", title: "درخشش و شفافیت پوست", desc: "افزایش روشنایی و شفافیت پوست با ماسک‌های تخصصی." }
                ].map((service, index) => (
                  <div className="impact-item" key={index}>
                    <div className="icon" data-aos="fade-right"><i className={service.icon}></i></div>
                    <h4>{service.title}</h4>
                    <p data-aos="fade-left">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* کارت‌های خدمات تصویری */ /* Image service cards */ }
            <div className="skill-img">
              <div className="impact-item">
                <div className="impact-itemm">
                  <div className="service-group" data-aos="fade-down">
                    {[
                      { icon: "fas fa-spa", title: "پاکسازی پوست", desc: "حذف آلودگی‌ها " },
                      { icon: "fas fa-leaf", title: "مراقبت طبیعی", desc: "  ترکیبات گیاهی برای پوست" },
                      { icon: "fas fa-magic", title: "زیبایی ماندگار", desc: "حفظ جذابیت طبیعی چهره." },
                      { icon: "fas fa-heartbeat", title: "درمان ریزش مو", desc: "تقویت رشد مو " },
                      { icon: "fas fa-smile", title: "مشاوره زیبایی", desc: "ارزیابی فرم صورت " },
                    ].map((service, index) => (
                      <div className="cardd" key={index}>
                        <div className="icon"><i className={service.icon}></i></div>
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                        <hr />
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="impact-itemtow">
                <div className="impact-itemm">
                  <div className="service-group"  data-aos="fade-up">
                    {[
                      { icon: "fas fa-medkit", title: "درمان مشکلات پوستی", desc: "رفع جوش، چین‌وچروک" },
                      { icon: "fas fa-user-shield", title: "محافظت و مشاوره", desc: " راهکارهای مراقبتی" },
                      { icon: "fas fa-syringe", title: "تزریق ژل و بوتاکس", desc: "کاهش چین‌وچروک" },
                      { icon: "fas fa-lightbulb", title: "لیزر جوان‌سازی", desc: " و بهبود بافت پوست." },
                      { icon: "fas fa-eye", title: "درمان تیرگی چشم", desc: "رفع گودی و تیرگی زیر چشم." },
                    ].map((service, index) => (
                      <div className="cardd" key={index}>
                        <div className="icon"><i className={service.icon}></i></div>
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                        <hr />
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* نمونه کارها */  /* Portfolio */}
      <section id="portfolio" className="postfolio">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>نمونه کارها</h2>
              <p>در این بخش، نمونه‌هایی از خدمات زیبایی و درمانی ارائه‌شده توسط دکتر زهرا صالحی را مشاهده می‌کنید.</p>
            </div>

            {/* لیست خدمات نمونه‌کارها */ /* List of sample services */}
            <div className="portfolio-container">
              <div className="row">
                {[
                  { title: "درمان مشکلات پوستی", desc: "رفع جوش، لک، چین‌وچروک و مشکلات پوستی با روش‌های نوین و کارآمد." },
                  { title: "جوان‌سازی پوست", desc: "بازگرداندن طراوت و جوانی پوست با بهترین تکنیک‌های زیبایی." },
                  { title: "محافظت و مشاوره", desc: "ارائه راهکارهای مراقبتی برای حفظ سلامت پوست در طولانی‌مدت." },
                  { title: "زیبایی ماندگار", desc: "تزریق ژل،  و روش‌های تخصصی که ظاهر شما را ارتقا می‌دهد." },
                  { title: "لیزر موهای زائد", desc: "از بین بردن موهای ناخواسته بدن و صورت برای پوستی صاف و لطیف." },
                  { title: "درمان تیرگی زیر چشم", desc: "رفع حلقه‌های تیره و گودی زیر چشم با تکنیک‌های مدرن زیبایی." },
                ].map((service, index) => (
                  <div className="portfolio-item" key={index}>
                    <h4  data-aos="fade-right">{service.title}</h4>
                    <p  data-aos="fade-left">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* فیلتر دسته‌بندی‌ها */  /* Filter categories */}
          <div className="row">
            <div className="tab-menu">
              <ul id="tab-btn">
                <li className={activeFilter === "all" ? "active" : ""} onClick={() => handleFilterChange("all")}>همه</li>
                <li className={activeFilter === "woocamerce" ? "active" : ""} onClick={() => handleFilterChange("woocamerce")}>تزریق فیلر</li>
                <li className={activeFilter === "portfolio" ? "active" : ""} onClick={() => handleFilterChange("portfolio")}>کاشت ابرو</li>
                <li className={activeFilter === "construction" ? "active" : ""} onClick={() => handleFilterChange("construction")}>عمل بینی</li>
              </ul>
            </div>
          </div>

          {/* گالری تصاویر نمونه‌کارها */  /* Portfolio Image Gallery */}
          <div className="row">
            <div className="portfolio-gallery">
              {filteredItems.map((item, index) => (
                <div className="item" data-id={item.type} key={index}>
                  <div  data-aos="fade-up"
                    className="inner" 
                    onClick={(e) => handleItemClick(index, item.image, e)}
                    onMouseEnter={() => !isMobile && setHoveredItem(index)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    <img src={item.image} alt="" />
                    <div className={`overlay ${hoveredItem === index ? 'active' : ''}`}>
                      <span><i className="fas fa-eye"></i></span>
                      <h3>{item.label}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* لایت‌باکس برای نمایش تصویر بزرگ */  /* Lightbox to display large image */}
      {isLightboxOpen && (
        <div className="lightbox show" onClick={closeLightbox}>
          <img src={lightboxImg} alt="عکس انتخاب شده" />
        </div>
      )}


    </>
  );
};

export default SkillsPortfolio;