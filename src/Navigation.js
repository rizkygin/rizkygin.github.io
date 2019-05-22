import React, { Component } from "react";
import "./Navigation.css";

import ttd from "./img/Signature.svg"
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/style.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {    };
  }
  render() {
    return (
      <nav className="riz">
        <h2 className="ky">{this.props.logoTitle}</h2>
        
        <img className="ttd" src ={ttd} alt=""></img>
      </nav>
    );
  }
}

export default Navigation;
