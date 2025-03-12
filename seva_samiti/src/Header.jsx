import React, { useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Committee", to: "/committee" },
  { name: "Gallery", to: "/gallery" },
  { name: "News", to: "/news" },
  { name: "Events", to: "/events" },
  { name: "Contact Us", to: "/contact" },
  { name: "Achievement", to: "/achievements" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header className={`header-container ${isFixed ? "fixed" : ""}`}>
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94a0aaec561793b16cc7879fcc6105d0b050401462ad88cd4a7850f63ea2e089"
            className="logo"
            alt="Khedal Mansuri Seva Samiti Logo"
          />
          <h1 className="organization-name">
            Your Support, Our Strength –{" "}
            <span className="highlight"> Khedal Mansuri Seva Samiti</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
        </div>

        {/* Navigation */}
        <nav className={`navigation ${isOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <div className="nav-item" key={index}>
              <Link to={link.to} className="nav-link">
                {link.name}
              </Link>
              <div className="nav-indicator" />
            </div>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="header-divider" />

      {/* Styles */}
      <style jsx>{`
        .header-container {
          background-color: white;
          display: flex;
          flex-direction: column;
          width: 100%;
          font-family: Inter, sans-serif;
          overflow: hidden;
          padding: 0 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: position 0.5s ease;
        }

        .fixed {
          position: fixed;
          top: 0;
          z-index: 1000;
        }

        .header-content {
          display: flex;
          width: 100%;
          max-width: 1371px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .organization-name {
          font-size: 10px;
          font-weight: bold;
          color: #333;
          
          white-space: nowrap;
        }

        .highlight {
          color: #fa7500;
        }

        /* Navigation */
        .navigation {
          display: flex;
          gap: 20px;
          transition: all 0.8s ease;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: #393939;
          padding: 10px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .nav-link:hover {
          color: #ff8800;
          transform: translateY(-2px);
        }

        .nav-indicator {
          width: 0;
          height: 4px;
          background-color: #ff8800;
          border-radius: 10px;
          transition: width 0.3s ease-in-out;
        }

        .nav-item:hover .nav-indicator {
          width: 100%;
        }

        /* Hamburger Icon */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          right:40px;
          gap: 5px;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: #393939;
          transition: transform 0.3s ease;
        }

        .open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .open:nth-child(2) {
          opacity: 0;
        }
        .open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        @media (max-width:400px){
        .organization-name{
        font-size:8px;
        }
        }
        /* Responsive Styles */
        @media (max-width: 980px) {
          .hamburger {
            display: flex;
            flex-direction: column;
            z-index: 1000;
            position: fixed;
            right: 50px;
            
            margin: 0px;
          }
          
          .navigation {
            position: fixed;
            top: 0;
            left: 0;
            background-color: white;
            width: 100%;
            height: 100vh;
            flex-direction: column;
            gap: 0;
            padding-top: 80px;
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.4s ease, opacity 0.4s ease;
            z-index: 99;
            border-bottom: 1px solid #ddd;
          }

          .navigation.active {
            transform: translateY(0);
            opacity: 1;
            height: 100vh;
            position: fixed;
          }

          .nav-item {
            width: 100%;
            text-align: center;
            padding: 10px 0;
          }

          .nav-link {
            font-size: 16px;
          }

          .nav-indicator {
            height: 2px;
          }
        }

        .header-divider {
          height: 1px;
          background-color: #bfbfbf;
          width: 100%;
          margin-top: 5px;
        }
          @media (max-width: 780px) {
          .hamburger {
            display: flex;
            flex-direction: column;
            z-index: 1000;
            position: fixed;
            right: 20px;
            margin: 0px;
          }
      `}</style>
    </motion.header>
  );
}

export default Header;