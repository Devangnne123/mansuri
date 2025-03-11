import React from "react";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text-content">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-text">
            <span className="regular-text"> Mansuri Samiti </span>
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
              gatherings to educational and social initiatives, Mansuri Samiti is committed to creating opportunities for growth, knowledge, and unity.
            </span>
          </p>
        </div>

        {/* Logo Image */}
        <img
          src="https://media.istockphoto.com/id/1211200126/photo/mathura-holi-festival.jpg?s=1024x1024&w=is&k=20&c=4UVxtAkwTqI34GKoEjNE3baTwzPF2JeHlKjAcaReD8A="
          className="about-logo"
          alt="Mansuri Samiti"
        />
      </div>

      {/* Styling */}
      <style jsx>{`
        /* About Section */
        .about-section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
          background-color: #fafafa;
        }

        /* Flexbox Container */
        .about-content {
          display: flex;
          gap: 40px;
          align-items: center;
          max-width: 1100px;
          width: 100%;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .about-text-content {
          flex: 1;
          max-width: 500px;
        }

        /* Title Styling */
        .about-title {
          font-size: 32px;
          font-weight: 800;
          color: #333;
          margin-bottom: 16px;
          text-transform: uppercase;
          border-bottom: 4px solid #ff8800;
          display: inline-block;
          padding-bottom: 5px;
        }

        /* Paragraph Styling */
        .about-text {
          font-size: 18px;
          color: #555;
          line-height: 1.8;
          text-align: justify;
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        /* Regular Text */
        .regular-text {
          font-size: 16px;
          font-weight: 400;
          color: #555;
          font-family: "Poppins", sans-serif;
        }

        /* Highlight Text */
        .highlight-text {
          font-size: 16px;
          font-weight: 600;
          color: #ff8800;
          font-family: "Poppins", sans-serif;
        }

        /* Green Text */
        .green-text {
          font-size: 16px;
          font-weight: 600;
          color: #889126;
          font-family: "Poppins", sans-serif;
        }

        /* Logo Styling */
        .about-logo {
          width: 320px;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .about-logo:hover {
          transform: scale(1.05);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-section {
            padding: 20px;
          }

          .about-content {
            flex-direction: column;
            gap: 24px;
          }

          .about-title {
            font-size: 24px;
          }

          .about-text {
            font-size: 16px;
          }

          .about-logo {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutUs;
