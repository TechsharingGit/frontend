import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Header.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';



const Header = () => {

    return (
        <div>
            <div className="preloader">
                <div className="loader">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                    </svg>
                </div>
            </div>

            <header className="headerCntr">
                <div className="header-top hideonMob" style={{background:'#30393a'}}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-10">
                                <div className="headerBox">
                                    <ul className="topmenu subMenuParent" style={{paddingLeft:'238px'}}>
                                        <li className="first"><Link to="/offering" className="first">Offerings</Link></li>
                                        <li className=""><Link to="/ourresult" className="">Our Result</Link>
                                            <div className="subMenuBox">
                                                <ul>
                                                    <li><Link to="/testimonials">Testimonials</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className=""><Link to="/career" className="">Career</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 float-right">
                                <div className="headerBox data_flex align-items-center justify-content-end">
                                    <div className="header-right-info">
                                        <ul className="header_Signup">
                                            <li><a href="javascript:void(0);" className="getCall">Sign In</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="header-menu-content">
                    <div className="pos_rel">
                        <div className="hideonMob h_Top">
                            <div className="container">
                                <div className="main-menu-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <ul className="subMenuParent">
                                                <li><Link to="/directormsg">Director Message</Link></li>
                                                <li><Link to="/schoolpartner">School Partner's</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            &nbsp;
                                        </div>
                                        <div className="col-lg-5 float-right">
                                            <ul className="subMenuParent">
                                                <li><Link to="/offering">Domains</Link>
                                                    <div className="subMenuBox">
                                                        <ul>
                                                            <li><Link to="/offering">Pathsala</Link></li>
                                                            <li><Link to="/offering">E - Gyan</Link></li>
                                                            <li><Link to="/offering">Cambridge Program</Link></li>
                                                            <li><Link to="/offering">Content Development</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><Link to="/offering">Course Details</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="logoBox">
                            <Link to="/">
                                <img src={`${images_path}logo.png`}/>
                            </Link>
                        </div>

                        <div className="menu-toggler">
                            <i className="fa fa-bars"></i>
                            <i className="fa fa-times"></i>
                        </div>

                        <nav className="main-menu mobileMenu">
                            <ul>
                                <li><Link to="/directormsg">Director Message</Link></li>
                                <li><Link to="/schoolpartner">School Partner's</Link></li>
                                <li>
                                    <Link to="/domains">Domains</Link>
                                    <ul className="dropdown-menu-item">
                                        <li><Link to="/pathsala">Pathsala</Link></li>
                                        <li><Link to="/egyan">E - Gyan</Link></li>
                                        <li><Link to="/cambridge">Cambridge Program</Link></li>
                                        <li><Link to="/contentdev">Content Development</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/course">Course Details</Link></li>
                                <li>
                                    <Link to="/studentscor">Student's Corner</Link>
                                    <ul className="dropdown-menu-item">
                                        <li><Link to="/askyourque">Ask Your Question</Link></li>
                                        <li><Link to="/exam">Exams</Link>
                                            <ul className="dropdown-menu-item">
                                                <li><Link to="/neet">NEET</Link></li>
                                                <li><Link to="/jee">JEE</Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="/mains">MAINS</Link></li>
                                                        <li><Link to="/advance">ADVANCE</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/kvpy">KVPY</Link></li>
                                                <li><Link to="/ntse">NTSE</Link></li>
                                                <li><Link to="/nse">NSE</Link></li>
                                                <li><Link to="/olymplads">OlYMPLADS</Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                </li>
                                <li><Link to="/expert">Expert Counselling</Link></li>
                                <li><Link to="/collageran">College Rankings</Link></li>
                                <li><Link to="/collagepre">College Predictors</Link></li>
                                <li><Link to="/examres">Exams Results</Link>
                                    <ul className="dropdown-menu-item">
                                        <li><Link to="/neet">NEET</Link></li>
                                        <li><Link to="/jee">JEE</Link>
                                            <ul className="dropdown-menu-item">
                                                <li><Link to="/mains">MAINS</Link></li>
                                                <li><Link to="/advance">ADVANCE</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/kvpy">KVPY</Link></li>
                                        <li><Link to="/ntse">NTSE</Link></li>
                                        <li><Link to="/nse">NSE</Link></li>
                                        <li><Link to="/olymplads">OlYMPLADS</Link></li>
                                    </ul>
                                </li>
                        </ul>         
                        </nav>

                        <div className="h_Top last hideonMob">
                            <div className="container">
                                <div className="main-menu-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <ul className="subMenuParent">
                                                <li><Link to="/studentscor">Student's Corner</Link>
                                                    <div className="subMenuBox">
                                                        <ul>
                                                            <li><Link to="/askyourque">Ask Your Question</Link></li>
                                                            <li><Link to="/exam">Exams</Link>
                                                                <div className="subMenuBox1">
                                                                    <ul>
                                                                        <li><Link to="/neet">NEET</Link></li>
                                                                        <li><Link to="/jee">JEE</Link>
                                                                            <div className="subMenuBox2">
                                                                                <ul>
                                                                                    <li><Link to="/mains">MAINS</Link></li>
                                                                                    <li><Link to="/advance">ADVANCE</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li><Link to="/kvpy">KVPY</Link></li>
                                                                        <li><Link to="/ntse">NTSE</Link></li>
                                                                        <li><Link to="/nse">NSE</Link></li>
                                                                        <li><Link to="/olymplads">OlYMPLADS</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><Link to="/expert">Expert Counselling</Link></li>
                                                            <li><Link to="/collageran">College Rankings</Link></li>
                                                            <li><Link to="/collagepre">College Predictors</Link></li>
                                                            <li><Link to="/examres">Exams Results</Link>
                                                                <div className="subMenuBox1">
                                                                    <ul>
                                                                        <li><Link to="/neet">NEET</Link></li>
                                                                        <li><Link to="/jee">JEE</Link>
                                                                            <div className="subMenuBox2">
                                                                                <ul>
                                                                                    <li><Link to="/mains">MAINS</Link></li>
                                                                                    <li><Link to="/offeadvancering">ADVANCE</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li><Link to="/kvpy">KVPY</Link></li>
                                                                        <li><Link to="/ntse">NTSE</Link></li>
                                                                        <li><Link to="/nse">NSE</Link></li>
                                                                        <li><Link to="/olymplads">OlYMPLADS</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><Link to="/freestudymat">Free Study Material</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            &nbsp;
                                        </div>
                                        <div className="col-lg-5 float-right">
                                            <ul className="subMenuParent">
                                                <li><Link to="/news">News & Events</Link>
                                                    <div className="subMenuBox">
                                                        <ul>
                                                            <li><Link to="/blogs">Blogs</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><Link to="/reachus">Reach Us</Link>
                                                    <div className="subMenuBox">
                                                        <ul>
                                                            <li><Link to="/enquiryform">Enquiry Forms</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div> 
    );
}

export default Header