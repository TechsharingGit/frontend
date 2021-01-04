import './Footer.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

function Footer() {
  return (
      <div>
        <section className="footerCntr section-bg-2 pad_t_100px pad_b_40px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 footerBox">
                        <div className="footerBox_item">
                            <a><img src={`${images_path}logo.png`} alt="footer logo" className="footer_logo"/></a>
                            <ul className="list-items footer-address">
                                <li><a href="">+163 123 7884</a></li>
                                <li><a href="" className="mail">support@website.com</a></li>
                                <li>Melbourne, Australia, 105 South Park Avenue</li>
                            </ul>
                            <h3 className="footer_title font_s_17 mt-4">We are on</h3>
                            <ul className="social-profile">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 footerBox">
                        <div className="footerBox_item">
                            <h3 className="footer_title">Company</h3>
                            <span className="section-divider"></span>
                            <ul className="list-items">
                                <li><a href="#">about us</a></li>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#">become a Teacher</a></li>
                                <li><a href="#">support</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 footerBox">
                        <div className="footerBox_item">
                            <h3 className="footer_title">Courses</h3>
                            <span className="section-divider"></span>
                            <ul className="list-items">
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Hacking</a></li>
                                <li><a href="#">PHP Learning</a></li>
                                <li><a href="#">Spoken English</a></li>
                                <li><a href="#">Self-Driving Car</a></li>
                                <li><a href="#">Garbage Collectors</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 footerBox">
                    <div className="footerBox_item">
                        <h3 className="footer_title">Download App</h3>
                        <span className="section-divider"></span>
                        <ul className="footer_btnBox">
                            <li>
                                <a href="#" className="theme-btn">
                                    <i className="la la-apple icon-element"></i>
                                    <span className="app-titles">
                                        <span className="app__subtitle">Download on the</span>
                                        <span className="app__title">App Store</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="theme-btn">
                                    <i className="la la-android icon-element"></i>
                                    <span className="app-titles">
                                        <span className="app__subtitle">Get in on</span>
                                        <span className="app__title">Google Play</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="copyrightBox">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <p className="copyDesc">&copy; 2020. All Rights Reserved. by <a href="">Gyansutrm.</a></p>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="scroll-top">
            <i className="fa fa-angle-up" title="Go top"></i>
        </div>

        <div className="tooltip_templates">
            <div id="tooltip_content_1">
                <div className="card-item">
                    <div className="card-content">
                        <p className="card__author">
                            By <a href="">alex smith</a>
                        </p>
                        <h3 className="card__title">
                            <a href="">WordPress for Beginners – Master WordPress</a>
                        </h3>
                        <p className="card__label">
                            <span className="card__label-text mr-1">BESTSELLER</span>
                            <span className="mr-1">in</span><a href="#" className="mr-1">WordPress</a> <span>| Development</span>
                        </p>
                        <div className="rating-wrap data_flex mt-2 mb-3">
                            <ul className="review-stars">
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star-o"></span></li>
                            </ul>
                            <span className="star-rating-wrap">
                                <span className="star__rating">4.4</span>
                                <span className="star__count">(20)</span>
                            </span>
                        </div>
                        <div className="card-para mb-3">
                            <p className="font_s_14 line_h_24">
                                Learn WordPress like a Professional! Start from the basics and go all the way to creating your own applications and website!
                            </p>
                        </div>
                        <ul className="list-items mb-3 font_s_14">
                            <li>There are many variations of passages</li>
                            <li>Lorem Ipsum available</li>
                            <li>Suffered alteration in some form</li>
                        </ul>
                        <div className="card-action">
                            <ul className="card-duration data_flex justify-content-between align-items-center">
                                <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                            </ul>
                        </div>
                        <div className="footer_btnBox w-100 text-center mb-3">
                            <a href="" className="theme-btn d-block">Preview this course</a>
                        </div>
                        <div className="card-price-wrap data_flex justify-content-between align-items-center">
                            <span className="card__price">$58.00</span>
                            <a href="#" className="text-btn">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltip_templates">
            <div id="tooltip_content_2">
                <div className="card-item">
                    <div className="card-content">
                        <p className="card__author">
                            By <a href="">brad travesy</a>
                        </p>
                        <h3 className="card__title">
                            <a href="">Learn Ethical Hacking from Scratch Your Stepping</a>
                        </h3>
                        <p className="card__label">
                            <span className="card__label-text mr-1">BESTSELLER</span>
                            <span className="mr-1">in</span><a href="#" className="mr-1">Hacking</a> <span>| Development</span>
                        </p>
                        <div className="rating-wrap data_flex mt-2 mb-3">
                            <ul className="review-stars">
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star-o"></span></li>
                            </ul>
                            <span className="star-rating-wrap">
                                <span className="star__rating">4.4</span>
                                <span className="star__count">(20)</span>
                            </span>
                        </div>
                        <div className="card-para mb-3">
                            <p className="font_s_14 line_h_24">
                                Learn WordPress like a Professional! Start from the basics and go all the way to creating your own applications and website!
                            </p>
                        </div>
                        <ul className="list-items mb-3 font_s_14">
                            <li>There are many variations of passages</li>
                            <li>Lorem Ipsum available</li>
                            <li>Suffered alteration in some form</li>
                        </ul>
                        <div className="card-action">
                            <ul className="card-duration data_flex justify-content-between align-items-center">
                                <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                            </ul>
                        </div>
                        <div className="footer_btnBox w-100 text-center mb-3">
                            <a href="" className="theme-btn d-block">Preview this course</a>
                        </div>
                        <div className="card-price-wrap data_flex justify-content-between align-items-center">
                            <span className="card__price">Free</span>
                            <a href="#" className="text-btn">get enrolled</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltip_templates">
            <div id="tooltip_content_3">
                <div className="card-item">
                    <div className="card-content">
                        <p className="card__author">
                            By <a href="">mark hardson</a>
                        </p>
                        <h3 className="card__title">
                            <a href="">Microsoft SQL Server 2019 for Everyone</a>
                        </h3>
                        <p className="card__label">
                            <span className="card__label-text mr-1">BESTSELLER</span>
                            <span className="mr-1">in</span><a href="#" className="mr-1">SQL</a> <span>| Development</span>
                        </p>
                        <div className="rating-wrap data_flex mt-2 mb-3">
                            <ul className="review-stars">
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star-o"></span></li>
                            </ul>
                            <span className="star-rating-wrap">
                                <span className="star__rating">4.4</span>
                                <span className="star__count">(20)</span>
                            </span>
                        </div>
                        <div className="card-para mb-3">
                            <p className="font_s_14 line_h_24">
                                Learn WordPress like a Professional! Start from the basics and go all the way to creating your own applications and website!
                            </p>
                        </div>
                        <ul className="list-items mb-3 font_s_14">
                            <li>There are many variations of passages</li>
                            <li>Lorem Ipsum available</li>
                            <li>Suffered alteration in some form</li>
                        </ul>
                        <div className="card-action">
                            <ul className="card-duration data_flex justify-content-between align-items-center">
                                <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                            </ul>
                        </div>
                        <div className="footer_btnBox w-100 text-center mb-3">
                            <a href="" className="theme-btn d-block">Preview this course</a>
                        </div>
                        <div className="card-price-wrap data_flex justify-content-between align-items-center">
                            <span className="card__price">$68.00</span>
                            <a href="#" className="text-btn">add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltip_templates">
            <div id="tooltip_content_4">
                <div className="card-item">
                    <div className="card-content">
                        <p className="card__author">
                            By <a href="">Kamran Paul</a>
                        </p>
                        <h3 className="card__title">
                            <a href="">User Experience Design - Adobe XD UI UX Design</a>
                        </h3>
                        <p className="card__label">
                            <span className="card__label-text mr-1">BESTSELLER</span>
                            <span className="mr-1">in</span><a href="#" className="mr-1">Design</a> <span>| Development</span>
                        </p>
                        <div className="rating-wrap data_flex mt-2 mb-3">
                            <ul className="review-stars">
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star-o"></span></li>
                            </ul>
                            <span className="star-rating-wrap">
                                <span className="star__rating">4.4</span>
                                <span className="star__count">(20)</span>
                            </span>
                        </div>
                        <div className="card-para mb-3">
                            <p className="font_s_14 line_h_24">
                                Learn WordPress like a Professional! Start from the basics and go all the way to creating your own applications and website!
                            </p>
                        </div>
                        <ul className="list-items mb-3 font_s_14">
                            <li>There are many variations of passages</li>
                            <li>Lorem Ipsum available</li>
                            <li>Suffered alteration in some form</li>
                        </ul>
                        <div className="card-action">
                            <ul className="card-duration data_flex justify-content-between align-items-center">
                                <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                            </ul>
                        </div>
                        <div className="footer_btnBox w-100 text-center mb-3">
                            <a href="" className="theme-btn d-block">Preview this course</a>
                        </div>
                        <div className="card-price-wrap data_flex justify-content-between align-items-center">
                            <span className="card__price">Free</span>
                            <a href="#" className="text-btn">Get Enrolled</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltip_templates">
            <div id="tooltip_content_5">
                <div className="card-item">
                    <div className="card-content">
                        <p className="card__author">
                            By <a href="">Jose Purtila</a>
                        </p>
                        <h3 className="card__title">
                            <a href="">The Complete Digital finance Marketing Course</a>
                        </h3>
                        <p className="card__label">
                            <span className="card__label-text mr-1">BESTSELLER</span>
                            <span className="mr-1">in</span><a href="#" className="mr-1">Marketing</a> <span>| Development</span>
                        </p>
                        <div className="rating-wrap data_flex mt-2 mb-3">
                            <ul className="review-stars">
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star-o"></span></li>
                            </ul>
                            <span className="star-rating-wrap">
                                <span className="star__rating">4.4</span>
                                <span className="star__count">(20)</span>
                            </span>
                        </div>
                        <div className="card-para mb-3">
                            <p className="font_s_14 line_h_24">
                                Learn WordPress like a Professional! Start from the basics and go all the way to creating your own applications and website!
                            </p>
                        </div>
                        <ul className="list-items mb-3 font_s_14">
                            <li>There are many variations of passages</li>
                            <li>Lorem Ipsum available</li>
                            <li>Suffered alteration in some form</li>
                        </ul>
                        <div className="card-action">
                            <ul className="card-duration data_flex justify-content-between align-items-center">
                                <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                            </ul>
                        </div>
                        <div className="footer_btnBox w-100 text-center mb-3">
                            <a href="" className="theme-btn d-block">Preview this course</a>
                        </div>
                        <div className="card-price-wrap data_flex justify-content-between align-items-center">
                            <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                            <a href="#" className="text-btn">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltip_templates">
            <div id="tooltip_content_6">
                <div className="card-item">
                    <div className="card-content">
                        <p className="card__author">
                            By <a href="teacher-detail.html">Noelle Travesy</a>
                        </p>
                        <h3 className="card__title">
                            <a href="">Complete Python Bootcamp: Go from zero to hero</a>
                        </h3>
                        <p className="card__label">
                            <span className="card__label-text mr-1">BESTSELLER</span>
                            <span className="mr-1">in</span><a href="#" className="mr-1">Python</a> <span>| Development</span>
                        </p>
                        <div className="rating-wrap data_flex mt-2 mb-3">
                            <ul className="review-stars">
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star"></span></li>
                                <li><span className="la la-star-o"></span></li>
                            </ul>
                            <span className="star-rating-wrap">
                                <span className="star__rating">4.4</span>
                                <span className="star__count">(20)</span>
                            </span>
                        </div>
                        <div className="card-para mb-3">
                            <p className="font_s_14 line_h_24">
                                Learn WordPress like a Professional! Start from the basics and go all the way to creating your own applications and website!
                            </p>
                        </div>
                        <ul className="list-items mb-3 font_s_14">
                            <li>There are many variations of passages</li>
                            <li>Lorem Ipsum available</li>
                            <li>Suffered alteration in some form</li>
                        </ul>
                        <div className="card-action">
                            <ul className="card-duration data_flex justify-content-between align-items-center">
                                <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                            </ul>
                        </div>
                        <div className="footer_btnBox w-100 text-center mb-3">
                            <a href="" className="theme-btn d-block">Preview this course</a>
                        </div>
                        <div className="card-price-wrap data_flex justify-content-between align-items-center">
                            <span className="card__price">$68.00</span>
                            <a href="#" className="text-btn">add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Footer;