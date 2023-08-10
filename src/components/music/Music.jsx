import React from "react";
import "../music/Music.css";
import audiomack from "../../assets/audiomack_bck.png";
import { SiAudiomack } from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import { ImSpotify } from "react-icons/im";
import audiomack_png from "../../assets/audiomack.png";
import apple_music from "../../assets/apple-music.png";
import spotify from "../../assets/spotify.png";


function Music() {
  return (
    <section className="dark-bg w-100 d-flex">
      <div className="music_text">
        <h3 className="txt-listen">Listen</h3>
        <div className="music-line"></div>
        <img src={audiomack} className="music__bg" />
      </div>

      <div className="social__icons">
        <a href="https://audiomack.com/joshuagyan47" target="_blank">
          <img src={audiomack_png} className="audiomack" />
        </a>
        <a href="https://audiomack.com/joshuagyan47" target="_blank">
          <img src={apple_music} className="apple_music" />
        </a>
        <a
          href="https://open.spotify.com/artist/4fZaJnwwMTiRritTfR2Bbc?si=aGdXJbU8ROKW6bVcimUmhw"
          target="_blank"
        >
          <img
            src={spotify}
            className="
          spotify"
          />
        </a>
      </div>
    </section>
  );
}

export default Music;
