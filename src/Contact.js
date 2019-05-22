import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/style.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="section" id="contact">
        <div class="container">
          <div class="col-md-12">
            <h4>04</h4>
            <h1 class="size-50">Contact Me</h1>
            <div class="h-50" />
          </div>
          <div class="col-md-4" data-aos="fade-up">
            <h3>Nomor Hand Phone</h3>
            <p>+62822 6248 5557</p>
            <h3> Mobile Numberr</h3>
            <p>+62822 6248 5557</p>
            <h3>Email</h3>
            <p>rizkygin@gmail.com</p>

            <h3>Social Network</h3>

            <ul class="social">
              <li>
                <a href="rizkygin.github.io" arial-label="Facebook Rizky">
                  <i class="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="rizkygin.github.io" arial-label="Twitter Rizky">
                  <i class="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rizkyspasi/" arial-label="Instagram Rizky">
                  <i class="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/rizkygin" arial-label="Github Rizky">
                  <i class="fab fa-github" />
                </a>
              </li>
            </ul>
            <div class="clearfix" />
            <div class="h-50" />
          </div>
          <div class="col-md-8" data-aos="fade-up">
            <form
              class="contact-bg"
              id="contact-form"
              name="contact"
              method="post"
              novalidate="novalidate"
            >
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Your E-mail"
              />
              <input
                type="text"
                name="phone"
                class="form-control"
                placeholder="Phone Number"
              />
              <textarea
                name="message"
                class=" trol"
                placeholder="Your Message"
                style={{ height: "120px" }}
              />
              <button
                id="submit"
                type="submit"
                name="submit"
                class="btn btn-glance"
              >
                Send
              </button>
              <div id="success">
                <p class="green textcenter">
                  {" "}
                  Your message was sent successfully! I will be in touch as soon
                  as I can.{" "}
                </p>
              </div>
              <div id="error">
                <p>
                  {" "}
                  Something went wrong, try refreshing and submitting the form
                  again.{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
