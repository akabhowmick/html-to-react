import React, { Component } from "react";
import "./Header.css";

const navbarElements = ["about us", "info", "support us"];

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          {navbarElements.map((navbarElement) => {
            return <li key={navbarElement}>{navbarElement}</li>;
          })}
        </nav>
      </header>
    );
  }
}
