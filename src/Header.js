import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="section" id="home" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="disply-table">
            <div class="table-cell" data-aos="fade-up" data-aos-delay="0">
              <h4>Rizky Kurniawan</h4>
              <h1 style={{ color: "#fff" }}>
                Developer
                <br /> Web & Android
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
