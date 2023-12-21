import React from "react";
import "../Assets/Register.css";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LRNav from "./LRNav";
function Register() {
  const move = useNavigate();

  const Show = () => {
    let a = document.getElementById("pass1").value;
    let b = document.getElementById("pass2").value;

    if (a == b) {
      alert("Password matched ! Register Successful");
      move("/Home");
    } else {
      alert("Password not matched !");
    }
  };

  const b = () => {
    move("/Login");
  };
  return (
    <div className="abc">
      <LRNav />
      <div className="b2">
        <form class="container1" onSubmit={Show}>
          <h2>Registration form</h2>
          <input
            type="text"
            name=""
            id="name"
            className="name"
            placeholder="Name"
            required
          />

          <input
            type="tel"
            name=""
            id="phone"
            className="name"
            placeholder="Phone No"
            required
          />

          <input
            type="number"
            name=""
            id="age"
            className="name"
            placeholder="Age"
            required
          />

          <input
            type="email"
            name=""
            id="email"
            className="name"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name=""
            id="pass1"
            className="name"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name=""
            id="pass2"
            className="name"
            placeholder="Confirm Password"
            required
          />

          <input
            type="date"
            name=""
            id="dob"
            className="name"
            placeholder="Date of Birth"
            required
          />

          <input
            type="text"
            name=""
            id="Address"
            className="name"
            placeholder="Address"
            required
          />

          <button class="btnn">Register</button>
          <button class="btnn" onClick={b}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
