import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link, useHistory } from "react-router-dom";
import Button from "./components/Button/Button.tsx";

const Contact = () => {
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

    const navbarToggler = $("#navbar-toggler");
    if (navbarToggler.length) {
      navbarToggler.on("click", function () {
        const customNavbarCollapse = $("#navbarSupportedContent");
        customNavbarCollapse.toggleClass("show");
      });
    }
  }, []);

  const handleReset = (e) => {
    e.preventDefault();
    document.getElementById("contact-form").reset();
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (validateForm()) {
      history.push("/");
      window.scrollTo(0, 0);
    }
  };

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

  return (
    <div>
      <header id="header" className="fixed-top py-lg-1 py-3 glass-effect">
        <div className="r-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <p id="logoLabel" className="sr-only">Company Logo</p>
              <Link className="logo-container" aria-labelledby="logoLabel" to="/">
                <img src="image/logo.png" alt="Company Logo" className="img-fluid" />
              </Link>
              <div className="hamburger-icon" id="navbar-toggler">
                <i className="fas fa-bars"></i>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 p-lg-0 p-4 gap-2">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/skills">Skills</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="section position-relative" style={{ backgroundImage: "url(image/image-1920x900-8.jpg)" }}>
          <div className="image-overlay"></div>
          <div className="r-container section text-white position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <label className="accent-color fw-normal font-2 fs-4">CONTACT</label>
              <h1 className="font-1 fw-bold white-color">Connect With Me</h1>
            </div>
          </div>
        </section>

        <section className="section section-contact">
          <div className="r-container">
            <div className="contact__wrapper">
              <div className="contact__left">
                <h2 className="accent-color fw-normal lh-1 font-2 fs-4 m-0">GET IN TOUCH</h2>
                <label className="font-1 fw-bold m-0 lh-1 white-color">Reach Out and Let's Create!</label>
                <div className="divider m-0 accent-color me-auto"><i className="fa-solid fa-square-full"></i></div>
                <p className="white-color">
                  Step into the realm of limitless possibilities by reaching out for seamless collaboration and innovative solutions. Whether you have a project in mind, need web expertise, or just want to connect, I'm here to turn ideas into digital realities, ensuring every interaction is a step towards transformative experiences in the digital world.
                </p>
                <label className="accent-color fw-normal lh-1 font-2 fs-4 m-0">SOCIAL MEDIA</label>
                <div className="social-container">
                  <a href="https://twitter.com/gabbycdiaz" className="social-item" aria-label="Twitter Profile" title="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/gabbyjemdiaz?igshid=MTNiYzNiMzkwZA%3D%3D&amp;utm_source=qr" className="social-item" aria-label="Instagram Profile" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/gabby-diaz-a1962528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-item" aria-label="LinkedIn Profile" title="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="contact__right">
                <div className="form-section">
                  <form id="contact-form" className="d-flex flex-column w-100 mb-3 form" noValidate>
                    <div className="row row-cols-2 mb-3 gap-2">
                      <div className="col">
                        <label id="nameLabel" htmlFor="name">Your Name:</label>
                        <input type="text" className="form-control p-3" name="name" id="name" aria-labelledby="nameLabel" placeholder="Your Name" required />
                        <div id="nameError" className="error-message"></div>
                      </div>
                      <div className="col">
                        <label id="emailLabel" htmlFor="email">Your Email:</label>
                        <input type="email" className="form-control p-3" name="email" id="email" aria-labelledby="emailLabel" placeholder="Your Email" required />
                        <div id="emailError" className="error-message"></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label id="phoneLabel" htmlFor="phone">Your Phone:</label>
                      <input type="text" className="form-control p-3" name="phone" id="phone" aria-labelledby="phoneLabel" placeholder="Your Phone" required />
                      <div id="phoneError" className="error-message"></div>
                    </div>
                    <div className="mb-3">
                      <label id="messageLabel" htmlFor="message">Your Message:</label>
                      <textarea className="form-control text-white" id="message" name="message" rows="5" aria-labelledby="messageLabel" placeholder="Your Message"></textarea>
                    </div>
                    <div className="mb-3 action-buttons"> 
                      <Button
                        onClick={handleReset}
                        label="Reset"
                        backgroundColor="transparent"
                        hoverColor="rgba(0,0,0,0.1)"
                        className="btn rounded-0 link clear_form fs-5 black-color"
                      />

                      <Button
                        onClick={handleSendMessage}
                        label="Send Message"
                        backgroundColor="transparent"
                        hoverColor="rgba(0,0,0,0.1)"
                        className="btn rounded-0 btn-outline link submit_form fs-5 black-color"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <section className="section position-relative text-white" style={{ backgroundImage: "url(image/image-1920x900-7.jpg)" }}>
          <div className="image-overlay"></div>
          <div className="r-container position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex flex-column gap-4 align-items-center justify-content-center text-center">
              <h2 className="accent-color fw-normal lh-1 font-2 fs-4 m-0">Newsletter</h2>
              <label className="font-1 fw-bold mt-2 lh-1">Code Chronicles</label>
              <p className="text-white">
                Stay ahead in the digital realm with our Code Chronicles Newsletter—your monthly dose of web development insights, industry trends, and exclusive tips to elevate your online presence.
              </p>
              <div>
                <form id="newsletter-form" className="w-100 form needs-validation">
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
                        backgroundColor: isHovered ? '#7B7F81' : 'transparent',
                        color: isHovered ? 'black !important' : '#7B7F81 !important',
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="social-container margin-auto">
                <a href="https://twitter.com/gabbycdiaz" className="social-item" aria-label="Twitter Profile" title="Twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://instagram.com/gabbyjemdiaz?igshid=MTNiYzNiMzkwZA%3D%3D&amp;utm_source=qr" className="social-item" aria-label="Instagram Profile" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/gabby-diaz-a1962528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-item" aria-label="LinkedIn Profile" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-footer">
          <div className="r-container">
            <p className="m-0 text-center text-white">Gabby Diaz © 2023. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </div>
  );

  function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    let isValid = true;

    if (!name.value.trim()) {
      isValid = false;
      document.getElementById("nameError").textContent = "Name is required.";
    } else {
      document.getElementById("nameError").textContent = "";
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      isValid = false;
      document.getElementById("emailError").textContent = "Valid email is required.";
    } else {
      document.getElementById("emailError").textContent = "";
    }

    if (!phone.value.trim() || !/^\d{10}$/.test(phone.value)) {
      isValid = false;
      document.getElementById("phoneError").textContent = "Valid phone number is required.";
    } else {
      document.getElementById("phoneError").textContent = "";
    }

    if (isValid) {
      history.push("/");
      window.scrollTo(0, 0);
    }
    return isValid;
  }
};

export default Contact;
