import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div class="main-wrapper">
            {/* <!-- Header Section Start --> */}
            <Header />
            {/* <!-- Header Section End --> */}

            {/* <!-- Overlay Start --> */}
            <div class="overlay"></div>
            {/* <!-- Overlay End --> */}

            {/* <!-- Slider Start --> */}
            <div class="section slider-section">
              {/* <!-- Slider Shape Start --> */}
              <div class="slider-shape"></div>
              {/* <!-- Slider Shape End --> */}

              <div class="container">
                {/* <!-- Slider Content Start --> */}
                <div class="slider-content">
                  <h4 class="sub-title">Start your favourite course</h4>
                  <h2 class="main-title">
                    Now join a community, and find your{" "}
                    <span>learning cohort.</span>
                  </h2>
                  <p></p>
                  <a class="btn btn-primary btn-hover-dark" href="/#">
                    Start A Course
                  </a>
                </div>
                {/* <!-- Slider Content End --> */}
              </div>

              {/* <!-- Slider Courses Box Start --> */}
              <div class="slider-courses-box">
                <div class="box-content">
                  <div class="box-wrapper">
                    <i class="flaticon-open-book"></i>
                    <span class="count">1,235</span>
                    <p>communities</p>
                  </div>
                </div>
              </div>
              {/* <!-- Slider Courses Box End --> */}

              {/* <!-- Slider Rating Box Start --> */}
              {/* <div class="slider-rating-box">
                <div class="box-rating">
                  <div class="box-wrapper">
                    <span class="count">
                      4.8 <i class="flaticon-star"></i>
                    </span>
                    <p>Rating (86K)</p>
                  </div>
                </div>
              </div> */}
              {/* <!-- Slider Rating Box End --> */}

              {/* <!-- Slider Images Start --> */}
              <div class="slider-images">
                <div class="images">
                  <img src="assets/images/slider/slider-1.png" alt="Slider" />
                </div>
              </div>
              {/* <!-- Slider Images End --> */}

              {/* <!-- Slider Video Start --> */}
              <div class="slider-video"></div>
              {/* <!-- Slider Video End --> */}
            </div>
            {/* <!-- Slider End --> */}

            {/* <!-- All Courses Start --> */}
            <div class="section section-padding-02">
              <div class="container">
                {/* <!-- All Courses Top Start --> */}
                <div class="courses-top">
                  {/* <!-- Section Title Start --> */}
                  <div class="section-title shape-01">
                    <h2 class="main-title">
                      All <span>Courses</span> in Learning Hub
                    </h2>
                  </div>
                  {/* <!-- Section Title End --> */}

                  {/* <!-- Courses Search Start --> */}
                  <div class="courses-search">
                    <form action="#">
                      <input type="text" placeholder="Search your course" />
                      <button>
                        <i class="flaticon-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  {/* <!-- Courses Search End --> */}
                </div>
                {/* <!-- All Courses Top End --> */}

                {/* <!-- All Courses Tabs Menu Start --> */}
                <div class="courses-tabs-menu courses-active">
                  <div class="swiper-container">
                    <ul class="swiper-wrapper nav">
                      <li class="swiper-slide">
                        <button
                          class="active"
                          data-bs-toggle="tab"
                          data-bs-target="#tabs1"
                        >
                          Python
                        </button>
                      </li>
                      <li class="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs2">
                          Development
                        </button>
                      </li>
                      <li class="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs3">
                          Data Science
                        </button>
                      </li>
                      <li class="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs4">
                          Business
                        </button>
                      </li>
                      <li class="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs5">
                          Financial
                        </button>
                      </li>
                      <li class="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs6">
                          Marketing
                        </button>
                      </li>
                      <li class="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs7">
                          Design
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Add Pagination --> */}
                  <div class="swiper-button-next">
                    <i class="icofont-rounded-right"></i>
                  </div>
                  <div class="swiper-button-prev">
                    <i class="icofont-rounded-left"></i>
                  </div>
                </div>
                {/* <!-- All Courses Tabs Menu End --> */}

                {/* <!-- All Courses tab content Start --> */}
                <div class="tab-content courses-tab-content">
                  <div class="tab-pane fade show active" id="tabs1">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <Link to="/course-detail">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </Link>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <Link to="/course-detail">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </Link>
                              {/* <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a> */}
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <Link to="/course-detail">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </Link>
                              {/* <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a> */}
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <Link to="/course-detail">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </Link>
                              {/* <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a> */}
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <Link to="/course-detail">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </Link>
                              {/* <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a> */}
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <Link to="/course-detail">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </Link>
                              {/* <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a> */}
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                  <div class="tab-pane fade" id="tabs2">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-02.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-05.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Pamela Foster
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Create Amazing Color Schemes for Your UX
                                  Design Projects
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$420.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Rose Simmons
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Culture & Leadership: Strategies for a
                                  Successful Business
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$295.00</span>
                                  <span class="old-parice">$340.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-04.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Finance</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Finance Series: Learn to Budget and Calculate
                                  your Net Worth.
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">Free</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-06.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-05.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Marketing</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Build Brand Into Marketing: Tackling the New
                                  Marketing Landscape
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$136.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-03.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-06.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Design</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Graphic Design: Illustrating Badges and Icons
                                  with Geometric Shapes
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$237.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                  <div class="tab-pane fade" id="tabs3">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-05.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Pamela Foster
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Create Amazing Color Schemes for Your UX
                                  Design Projects
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$420.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-03.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Rose Simmons
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Culture & Leadership: Strategies for a
                                  Successful Business
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$295.00</span>
                                  <span class="old-parice">$340.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Finance</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Finance Series: Learn to Budget and Calculate
                                  your Net Worth.
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">Free</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-02.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-05.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Marketing</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Build Brand Into Marketing: Tackling the New
                                  Marketing Landscape
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$136.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-04.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-06.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Design</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Graphic Design: Illustrating Badges and Icons
                                  with Geometric Shapes
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$237.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                  <div class="tab-pane fade" id="tabs4">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-06.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-05.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Pamela Foster
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Create Amazing Color Schemes for Your UX
                                  Design Projects
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$420.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-04.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Rose Simmons
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Culture & Leadership: Strategies for a
                                  Successful Business
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$295.00</span>
                                  <span class="old-parice">$340.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-03.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Finance</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Finance Series: Learn to Budget and Calculate
                                  your Net Worth.
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">Free</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-02.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-05.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Marketing</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Build Brand Into Marketing: Tackling the New
                                  Marketing Landscape
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$136.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-06.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Design</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Graphic Design: Illustrating Badges and Icons
                                  with Geometric Shapes
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$237.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                  <div class="tab-pane fade" id="tabs5">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-03.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-02.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Pamela Foster
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Create Amazing Color Schemes for Your UX
                                  Design Projects
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$420.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Rose Simmons
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Culture & Leadership: Strategies for a
                                  Successful Business
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$295.00</span>
                                  <span class="old-parice">$340.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-06.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Finance</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Finance Series: Learn to Budget and Calculate
                                  your Net Worth.
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">Free</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-05.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-05.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Marketing</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Build Brand Into Marketing: Tackling the New
                                  Marketing Landscape
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$136.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-04.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-06.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Design</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Graphic Design: Illustrating Badges and Icons
                                  with Geometric Shapes
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$237.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                  <div class="tab-pane fade" id="tabs6">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-03.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-05.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Pamela Foster
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Create Amazing Color Schemes for Your UX
                                  Design Projects
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$420.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Rose Simmons
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Culture & Leadership: Strategies for a
                                  Successful Business
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$295.00</span>
                                  <span class="old-parice">$340.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-04.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Finance</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Finance Series: Learn to Budget and Calculate
                                  your Net Worth.
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">Free</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-06.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-05.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Marketing</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Build Brand Into Marketing: Tackling the New
                                  Marketing Landscape
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$136.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-02.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-06.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Design</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Graphic Design: Illustrating Badges and Icons
                                  with Geometric Shapes
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$237.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                  <div class="tab-pane fade" id="tabs7">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div class="courses-wrapper">
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-04.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Data Science and Machine Learning with Python
                                  - Hands On!
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$385.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-02.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-02.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Pamela Foster
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Create Amazing Color Schemes for Your UX
                                  Design Projects
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$420.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-06.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-03.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Rose Simmons
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Udemy</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Culture & Leadership: Strategies for a
                                  Successful Business
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$295.00</span>
                                  <span class="old-parice">$340.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-05.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-04.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Finance</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Finance Series: Learn to Budget and Calculate
                                  your Net Worth.
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">Free</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-python.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-05.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Marketing</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Build Brand Into Marketing: Tackling the New
                                  Marketing Landscape
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$136.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                          {/* <!-- Single Courses Start --> */}
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img
                                  src="assets/images/courses/courses-03.jpg"
                                  alt="Courses"
                                />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  <div class="author-thumb">
                                    <a href="/#">
                                      <img
                                        src="assets/images/author/author-06.jpg"
                                        alt="Author"
                                      />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="/#">
                                      Arpandeep Singh
                                    </a>
                                  </div>
                                </div>
                                <div class="tag">
                                  <a href="/#">Design</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  Graphic Design: Illustrating Badges and Icons
                                  with Geometric Shapes
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  {/* <i class="icofont-read-book"></i> 29 Lectures{" "} */}
                                </span>
                              </div>
                              <div class="courses-price-review">
                                <div class="courses-price">
                                  <span class="sale-parice">$237.00</span>
                                </div>
                                <div class="courses-review">
                                  <span class="rating-count">4.9</span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%" }}
                                    ></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Courses End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                </div>
                {/* <!-- All Courses tab content End --> */}

                {/* <!-- All Courses BUtton Start --> */}
                <div class="courses-btn text-center">
                  <a
                    href="courses.html"
                    class="btn btn-secondary btn-hover-primary"
                  >
                    Other Courses
                  </a>
                </div>
                {/* <!-- All Courses BUtton End --> */}
              </div>
            </div>
            {/* <!-- All Courses End --> */}

            {/* <!-- How It Work End --> */}
            <div class="section section-padding mt-n1">
              <div class="container">
                {/* <!-- Section Title Start --> */}
                <div class="section-title shape-03 text-center">
                  <h5 class="sub-title">Over 52+ Communities</h5>
                  <h2 class="main-title">
                    How It <span> Works?</span>
                  </h2>
                </div>
                {/* <!-- Section Title End --> */}

                {/* <!-- How it Work Wrapper Start --> */}
                <div class="how-it-work-wrapper">
                  {/* <!-- Single Work Start --> */}
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="flaticon-transparency"></i>
                    </div>
                    <div class="work-content">
                      <h3 class="title">Find Your Course</h3>
                      <p>
                        It has survived not only centurie also leap into
                        electronic.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div class="work-arrow">
                    <img
                      class="arrow"
                      src="assets/images/shape/shape-17.png"
                      alt="Shape"
                    />
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="flaticon-forms"></i>
                    </div>
                    <div class="work-content">
                      <h3 class="title">Join Community</h3>
                      <p>
                        It has survived not only centurie also leap into
                        electronic.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div class="work-arrow">
                    <img
                      class="arrow"
                      src="assets/images/shape/shape-17.png"
                      alt="Shape"
                    />
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="flaticon-badge"></i>
                    </div>
                    <div class="work-content">
                      <h3 class="title">Start Learning</h3>
                      <p>
                        It has survived not only centurie also leap into
                        electronic.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Work End --> */}
                </div>
              </div>
            </div>
            {/* <!-- How It Work End --> */}

            {/* <!-- Brand Logo Start --> */}
            <div class="section section-padding mt-1">
              <div class="container">
                {/* <!-- Brand Logo Wrapper Start --> */}
                <div class="brand-logo-wrapper">
                  {/* <!-- Section Title Start --> */}
                  <div class="section-title shape-03">
                    <h2 class="main-title">
                      Our learning partners :)
                      {/* of <span> CLH.</span> */}
                    </h2>
                  </div>
                  {/* <!-- Section Title End --> */}

                  {/* <!-- Brand Logo Start --> */}
                  <div class="brand-logo brand-active">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        {/* <!-- Single Brand Start --> */}
                        <div class="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-01.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div class="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-02.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div class="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-03.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div class="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-04.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div class="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div class="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-06.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Brand Logo End --> */}
                </div>
                {/* <!-- Brand Logo Wrapper End --> */}
              </div>
            </div>
            {/* <!-- Blog End --> */}

            {/* <!-- Footer Start  --> */}
            <Footer />
            {/* <!-- Footer End --> */}

            {/* <!--Back To Start--> */}
            <a href="/#" class="back-to-top">
              <i class="icofont-simple-up"></i>
            </a>
            {/* <!--Back To End--> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
