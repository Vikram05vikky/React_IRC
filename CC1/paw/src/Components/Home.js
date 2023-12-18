import React from "react";
// import "../Assets/Landing.css";
import Shine from "./Shine";
import Sidebar from "./Sidebar";
import "../Assets/Home.css";
function Home() {
  return (
    <body className="dv2">
      <div className="abc">
        <Sidebar />
        <div className="dv1">
          <h1
            style={{
              fontStyle: "italic",
              fontSize: "60px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            “ You can’t change their past,<br></br> but you can rewrite<br></br>{" "}
            their future. ”
          </h1>
        </div>
      </div>
    </body>
  );
}

export default Home;
