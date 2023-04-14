import React from "react";
import "../styles/SecondMainSection.css";
import audiomack from "../../assets/audiomack_bck.png";

function SecondMainSection() {
  return (
    <div>
      <div className="col-lg-12 dark_bckground">
        <h2 className="audiomack_header">listen</h2>
        <div className="audio_line"></div>
        <img src={audiomack} className="audiomack_bck" />
      </div>
    </div>
  );
}

export default SecondMainSection;
