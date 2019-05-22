import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/style.css";
import gambar1 from "./img/1.webp";
import gambar2 from "./img/2.webp";
import gambar3 from "./img/3.webp";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const projek = ["Tawa", "Pajax", "JogjaHoliday"];
    const photo = [gambar1, gambar2, gambar3];
    const myPhotos = photo.map(photo => {
      return (
        <div className="col-md-4 col-sm-6 ads graphics">
          <a id="demo02" href="#animatedModal" className="portfolio_item">
            <img src={photo} alt="" className="img-responsive" />
            <div className="portfolio_item_hover">
              <div className="portfolio-border clearfix">
                <div className="item_info">
                  {projek.map(nama =>{
                      return (
                          <div><span>{nama}</span> <em>Graphics</em></div>
                      )
                  })}
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    return (
      <div className="section" id="projects">
        <div className="container">
          <div className="col-md-12">
            <h4>03</h4>
            <h1 className="size-50">
              My <br /> Projects
            </h1>
          </div>
          <div className="main-container portfolio-inner clearfix">
            <div className="portfolio-div">
              <div className="portfolio">
                <div className="categories-grid wow fadeInLeft">
                  <nav className="categories" />
                </div>

                <div
                  className="no-padding portfolio_container clearfix"
                  data-aos="fade-up">
                  {myPhotos}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
