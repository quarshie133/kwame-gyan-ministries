import React from "react";
import "../projects/Projects.css";
import IMG_1 from "../../assets/image-1.png";
import IMG_2 from "../../assets/image-2.png";
import IMG_3 from "../../assets/image-3.png";

function Projects() {
  return (
    <div className="projects-bg w-100 d-flex">
      <div className="project_items">
        <div className="project_pic">
          <img src={IMG_1} className="pjt_one" />
          <img src={IMG_2} className="pjt_two" />
          <img src={IMG_3} className="pjt_three" />
        </div>

        <div className="project_text">
          <div className="pjct-line"></div>
          <h2 className="project_title">Projects</h2>
          <p className="project-txt-one">
            We have yearly events purposely put together by the inspiration of
            the Holyspirit to be a blessing to God's people. One of the MAJOR
            projects is a worship service dubbed "SIFAFEST"
          </p>
          <h3 className="project_subtitle">MAIN EVENT</h3>
          <p className="project-txt-two">
            A Night of undiluted moments of Worship and intense fellowship with
            the Holyspirit. Its that time of the year where every young lover of
            God comes into his presence to pursue and recieve more of Him. We
            have recorded <span className="txt-yellow">thousands</span> of
            attendees. over the past <span className="txt-yellow">7 YEARS</span>
          </p>
            <button className="btn-project-read">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

// className = "img-1";
