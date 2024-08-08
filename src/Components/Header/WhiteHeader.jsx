import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Media/logo.webp";

export default function WhiteHeader() {
  function showCart() {
    document.getElementById("sideCart-box").style.right = "0%";
  }
  return (
    <section className="hbw-container flex-box">
      <header className="header max-box">
        <div className="logo-container flex-box">
          <img src={logo} alt="" />
        </div>
        <div className="link-cotainer flex-box">
          <nav className="desktop">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/About"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/ProductPage"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/AdminPage"}>SignUp</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/LoginPage"}>LogIn</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/ContactPage"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <nav className="mobile flex-box" id="mnav">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/About"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/pages/ProductPage"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Features</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
            </ul>
            <span
              id="cross"
              className="material-symbols-outlined"
              onClick={hidenav}
            >
              close
            </span>
          </nav>
        </div>
        <div className="icon-container">
          <div className="icons">
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined" onClick={showCart}>
              shopping_cart
            </span>
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="switch-box">
            <div className="menu-switch">
              <span
                id="bars"
                className="material-symbols-outlined"
                onClick={shownav}
              >
                menu
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

function shownav() {
  document.getElementById("mnav").style.transform = "translateY(0px)";
}
function hidenav() {
  document.getElementById("mnav").style.transform = "translateY(-200px)";
}
