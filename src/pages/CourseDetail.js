import React from "react";

// import React from "react"''
// class SomePage extends React.Component{
//     render() {
//         return (<div>
//TODO: Paste the div from <body> tag from html file and paste here.
//         </div>);
//     }
// }
//export default SomePage;

class CourseDetail extends React.Component {
  render() {
    return (
      <div>
        <div class="main-wrapper">
          {/* <!-- Header Section Start */}
          <div class="header-section">
            {/* <!-- Header Top Start */}
            <div class="header-top d-none d-lg-block">
              <div class="container">
                {/* <!-- Header Top Wrapper Start */}
                <div class="header-top-wrapper">
                  {/* <!-- Header Top Left Start */}
                  <div class="header-top-left">
                    <p>
                      All course 28% off for <a href="/#">Liberian people’s.</a>
                    </p>
                  </div>
                  {/* <!-- Header Top Left End */}

                  {/* <!-- Header Top Medal Start */}
                  <div class="header-top-medal">
                    <div class="top-info">
                      <p>
                        <i class="flaticon-phone-call"></i>{" "}
                        <a href="tel:9702621413">(970) 262-1413</a>
                      </p>
                      <p>
                        <i class="flaticon-email"></i>{" "}
                        <a href="mailto:address@gmail.com">address@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  {/* <!-- Header Top Medal End */}

                  {/* <!-- Header Top Right Start */}
                  <div class="header-top-right">
                    <ul class="social">
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
                  {/* <!-- Header Top Right End */}
                </div>
                {/* <!-- Header Top Wrapper End */}
              </div>
            </div>
            {/* <!-- Header Top End */}

            {/* <!-- Header Main Start */}
            <div class="header-main">
              <div class="container">
                {/* <!-- Header Main Start */}
                <div class="header-main-wrapper">
                  {/* <!-- Header Logo Start */}
                  <div class="header-logo">
                    <a href="index.html">
                      <img src="assets/images/logo.png" alt="Logo" />
                    </a>
                  </div>
                  {/* <!-- Header Logo End */}

                  {/* <!-- Header Menu Start */}
                  <div class="header-menu d-none d-lg-block">
                    <ul class="nav-menu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="/#">All Course</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="courses.html">Courses</a>
                          </li>
                          <li>
                            <a href="courses-details.html">Courses Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/#">Pages </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="404-error.html">404 Error</a>
                          </li>
                          <li>
                            <a href="after-enroll.html">After Enroll</a>
                          </li>
                          <li>
                            <a href="courses-admin.html">
                              Instructor Dashboard (Course List)
                            </a>
                          </li>
                          <li>
                            <a href="overview.html">
                              Instructor Dashboard (Performance)
                            </a>
                          </li>
                          <li>
                            <a href="students.html">Students</a>
                          </li>
                          <li>
                            <a href="reviews.html">Reviews</a>
                          </li>
                          <li>
                            <a href="engagement.html">Course engagement</a>
                          </li>
                          <li>
                            <a href="traffic-conversion.html">
                              Traffic & conversion
                            </a>
                          </li>
                          <li>
                            <a href="messages.html">Messages</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/#">Blog</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="/#">Blog</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="blog-grid.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  Blog Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">
                                  Blog Right Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/#">Blog Details</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="blog-details-left-sidebar.html">
                                  Blog Details Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-right-sidebar.html">
                                  Blog Details Right Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Header Menu End */}

                  {/* <!-- Header Sing In & Up Start */}
                  <div class="header-sign-in-up d-none d-lg-block">
                    <ul>
                      <li>
                        <a class="sign-in" href="login.html">
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a class="sign-up" href="register.html">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Header Sing In & Up End */}

                  {/* <!-- Header Mobile Toggle Start */}
                  <div class="header-toggle d-lg-none">
                    <a class="menu-toggle" href="javascript:void(0)">
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                  {/* <!-- Header Mobile Toggle End */}
                </div>
                {/* <!-- Header Main End */}
              </div>
            </div>
            {/* <!-- Header Main End */}
          </div>
          {/* <!-- Header Section End */}

          {/* <!-- Mobile Menu Start */}
          <div class="mobile-menu">
            {/* <!-- Menu Close Start */}
            <a class="menu-close" href="javascript:void(0)">
              <i class="icofont-close-line"></i>
            </a>
            {/* <!-- Menu Close End */}

            {/* <!-- Mobile Top Medal Start */}
            <div class="mobile-top">
              <p>
                <i class="flaticon-phone-call"></i>{" "}
                <a href="tel:9702621413">(970) 262-1413</a>
              </p>
              <p>
                <i class="flaticon-email"></i>{" "}
                <a href="mailto:address@gmail.com">address@gmail.com</a>
              </p>
            </div>
            {/* <!-- Mobile Top Medal End */}

            {/* <!-- Mobile Sing In & Up Start */}
            <div class="mobile-sign-in-up">
              <ul>
                <li>
                  <a class="sign-in" href="login.html">
                    Sign In
                  </a>
                </li>
                <li>
                  <a class="sign-up" href="register.html">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Mobile Sing In & Up End */}

            {/* <!-- Mobile Menu Start */}
            <div class="mobile-menu-items">
              <ul class="nav-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="/#">All Course</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="courses-details.html">Courses Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Pages </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="404-error.html">404 Error</a>
                    </li>
                    <li>
                      <a href="after-enroll.html">After Enroll</a>
                    </li>
                    <li>
                      <a href="courses-admin.html">
                        Instructor Dashboard (Course List)
                      </a>
                    </li>
                    <li>
                      <a href="overview.html">
                        Instructor Dashboard (Performance)
                      </a>
                    </li>
                    <li>
                      <a href="students.html">Students</a>
                    </li>
                    <li>
                      <a href="reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="engagement.html">Course engagement</a>
                    </li>
                    <li>
                      <a href="traffic-conversion.html">Traffic & conversion</a>
                    </li>
                    <li>
                      <a href="messages.html">Messages</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Blog</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="/#">Blog</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="blog-grid.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Blog Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">Blog Details</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="blog-details-left-sidebar.html">
                            Blog Details Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-right-sidebar.html">
                            Blog Details Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-- Mobile Menu End */}

            {/* <!-- Mobile Menu End */}
            <div class="mobile-social">
              <ul class="social">
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
            {/* <!-- Mobile Menu End */}
          </div>
          {/* <!-- Mobile Menu End */}

          {/* <!-- Overlay Start */}
          <div class="overlay"></div>
          {/* <!-- Overlay End */}

          {/* <!-- Page Banner Start */}
          <div class="section page-banner">
            <img
              class="shape-1 animation-round"
              src="assets/images/shape/shape-8.png"
              alt="Shape"
            />

            <img
              class="shape-2"
              src="assets/images/shape/shape-23.png"
              alt="Shape"
            />

            <div class="container">
              {/* <!-- Page Banner Start */}
              <div class="page-banner-content">
                <ul class="breadcrumb">
                  <li>
                    <a href="/#">Home</a>
                  </li>
                  <li class="active">Courses Details</li>
                </ul>
                <h2 class="title">
                  Courses <span> Details</span>
                </h2>
              </div>
              {/* <!-- Page Banner End */}
            </div>

            {/* <!-- Shape Icon Box Start */}
            <div class="shape-icon-box">
              <img
                class="icon-shape-1 animation-left"
                src="assets/images/shape/shape-5.png"
                alt="Shape"
              />

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
            {/* <!-- Shape Icon Box End */}

            <img
              class="shape-3"
              src="assets/images/shape/shape-24.png"
              alt="Shape"
            />

            <img
              class="shape-author"
              src="assets/images/author/author-11.jpg"
              alt="Shape"
            />
          </div>
          {/* <!-- Page Banner End */}

          {/* <!-- Courses Start */}
          <div class="section section-padding mt-n10">
            <div class="container">
              <div class="row gx-10">
                <div class="col-lg-8">
                  {/* <!-- Courses Details Start */}
                  <div class="courses-details">
                    <div class="courses-details-images">
                      <img
                        src="assets/images/courses/courses-details.jpg"
                        alt="Courses Details"
                      />
                      <span class="tags">Finance</span>

                      <div class="courses-play">
                        <img
                          src="assets/images/courses/circle-shape.png"
                          alt="Play"
                        />
                        <a
                          class="play video-popup"
                          href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"
                        >
                          <i class="flaticon-play"></i>
                        </a>
                      </div>
                    </div>

                    <h2 class="title">
                      Finance & Investment Series: Learn to Budget and Calculate
                      Your Net Worth.
                    </h2>

                    <div class="courses-details-admin">
                      <div class="admin-author">
                        <div class="author-thumb">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </div>
                        <div class="author-content">
                          <a class="name" href="/#">
                            Pamela Foster
                          </a>
                          <span class="Enroll">286 Community Members</span>
                        </div>
                      </div>
                      <div class="admin-rating">
                        <span class="rating-count">4.9</span>
                        <span class="rating-star">
                          <span
                            class="rating-bar"
                            style={{ width: "80%" }}
                          ></span>
                        </span>
                        <span class="rating-text">(5,764 Rating)</span>
                      </div>
                    </div>

                    {/* <!-- Courses Details Tab Start */}
                    <div class="courses-details-tab">
                      {/* <!-- Details Tab Menu Start */}
                      <div class="details-tab-menu">
                        <ul class="nav justify-content-center">
                          <li>
                            <button
                              class="active"
                              data-bs-toggle="tab"
                              data-bs-target="#description"
                            >
                              Description
                            </button>
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#instructors"
                            >
                              Instructors
                            </button>
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#reviews"
                            >
                              Reviews
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Details Tab Menu End */}

                      {/* <!-- Details Tab Content Start */}
                      <div class="details-tab-content">
                        <div class="tab-content">
                          <div
                            class="tab-pane fade show active"
                            id="description"
                          >
                            {/* <!-- Tab Description Start */}
                            <div class="tab-description">
                              <div class="description-wrapper">
                                <h3 class="tab-title">Description:</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </p>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularsed in the 1960 with
                                  release containing Lorem Ipsum passages
                                  desktop publishing software.
                                </p>
                              </div>
                              <div class="description-wrapper">
                                <h3 class="tab-title">Curriculum:</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularsed in the 1960 with
                                  release containing Lorem Ipsum passages
                                  desktop publishing software.
                                </p>
                              </div>
                              <div class="description-wrapper">
                                <h3 class="tab-title">Certification:</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularsed in the 1960 with
                                  release containing Lorem Ipsum passages
                                  desktop publishing software.
                                </p>
                              </div>
                            </div>
                            {/* <!-- Tab Description End */}
                          </div>
                          <div class="tab-pane fade" id="instructors">
                            {/* <!-- Tab Instructors Start */}
                            <div class="tab-instructors">
                              <h3 class="tab-title">Course Instructor:</h3>

                              <div class="row">
                                <div class="col-md-3 col-6">
                                  {/* <!-- Single Team Start */}
                                  <div class="single-team">
                                    <div class="team-thumb">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </div>
                                    <div class="team-content">
                                      <h4 class="name">Margarita James</h4>
                                      <span class="designation">
                                        MSC, Instructor
                                      </span>
                                    </div>
                                  </div>
                                  {/* <!-- Single Team End */}
                                </div>
                                <div class="col-md-3 col-6">
                                  {/* <!-- Single Team Start */}
                                  <div class="single-team">
                                    <div class="team-thumb">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </div>
                                    <div class="team-content">
                                      <h4 class="name">Mitchell Colon</h4>
                                      <span class="designation">
                                        BBA, Instructor
                                      </span>
                                    </div>
                                  </div>
                                  {/* <!-- Single Team End */}
                                </div>
                                <div class="col-md-3 col-6">
                                  {/* <!-- Single Team Start */}
                                  <div class="single-team">
                                    <div class="team-thumb">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </div>
                                    <div class="team-content">
                                      <h4 class="name">Sonya Gordon</h4>
                                      <span class="designation">
                                        MBA, Instructor
                                      </span>
                                    </div>
                                  </div>
                                  {/* <!-- Single Team End */}
                                </div>
                                <div class="col-md-3 col-6">
                                  {/* <!-- Single Team Start */}
                                  <div class="single-team">
                                    <div class="team-thumb">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </div>
                                    <div class="team-content">
                                      <h4 class="name">Archie Neal</h4>
                                      <span class="designation">
                                        BBS, Instructor
                                      </span>
                                    </div>
                                  </div>
                                  {/* <!-- Single Team End */}
                                </div>
                              </div>
                            </div>
                            {/* <!-- Tab Instructors End */}
                          </div>
                          <div class="tab-pane fade" id="reviews">
                            {/* <!-- Tab Reviews Start */}
                            <div class="tab-reviews">
                              <h3 class="tab-title">Student Reviews:</h3>

                              <div class="reviews-wrapper reviews-active">
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    {/* <!-- Single Reviews Start */}
                                    <div class="single-review swiper-slide">
                                      <div class="review-author">
                                        <div class="author-thumb">
                                          <img
                                            src="assets/images/author/author-06.jpg"
                                            alt="Author"
                                          />
                                          <i class="icofont-quote-left"></i>
                                        </div>
                                        <div class="author-content">
                                          <h4 class="name">Sara Alexander</h4>
                                          <span class="designation">
                                            Product Designer, USA
                                          </span>
                                          <span class="rating-star">
                                            <span
                                              class="rating-bar"
                                              style={{ width: "100%" }}
                                            ></span>
                                          </span>
                                        </div>
                                      </div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text since the 1500 when
                                        unknown printer took a galley of type
                                        and scrambled to make type specimen book
                                        has survived not five centuries but also
                                        the leap into electronic type and book.
                                      </p>
                                    </div>
                                    {/* <!-- Single Reviews End */}

                                    {/* <!-- Single Reviews Start */}
                                    <div class="single-review swiper-slide">
                                      <div class="review-author">
                                        <div class="author-thumb">
                                          <img
                                            src="assets/images/author/author-07.jpg"
                                            alt="Author"
                                          />
                                          <i class="icofont-quote-left"></i>
                                        </div>
                                        <div class="author-content">
                                          <h4 class="name">Karol Bachman</h4>
                                          <span class="designation">
                                            Product Designer, USA
                                          </span>
                                          <span class="rating-star">
                                            <span
                                              class="rating-bar"
                                              style={{ width: "100%" }}
                                            ></span>
                                          </span>
                                        </div>
                                      </div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text since the 1500 when
                                        unknown printer took a galley of type
                                        and scrambled to make type specimen book
                                        has survived not five centuries but also
                                        the leap into electronic type and book.
                                      </p>
                                    </div>
                                    {/* <!-- Single Reviews End */}

                                    {/* <!-- Single Reviews Start */}
                                    <div class="single-review swiper-slide">
                                      <div class="review-author">
                                        <div class="author-thumb">
                                          <img
                                            src="assets/images/author/author-03.jpg"
                                            alt="Author"
                                          />
                                          <i class="icofont-quote-left"></i>
                                        </div>
                                        <div class="author-content">
                                          <h4 class="name">
                                            Gertude Culbertson
                                          </h4>
                                          <span class="designation">
                                            Product Designer, USA
                                          </span>
                                          <span class="rating-star">
                                            <span
                                              class="rating-bar"
                                              style={{ width: "100%" }}
                                            ></span>
                                          </span>
                                        </div>
                                      </div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text since the 1500 when
                                        unknown printer took a galley of type
                                        and scrambled to make type specimen book
                                        has survived not five centuries but also
                                        the leap into electronic type and book.
                                      </p>
                                    </div>
                                    {/* <!-- Single Reviews End */}
                                  </div>
                                  {/* <!-- Add Pagination */}
                                  <div class="swiper-pagination"></div>
                                </div>
                              </div>

                              <div class="reviews-btn">
                                <button
                                  type="button"
                                  class="btn btn-primary btn-hover-dark"
                                  data-bs-toggle="modal"
                                  data-bs-target="#reviewsModal"
                                >
                                  Write A Review
                                </button>
                              </div>

                              {/* <!-- Reviews Form Modal Start */}
                              <div class="modal fade" id="reviewsModal">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title">Add a Review</h5>
                                      <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>

                                    {/* <!-- Reviews Form Start */}
                                    <div class="modal-body reviews-form">
                                      <form action="#">
                                        <div class="row">
                                          <div class="col-md-6">
                                            {/* <!-- Single Form Start */}
                                            <div class="single-form">
                                              <input
                                                type="text"
                                                placeholder="Enter your name"
                                              />
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div class="col-md-6">
                                            {/* <!-- Single Form Start */}
                                            <div class="single-form">
                                              <input
                                                type="text"
                                                placeholder="Enter your Email"
                                              />
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div class="col-md-12">
                                            {/* <!-- Single Form Start */}
                                            <div class="reviews-rating">
                                              <label>Rating</label>
                                              <ul id="rating" class="rating">
                                                <li
                                                  class="star"
                                                  title="Poor"
                                                  data-value="1"
                                                >
                                                  <i class="icofont-star"></i>
                                                </li>
                                                <li
                                                  class="star"
                                                  title="Poor"
                                                  data-value="2"
                                                >
                                                  <i class="icofont-star"></i>
                                                </li>
                                                <li
                                                  class="star"
                                                  title="Poor"
                                                  data-value="3"
                                                >
                                                  <i class="icofont-star"></i>
                                                </li>
                                                <li
                                                  class="star"
                                                  title="Poor"
                                                  data-value="4"
                                                >
                                                  <i class="icofont-star"></i>
                                                </li>
                                                <li
                                                  class="star"
                                                  title="Poor"
                                                  data-value="5"
                                                >
                                                  <i class="icofont-star"></i>
                                                </li>
                                              </ul>
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div class="col-md-12">
                                            {/* <!-- Single Form Start */}
                                            <div class="single-form">
                                              <textarea placeholder="Write your comments here"></textarea>
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div class="col-md-12">
                                            {/* <!-- Single Form Start */}
                                            <div class="single-form">
                                              <button class="btn btn-primary btn-hover-dark">
                                                Submit Review
                                              </button>
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    {/* <!-- Reviews Form End */}
                                  </div>
                                </div>
                              </div>
                              {/* <!-- Reviews Form Modal End */}
                            </div>
                            {/* <!-- Tab Reviews End */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Details Tab Content End */}
                    </div>
                    {/* <!-- Courses Details Tab End */}
                  </div>
                  {/* <!-- Courses Details End */}
                </div>
                <div class="col-lg-4">
                  {/* <!-- Courses Details Sidebar Start */}
                  <div class="sidebar">
                    {/* <!-- Sidebar Widget Information Start */}
                    <div class="sidebar-widget widget-information">
                      <div class="info-price">
                        <span class="price">$420.38</span>
                      </div>
                      <div class="info-list">
                        <ul>
                          <li>
                            <i class="icofont-man-in-glasses"></i>{" "}
                            <strong>Instructor</strong>{" "}
                            <span>Pamela Foster</span>
                          </li>

                          <li>
                            <i class="icofont-ui-video-play"></i>{" "}
                            <strong>Lectures</strong> <span>29</span>
                          </li>
                          <li>
                            <i class="icofont-certificate-alt-1"></i>{" "}
                            <strong>Certificate</strong> <span>Yes</span>
                          </li>
                        </ul>
                      </div>
                      <div class="info-btn">
                        <a href="/#" class="btn btn-primary btn-hover-dark">
                          Enroll Now
                        </a>
                      </div>
                    </div>
                    {/* <!-- Sidebar Widget Information End */}

                    {/* <!-- Sidebar Widget Share Start */}
                    <div class="sidebar-widget">
                      <h4 class="widget-title">Share Course:</h4>

                      <ul class="social">
                        <li>
                          <a href="/#">
                            <i class="flaticon-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i class="flaticon-linkedin"></i>
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
                    {/* <!-- Sidebar Widget Share End */}
                  </div>
                  {/* <!-- Courses Details Sidebar End */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Courses End */}

          {/* <!-- Footer Start  */}
          <div class="section footer-section">
            {/* <!-- Footer Widget Section Start */}
            <div class="footer-widget-section">
              <img
                class="shape-1 animation-down"
                src="assets/images/shape/shape-21.png"
                alt="Shape"
              />

              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
                    {/* <!-- Footer Widget Start */}
                    <div class="footer-widget">
                      <div class="widget-logo">
                        <a href="/#">
                          <img src="assets/images/logo.png" alt="Logo" />
                        </a>
                      </div>

                      <div class="widget-address">
                        <h4 class="footer-widget-title">Caribbean Ct</h4>
                        <p>Haymarket, Virginia (VA).</p>
                      </div>

                      <ul class="widget-info">
                        <li>
                          <p>
                            {" "}
                            <i class="flaticon-email"></i>{" "}
                            <a href="mailto:address@gmail.com">
                              address@gmail.com
                            </a>{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <i class="flaticon-phone-call"></i>{" "}
                            <a href="tel:9702621413">(970) 262-1413</a>{" "}
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
                    {/* <!-- Footer Widget End */}
                  </div>
                  <div class="col-lg-6 order-md-3 order-lg-2">
                    {/* <!-- Footer Widget Link Start */}
                    <div class="footer-widget-link">
                      {/* <!-- Footer Widget Start */}
                      <div class="footer-widget">
                        <h4 class="footer-widget-title">Category</h4>

                        <ul class="widget-link">
                          <li>
                            <a href="/#">Creative Writing</a>
                          </li>
                          <li>
                            <a href="/#">Film & Video</a>
                          </li>
                          <li>
                            <a href="/#">Graphic Design</a>
                          </li>
                          <li>
                            <a href="/#">UI/UX Design</a>
                          </li>
                          <li>
                            <a href="/#">Business Analytics</a>
                          </li>
                          <li>
                            <a href="/#">Marketing</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Footer Widget End */}

                      {/* <!-- Footer Widget Start */}
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
                            <a href="/#">Customer Support</a>
                          </li>
                          <li>
                            <a href="/#">Course FAQ’s</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Footer Widget End */}
                    </div>
                    {/* <!-- Footer Widget Link End */}
                  </div>
                  <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
                    {/* <!-- Footer Widget Start */}
                    <div class="footer-widget">
                      <h4 class="footer-widget-title">Subscribe</h4>

                      <div class="widget-subscribe">
                        <p>
                          Lorem Ipsum has been them an industry printer took a
                          galley make book.
                        </p>

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
                    {/* <!-- Footer Widget End */}
                  </div>
                </div>
              </div>

              <img
                class="shape-2 animation-left"
                src="assets/images/shape/shape-22.png"
                alt="Shape"
              />
            </div>
            {/* <!-- Footer Widget Section End */}

            {/* <!-- Footer Copyright Start */}
            <div class="footer-copyright">
              <div class="container">
                {/* <!-- Footer Copyright Start */}
                <div class="copyright-wrapper">
                  <div class="copyright-link">
                    <a href="/#">Terms of Service</a>
                    <a href="/#">Privacy Policy</a>
                    <a href="/#">Sitemap</a>
                    <a href="/#">Security</a>
                  </div>
                  <div class="copyright-text">
                    <p>
                      &copy; 2021 <span> Edule </span> Made with{" "}
                      <i class="icofont-heart-alt"></i> by{" "}
                      <a href="/#">Codecarnival</a>
                    </p>
                  </div>
                </div>
                {/* <!-- Footer Copyright End */}
              </div>
            </div>
            {/* <!-- Footer Copyright End */}
          </div>
          {/* <!-- Footer End */}

          {/* <!--Back To Start*/}
          <a href="/#" class="back-to-top">
            <i class="icofont-simple-up"></i>
          </a>
          {/* <!--Back To End*/}
        </div>
      </div>
    );
  }
}

export default CourseDetail;
