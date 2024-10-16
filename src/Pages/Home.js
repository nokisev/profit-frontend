import React, { Component } from "react";
import Catalog from "../Components/Catalog";
import grape from "../grape.png";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="inner-container-home">
          <div className="catalog">
            <Catalog />
          </div>
          <div className="content-container">
            <div className="stories">
              <div className="white"></div>
              <div className="white"></div>
              <div className="white"></div>
            </div>
            <div className="content">
              <h1>
                Авторизуйтесь! <br /> И получите полный доступ к функциям.
              </h1>
              <img src={grape} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
