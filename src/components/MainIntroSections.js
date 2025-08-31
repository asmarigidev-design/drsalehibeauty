import React from "react";

// کامپوننت معرفی شامل خانه، درباره من و خدمات - Intro component with Home, About, and Services sections
const MainIntroSections = () => {
  return (
    <>
      {/* سکشن خانه - Home section */}
      <section id="home" className="home">
        <div className="container">
          <div className="row">
            <div className="home-content">
              <h6>سلام , من دکتر زهرا صالحی هستم.</h6>  
              <h3>فوق تخصص پوست، مو و زیبایی</h3> 
              <h6>به وب سایت من خوش آمدید.</h6>
              <div className="btn">
                <a href="/">مشاوره</a> {/* دکمه مشاوره - Consultation button*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* سکشن درباره من - About section */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
           <div className="title">
  <h2>زیبایی، تخصص ماست</h2> 
  <p>
    کلینیک زیبایی دکتر زهرا صالحی با شعار «زیبایی، تخصص ماست» به عنوان یکی از مراکز پیشرو در حوزه پوست، مو و زیبایی شناخته می‌شود. این کلینیک تحت نظر دکتر زهرا صالحی، فوق تخصص پوست، مو و زیبایی، با سال‌ها تجربه علمی و عملی در معتبرترین مراکز درمانی جهان، خدماتی نوین و تخصصی را در محیطی آرام و حرفه‌ای ارائه می‌دهد. از درمان‌های پوستی و جوان‌سازی گرفته تا تزریق ژل، بوتاکس، لیزر و مشاوره‌های تخصصی، همه با هدف حفظ سلامت و افزایش زیبایی طبیعی شما انجام می‌شود. در این کلینیک، زیبایی فقط یک هدف نیست، بلکه یک مسیر علمی، ایمن و شخصی‌سازی‌شده برای هر فرد است.
  </p> 
</div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="about-img">
             <div className="title">
  <h2>کلینیک زیبایی دکتر صالحی</h2> 
  <p>
    کلینیک زیبایی دکتر زهرا صالحی، یکی از پیشرفته‌ترین مراکز تخصصی پوست، مو و زیبایی در تهران است که با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا و تیمی مجرب، خدماتی بی‌نظیر در حوزه درمان‌های پوستی، جوان‌سازی، لیزر، تزریق ژل و بوتاکس، و مراقبت‌های زیبایی ارائه می‌دهد. این کلینیک با مدیریت دکتر زهرا صالحی، فوق تخصص پوست، مو و زیبایی که تحصیلات خود را در معتبرترین مراکز علمی آمریکا گذرانده‌اند، توانسته است رضایت هزاران مراجعه‌کننده را جلب کند. در این مرکز، هر مراجعه‌کننده با مشاوره تخصصی و برنامه‌ریزی شخصی‌سازی‌شده، بهترین مسیر درمانی و زیبایی را تجربه می‌کند. هدف کلینیک، نه‌تنها افزایش زیبایی ظاهری، بلکه حفظ سلامت و شادابی پوست در بلندمدت است. محیط آرام، تجهیزات مدرن، و رویکرد علمی در ارائه خدمات، کلینیک دکتر صالحی را به انتخابی مطمئن برای کسانی تبدیل کرده است که به دنبال زیبایی طبیعی، ماندگار و ایمن هستند.
  </p>
</div>
              </div>
             <div className="about-description">
  <h2> دکتر زهرا صالحی </h2> 
  <h4>فوق تخصص <span>پوست</span>، <span>مو</span> و <span>زیبایی</span></h4> 
  <p>
    من دکتر زهرا صالحی، فوق تخصص پوست، مو و زیبایی هستم. تحصیلاتم را در معتبرترین دانشگاه‌های آمریکا گذرانده‌ام و پس از سال‌ها تجربه علمی و عملی در مراکز درمانی بین‌المللی، تصمیم گرفتم دانش و تخصص خود را در خدمت زیبایی و سلامت هم‌وطنانم قرار دهم. هدف من در کلینیک زیبایی، ارائه درمان‌های پوستی نوین، مراقبت‌های تخصصی و خدمات زیبایی با بالاترین استانداردهای جهانی است. باور دارم که زیبایی واقعی از درون می‌آید و با ترکیب علم، هنر و دقت، می‌توان آن را به شکلی طبیعی و ماندگار شکوفا کرد. در کلینیک من، هر مراجعه‌کننده با احترام، دقت و برنامه‌ریزی شخصی‌سازی‌شده پذیرش می‌شود تا بهترین نتیجه را تجربه کند.
  </p> 
  <div className="info">
    <div className="info-item"><label>تحصیلات:</label><p>دانشگاه UCLA، ایالات متحده آمریکا</p></div> 
    <div className="info-item"><label>ایمیل:</label><p>zahra.salehi@gmail.com</p></div> 
    <div className="info-item"><label>تلفن:</label><p>+98-9123456789</p></div> 
    <div className="info-item"><label>مطب:</label><p>تهران، خیابان مدیسون، پلاک ۱۲، طبقه دوم</p></div> 
  </div>
                <div className="social">
                  <ul>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li> 
                    <li><a href="/"><i className="fab fa-twitter"></i></a></li> 
                    <li><a href="/"><i className="fab fa-facebook"></i></a></li> 
                     <li><a href="/"><i className="fas fa-hospital"></i></a></li> 
                     <li><a href="/"><i className="fas fa-clinic-medical"></i></a></li> 
 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* سکشن خدمات - Services section */}
  
      <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>خدمات من</h2>
              <p>این بخش شامل اطلاعاتی درباره خدماتی است که ارائه می‌کنم.</p>
            </div>
          </div>
          <div className="row align-items">
            {[
              { icon: "fas fa-spa", title: "درمان‌های پوستی تخصصی" },
              { icon: "fas fa-air-freshener", title: "مراقبت‌های زیبایی" },
              { icon: "fas fa-lightbulb", title: "لیزر و جوان‌سازی پوست" },
              { icon: "fas fa-syringe", title: "تزریق ژل و بوتاکس" },
              { icon: "fas fa-user-md", title: "مشاوره تخصصی" },
              { icon: "fas fa-microscope", title: "چکاپ‌های پوستی" },
            ].map((service, index) => (
              <div className="service-item" key={index}>
                <div className="icon" style={{ fontSize: "40px" }}>
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>ارائه بهترین خدمات درمانی و زیبایی برای حفظ سلامت و جذابیت پوست.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainIntroSections;