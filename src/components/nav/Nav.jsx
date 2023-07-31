import React from "react";
import "../nav/Nav.css";
import logo from "../../assets/logo.svg";
import Mandate from "../mandate/Mandate";

function Nav() {
  return (
    <div className="banner-image w-100 vh-100 d-flex justify-content-center">
      <div className="navbar fixed-top navbar-expand-md p-md-3">
        <a href="" className="navbar-brand">
          <img src={logo} className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Music
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <a href="#" className="btn">
              <button className="btn-donate ">DONATE</button>
            </a>
          </ul>
        </div>
      </div>
      <header>
        <div className="header__conatainer">
          <h5>Let Jesus</h5>
          <h5>
            Be <span className="txt-yellow">revealed</span>  in <span className="txt-yellow">You</span>
          </h5>
        </div>
        <div className="header__title">
          <h1>KWAME</h1>
          <h1>GYAN MINISTRIES</h1>
        </div>
        <div className="btn-content">
          <button className="btn-aboutus">ABOUT US</button>
          <button className="btn-projects">PROJECTS</button>
        </div>
      </header>
    </div>
  );
}

export default Nav;
