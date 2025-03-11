
import React from "react";
import NewsSection from "./NewsSection";
import "./Herosection.css"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-column">
          <div className="hero-text-container">
          <div className="hero-text-container1">
            <div className="login-section1">
        
            <button className="login-button">LOGIN</button>
            <button className="language-button">GUJARATI</button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5022907eec3a78a5bca964184b7ef6f41c38528adb51094b308a9f4942e95799?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
              className="language-icon"
              alt="Language Icon"
            />
          </div>
          </div>
            <h1 className="hero-title">
              Khedal <span className="orange-text">Mansuri</span> Seva Samiti{" "}
              <br />
              <br />
            </h1>
            <h2 className="hero-subtitle">
              Together, We Build a Better{" "}
              <span className="orange-text">Tomorrow</span>
            </h2>
            <p className="hero-description">
              <span className="red-text">Join Hands</span> for a
              <span className="red-text"> Brighter Future</span><br /> Kedal Mansuri
              Seva Samiti
            </p>
          </div>
          
        </div>
        <div className="news-column">
        <div className="login-section">
            <button className="login-button">LOGIN</button>
            <button className="language-button">GUJARATI</button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5022907eec3a78a5bca964184b7ef6f41c38528adb51094b308a9f4942e95799?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
              className="language-icon"
              alt="Language Icon"
            />
          </div>
          <NewsSection />
        </div>
      </div>
      
    </section>
  );
}

export default HeroSection;
