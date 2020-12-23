import './Footer.css';
function Footer() {
  return (
    <footer className="row_full footer_bg pad_t_b_45">
        <div className="container">
            <div className="row">
                <div class="col-md-4">
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

                <div class="col-md-6">
                    <div className="footer_title row_full">
                        <h3 className="pad_l_100">About us</h3>
                        <p style={{color:'#424242'}} className="mar_b_0">Copyright &copy; 2020 Gyansutram, All Rights  Reserved</p>
                    </div>
                </div>

                <div class="col-md-2">
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