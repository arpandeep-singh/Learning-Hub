import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="main-wrapper">
          {/* <!-- Header Section Start --> */}
          <Header />
          {/* <!-- Header Section End --> */}

          {/* <!-- Overlay Start --> */}
          <div class="overlay"></div>
          {/* <!-- Overlay End --> */}

          {/* <!-- Page Banner Start --> */}
          <div class="section page-banner">
            <div class="container">
              {/* <!-- Page Banner Start --> */}
              <div class="page-banner-content">
                <ul class="breadcrumb">
                  <li>
                    <a href="/#">Home</a>
                  </li>
                  <li class="active">Login</li>
                </ul>
                <h2 class="title">
                  Login <span>Form</span>
                </h2>
              </div>
              {/* <!-- Page Banner End --> */}
            </div>

            {/* <!-- Shape Icon Box Start --> */}
            <div class="shape-icon-box">
              {/* <img
                class="icon-shape-1 animation-left"
                src="assets/images/shape/shape-5.png"
                alt="Shape"
              /> */}

              <div class="box-content">
                <div class="box-wrapper">
                  <i class="flaticon-badge"></i>
                </div>
              </div>

              <img
                class="icon-shape-2"
                src="assets/images/shape/shape-6.png"
                alt="Shape"
              />
            </div>
            {/* <!-- Shape Icon Box End --> */}

            {/* <img
              class="shape-3"
              src="assets/images/shape/shape-24.png"
              alt="Shape"
            /> */}

            <img
              class="shape-author"
              src="assets/images/author/author-11.jpg"
              alt="Shape"
            />
          </div>
          {/* <!-- Page Banner End --> */}

          {/* <!-- Register & Login Start --> */}
          <div class="section section-padding">
            <div class="container">
              {/* <!-- Register & Login Wrapper Start --> */}
              <div class="register-login-wrapper">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    {/* <!-- Register & Login Images Start --> */}
                    <div class="register-login-images">
                      <div class="shape-1">
                        <img
                          src="assets/images/shape/shape-26.png"
                          alt="Shape"
                        />
                      </div>

                      <div class="images">
                        <img
                          src="assets/images/register-login.png"
                          alt="Register Login"
                        />
                      </div>
                    </div>
                    {/* <!-- Register & Login Images End --> */}
                  </div>
                  <div class="col-lg-6">
                    {/* <!-- Register & Login Form Start --> */}
                    <div class="register-login-form">
                      <h3 class="title">
                        Login <span>Now</span>
                      </h3>

                      <div class="form-wrapper">
                        <form action="/#">
                          {/* <!-- Single Form Start --> */}
                          <div class="single-form">
                            <input
                              type="email"
                              placeholder="Username or Email"
                            />
                          </div>
                          {/* <!-- Single Form End --> */}
                          {/* <!-- Single Form Start --> */}
                          <div class="single-form">
                            <input type="password" placeholder="Password" />
                          </div>
                          {/* <!-- Single Form End --> */}
                          {/* <!-- Single Form Start --> */}
                          <div class="single-form">
                            <button class="btn btn-primary btn-hover-dark w-100">
                              Login
                            </button>
                            <a
                              class="btn btn-secondary btn-outline w-100"
                              href="/#"
                            >
                              Register
                            </a>
                          </div>
                          {/* <!-- Single Form End --> */}
                        </form>
                      </div>
                    </div>
                    {/* <!-- Register & Login Form End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Register & Login Wrapper End --> */}
            </div>
          </div>
          {/* <!-- Register & Login End --> */}

          {/* <!-- Footer Start  --> */}
          <Footer />
          {/* <!-- Footer End --> */}

          {/* <!--Back To Start--> */}
          <a href="/#" class="back-to-top">
            <i class="icofont-simple-up"></i>
          </a>
          {/* <!--Back To End--> */}
        </div>
      </React.Fragment>
    );
  }
}
export default LoginPage;
