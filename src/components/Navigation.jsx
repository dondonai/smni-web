import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="primary-nav">
        <nav>
          <ul>
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}