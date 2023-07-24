import React from "react";
import logo from "../images/starBrothersLogo.png";
import "../style/nav.scss";

function Nav(props) {
  return (
    <nav>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>

      <h3>{props.header}</h3>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Team Members</li>
      </ul>
    </nav>
  );
}

export default Nav;
