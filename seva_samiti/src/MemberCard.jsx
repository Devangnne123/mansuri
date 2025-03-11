import React from "react";

function MemberCard({ image, name, form }) {
  return (
    <div className="member-column">
      <div className="member-card">
        {/* Member Image */}
        <img src={image} className="member-image" alt="Committee Member" />

        {/* Member Info */}
        <div className="member-info">
          <h3 className="member-name">{name}</h3>
          <p className="member-form">{form}</p>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        /* Parent Container */
        .member-column {
          display: flex;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
          width: 100%;
        }

        /* Member Card */
        .member-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 16px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-align: center;
          width: 100%;
          max-width: 200px;
        }

        /* Hover Effect */
        .member-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Member Image */
        .member-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          
          margin-bottom: 12px;
          border: 3px solid rgb(255, 255, 255);
          transition: transform 0.3s ease;
        }

        /* Hover Effect for Image */
        .member-card:hover .member-image {
          transform: scale(1);
          border-color:rgb(238, 222, 210);
        }

        /* Member Info */
        .member-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* Member Name */
        .member-name {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        /* Member Form */
        .member-form {
          font-size: 14px;
          color: #777;
          margin: 0;
          font-weight: 500;
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          /* Switch to column layout on small screens */
          .member-column {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .member-card {
            max-width: 70%;
          }

          .member-name {
            font-size: 16px;
          }

          .member-form {
            font-size: 14px;
          }

          .member-image {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default MemberCard;
