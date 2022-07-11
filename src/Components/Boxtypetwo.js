import React from "react";
import "./Boxtypetwo.css";
function Boxtypetwo({ urlimage, h2, p2}) {
  return (
    <div className="BoxtypeOne_container">
      <div className="tv_container2">
        <div className="tv_content2">
          <div className="tv_textcontent2">
            <h1>{h2}</h1>
            <span>{p2}</span>
          </div>
          <div className="tv_image2">
            <img src={urlimage} alt="network error" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Boxtypetwo;
