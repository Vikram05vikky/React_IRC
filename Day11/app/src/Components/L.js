import React from "react";
import "../Assets/L.css";
import { useNavigate } from "react-router-dom";
function L() {
  const move = useNavigate();
  const change = () => {
    move("/form");
  };
  const changee = () => {
    move("/");
  };

  return (
    <>
      <div className="dv1">
        <button type="submit" className="but" onClick={change}>
          Register
        </button>
        <button type="submit" className="but" onClick={changee}>
          Login
        </button>
      </div>
    </>
  );
}

export default L;
