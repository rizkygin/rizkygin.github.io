import React, { Component } from "react";
import about from "./img/about-img.webp";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/style.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gambar: "./img/about-img.jpg"
    };
  }
  render() {
    return (
      <div className="section" id="about">
        <div className="container">
          <div className="col-md-6" data-aos="fade-up">
            <h4>01</h4>
            <h1 className="size-50">
              Tentang <br /> Diriku
            </h1>
            
            <div className="h-50" />
            <p>
              Aku dari Sekolah Menengah Akhir di Kalimantan. Sehingga Coding
              adalah hal baru bagi saya, tapi tidak membebani pikiran saya
              karena saya sangat senang jika berhubungan dengan computer.
            </p>
            <p>
              Sekarang saya sudah banyak belajar tentang Code dari tahap
              beginner dan sampai sekarang
            </p>
            <div className="h-50" />{" "}
            <img src="img/Signature.svg" width="230" alt="" />
            <div className="h-50" />
          </div>
          <div className="col-md-6 about-img-div">
            <div
              className="about-border"
              data-aos="fade-up"
              data-aos-delay=".5"
            />
            <img
              src={about}
              width="400"
              className="img-responsive"
              alt=""
              align="right"
              data-aos="fade-right"
              data-aos-delay="0"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
