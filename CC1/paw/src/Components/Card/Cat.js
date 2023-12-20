import React from "react";
import Sidebar from "../Sidebar";
import "../Cardcss/Cat.css";

function Cat() {
  return (
    <div className="divv1">
      <Sidebar />
      <div className="c1">
        <div class="cards">
          <div class="card cardd--1">
            <div class="cardd__img"></div>
            <a href="#" class="card_link">
              <div class="cardd__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb">Adopt</button>
              </span>
            </div>
          </div>

          <div class="card cardd--2">
            <div class="cardd__img"></div>
            <a href="#" class="card_link">
              <div class="cardd__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb">Adopt</button>
              </span>
            </div>
          </div>
          <div class="card cardd--3">
            <div class="cardd__img"></div>
            <a href="#" class="card_link">
              <div class="cardd__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb">Adopt</button>
              </span>
            </div>
          </div>

          <div class="card cardd--4">
            <div class="cardd__img"></div>
            <a href="#" class="card_link">
              <div class="cardd__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Julie</span>
              <h3 class="card__title">Age : 8 </h3>
              <h3 class="card__title">Gender : Female </h3>
              <span class="card__by">
                <button className="bbb">Adopt</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cat;
