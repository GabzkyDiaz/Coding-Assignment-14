import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const App = () => {
  useEffect(() => {
    // Navbar toggle
    $(".nav-btn").on("click", function () {
      $(this).toggleClass("open");
    });

    // Scroll event for glass effect
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll > 100) {
        $("#header").addClass("glass-effect");
      } else {
        $("#header").removeClass("glass-effect");
      }
    });

    // Skillbar animation
    $(".skillbar").each(function () {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          3000,
        );
    });

    // Navbar collapse
    $("#navbar-toggler").on("click", function () {
      const customNavbarCollapse = $("#navbarSupportedContent");
      if (customNavbarCollapse.hasClass("show")) {
        customNavbarCollapse.removeClass("show");
      } else {
        customNavbarCollapse.addClass("show");
      }
    });
  }, []);

  return (
    <div>
      <header id="header" className="fixed-top py-lg-1 py-3 glass-effect">
        <div className="r-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <p id="logoLabel" className="sr-only">
                Company Logo
              </p>
              <Link
                className="logo-container"
                aria-labelledby="logoLabel"
                to="/"
              >
                <img
                  src="image/logo.png"
                  alt="Company Logo"
                  className="img-fluid"
                />
              </Link>
              <div className="hamburger-icon" id="navbar-toggler">
                <i className="fas fa-bars"></i>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 p-lg-0 p-4 gap-2">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/skills">
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="section-bg px-3 section-hero">
          <div className="image-overlay"></div>
          <div
            className="r-container text-white position-relative"
            style={{ zIndex: 2 }}
          >
            <div className="row w-100 m-0">
              <div className="col">
                <div className="d-flex align-items-end">
                  <img
                    src="image/image-600x700-1.png"
                    alt=""
                    className="img-fluid banner-image"
                  />
                </div>
              </div>
              <div className="col col-2">
                <div className="height-100 d-flex text-align-right flex-column gap-2 justify-content-center text-lg-end h-100">
                  <h1 className="font-0 fw-bold lh-1 fs-very-large white-color">
                    Gabby Diaz
                  </h1>
                  <span className="accent-color fs-4 font-family-3">
                    Web Developer
                  </span>
                  <p className="font-3 white-color">
                    Welcome to the digital realm crafted by Gabby Diaz, where
                    innovation meets code, and web development becomes an art.
                    Here, each line of code is a stroke of creativity, crafting
                    a virtual landscape where the extraordinary becomes the
                    norm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark font-white section-about">
          <div className="r-container">
            <div className="d-flex flex-column gap-3 text-white">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col col-lg-5">
                  <img
                    src="image/image-600x400-1.jpg"
                    alt=""
                    className="mask-image img-fluid mask-image-no-1"
                  />
                </div>
                <div className="col col-lg-7">
                  <div className="d-flex flex-column gap-3">
                    <h2 className="accent-color fw-normal font-2 fs-4">
                      ABOUT ME
                    </h2>
                    <label className="font-1 fw-bold">
                      "Unveiling the Creator Behind the Code: Gabby Diaz, Your
                      Web Development Virtuoso."
                    </label>
                    <div className="divider accent-color">
                      <i className="fa-solid fa-square-full"></i>
                    </div>
                    <p>
                      In this digital sanctuary, I am Gabby Diaz, a passionate
                      web developer weaving intricate lines of code to bring
                      visions to life. Join me on a journey through the
                      captivating fusion of creativity and technology, where
                      every project is a canvas, and innovation knows no bounds.
                      Welcome to the realm where pixels and passion converge,
                      and the extraordinary unfolds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-3">
                <div className="col">
                  <div className="d-flex flex-column p-4 gap-3 border-bottom-hover">
                    <label className="font-1 fw-bold">My Vision</label>
                    <p>
                      Empowering digital landscapes with visionary expertise, I
                      strive to redefine the online experience through
                      cutting-edge web development and design.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column p-4 gap-3 border-bottom-hover">
                    <label className="font-1 fw-bold">My Mission</label>
                    <p>
                      Elevating online experiences through innovative web
                      solutions, my vision is to seamlessly blend creativity and
                      functionality, shaping a digital world where every
                      interaction is both captivating and intuitive.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column p-4 gap-3 border-bottom-hover">
                    <label className="font-1 fw-bold">My Goal</label>
                    <p>
                      My goal is to not just build websites, but to architect
                      digital experiences that resonate, inspire, and leave an
                      indelible mark on the ever-evolving tapestry of the online
                      landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white section-my-work">
          <div className="r-container">
            <div className="heading d-flex flex-lg-row flex-row gap-3 mb-3">
              <div className="col col-lg-7">
                <div className="d-flex flex-column h-100 justify-content-center text-lg-end gap-3 text-align-right">
                  <h2 className="black fw-normal fs-4">MY WORK</h2>
                  <p className="font-1 fw-bold">My Best Project</p>
                  <div className="divider accent-color ms-lg-auto flex-lg-row-reverse">
                    <i className="fa-solid fa-square-full"></i>
                  </div>
                  <p>
                    In the vast digital realm, my work stands as a testament to
                    precision and creativity in web development. Meticulously
                    crafted websites seamlessly combine functionality and
                    aesthetics, reflecting a commitment to delivering immersive
                    user experiences that transcend the ordinary and leave a
                    lasting impression.
                  </p>
                </div>
              </div>
              <div className="col col-lg-5">
                <div className="m-0">
                  <img
                    src="image/image-600x400-2.jpg"
                    alt=""
                    className="mask-image img-fluid mask-image-no-2"
                  />
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 body">
              <div className="col mb-3">
                <div className="d-flex flex-column p-3">
                  <div className="mb-4">
                    <img
                      src="image/image-600x800-1.png"
                      alt=""
                      className="img-fluid hover-scale"
                    />
                  </div>
                  <div className="text-center">
                    <p>
                      <label className="black fw-normal font-2">
                        Explore the Wave's
                      </label>
                    </p>
                    <p className="font-2 fw-bold">Thrills Unleashed</p>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column p-3">
                  <div className="mb-4">
                    <img
                      src="image/image-600x800-2.png"
                      alt=""
                      className="img-fluid hover-scale"
                    />
                  </div>
                  <div className="text-center">
                    <p>
                      <label className="black fw-normal font-2">
                        Home Page
                      </label>
                    </p>
                    <p className="font-2 fw-bold">Adventure Gateway</p>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column">
                  <label className="font-2 fw-bold">MapleWave Surf Co.</label>
                  <p>
                    MapleWave Surf Co. is a Canadian-born surfing company that
                    brings the spirit of adventure to the waves. As a web
                    developer, I crafted an immersive online platform for
                    MapleWave, blending intuitive navigation with visually
                    stunning elements, capturing the essence of the great
                    Canadian outdoors and the exhilaration of surfing.
                  </p>
                  <label className="font-2 fw-normal black fs-4 mb-4">
                    CATEGORIES
                  </label>
                  <ul
                    className="mb-3-0 p-0 d-flex flex-column gap-2"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      <div className="d-flex gap-3 align-items-center">
                        <i className="fa-solid fa-minus"></i>Digital Branding
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3 align-items-center">
                        <i className="fa-solid fa-minus"></i>UX (User
                        Experience) Design
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3 align-items-center">
                        <i className="fa-solid fa-minus"></i>Responsive Website
                        Design
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3 align-items-center">
                        <i className="fa-solid fa-minus"></i>Custom Web
                        Development
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-testimonial">
          <div className="r-container">
            <div className="d-flex flex-lg-row flex-column gap-3 mb-3 content">
              <div className="col col-lg-5">
                <div className="m-0 d-flex flex-column gap-3 text-lg-end text-start">
                  <img
                    src="image/image-600x400-3.jpg"
                    alt=""
                    className="mask-image img-fluid mask-image-no-3"
                  />
                  <label className="font-1 fw-bold white-color">
                    Elevating Digital Realms with Expert Web Development.
                  </label>
                  <p className="white-color">
                    Through years of dedicated craftsmanship, I have seamlessly
                    blended creativity and functionality to shape immersive
                    online experiences that transcend expectations.
                  </p>
                </div>
              </div>
              <div className="col col-lg-7">
                <div className="d-flex flex-column h-100 justify-content-center text-lg-start gap-3">
                  <label className="accent-color-testimonial fw-normal font-2 fs-4">
                    TESTIMONIAL
                  </label>
                  <label className="font-2 fw-bold white-color">
                    What they say about me?
                  </label>
                  <div className="overflow-hidden mt-4 testimonial">
                    <div className="testimonial-slide">
                      <div className="d-flex flex-column gap-3">
                        <ul
                          className="m-0 p-0 accent-color d-flex flex-row gap-2"
                          style={{ listStyle: "none" }}
                        >
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <p className="white-color">
                          "Gabby Diaz's web development skills are unmatched. He
                          effortlessly turned our vision into a sleek,
                          functional website. Professional, efficient, and a
                          pleasure to work with!"
                        </p>
                        <p className="white-color">- Rita Dizly</p>
                      </div>
                    </div>
                    <div className="testimonial-slide">
                      <div className="d-flex flex-column gap-3">
                        <ul
                          className="m-0 p-0 accent-color d-flex flex-row gap-2"
                          style={{ listStyle: "none" }}
                        >
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <p className="white-color">
                          "Crafted by Gabby Diaz, our website now stands as a
                          testament to his exceptional web development skills.
                          Efficient, creative, and a pleasure to collaborate
                          with - Gabby exceeded our expectations."
                        </p>
                        <p className="white-color">- John Jonas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-4 gap-3-testimonial">
              <div className="col">
                <div className="d-flex flex-column text-center p-4 gap-3 border-bottom-hover">
                  <h1 className="font-1 fw-bold m-0 lh-1 accent-color">25+</h1>
                  <p className="font-1 fs-4 fw-bold text-gray">
                    Websites Launched
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column text-center p-4 gap-3 border-bottom-hover">
                  <h1 className="font-1 fw-bold m-0 lh-1 accent-color">50%</h1>
                  <p className="font-1 fs-4 fw-bold text-gray">
                    Page Load Time Improvement
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column text-center p-4 gap-3 border-bottom-hover">
                  <h1 className="font-1 fw-bold m-0 lh-1 accent-color">98%</h1>
                  <p className="font-1 fs-4 fw-bold text-gray">
                    Client Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <section
          className="section position-relative text-white"
          style={{ backgroundImage: "url(image/image-1920x900-7.jpg)" }}
        >
          <div className="image-overlay"></div>
          <div className="r-container position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex flex-column gap-4 align-items-center justify-content-center text-center">
              <h2 className="accent-color fw-normal lh-1 font-2 fs-4 m-0">
                Newsletter
              </h2>
              <label className="font-1 fw-bold mt-2 lh-1">
                Code Chronicles
              </label>
              <p className="text-white">
                Stay ahead in the digital realm with our Code Chronicles
                Newsletter—your monthly dose of web development insights,
                industry trends, and exclusive tips to elevate your online
                presence.
              </p>
              <div>
                <form
                  id="newsletter-form"
                  action="index.html"
                  className="w-100 form needs-validation"
                >
                  <input type="text" name="action" value="subscribe" hidden />
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control py-3 px-4 form-white"
                      placeholder="Email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      required
                    />
                    <button
                      className="btn border-accent-color btn_submit-subscribe accent-color fw-bold px-5"
                      type="submit"
                      id="button-addon2"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="social-container margin-auto">
                <a
                  href="https://twitter.com/gabbycdiaz"
                  className="social-item"
                  aria-label="Twitter Profile"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com/gabbyjemdiaz?igshid=MTNiYzNiMzkwZA%3D%3D&amp;utm_source=qr"
                  className="social-item"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/gabby-diaz-a1962528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="social-item"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="py-4 text-gray bottom">
          <ul>
            <li>
              <a href="https://gabbydiaz.com/index.html">Home</a>
            </li>
            <li>
              <a href="https://gabbydiaz.com/skills.html">Skills</a>
            </li>
            <li>
              <a href="https://gabbydiaz.com/contact.html">Contact</a>
            </li>
          </ul>
          <div className="r-container text-center">
            <span>
              Copyright<script>document.write(new Date().getFullYear())</script>
              © Gabby Diaz.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
