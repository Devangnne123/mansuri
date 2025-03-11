import React, { useState } from "react";

function NewsCards({ category, date, description, arrowIcon, calendarIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="news-card" onClick={handleToggle}>
      {/* Card Header */}
      <div className="news-card-content">
        <div className="news-info">
          <h3 className="news-category">{category}</h3>
          <div className="news-date-container">
            <img src={calendarIcon} className="calendar-icon" alt="Calendar" />
            <time className="news-date">{date}</time>
          </div>
        </div>

        {/* Arrow Icon */}
        <img src={arrowIcon} className="news-arrow" alt="Arrow" />
      </div>

      {/* Description */}
      {isOpen && <p className="news-description">{description}</p>}

      <style jsx>{`
        .news-card {
          display: flex;
          flex-direction: column;
          padding: 16px;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }

        .news-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .news-card-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .news-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .news-category {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          font-family: "Poppins", sans-serif;
          margin: 0;
        }

        .news-date-container {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #777;
          font-family: "Poppins", sans-serif;
        }

        .calendar-icon {
          width: 16px;
          height: 16px;
          object-fit: contain;
        }

        .news-date {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }

        .news-arrow {
          width: 20px;
          height: 20px;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .news-card:hover .news-arrow {
          opacity: 1;
        }

        .news-description {
          font-size: 14px;
          color: #555;
          line-height: 1.4;
          margin-top: 12px;
          padding: 12px;
          border-top: 1px solid #e0e0e0;
          background-color: #fafafa;
          border-radius: 0 0 12px 12px;
          overflow: hidden;
        }

        /* ✅ Mobile Responsive */
        @media (max-width: 768px) {
          .news-card {
            padding: 12px;
          }

          .news-category {
            font-size: 14px;
          }

          .news-date {
            font-size: 12px;
          }

          .news-arrow {
            width: 18px;
            height: 18px;
          }

          .news-description {
            font-size: 12px;
            padding: 10px;
          }
        }
      `}</style>
    </article>
  );
}

export default NewsCards;
