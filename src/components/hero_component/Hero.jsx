import React from 'react'
import './Hero.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Hero = () => {
  return (
        <section className="slider-area">
            <div className="hero-slide owl-dot-and-nav">
                <div className="single-slide-item slide-bg1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2 className="section__title text-white">We Help You Learn <br/> What You Love</h2>
                                    <p className="section__desc">Emply dummy text of the printing and typesetting industry orem Ipsum has been the
                                        <br/>industry's standard dummy text ever sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="btn-box data_flex align-items-center">
                                    <a href="admission.html" className="theme-btn theme-btn-hover-light">let's join</a>
                                    <a href="#" style={{display:'inline'}} className="btn-text video-play-btn ml-4" data-fancybox="video" data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk" data-speed="700">
                                        Watch Preview<i className="fa fa-play icon-btn ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading text-center">
                                    <h2 className="section__title text-white">Join Aduca & Get <br/> Your Free Courses!</h2>
                                    <p className="section__desc">Emply dummy text of the printing and typesetting industry orem Ipsum has been the
                                        <br/>industry's standard dummy text ever sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="btn-box data_flex align-items-center justify-content-center">
                                    <a href="admission.html" className="theme-btn theme-btn-hover-light">get started</a>
                                    <a href="#" style={{display:'inline'}} className="btn-text video-play-btn ml-4" data-fancybox="video" data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk" data-speed="700">
                                        Watch Preview<i className="fa fa-play icon-btn ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading text-right">
                                    <h2 className="section__title text-white">Learn Anything, <br/> Anytime, Anywhere</h2>
                                    <p className="section__desc">Emply dummy text of the printing and typesetting industry orem Ipsum has been the
                                        <br/>industry's standard dummy text ever sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="btn-box hero-btn-right data_flex align-items-center justify-content-end">
                                    <a href="admission.html" className="theme-btn theme-btn-hover-light">get enrolled</a>
                                    <a href="#" style={{display:'inline'}} className="btn-text video-play-btn ml-4" data-fancybox="video" data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk" data-speed="700">
                                      Watch Preview <i className="fa fa-play icon-btn ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Hero