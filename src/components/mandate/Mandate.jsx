import React from "react";
import "../mandate/Mandate.css";
import group1 from "../../assets/group1.png";
import group2 from "../../assets/group2.png";

function Main() {
  return (
    <header>
      <div className="header__conatainer">
        <h5>Let Jesus</h5>
        <h5>
          Be <span className="txt-yellow">revealed</span> in
          <span className="txt-yellow">YOU</span>
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
    </header>
  );
}

export default Main;

// return (
//   <div className="img-container">
//     <div className="container">
//       <div className="row text center">
//         <div className="col-lg-12">
//           <div className="text-drop">
//             <h3>Mandate</h3>
//             <div className="underline"></div>

//             <p className="txt-center">
//               Our mandate is through music we are to bring individuals whose
//               hearts are distant from God back to Him, and to reignite the
//               love of Jesus Christ in the hearts of many, particularly young
//               people in partnership with the Holyspirit. Through the power of
//               music, we strive to manifest the healing power of God and bring
//               hope and salvation to all who seek it.
//             </p>
//             <button className="btn-read-more">Read more</button>
//           </div>
//     <div class="grp_pics">
//       <img src={group1} className="grp_1" />
//       <img src={group2} className="grp_2" />
//       </div>
//         </div>
//     </div>
//     </div>
//   </div>
// );
