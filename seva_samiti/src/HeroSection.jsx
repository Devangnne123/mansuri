import React from "react";
import NewsSection from "./NewsSection";
import "./Herosection.css"
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <motion.section className="hero-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="hero-content">
        <div className="hero-column">
          <div className="hero-text-container">
          <div className="hero-text-container1">
            <div className="login-section1">
        
            <button className="login-button">LOGIN</button>
            <button className="language-button">GUJARATI</button>
            
          </div>
          </div>
            <motion.h1 className="hero-title" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
              Khedal <span className="orange-text">Mansuri</span> Seva Samiti{" "}
              <br />
              <br />
            </motion.h1>
            <motion.h2 className="hero-subtitle" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
              Together, We Build a Better{" "}
              <span className="orange-text">Tomorrow</span>
            </motion.h2>
            <motion.p className="hero-description" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
              <span className="red-text">Join Hands</span> for a
              <span className="red-text"> Brighter Future</span><br /> Kedal Mansuri
              Seva Samiti
            </motion.p>
          </div>
          
        </div>
        <div className="news-column">
        <div className="login-section">
            <button className="login-button">LOGIN</button>
            <button className="language-button">GUJARATI</button>
            
          </div>
          <NewsSection />
        </div>
      </div>
      
    </motion.section>
  );
}

export default HeroSection;
