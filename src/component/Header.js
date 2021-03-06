import React, { Component } from "react";
import "./Header.css";
import PlanTrip from "./PlanTrip";


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="header-box">
          <div>
            <h1 className="slogan-header">
              Plan your road-trip <br />
              <span id="rouge">easily</span> with us
            </h1>
          </div>
          <div className="text-header">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Phasellus condimentum, tortor id venenatis imperdiet, dolor mi
              dignissim lacus,
              <br />
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Nam et nisl libero.
              <br />
            </p>
          </div>
          <PlanTrip />
        </header>
      </div>
    );
  }
}

export default Header;