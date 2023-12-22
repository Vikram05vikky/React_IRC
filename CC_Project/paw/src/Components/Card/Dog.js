import React from "react";
import "../Cardcss/Dog.css";
import "../Cardcss/core.css";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

function Dog() {
  const navigate = useNavigate();

  const change = () => {
    navigate("/Owner");
  };

  return (
    <div className="divv1">
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
              <span class="card__by">
                <button className="bbb" onClick={change}>
                  Adopt
                </button>
              </span>
            </div>
          </div>

          <div class="card card--2">
            <div class="card__img"></div>

            <div class="card__img--hover"></div>

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
          <div class="card card--3">
            <div class="card__img"></div>
            <a href="#" class="card_link">
              <div class="card__img--hover"></div>
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

          <div class="card card--4">
            <div class="card__img"></div>
            <a href="#" class="card_link">
              <div class="card__img--hover"></div>
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

export default Dog;
