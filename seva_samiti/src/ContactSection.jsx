import React from "react";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        {/* Contact Info */}
        <div className="info-column">
          <div className="contact-info1">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              <span className="light-text">We value your </span>
              <span className="orange-text">feedback</span>
              <span className="light-text">
                , inquiries, and suggestions! Whether you have a{" "}
              </span>
              <span className="red-text">question</span>
              <span className="light-text">
                , need assistance, or want to collaborate with us, feel free to
                reach out.
              </span>
              <span className="gold-text"> Our team is here</span>
              <span className="light-text">
                {" "}to help and ensure a smooth communication process.
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-column">
          <form className="contact-form">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-input"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="form-input"
              required
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-input"
              required
            />

            {/* Message Input */}
            <textarea
              placeholder="Enter Your Message"
              className="form-input message-input"
              rows="4"
              required
            />

            {/* Send Button */}
            <button type="submit" className="send-button">
              SEND NOW
            </button>
          </form>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        /* Contact Section */
        .contact-section {
          position: relative; /* Ensure relative positioning */
          display: flex;
          justify-content: center;
          align-items: center;
          width:90%
          padding: 20px;
          box-sizing: border-box;
        }

        /* Flexbox for Layout */
        .contact-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 80px; /* Reduced gap to prevent overlap */
          flex-wrap: wrap;
          
          width: 100%;
          position: relative;
           margin-top:50px;
           margin-bottom:50px;
        }

        .contact-info1 {
          text-align: center;
          position: relative;
          margin-left:70px;
          z-index: 1;
          
        }

        /* Contact Info */
        .info-column {
          flex: 1;
          min-width: 320px;
          text-align: center;
          position: relative;
        }

        .contact-title {
          font-size: 32px;
          font-weight: 800;
          color: #333;
          margin-bottom: 12px;
          text-transform: uppercase;
          border-bottom: 4px solid #ff8800;
          display: inline-block;
          padding-bottom: 5px;
          font-family: "Poppins", sans-serif;
        }

        .contact-description {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          text-align: justify;
          max-width: 400px;
          margin: 0 auto;
          font-family: "Poppins", sans-serif;
        }

        .light-text {
          font-weight: 400;
          font-family: "Poppins", sans-serif;
        }

        .orange-text {
          color: #ff8800;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
        }

        .red-text {
          color: #ff4d0b;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
        }

        .gold-text {
          color: #c08600;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
        }

        /* Contact Form */
        .form-column {
          flex: 1;
          min-width: 320px;
          display: flex;
          margin-right:50px;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
          
        }

        .contact-form {
          background-color: #fff;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          max-width: 350px;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        /* Form Inputs */
        .form-input {
          padding: 5px 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 16px;
          color: #333;
          background-color: #f9f9f9;
          outline: none;
          transition: border-color 0.3s ease;
          font-family: "Poppins", sans-serif;
        }

        .form-input:focus {
          border-color: #ff8800;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(255, 136, 0, 0.2);
        }

        /* Message Input */
        .message-input {
          resize: none;
          height: 80px;
        }

        /* Send Button */
        .send-button {
          padding: 12px;
          background-color: #ff8800;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          outline: none;
          font-family: "Poppins", sans-serif;
        }

        .send-button:hover {
          background-color: #ff6600;
          transform: scale(1.05);
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          .contact-section {
            padding: 16px;
            height: auto;
          }
          .contact-info1 {
          text-align: center;
          position: relative;
          margin-left:0px;
          width:90%;
          z-index: 1;
          
        }
          .contact-content {
            flex-direction: column;
            align-items: center;
           
            gap: 50px;
          }

          .contact-title {
            font-size: 24px;
          }

          .contact-description {
            font-size: 16px;
            text-align: justify;
            width: 90%;
            margin-left:0px;
          }

          .contact-form {
            width: 100%;
            padding: 16px;
          }

          .form-input {
            font-size: 14px;
            padding: 10px;
          }

          .send-button {
            font-size: 14px;
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}

export default ContactSection;
