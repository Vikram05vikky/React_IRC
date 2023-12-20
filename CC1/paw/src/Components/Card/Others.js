import React from "react";
import "../Cardcss/Others.css";
import "../Cardcss/core.css";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
function Others() {
  const navigate = useNavigate();
  const change = () => {
    navigate("/Owner");
  };
  return (
    <div className="divv1">
      <Sidebar />
      <div className="c1">
        <div class="cards">
          <div class="card cardo--1">
            <div class="cardo__img"></div>

            <div class="cardo__img--hover"></div>

            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb" onClick={change}>
                  Adopt
                </button>
              </span>
            </div>
          </div>

          <div class="card cardo--2">
            <div class="cardo__img"></div>

            <div class="cardo__img--hover"></div>

            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb" onClick={change}>
                  Adopt
                </button>
              </span>
            </div>
          </div>
          <div class="card cardo--3">
            <div class="cardo__img"></div>
            <a href="#" class="card_link">
              <div class="cardo__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb" onClick={change}>
                  Adopt
                </button>
              </span>
            </div>
          </div>

          <div class="card cardo--4">
            <div class="cardo__img"></div>
            <a href="#" class="card_link">
              <div class="cardo__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb" onClick={change}>
                  Adopt
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Others;
