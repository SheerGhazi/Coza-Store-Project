import React from "react";
import pay4 from "./Media/pay4.webp";
import pay5 from "./Media/pay5.webp";
import payment from "./Media/payment.webp";
import paypal from "./Media/paypal.webp";
import visa from "./Media/visa.webp";

export default function Footer() {
  return (
    <footer className="flex-box">
      <div className="footer-container">
        <div className="fBox-container">
          <div className="footer-box">
            <h3>CATAGEOTIES</h3>
            <div className="flink-box">
              <a href="/">Women</a>
              <a href="/">Men</a>
              <a href="/">Shoes</a>
              <a href="/">Watches</a>
            </div>
          </div>
          <div className="footer-box">
            <h3>HELP</h3>
            <div className="flink-box">
              <a href="/">Track Order</a>
              <a href="/">Returns</a>
              <a href="/">Shipping</a>
              <a href="/">FAQs</a>
            </div>
          </div>
          <div className="footer-box">
            <div className="contact-box">
              <h3>GET IN TOUCH</h3>
            </div>
            <div className="icon-box">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
          <div className="footer-box">
            <h3>NEWSLETTER</h3>
            <input id="input" placeholder="email@example.com" type="email" />
            <button className="primarybtn">SUBSCRIBE</button>
          </div>
        </div>
        <div className="copyright-box">
          <div className="payment-container flex-box">
            <img src={payment} alt="" />
            <img src={paypal} alt="" />
            <img src={visa} alt="" />
            <img src={pay4} alt="" />
            <img src={pay5} alt="" />
          </div>
          <div className="copright">
            <div className="copy-box flex-box">
              <p className="flex-box">
                Copyright ©2023 All rights reserved | This template is made with
                <span className="material-symbols-outlined">
                  favorite
                </span>By <span>SHER GHAZI</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
