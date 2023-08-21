import React from "react";
import "../contact/Contact.css";

import telephone from "../../assets/telephone.png";
import email from "../../assets/email.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import tik_tok from "../../assets/tik-tok.png";
import youtube from "../../assets/youtube.png";

function Contact() {
  return (
    <div className="contact-bg w-100 d-flex">
    
        <div className="subtle">
          <h2 className="txt-subtitle">Contact Us</h2>
          <div className="contact-line"></div>
        </div>
    

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <img src={telephone} className="contact__option-icon icon-1" />
            <a href="tel:0248476820">
              <h6 className="contact"> 0501363509 / 0248476820</h6>
            </a>
          </article>
          <article className="contact__option">
            <img src={email} className="contact__option-icon icon-two" />
            <a href="mailto:team@kgm.com" target="_blank">
              team@kgm.com
            </a>
          </article>
          <article className="contact__option">
            <img src={instagram} className="contact__option-icon icon-three" />
            <a
              href="https://www.instagram.com/kwamegyan_ministries/"
              target="_blank"
            >
              kwamegyanministries
            </a>
          </article>
          <article className="contact__option">
            <img src={facebook} className="contact__option-icon icon-four" />
            <a
              href="https://web.facebook.com/kwamegyanenkansah"
              target="_blank"
            >
              kwamegyanministries
            </a>
          </article>
          <article className="contact__option">
            <img src={tik_tok} className="contact__option-icon icon-five" />
            <a
              href="https://www.tiktok.com/@kwamegyan1?lang=en"
              target="_blank"
            >
              kwamegyan1
            </a>
          </article>
          <article className="contact__option">
            <img src={youtube} className="contact__option-icon icon-six" />
            <a
              href="https://www.youtube.com/@kwamegyanofficial8769/featured"
              target="_blank"
            >
              Kwame Gyan Official
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form>
          <input type="text" name="name" placeholder="Name" required />

          <input type="email" name="message" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            id=""
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn-primary">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
