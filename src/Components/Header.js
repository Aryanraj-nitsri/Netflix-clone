import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BoxtypeOne from "./BoxtypeOne";
import Boxtypetwo from "./Boxtypetwo";
import Boxtypethree from "./Boxtypethree";
import SimpleAccordion from "./SimpleAccordion";
import Form from "./Form";
import { useState } from "react";
function Header() {
  const h2 = "Download your shows to watch offline.";
  const p2 = "Save your favourites easily and always have something to watch.";
  const h3 = "Create profiles for children.";
  const p3 =
    "Send children on adventures with their favourite characters in a space made just for them—free with your membership.";
  const [started, setstarted] = useState(false);

  return (
    <div className="container">
      <div className={`header_container ${started ? "Backchange" : ""}`}>
        <div className="header_nav">
          <img src="../../logo.svg" alt="network error" />
          <div className="header_button">
            
              <Button variant="contained" onClick={() =>{started?setstarted(false):setstarted(true)} }>
               {!started ?  "Sign In":"Back"} 
              </Button>
            
              
            
          </div>
        </div>
        {started ? (
          <Form setstarted={setstarted} started={started} />
        ) : (
          <div className="header_body">
            <div className="body_content">
              <p>Unlimited movies, TV shows and more.</p>

              <span className="hebody_span">
                Watch anywhere. Cancel anytime.
              </span>
              <span className="Ready_body">
                Ready to watch? Enter your email to create or restart your
                membership.
              </span>
            </div>
            <div className="input_body">
              <input type="text" placeholder="Email address" />
              <div className="body_started" onClick={() => setstarted(true)}>
                <span>Get Started </span>
                <NavigateNextIcon />
              </div>
            </div>
          </div>
        )}
      </div>

      <hr className="header_divider" />

      <BoxtypeOne />
      <hr className="header_divider" />

      <Boxtypetwo urlimage="../../mobilestrang.jpg" h2={h2} p2={p2} />
      <hr className="header_divider" />

      <Boxtypethree />
      <hr className="header_divider" />

      <Boxtypetwo urlimage="../../Children.png" h2={h3} p2={p3} />
      <hr className="header_divider" />

      <div className="questions_container">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          <SimpleAccordion />
        </div>
      </div>
      <hr className="header_divider" />
    </div>
  );
}
export default Header;
