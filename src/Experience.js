import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="section" id="experience">
        <div className="container">
          <div className="col-md-12">
            <h4>02</h4>
            <h1 className="size-50"> Pengalaman Ku</h1>
            <div className="h-50" />
          </div>
          <div className="col-md-12">
            <ul className="timeline">
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">Oktober 2018</p>
                  <h3>Project</h3>
                  <h4>Sekolah vokasi Ugm</h4>
                  <p>
                    <strong>TAWA</strong>
                    <br />
                    Full Stack developer
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">September 2018</p>
                  <h3>Project</h3>
                  <h4>Sekolah vokasi Ugm</h4>
                  <p>
                    <strong>Pajax</strong>
                    <br />
                    Full Stack developer
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">Maret 2019</p>
                  <h3>Project</h3>
                  <h4>Sekolah vokasi Ugm</h4>
                  <p>
                    <strong>Jogja Holiday</strong>
                    <br />
                    Full Stack developer
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
