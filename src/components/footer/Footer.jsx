import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#music">Music</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/kwamegyan_ministries/"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a href="https://web.facebook.com/kwamegyanenkansah" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/@kwamegyan1?lang=en" target="_blank">
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@kwamegyanofficial8769/featured"
          target="_blank"
        >
          <GrYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Copyright ⓒ KwameGyanMinistries |{year}|</small>
      </div>
    </footer>
  );
}

export default Footer;
