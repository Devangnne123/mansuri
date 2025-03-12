import React from "react";

function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="about-title">Events & Function -</h2>
      <p className="about-text">
        <span className="regular-text"> proudly </span>
        <span className="highlight-text">celebrates cultural</span>
        <span className="regular-text"> and </span>
        <span className="highlight-text">traditional events</span>
        <span className="regular-text">
          {" "}
          that unite our community. From vibrant{" "}
        </span>
        <span className="green-text">festivals</span>
        <span className="regular-text"> and </span>
        <span className="green-text">religious</span>
        <span className="regular-text">
          {" "}
          gatherings to national commemorations and special occasions, our
          celebrations reflect our rich heritage and values. We organize joyous
          events that bring people together, fostering unity, harmony, and a
          sense of belonging. Join us in preserving and cherishing our
          traditions!
        </span>
      </p>
      <style jsx>{`
        .about-section {
          color: rgba(0, 0, 0, 1);
          width:450px;
          font-size: 14px;
          margin-top:30px;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-weight: 600;
        }
        @media (max-width: 991px) {
        
          .about-section {
           width: 90%;
           justify-contant:center;
            margin: 0px;
            
          }
        }
        .about-title {
          font-weight: 700;
          font-size: 32px;
          letter-spacing: 0.64px;
          color: rgba(0, 0, 0, 1);
          margin: 0 0 20px;
        }
        .about-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 1.6px;
          text-align:justify;
          margin: 0;
        }
        .regular-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 1.6px;
        }
        .highlight-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 1.6px;
          color: rgba(231, 133, 6, 1);
        }
        .green-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 1.6px;
          color: rgba(137, 129, 39, 1);
        }
      `}</style>
    </section>
  );
}

export default AboutSection;
