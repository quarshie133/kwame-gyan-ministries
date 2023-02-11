import React from "react";
import "../styles/MainSection.css";
import mainbackground from "../../assets/mainbackground.png"

function MainSection() {
  return (
    <div className="main-section">
      <img src={mainbackground} />
    </div>
  );
}

export default MainSection;
