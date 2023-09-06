import React from "react";
import logo from "../Header/logo.svg";
import menu from "../Header/menu.svg";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--menu">
            <img src={logo} alt="" />
            <nav>
              <li>О школе</li>
              <li>Наши курсы</li>
              <li>О нас</li>
            </nav>
          </div>
          <div className="header--btns">
            <p>Войти</p>
            <button>Подписаться</button>
          </div>
          <div className="header--burger">
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
