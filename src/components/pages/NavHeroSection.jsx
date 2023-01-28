import React from "react";
import "../styles/NavHeroSection.css";
import logo from "../../assets/logo.svg";

function NavHeroSection() {
  return (
    <div className="body">
      <nav className="navbar fixed-top navbar-expand-md navbar-dark p-md-3">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="toggle Navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Gallery
                </a>
              </li>
            </ul>
            <a href="#" className="btn">
        <button className="btn-donate">donate</button>
            </a>
          </div>
        </div>
      </nav>
      <div className="banner-image w-100 vh-100 d-flex justify-content-center">
        <div className="txt-content">
          <p>
            Let Jesus
            <span className="txt-content-one">
              Be <span className="txt-yellow">revealed</span> in <span className="txt-yellow">You</span>
            </span>
          <h1 className="txt-title">
            kwame <span className="txt-content-two">gyan ministries</span>
          </h1>
          </p>
          <div className="btn-content">
            <button className="btn-aboutus">about us</button>
            <button className="btn-projects">projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeroSection;
