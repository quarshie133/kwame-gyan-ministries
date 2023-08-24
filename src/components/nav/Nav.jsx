import React, { useState, useEffect } from "react";
import "../nav/Nav.css";
import logo from "../../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import Mandate from "../mandate/Mandate";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app-container">
      <header className={`navbar ${isNavOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} />
        </div>
        {windowWidth <= 768 && (
          <button className="hamburger" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        )}
        <nav className={`nav-items ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
          </ul>
        </nav>
        <button className="btn-donate ">DONATE</button>
      </header>
      <main>
        <div className="header__conatainer">
          <h5>Let Jesus</h5>
          <h5>
            Be <span className="txt-yellow">revealed</span> in{" "}
            <span className="txt-yellow">You</span>
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
      </main>
    </div>
  );
}

export default Nav;

// <div className="app-container">
//   <header className="navbar">
//     <div className="logo">
//       <img src={logo} />
//     </div>
//     {showMenu ? (
//       <nav className="nav-items">
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Music</a>
//           </li>
//           <li>
//             <a href="#">Projects</a>
//           </li>
//           <li>
//             <a href="#">Gallery</a>
//           </li>
//         </ul>
//       </nav>
//     ) : (
//       <RxHamburgerMenu />
//     )}
//     <button className="btn-donate ">DONATE</button>
//   </header>
// </div>;

//  <div className="banner-image w-100 d-flex justify-content-center">
//       <div className="navbar fixed-top navbar-expand-md p-md-3">
//         <a href="" className="navbar-brand">
//           <img src={logo} className="logo" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Music
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Gallery
//               </a>
//             </li>
//             <a href="#" className="btn">
//               <button className="btn-donate ">DONATE</button>
//             </a>
//           </ul>
//         </div>
//       </div>
//       <header>
//         <div className="header__conatainer">
//           <h5>Let Jesus</h5>
//           <h5>
//             Be <span className="txt-yellow">revealed</span> in{" "}
//             <span className="txt-yellow">You</span>
//           </h5>
//         </div>
//         <div className="header__title">
//           <h1>KWAME</h1>
//           <h1>GYAN MINISTRIES</h1>
//         </div>
//         <div className="btn-content">
//           <button className="btn-aboutus">ABOUT US</button>
//           <button className="btn-projects">PROJECTS</button>
//         </div>
//       </header>
//     </div>
