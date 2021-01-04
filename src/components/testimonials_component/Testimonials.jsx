import './Testimonials.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

function Testimonials() {
  return (
      <div>
        <section className="feature-area text-center pad_b_90px">
            <div className="container">
                <div className="feature-content-wrap">
                    <div className="row">
                        <div className="col-lg-4 column-td-half">
                            <div className="info-box info-box-color-1">
                                <div className="hover-overlay"></div>
                                <div className="icon-element mx-auto">
                                    <i className="fa fa-user-o"></i>
                                </div>
                                <h3 className="info__title">Expert Teachers</h3>
                                <p className="info__text">Tmply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                <a href="#" className="text-btn">read more</a>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="info-box info-box-color-2">
                                <div className="hover-overlay"></div>
                                <div className="icon-element mx-auto">
                                    <i className="fa fa-paper-plane-o"></i>
                                </div>
                                <h3 className="info__title">Easy Communication</h3>
                                <p className="info__text">Tmply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                <a href="#" className="text-btn">read more</a>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="info-box info-box-color-3">
                                <div className="hover-overlay"></div>
                                <div className="icon-element mx-auto">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <h3 className="info__title">Get Certificates</h3>
                                <p className="info__text">Tmply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                <a href="#" className="text-btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="category-area pad_b_90px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="section-heading">
                            <h5 className="section__meta">Categories</h5>
                            <h2 className="section__title">Popular Categories</h2>
                            <span className="section-divider"></span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="btn-box h-100 data_flex align-items-center justify-content-end">
                            <a href="#" className="theme-btn">all Categories</a>
                        </div>
                    </div>
                </div>
                <div className="category-wrapper mar_t_28px">
                    <div className="row">
                        <div className="col-lg-4 column-td-half">
                            <div className="category-item">
                                <img src={`${images_path}img1.jpg`} alt=""/>
                                <div className="category-content">
                                    <div className="category-inner">
                                        <h3 className="cat__title"><a href="#">Business Study</a></h3>
                                        <p className="cat__meta">9 courses</p>
                                        <a href="#" className="theme-btn">explore now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="category-item">
                                <img src={`${images_path}img2.jpg`} alt=""/>
                                <div className="category-content">
                                    <div className="category-inner">
                                        <h3 className="cat__title"><a href="#">Art & Design</a></h3>
                                        <p className="cat__meta">7 courses</p>
                                        <a href="#" className="theme-btn">explore now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="category-item">
                                <img src={`${images_path}img3.jpg`} alt=""/>
                                <div className="category-content">
                                    <div className="category-inner">
                                        <h3 className="cat__title"><a href="#">Web development</a></h3>
                                        <p className="cat__meta">8 courses</p>
                                        <a href="#" className="theme-btn">explore now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="category-item">
                                <img src={`${images_path}img4.jpg`} alt=""/>
                                <div className="category-content">
                                    <div className="category-inner">
                                        <h3 className="cat__title"><a href="#">health & fitness</a></h3>
                                        <p className="cat__meta">6 courses</p>
                                        <a href="#" className="theme-btn">explore now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="category-item">
                                <img src={`${images_path}img5.jpg`} alt=""/>
                                <div className="category-content">
                                    <div className="category-inner">
                                        <h3 className="cat__title"><a href="#">photography</a></h3>
                                        <p className="cat__meta">7 courses</p>
                                        <a href="#" className="theme-btn">explore now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="category-item">
                                <img src={`${images_path}img6.jpg`} alt=""/>
                                <div className="category-content">
                                    <div className="category-inner">
                                        <h3 className="cat__title"><a href="#">Mathematics</a></h3>
                                        <p className="cat__meta">8 courses</p>
                                        <a href="#" className="theme-btn">explore now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="course-area">
            <div className="course-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h5 className="section__meta">choose your desired courses</h5>
                                <h2 className="section__title">Browse Our Top Courses</h2>
                                <span className="section-divider"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tab mar_t_28px mar_b_55px">
                                <ul className="nav nav-tabs justify-content-center text-center" role="tablist" id="review">
                                    <li role="presentation">
                                        <a href="#tab1" role="tab" data-toggle="tab" className="theme-btn active" aria-selected="true">
                                            business
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab2" role="tab" data-toggle="tab" className="theme-btn" aria-selected="false">
                                            design
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab3" role="tab" data-toggle="tab" className="theme-btn" aria-selected="false">
                                            development
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab4" role="tab" data-toggle="tab" className="theme-btn" aria-selected="false">
                                            web
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab5" role="tab" data-toggle="tab" className="theme-btn" aria-selected="false">
                                            marketing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-content-wrapper section-bg pad_t_60px pad_b_110px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade show active" id="tab1">
                                    <div className="row">
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img8.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">WordPress for Beginners – Master WordPress</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">alex smith</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$58.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img9.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Learn Ethical Hacking from Scratch Your Stepping</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">brad travesy</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img10.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">highest rated</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">advanced</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Microsoft SQL Server 2019 for Everyone</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">mark hardson</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img11.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">User Experience Design - Adobe XD UI UX Design</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">kamran paul</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img12.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">The Complete Digital finance Marketing Course</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">jose purtila</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_6">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img13.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">noelle travesy</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab2">
                                    <div className="row">
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img13.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">WordPress for Beginners – Master WordPress</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">alex smith</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img12.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Learn Ethical Hacking from Scratch Your Stepping</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">brad travesy</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$33.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img15.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">highest rated</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Microsoft SQL Server 2019 for Everyone</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">mark hardson</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">User Experience Design - Adobe XD UI UX Design</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">kamran paul</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">The Complete Digital finance Marketing Course</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">jose purtila</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_6">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">noelle travesy</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab3">
                                    <div className="row">
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">WordPress for Beginners – Master WordPress</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">alex smith</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$58.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Learn Ethical Hacking from Scratch Your Stepping</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">brad travesy</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">highest rated</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Microsoft SQL Server 2019 for Everyone</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">mark hardson</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">User Experience Design - Adobe XD UI UX Design</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">kamran paul</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$58.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">The Complete Digital finance Marketing Course</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">jose purtila</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_6">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">noelle travesy</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab4">
                                    <div className="row">
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">WordPress for Beginners – Master WordPress</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">alex smith</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$58.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Learn Ethical Hacking from Scratch Your Stepping</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">brad travesy</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$33.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">highest rated</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Microsoft SQL Server 2019 for Everyone</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">mark hardson</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">User Experience Design - Adobe XD UI UX Design</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">kamran paul</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">The Complete Digital finance Marketing Course</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">jose purtila</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_6">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">noelle travesy</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab5">
                                    <div className="row">
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">WordPress for Beginners – Master WordPress</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">alex smith</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$58.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">beginner</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Learn Ethical Hacking from Scratch Your Stepping</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">brad travesy</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">highest rated</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Microsoft SQL Server 2019 for Everyone</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">mark hardson</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$68.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">User Experience Design - Adobe XD UI UX Design</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">kamran paul</a>
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
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">$58.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                    <div className="card-badge">
                                                        <span className="badge-label">bestseller</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">The Complete Digital finance Marketing Course</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">jose purtila</a>
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
                                                            <span className="star__rating">4.2</span>
                                                            <span className="star__count">(30)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                                                        <a href="#" className="text-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 column-td-half">
                                            <div className="card-item card-preview" data-tooltip-content="#tooltip_content_6">
                                                <div className="card-image">
                                                    <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card__label">
                                                        <span className="card__label-text">all levels</span>
                                                        <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                                    </p>
                                                    <h3 className="card__title">
                                                        <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                                    </h3>
                                                    <p className="card__author">
                                                        <a href="teacher-detail.html">noelle travesy</a>
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
                                                            <span className="star__rating">4.5</span>
                                                            <span className="star__count">(40)</span>
                                                        </span>
                                                    </div>
                                                    <div className="card-action">
                                                        <ul className="card-duration data_flex justify-content-between align-items-center">
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-play-circle"></i> 45 Classes
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="meta__date">
                                                                    <i className="la la-clock-o"></i> 3 hours 20 min
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                        <span className="card__price">Free</span>
                                                        <a href="#" className="text-btn">Get Enrolled</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="btn-box mt-4 text-center">
                                <a href="course-grid.html" className="theme-btn">browse all Courses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="course-area pad_t_120px">
            <div className="course-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h5 className="section__meta">Learn on your schedule</h5>
                                <h2 className="section__title">Trending Courses</h2>
                                <span className="section-divider"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row mar_t_28px">
                        <div className="col-lg-12">
                            <div className="tab-content">
                                <div className="course-carousel owl-dot-and-nav">
                                    <div className="card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                        <div className="card-image">
                                            <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                        </div>
                                        <div className="card-content">
                                            <p className="card__label">
                                                <span className="card__label-text">all levels</span>
                                                <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                            </p>
                                            <h3 className="card__title">
                                                <a href="course-details.html">User Experience Design - Adobe XD UI UX Design</a>
                                            </h3>
                                            <p className="card__author">
                                                <a href="teacher-detail.html">kamran paul</a>
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
                                            <div className="card-action">
                                                <ul className="card-duration data_flex justify-content-between align-items-center">
                                                    <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                                    <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                                                </ul>
                                            </div>
                                            <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                <span className="card__price">Free</span>
                                                <a href="#" className="text-btn">Get Enrolled</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item card-preview" data-tooltip-content="#tooltip_content_2">
                                        <div className="card-image">
                                            <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                            <div className="card-badge">
                                                <span className="badge-label">bestseller</span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className="card__label">
                                                <span className="card__label-text">all levels</span>
                                                <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                            </p>
                                            <h3 className="card__title">
                                                <a href="course-details.html">The Complete Digital finance Marketing Course</a>
                                            </h3>
                                            <p className="card__author">
                                                <a href="teacher-detail.html">jose purtila</a>
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
                                                    <span className="star__rating">4.2</span>
                                                    <span className="star__count">(30)</span>
                                                </span>
                                            </div>
                                            <div className="card-action">
                                                <ul className="card-duration data_flex justify-content-between align-items-center">
                                                    <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                                    <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                                                </ul>
                                            </div>
                                            <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                <span className="card__price"><span className="before-price">$189.00</span> $119.00</span>
                                                <a href="#" className="text-btn">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item card-preview" data-tooltip-content="#tooltip_content_3">
                                        <div className="card-image">
                                            <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                        </div>
                                        <div className="card-content">
                                            <p className="card__label">
                                                <span className="card__label-text">all levels</span>
                                                <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                            </p>
                                            <h3 className="card__title">
                                                <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                            </h3>
                                            <p className="card__author">
                                                <a href="teacher-detail.html">noelle travesy</a>
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
                                                    <span className="star__rating">4.5</span>
                                                    <span className="star__count">(40)</span>
                                                </span>
                                            </div>
                                            <div className="card-action">
                                                <ul className="card-duration data_flex justify-content-between align-items-center">
                                                    <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                                    <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                                                </ul>
                                            </div>
                                            <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                <span className="card__price">$68.00</span>
                                                <a href="#" className="text-btn">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item card-preview" data-tooltip-content="#tooltip_content_4">
                                        <div className="card-image">
                                            <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                        </div>
                                        <div className="card-content">
                                            <p className="card__label">
                                                <span className="card__label-text">all levels</span>
                                                <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                            </p>
                                            <h3 className="card__title">
                                                <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                            </h3>
                                            <p className="card__author">
                                                <a href="teacher-detail.html">noelle travesy</a>
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
                                                    <span className="star__rating">4.5</span>
                                                    <span className="star__count">(40)</span>
                                                </span>
                                            </div>
                                            <div className="card-action">
                                                <ul className="card-duration data_flex justify-content-between align-items-center">
                                                    <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                                    <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                                                </ul>
                                            </div>
                                            <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                <span className="card__price">$68.00</span>
                                                <a href="#" className="text-btn">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item card-preview" data-tooltip-content="#tooltip_content_5">
                                        <div className="card-image">
                                            <a href="course-details.html" className="card__img"><img src={`${images_path}img1.jpg`} alt=""/></a>
                                            <div className="card-badge">
                                                <span className="badge-label">highest rated</span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className="card__label">
                                                <span className="card__label-text">all levels</span>
                                                <a href="#" className="card__collection-icon" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="la la-heart-o"></span></a>
                                            </p>
                                            <h3 className="card__title">
                                                <a href="course-details.html">Complete Python Bootcamp: Go from zero to hero</a>
                                            </h3>
                                            <p className="card__author">
                                                <a href="teacher-detail.html">noelle travesy</a>
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
                                                    <span className="star__rating">4.5</span>
                                                    <span className="star__count">(40)</span>
                                                </span>
                                            </div>
                                            <div className="card-action">
                                                <ul className="card-duration data_flex justify-content-between align-items-center">
                                                    <li><span className="meta__date"><i className="la la-play-circle"></i> 45 Classes</span></li>
                                                    <li><span className="meta__date"><i className="la la-clock-o"></i> 3 hours 20 min</span></li>
                                                </ul>
                                            </div>
                                            <div className="card-price-wrap data_flex justify-content-between align-items-center">
                                                <span className="card__price">$68.00</span>
                                                <a href="#" className="text-btn">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
export default Testimonials;