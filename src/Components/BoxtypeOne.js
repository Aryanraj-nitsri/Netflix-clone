import React from 'react'
import './BoxtypeOne.css'

 function BoxtypeOne() {
  return (
    <div className="BoxtypeOne_container">

    <div className="tv_container">
        <div className="tv_content">
          <div className="tv_textcontent">
            <h1>Enjoy on your TV.</h1>
            <span>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </span>
          </div>
          <div className="tv_image">
            <div className="tv_video">
               <video src='../../lust.m4v' autoplay="true" loop="true" muted>
                Your browser does not support the video tag.
              </video> 
            </div>
            <img src='../../tv.png' alt="network error" />
          </div>
        </div>
      </div>

    </div>


  )
}
export default BoxtypeOne;