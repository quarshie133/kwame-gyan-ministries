import React from "react";
import "../music/Music.css";
import audiomack from "../../assets/audiomack_bck.png";
import { SiAudiomack } from "react-icons/si";
import audiomack_png from "../../assets/audiomack.png"

function SecondMainSection() {
  return (
    <section className="dark-bg w-100 vh-100 d-flex">
      <h3>Listen</h3>
      <div className="music-line"></div>

      <img src={audiomack} className="music__bg" />
      <div className="social__icons">
        <a href="https://audiomack.com/joshuagyan47" target="_blank">
          <img src={audiomack_png} alt="" />
          <SiAudiomack />
        </a>
      </div>
    </section>
  );
}

export default SecondMainSection;
