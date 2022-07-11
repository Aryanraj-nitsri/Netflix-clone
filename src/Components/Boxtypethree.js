import React from "react";
import "./Boxtypethree.css";
function Boxtypethree() {
  return (
    <div className="BoxtypeOne_container">
      <div className="tv_container3">
        <div className="tv_content3">
          <div className="tv_textcontent3">
            <h1>Watch everywhere.</h1>
            <span>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </span>
          </div>
          <div className="tv_image3">
          <div className="tv_video3">
               <video src='../../saif.m4v' autoplay="true" loop="true" muted>
                Your browser does not support the video tag.
              </video> 
            </div>
            <img src="../../Rajma.png" alt= "network error" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Boxtypethree;
