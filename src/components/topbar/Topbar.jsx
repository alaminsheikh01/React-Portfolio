import React from "react";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <span>++ 019 029 54222</span>
          </div>
          <div className="itemContainer">
            <span>alamin@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
