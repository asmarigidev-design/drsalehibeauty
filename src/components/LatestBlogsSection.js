import React from "react";
import p from '../assets/p.jfif';
import bo from '../assets/bo.jfif';
import zz from '../assets/zz.jfif';

// کامپوننت نمایش آخرین مقالات تخصصی - Latest professional blog posts section
const LatestBlogsSection = () => {
  const blogList = [
    {
      img: p,
      title: "روش‌های مدرن جوان‌سازی پوست",
      author: "دکتر محمد صالحی",
      date: "15 فروردین 1404",
    },
    {
      img: bo,
      title: "مزایای تزریق ژل و بوتاکس",
      author: "دکتر محمد صالحی",
      date: "20 فروردین 1404",
    },
    {
      img: zz,
      title: "لیزر موهای زائد: هرآنچه باید بدانید",
      author: "دکتر محمد صالحی",
      date: "25 فروردین 1404",
    },
  ];

  const renderBlogs = () =>
    blogList.map((blog, index) => (
      <div className="blog-content" key={index}>
        <img src={blog.img} alt="" /> {/* تصویر مقاله - Blog image */}
        <div className="blog-description">
          <h2>{blog.title}</h2> {/* عنوان مقاله - Blog title */}
          <div className="blog-info">
            <span>
              <i className="fas fa-user-md"></i>
              {blog.author} {/* نام نویسنده مقاله - Blog author */}
            </span>
            <span>
              <i className="fas fa-calendar-alt"></i>
              {blog.date} {/* تاریخ انتشار مقاله - Blog date */}
            </span>
          </div>
          <p>
            اطلاعات تخصصی درباره روش‌های نوین درمان و زیبایی پوست که توسط دکتر
            محمد صالحی ارائه شده‌اند.
          </p> {/* توضیح مقاله - Blog summary */}
          <a href="/">مطالعه مقاله</a> {/* لینک مطالعه مقاله - Read more link */}
        </div>
      </div>
    ));

  return (
    <>
      <section id="blogs" className="blogs">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>آخرین مقالات تخصصی</h2> {/* عنوان بخش مقالات - Blog section title */}
              <p>
                مطالب علمی و تخصصی درباره پوست، مو و زیبایی توسط دکتر زهرا صالحی
              </p> {/* توضیح کوتاه درباره نویسنده مقالات - Blog section description */}
            </div>
          </div>

          <div className="row mt-5 align-items">{renderBlogs()}</div>
          <div className="row mt-5 align-items">{renderBlogs()}</div>
        </div>
      </section>
    </>
  );
};

export default LatestBlogsSection;
