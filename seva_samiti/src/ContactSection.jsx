import React from "react";
import { motion, useInView } from "framer-motion";

function ContactSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="main123"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <section className="contact-section1">
        <div className="contact-content1">
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
                  , need assistance, or want to collaborate with us, feel free
                  to reach out.
                </span>
                <span className="gold-text"> Our team is here</span>
                <span className="light-text">
                  {" "}
                  to help and ensure a smooth communication process.
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
      </section>

      {/* Styling */}
      <style jsx>{`
        /* Contact Section */
        .main123 {
          width: 100%;
          margin: 20px auto;
          padding: 20px;
          max-width: 1200px; /* ✅ Fixed max-width to 1200px */
          box-sizing: border-box;
        }

        .contact-section1 {
          display: flex;
          justify-content: center; /* ✅ Fixed spelling mistake */
          align-items: center;
          padding: 20px;
        }

        /* Flexbox for Layout */
        .contact-content1 {
          display: flex;
          align-items: center;
          justify-content: space-between; /* ✅ Centered and spaced correctly */
          gap: 40px;

          width: 90%;
          margin: 0;
        }

        .info-column {
          flex: 1;
          min-width: 320px;
          text-align: center;
          display: flex; /* ✅ Fixed spelling and alignment */
          justify-content: center;
          align-items: center;
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
          max-width: 400px;
          text-align: justify;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          color: rgba(0, 0, 0, 1);
          font-weight: 600;
        }

        .light-text {
          font-weight: 400;
        }

        .orange-text {
          color: #ff8800;
          font-weight: 600;
        }

        .red-text {
           color: #ff8800;
          font-weight: 600;
        }

        .gold-text {
          color: #ff8800;
          font-weight: 600;
        }

        /* Contact Form */
        .form-column {
          flex: 1;
          min-width: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-form {
          background-color: #fff;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 350px;
          box-sizing: border-box;
        }

        /* Form Inputs */
        .form-input {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
          color: #333;
          background-color: #f9f9f9;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          border-color: #ff8800;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(255, 136, 0, 0.2);
        }

        /* Message Input */
        .message-input {
          resize: none;
          height: 100px;
        }

        /* Send Button */
        .send-button {
          padding: 14px;
          background-color: rgba(255, 136, 0, 1);
          color:black;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .send-button:hover {
           background-color: rgba(255, 136, 0, 1);
          transform: scale(1);
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          .contact-section1 {
            padding: 16px;
          }

          .contact-content1 {
            flex-direction: column;
            gap: 40px;
          }

          .contact-title {
            font-size: 24px;
          }

          .contact-description {
            font-size: 16px;
            max-width: 100%;
            text-align: justify;
          }
          .contact-info1 {
            diplay: flex;
            justify-contant: center;
            align-items: center;
          }

          .contact-form {
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
    </motion.div>
  );
}

export default ContactSection;
