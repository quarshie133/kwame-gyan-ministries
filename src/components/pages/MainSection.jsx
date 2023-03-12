import React from "react";
import "../styles/MainSection.css";
import group1 from "../../assets/group1.png";
import group2 from "../../assets/group2.png";

function MainSection() {
  return (
    <div className="img-container">
      <div className="container">
        <div className="row text center">
          <div className="col-lg-12">
            <div className="text-drop">
              <h3>Mandate</h3>
              <div className="underline"></div>

              <p className="txt-center">
                Our mandate is through music we are to bring individuals whose
                hearts are distant from God back to Him, and to reignite the
                love of Jesus Christ in the hearts of many, particularly young
                people in partnership with the Holyspirit. Through the power of
                music, we strive to manifest the healing power of God and bring
                hope and salvation to all who seek it.
              </p>
              <button className="btn-read-more">Read more</button>
            </div>
      <div class="grp_pics">
        <img src={group1} className="grp_1" />
        <img src={group2} className="grp_2" />
        </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default MainSection;
