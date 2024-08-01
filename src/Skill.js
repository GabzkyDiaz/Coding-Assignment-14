import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Button from "./components/Button/Button.tsx";
import InputTextBox from "./components/InputTextBox/InputTextBox.tsx";
import Link from "./components/Link/Link.tsx"; // Import the custom Link component
import MobileMenu from "./components/Mobile Menu/MobileMenu.tsx"; // Import the MobileMenu component

const Skills = () => {
  const history = useHistory(); // Call useHistory inside the component

  useEffect(() => {
    // jQuery equivalent logic
    $(".nav-btn").on("click", function () {
      $(this).toggleClass("open");
    });

    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll > 100) {
        $("#header").addClass("glass-effect");
      } else {
        $("#header").removeClass("glass-effect");
      }
    });

    $(".skillbar").each(function () {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          3000
        );
    });

    const navbarToggler = $("#navbar-toggler");
    if (navbarToggler.length) {
      navbarToggler.on("click", function () {
        const customNavbarCollapse = $("#navbarSupportedContent");
        customNavbarCollapse.toggleClass("show");
      });
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    if (form.checkValidity()) {
      history.push("/");
      window.scrollTo(0, 0);
    } else {
      form.reportValidity();
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState('');
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div>
      <header id="header" className="fixed-top py-lg-1 py-3 glass-effect">
        <div className="r-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <p id="logoLabel" className="sr-only">Company Logo</p>
              <RouterLink className="logo-container" aria-labelledby="logoLabel" to="/">
                <img src="image/logo.png" alt="Company Logo" className="img-fluid" />
              </RouterLink>
              <div className="hamburger-icon" id="navbar-toggler" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
              </div>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 p-lg-0 p-4 gap-2">
                  <li className="nav-item">
                    <RouterLink className="nav-link" aria-current="page" to="/">Home</RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link active" aria-current="page" to="/skills">Skills</RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" aria-current="page" to="/contact">Contact</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        options={["Home", "Skills", "Contact"]}
        visible={isMobileMenuVisible}
        className="mobile-menu" // Apply your custom class name here
        backgroundColor="#333"
      />

      <main>
        {/* BANNER */}
        <section className="section position-relative" style={{ backgroundImage: "url(image/image-1920x900-8.jpg)" }}>
          <div className="image-overlay"></div>
          <div className="r-container section text-white position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <label className="accent-color fw-normal font-2 fs-4">My Skills</label>
              <h1 className="font-1 fw-bold white-color">Crafting Digital Experiences</h1>
            </div>
          </div>
        </section>

        <section className="section section-skills">
          <div className="r-container">
            <div className="skills__wrapper">
              <h2 className="accent-color fw-normal lh-1 font-2 fs-4 m-0">Features</h2>
              <label className="font-1 fw-bold m-0 lh-1 white-color">Design and Development Skill</label>
              <div className="divider m-0 accent-color me-auto">
                <i className="fa-solid fa-square-full"></i>
              </div>
              <p className="white-color">
                In the realm of digital craftsmanship, I bring a fusion of creativity and technical prowess. With a passion for innovative design, I specialize in creating visually captivating user experiences.
                From concept to deployment, my development skills ensure seamless functionality and responsiveness. Whether it's crafting intuitive interfaces or building robust back-end systems, I am committed to delivering
                solutions that elevate your digital presence. Explore my portfolio and witness the convergence of design and development expertise in every project.
              </p>

              <div className="container-skillbar">
                <div className="skillbar clearfix" data-percent="60%">
                  <div className="skillbar-title" style={{ background: "#970cc1" }}>
                    <span>Figma</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#970cc1" }}></div>
                  <div className="skill-bar-percent">60%</div>
                </div>
                <div className="skillbar clearfix" data-percent="80%">
                  <div className="skillbar-title" style={{ background: "#DD1E2F" }}>
                    <span>HTML5</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#DD1E2F" }}></div>
                  <div className="skill-bar-percent">80%</div>
                </div>
                <div className="skillbar clearfix" data-percent="75%">
                  <div className="skillbar-title" style={{ background: "#192823" }}>
                    <span>PHP</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#454545" }}></div>
                  <div className="skill-bar-percent">75%</div>
                </div>
                <div className="skillbar clearfix" data-percent="75%">
                  <div className="skillbar-title" style={{ background: "#EBB035" }}>
                    <span>CSS3</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#EBB035" }}></div>
                  <div className="skill-bar-percent">75%</div>
                </div>
                <div className="skillbar clearfix" data-percent="70%">
                  <div className="skillbar-title" style={{ background: "#55a69f" }}>
                    <span>JavaScript</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#55a69f" }}></div>
                  <div className="skill-bar-percent">70%</div>
                </div>
                <div className="skillbar clearfix" data-percent="60%">
                  <div className="skillbar-title" style={{ background: "#06A2CB" }}>
                    <span>jQuery</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#06A2CB" }}></div>
                  <div className="skill-bar-percent">60%</div>
                </div>
                <div className="skillbar clearfix" data-percent="60%">
                  <div className="skillbar-title" style={{ background: "#218559" }}>
                    <span>Photoshop</span>
                  </div>
                  <div className="skillbar-bar" style={{ background: "#218559" }}></div>
                  <div className="skill-bar-percent">60%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <section className="section position-relative text-white" style={{ backgroundImage: "url(image/image-1920x900-7.jpg)" }}>
            <div className="image-overlay"></div>
            <div className="r-container position-relative" style={{ zIndex: 2 }}>
              <div className="d-flex flex-column gap-4 align-items-center justify-content-center text-center">
                <h2 className="accent-color fw-normal lh-1 font-2 fs-4 m-0">Newsletter</h2>
                <label className="font-1 fw-bold mt-2 lh-1">Code Chronicles</label>
                <p className="text-white">
                  Stay ahead in the digital realm with our Code Chronicles Newsletter—your monthly dose of web development insights,
                  industry trends, and exclusive tips to elevate your online presence.
                </p>
                <div>
                  <form id="newsletter-form" action="index.html" className="w-100 form needs-validation">
                    <input type="text" name="action" value="subscribe" hidden />
                    <div className="input-group mb-3">
                      <InputTextBox
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control py-3 px-4 form-white"
                        required={true}
                      />
                      <Button
                        type="submit"
                        id="button-addon2"
                        label="Subscribe"
                        backgroundColor="transparent"
                        className="btn border-accent-color btn_submit-subscribe accent-color fw-bold px-5"
                        onClick={handleSubscribe}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                          color: isHovered ? 'black !important' : '#7B7F81 !important',
                        }}
                      />
                    </div>
                  </form>
                </div>
                <div className="social-container margin-auto">
                  <Link href="https://twitter.com/gabbycdiaz" className="social-item" aria-label="Twitter Profile" title="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="https://instagram.com/gabbyjemdiaz?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr" className="social-item" aria-label="Instagram Profile" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/gabby-diaz-a1962528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-item" aria-label="LinkedIn Profile" title="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="py-4 text-gray bottom">
            <ul>
              <li><RouterLink to="https://gabbydiaz.com/index.html">Home</RouterLink></li>
              <li><RouterLink to="https://gabbydiaz.com/skills.html">Skills</RouterLink></li>
              <li><RouterLink to="https://gabbydiaz.com/contact.html">Contact</RouterLink></li>
            </ul>
            <div className="r-container text-center">
              <span>
                Copyright<script>document.write(new Date().getFullYear())</script>© Gabby Diaz.
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Skills;
