import React from "react";
// import "../Assets/Landing.css";
import Shine from "./Shine";
import Sidebar from "./Sidebar";
import "../Assets/Home.css";
import Footer from "./Footer";
function Home() {
  return (
    <body className="dv2">
      {/* <Shine /> */}
      <div className="abc">
        <Sidebar />
        <div className="dv1">
          <h1
            style={{
              fontStyle: "italic",
              fontSize: "60px",
              fontFamily: "'Times New Roman', Times, serif",
              // color: "white",
              // marginBottom: "white",
            }}
          >
            You can’t change their past, but you can rewrite their future.
          </h1>
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default Home;
