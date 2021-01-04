import './Cards.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

function Cards() {
  return (
      <div>
    <section className="funfact-area text-center overflow-hidden pad_t_85px pad_b_85px">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 column-td-half">
                <div className="counter-item">
                    <span className="la la-bullhorn count__icon"></span>
                    <h4 className="count__title counter">4520</h4>
                    <p className="count__meta">expert instructors</p>
                </div>
            </div>
            <div className="col-lg-3 column-td-half">
                <div className="counter-item">
                    <span className="la la-globe count__icon"></span>
                    <h4 className="count__title counter text-color">5452</h4>
                    <p className="count__meta">foreign followers</p>
                </div>
            </div>
            <div className="col-lg-3 column-td-half">
                <div className="counter-item">
                    <span className="la la-users count__icon"></span>
                    <h4 className="count__title counter text-color-2">9720</h4>
                    <p className="count__meta">students enrolled</p>
                </div>
            </div>
            <div className="col-lg-3 column-td-half">
                <div className="counter-item">
                    <span className="la la-certificate count__icon"></span>
                    <h4 className="count__title counter text-color-3">20</h4>
                    <p className="count__meta">years of experience</p>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="section-block"></div>

<section className="team-area pad_t_120px pad_b_110px">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <h5 className="section__meta">expert people</h5>
                    <h2 className="section__title">Meet Our Expert Instructors</h2>
                    <span className="section-divider"></span>
                </div>
            </div>
        </div>
        
        <div className="row mar_t_28px">
            <div className="col-lg-12">
                <div className="row_full cubeBox">
                    
                    <div id="viewport-shadow">

                        <a href="#" id="prev" title="go to the next slide"></a>
                        <a href="#" id="next" title="go to the next slide"></a>

                        <div id="viewport">
                            <div id="box">
                            <figure className="slide"><img src={`${images_path}slider1.jpg`}/></figure>
                            <figure className="slide"><img src={`${images_path}slider2.jpg`}/></figure>
                            <figure className="slide"><img src={`${images_path}slider3.jpg`}/></figure>
                            <figure className="slide"><img src={`${images_path}slider4.jpg`}/></figure>
                            <figure className="slide"><img src={`${images_path}slider5.jpg`}/></figure>
                            </div>
                        </div>

                        <div id="time-indicator"></div></div>
                        
                    <ul id="controls">
                                <li><a className="goto-slide current" href="#" data-slideindex="0"></a></li>
                                <li><a className="goto-slide" href="#" data-slideindex="1"></a></li>
                                <li><a className="goto-slide" href="#" data-slideindex="2"></a></li>
                                <li><a className="goto-slide" href="#" data-slideindex="3"></a></li>
                                <li><a className="goto-slide" href="#" data-slideindex="4"></a></li>
                            </ul>

                </div>
            </div>
        </div>

        <div className="row" style={{paddingTop:'70px'}}>
            <div className="col-lg-12">
                <div className="btn-box text-center">
                    <a href="" className="theme-btn">view all teachers</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="testimonial-area section-bg pad_t_120px pad_b_110px">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <h5 className="section__meta">testimonials</h5>
                    <h2 className="section__title">See What Our Lovely <br/> Students Said</h2>
                    <span className="section-divider"></span>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row mar_t_28px">
            <div className="col-lg-12">
                <div className="testimonial-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Kevin Martin</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                My children and I LOVE Aduca! The courses are fantastic and the
                                instructors are so fun and knowledgeable.
                                I only wish we found it sooner.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img2.jpg`} alt=""/>
                           <div className="testimonial__name">
                               <h3 className="testimonial__name-title">Jessica Brown</h3>
                               <span className="testimonial__name-meta">student</span>
                               <ul className="review-stars d-inline-block">
                                   <li><span className="la la-star"></span></li>
                                   <li><span className="la la-star"></span></li>
                                   <li><span className="la la-star"></span></li>
                                   <li><span className="la la-star"></span></li>
                                   <li><span className="la la-star-o"></span></li>
                               </ul>
                           </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                No matter what you want to learn, you’ll find an
                                amazing selection of courses here.
                                The instructors are so knowledgable while
                                being fun and interesting. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Ad blanditiis consectetur
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img3.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Mike Hardson</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                I really recommend this site to all my friends and anyone who’s willing to
                                learn real skills. This platform gives
                                you the opportunity to learn from experts at a convenient time.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img4.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Bernice Pease</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                Thank you Aduca! You've renewed my passion for
                                learning and my dream of becoming a web developer.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img5.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Daniel Ward</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                I came across this site when I had no funds to pay for a college education.
                                This site has literally been a lifesaver as
                                I can now earn from freelance working using the skills
                                I learned from here.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img4.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Kevin Martin</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                This site has helped me with all the resources I need to become a
                                freelance web developer. I have a renewed passion
                                for learning more thanks to all the helpful
                                and amazing instructors
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img6.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Jessica Brown</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                Thank you Aduca! You've renewed my passion for
                                learning and my dream of becoming a web developer.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img2.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Mike Hardson</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                I work in project management and joined Aduca because I get great courses
                                for less. The instructors are fantastic,
                                interesting, and helpful. Thank you Aduca
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img3.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Bernice Pease</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                No matter what you want to learn, you’ll find an amazing selection of courses here.
                                The instructors are so knowledgable while being fun and interesting.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img4.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Daniel Ward</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                The best part about Aduca is the selection.
                                You can find a course for anything you want to learn!
                                really Aduca i closed with you.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Kevin Martin</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                I came across this site when I had no funds to pay for a college education.
                                This site has literally been a lifesaver as I can
                                now earn from freelance working using the skills I learned from here.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img5.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Jessica Brown</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                Studying free courses in the privacy of my home allows me to be a
                                role model for my children. My children know my goals are to complete courses
                                to help fill in the gaps I have in my learning to improve my chances of
                                getting a job in my field. Having the opportunity
                                to change my life by studying without having to pay is awesome.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img6.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Mike Hardson</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                Aduca opens the doors for new opportunities. The concept of continued
                                learning has really improved my mental acuity and has given me a sense of personal fulfilment.
                                I’ve also gained more confidence and so have a much better lifestyle.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img2.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Bernice Pease</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                Esther is an enthusiastic Aduca student from Nigeria.
                                Esther first learned to speak Spanish with Aduca. She thinks Aduca i...
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <img src={`${images_path}testi-img3.jpg`} alt=""/>
                            <div className="testimonial__name">
                                <h3 className="testimonial__name-title">Daniel Ward</h3>
                                <span className="testimonial__name-meta">student</span>
                                <ul className="review-stars d-inline-block">
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star"></span></li>
                                    <li><span className="la la-star-o"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial__desc">
                            <p className="testimonial__desc-desc">
                                I really recommend this site to all my friends and anyone who’s
                                willing to learn real skills. This platform
                                gives you the opportunity to learn
                                from experts at a convenient time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="get-start-area text-center pad_t_120px pad_b_110px overflow-hidden">
    <div id="perticles-js"></div>
    <div className="box-icons">
        <div className="box-one"></div>
        <div className="box-two"></div>
        <div className="box-three"></div>
        <div className="box-four"></div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="get-start-content">
                    <div className="section-heading">
                        <h5 className="section__meta section__metalight">start online learning</h5>
                        <h2 className="section__title text-white">Enhance Your Skills with <br/> Best Online Courses</h2>
                        <span className="section-divider section-divider-light"></span>
                    </div>
                    <div className="btn-box mar_t_20px">
                        <a href="#" className="theme-btn theme-btn-hover-light">get started now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="box-icons2">
        <div className="box-one"></div>
        <div className="box-two"></div>
        <div className="box-three"></div>
        <div className="box-four"></div>
        <div className="box-five"></div>
    </div>
</section>

<section className="benefit-area pad_b_180px overflow-hidden">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="benefit-heading pad_t_120px">
                    <div className="section-heading">
                        <h5 className="section__meta">get start with aduca</h5>
                        <h2 className="section__title">Benefits of Learning With Aduca</h2>
                        <span className="section-divider"></span>
                        <p className="section__desc">
                            Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry’s when an unknown printerit to make a type specimen book
                            Pellentesque tellus arcu
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 column-td-half">
                            <div className="info-icon-box">
                                <span className="la la-mouse-pointer icon-element icon-bg-1"></span>
                                <h4 className="widget-title">100,000 Courses</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="info-icon-box">
                                <span className="la la-bolt icon-element icon-bg-2"></span>
                                <h4 className="widget-title">Live Learning</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 column-td-half">
                            <div className="info-icon-box">
                                <span className="la la-users icon-element icon-bg-3"></span>
                                <h4 className="widget-title">Expert Teachers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href="about.html" className="theme-btn">learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-box">
                    <img src={`${images_path}img13.jpg`} alt=""/> 
                    <img src={`${images_path}img14.jpg`} alt=""/> 
                </div>
            </div>
        </div>
    </div>
</section>

<div className="section-block"></div>

<section className="register-area section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <div className="register-form">
                    <div className="contact-form-action">
                        <h3 className="widget-title">Receive Free Courses</h3>
                        <form method="post">
                            <div className="input-box">
                                <label className="label-text">Name<span className="primary-color-2 ml-1">*</span></label>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="name" placeholder="Your Name"/>
                                    <span className="la la-user input-icon"></span>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="label-text">Email<span className="primary-color-2 ml-1">*</span></label>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                                    <span className="la la-envelope input-icon"></span>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="label-text">Phone Number<span className="primary-color-2 ml-1">*</span></label>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="phone" placeholder="Phone Number"/>
                                    <span className="la la-phone input-icon"></span>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="label-text">Subject<span className="primary-color-2 ml-1">*</span></label>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="subject" placeholder="Subject"/>
                                    <span className="la la-book input-icon"></span>
                                </div>
                            </div>
                            <div className="btn-box">
                                <button className="theme-btn" type="submit">apply now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="register-heading">
                    <div className="section-heading">
                        <h5 className="section__meta">register</h5>
                        <h2 className="section__title">Get ahead with Learning Paths. Stay Sharp.</h2>
                        <span className="section-divider"></span>
                        <p className="section__desc mb-2">Education is the process of acquiring the body of knowledge and skills that people are expected have in your society. A education develops a critical thought process in addition to learning. Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto aspernatur, facilis perspiciatis rerum saepe vel vitae? Alias culpa dicta facere maiores quam quas, quis sapiente voluptatem? Nulla, voluptatem.</p>
                        <p className="section__desc">
                            tryrem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                            when an unknown printer.
                        </p>
                    </div>
                    <div className="btn-box">
                        <a href="#" className="theme-btn">get started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="section-block"></div>

<section className="clientlogo-area overflow-hidden pad_t_120px pad_b_100px text-center">
    <div className="stroke-line">
        <span className="stroke__line"></span>
        <span className="stroke__line"></span>
        <span className="stroke__line"></span>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading">
                    <h5 className="section__meta">our partners</h5>
                    <h2 className="section__title">Top companies choose <a href="#" className="primary-color-2">Aduca for Business</a> to build
                        <br/> in-demand career skills</h2>
                    <span className="section-divider"></span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="client-logo mar_t_30px">
                    <div className="client-logo-item">
                        <a href="#"><img src={`${images_path}sponsor-img.jpg`}  alt="brand image"/></a>
                    </div>
                    <div className="client-logo-item">
                        <a href="#"><img src={`${images_path}sponsor-img2.jpg`}  alt="brand image"/></a>
                    </div>
                    <div className="client-logo-item">
                        <a href="#"><img src={`${images_path}sponsor-img3.jpg`}  alt="brand image"/></a>
                    </div>
                    <div className="client-logo-item">
                        <a href="#"><img src={`${images_path}sponsor-img4.jpg`}  alt="brand image"/></a>
                    </div>
                    <div className="client-logo-item">
                        <a href="#"><img src={`${images_path}sponsor-img5.jpg`}  alt="brand image"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="stroke-line2">
        <span className="stroke__line"></span>
        <span className="stroke__line"></span>
        <span className="stroke__line"></span>
    </div>
</section>

<section className="blog-area pad_t_120px">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <h5 className="section__meta section__metalight">news feeds</h5>
                    <h2 className="section__title text-white">Latest News & Articles</h2>
                    <span className="section-divider section-divider-light"></span>
                </div>
            </div>
        </div>
        <div className="row mar_t_30px">
            <div className="col-lg-12">
                <div className="blog-post-carousel owl-dot-and-nav">
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="#" className="card__img"><img src={`${images_path}img9.jpg`}  alt="brand image"/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="#">User Experience Design Essentials</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="#" className="card__img"><img src={`${images_path}img10.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">Ultimate Photoshop Training: From Beginner</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img11.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">Sales Training: Practical Techniques</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img12.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">Complete Financial Analyst Course</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img13.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">User Experience Design Essentials</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img14.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">Ultimate Photoshop Training: From Beginner</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img10.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">User Experience Design Essentials</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img9.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">Ultimate Photoshop Training: From Beginner</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <div className="card-item blog-card">
                        <div className="card-image">
                            <a href="" className="card__img"><img src={`${images_path}img8.jpg`} alt=""/></a>
                            <div className="card-badge">
                                <span className="badge-label">24 Jan</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card__title mt-0">
                                <a href="">Ultimate Photoshop Training: From Beginner</a>
                            </h3>
                            <div className="card-action">
                                <ul className="card-duration data_flex align-items-center">
                                    <li>By<a href="#" className="blog-admin-name">TechyDevs</a></li>
                                    <li><span className="blog__panel-comment">4 Comments</span></li>
                                    <li><span className="blog__panel-likes">130 Likes</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="cta-area pad_t_115px pad_b_90px text-center">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 column-td-half">
                <div className="post-card">
                    <div className="post-card-content">
                        <img src={`${images_path}img33.jpg`}  alt="" className="img-fluid"/>
                        <h2 className="widget-title mt-4 mb-2">Become Instructor</h2>
                        <p>Teach what you love. Aduca gives you the tools to create a course.</p>
                    </div>
                    <div className="btn-box mar_t_30px">
                        <a href="#" className="theme-btn">Start Teaching</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 column-td-half">
                <div className="post-card">
                    <div className="post-card-content">
                        <img src={`${images_path}img34.jpg`}  alt="" className="img-fluid"/>
                        <h2 className="widget-title mt-4 mb-2">Become a Learner</h2>
                        <p>Learn what you love! transform your life through education</p>
                    </div>
                    <div className="btn-box mar_t_30px">
                        <a href="#" className="theme-btn">Start Learning</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 column-td-half">
                <div className="post-card">
                    <div className="post-card-content">
                        <img src={`${images_path}img35.jpg`}  alt="" className="img-fluid"/>
                        <h2 className="widget-title mt-4 mb-2">Aduca for Business</h2>
                        <p>Get unlimited access to 5,000+ of Aduca's top courses for your team</p>
                    </div>
                    <div className="btn-box mar_t_30px">
                        <a href="#" className="theme-btn">Get aduca for business</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="subscriber-area pad_t_80px pad_b_75px">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <div className="section-heading">
                    <h5 className="section__meta section__metalight">newsletter</h5>
                    <h2 className="section__title text-white">Subscribe our newsletter</h2>
                    <span className="section-divider section-divider-light"></span>
                    <p className="section__desc mb-0 text-color-rgba">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                </div>
            </div>
            <div className="col-lg-6 ml-auto">
                <div className="subscriber-form">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="input-box">
                                <label className="form-label text-white">Your email address</label>
                                <div className="form-group data_flex align-items-center">
                                    <input className="form-control custinpElm" type="email" name="email" placeholder="Enter your email" required/>
                                    <span className="la la-envelope-o input-icon"></span>
                                    <button className="theme-btn theme-btn-hover-light" type="submit">Subscribe</button>
                                </div>
                                <p className="text-color-rgba font_s_14 mt-1">
                                   <i className="la la-lock mr-1"></i>Your information is safe with us! unsubscribe anytime.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  );
}
export default Cards;