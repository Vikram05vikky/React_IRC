import Sidebar from "../Sidebar";
import React from "react";
import "../Cardcss/Owner.css";
import "../Cardcss/core.css";
function Owner() {
  return (
    <>
      <Sidebar />
      <div className="c1">
        <div class="cards">
          <div class="card card--1">
            <div class="card__img"></div>

            <div class="card__img--hover"></div>

            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <h3 class="card__title">Height : 63cm </h3>
              <h3 class="card__title">Weight : 45Kg </h3>
              <span class="card__by">
                {/* <button className="bbb">Adopt</button> */}
              </span>
            </div>
          </div>
          <div class="cardoo">
            <div class="containeroo">
              <h1 className="ooh1">Owner</h1>
              <h3 className="ooh3">John</h3>
              <br></br>
              <h1 className="ooh1">Mobile</h1>
              <h3 className="oh3">9988776655</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Owner;
