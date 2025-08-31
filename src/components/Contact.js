import React from "react";

// سکشن تماس با ما شامل توضیحات و فرم ارتباط - Contact section with description and form
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="title">
            <h2>تماس با ما</h2> 
            <p>دکتر زهرا صالحی، فوق تخصص پوست، مو و زیبایی، یکی از برجسته‌ترین متخصصان در زمینه مراقبت‌های پوستی و درمان‌های زیبایی است...</p> 
          </div>
        </div>

        <div className="row">
          <form> {/* فرم تماس با ورودی‌های نام، ایمیل، موضوع و پیام - Contact form with name, email, subject, and message */}
            <div className="input-group">
              <input type="text" placeholder="نام و نام خانوادگی" /> 
              <input type="text" placeholder="ایمیل" /> 
              <input type="text" placeholder="موضوع" />
            </div>
            <textarea placeholder="چیزی بنویسید.." /> 
            <input type="submit" value="ارسال" /> 
          </form>
        </div>
      </div>
    </section>
  );
};

// سکشن فوتر شامل معرفی دکتر و لینک‌های شبکه اجتماعی - Footer section with bio and social links
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-about">
            <h3>درباره دکتر زهرا صالحی</h3> 
            <p>متخصص پوست، مو و زیبایی با سال‌ها تجربه در زمینه درمان‌های تخصصی و زیبایی...</p> 
          </div>
        </div>
        <div className="row">
          <ul> {/* لیست آیکون‌های شبکه‌های اجتماعی - Social media icon list */}
            <li><a href="/"><i className="fab fa-instagram"></i></a></li> 
            <li><a href="/"><i className="fab fa-facebook"></i></a></li> 
            <li><a href="/"><i className="fab fa-twitter"></i></a></li> 
            <li><a href="/"><i className="fab fa-youtube"></i></a></li> 
       </ul>
        </div>
      </div>
    </footer>
  );
};
//سکشن لایت‌باکس برای نمایش تصویر نمونه‌کار - Lightbox section for portfolio image preview

const Lightbox = () => {
  return (
    <div className="lightbox hide">
      <span className="close-lightbox">
        <i className="fas fa-times"></i> 
      </span>
      <img src="images/portfolio/1.jpg" alt="Portfolio" /> 
    </div>
  );
};

export { Contact, Footer, Lightbox }; 
