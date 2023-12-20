import React from "react";
import Sidebar from "./Sidebar";
import "../Assets/About.css";
function About() {
  return (
    <body className="abt1">
      <div className="abt2">
        <Sidebar />
        <div className="abt3">
          <div class="cardos">
            <div class="containeros">
              <h1 className="oohs1">Owner</h1>
              <h3 className="oohs3">John</h3>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </body>
  );
}

export default About;
