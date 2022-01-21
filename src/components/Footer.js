import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="section footer-section">
          {/* <!-- Footer Widget Section Start --> */}
          <div class="footer-widget-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
                  {/* <!-- Footer Widget Start --> */}
                  <div class="footer-widget">
                    <div class="widget-logo">
                      <a href="/#">
                        {/* <img src="assets/images/logo.png" alt="Logo" /> */}
                      </a>
                    </div>

                    <div class="widget-address">
                      <h4 class="footer-widget-title">Algonquin College</h4>
                      <p>Ottawa, Ontario (CA).</p>
                    </div>

                    <ul class="widget-info">
                      <li>
                        <p>
                          {" "}
                          <i class="flaticon-email"></i>{" "}
                          <a href="mailto:address@gmail.com">
                            bb@learninghub.com
                          </a>{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          {" "}
                          <i class="flaticon-phone-call"></i>{" "}
                          <a href="tel:9702621413">(123) 456-7890</a>{" "}
                        </p>
                      </li>
                    </ul>

                    <ul class="widget-social">
                      <li>
                        <a href="/#">
                          <i class="flaticon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="flaticon-skype"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Footer Widget End --> */}
                </div>
                <div class="col-lg-6 order-md-3 order-lg-2">
                  {/* <!-- Footer Widget Link Start --> */}
                  <div class="footer-widget-link">
                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget">
                      <h4 class="footer-widget-title">Partners</h4>

                      <ul class="widget-link">
                        <li>
                          <a href="/#">Udemy</a>
                        </li>
                        <li>
                          <a href="/#">CourseEra</a>
                        </li>
                        <li>
                          <a href="/#">CodeWithMosh</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Footer Widget End --> */}

                    {/* <!-- Footer Widget Start --> */}
                    <div class="footer-widget">
                      <h4 class="footer-widget-title">Quick Links</h4>

                      <ul class="widget-link">
                        <li>
                          <a href="/#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/#">Discussion</a>
                        </li>
                        <li>
                          <a href="/#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="/#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                  </div>
                  {/* <!-- Footer Widget Link End --> */}
                </div>
                <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
                  {/* <!-- Footer Widget Start --> */}
                  <div class="footer-widget">
                    <h4 class="footer-widget-title">Subscribe</h4>

                    <div class="widget-subscribe">
                      <p>Join our mailing list</p>

                      <div class="widget-form">
                        <form action="#">
                          <input type="text" placeholder="Email here" />
                          <button class="btn btn-primary btn-hover-dark">
                            Subscribe Now
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Footer Widget End --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Widget Section End --> */}

          {/* <!-- Footer Copyright Start --> */}
          <div class="footer-copyright">
            <div class="container">
              {/* <!-- Footer Copyright Start --> */}
              <div class="copyright-wrapper">
                <div class="copyright-link">
                  <a href="/#">Terms of Service</a>
                  <a href="/#">Privacy Policy</a>
                </div>
                <div class="copyright-text">
                  <p>
                    &copy; 2021 <span> Learning Hub </span> Made with{" "}
                    <i class="icofont-heart-alt"></i> by{" "}
                    <a href="/#">Binary Beasts</a>
                  </p>
                </div>
              </div>
              {/* <!-- Footer Copyright End --> */}
            </div>
          </div>
          {/* <!-- Footer Copyright End --> */}
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
