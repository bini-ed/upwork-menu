import React from "react";
import "../css/homepage.css";
import AppHeader from "./AppHeader";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <AppHeader />
      </div>
      <div className="homepage__gradient">
        <div className="home__menu__cont">
          <div className="home__menu__logo">
            <h4>Qwait</h4>
          </div>
          <h5 style={{ color: "white", fontSize: 30, fontWeight: 600 }}></h5>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
