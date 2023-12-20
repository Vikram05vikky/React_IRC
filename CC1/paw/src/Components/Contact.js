import React from "react";
import PPNav from "./PPNav";
import "../Assets/Contact.css";
import Footer from "./Footer";
import cooo from "../Assets/Img/contact.png";
import { MapPin } from "lucide-react";
import Sidebar from "./Sidebar";
function Contact() {
  return (
    <>
      <div className="cont1">
        <img src={cooo} className="coim" />
      </div>
      <Sidebar />
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
