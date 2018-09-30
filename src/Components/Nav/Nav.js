import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <p>The Nav Bar</p>
        <Link to="/">Home</Link>
        <Link to="/Character">Character</Link>
        <Link to="/Creatures">Creatures</Link>
      </div>
    );
  }
}
