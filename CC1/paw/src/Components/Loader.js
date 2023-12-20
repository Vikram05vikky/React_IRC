import React from "react";
import loaderGif from "../Assets/Img/I Can Has Petz_.gif";
import "../Assets/Loader.css";
const Loader = () => {
  return (
    <div className="fullscreen-loader">
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
