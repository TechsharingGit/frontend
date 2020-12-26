import './Footer.css';
function Footer() {
  return (
    <footer className="row_full footer_bg pad_t_b_45">
        <div className="container">
            <div className="row">
                <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 float_l mob_m_b_20">
                    <div className="footer_title row_full">
                        <h3>Follow us</h3>
                        <ul className="socialLink">
                            <li><a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 float_l mob_m_b_20">
                    <div className="footer_title row_full">
                        <h3 className="pad_l_100">About us</h3>
                        <p style={{color:'#424242'}} className="mar_b_0">Copyright &copy; 2020 Gyansutram, All Rights  Reserved</p>
                    </div>
                </div>

                <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 float_l">
                    <div className="footer_title row_full">
                        <h3>Contact us</h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
export default Footer;