import React, { useState } from "react";

function EventsCards({
  title,
  location,
  organizer,
  date,
  year,
  description,
  arrowIcon,
  calendarIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="event-card" onClick={handleToggle}>
      {/* ✅ Card Header */}
      <div className="event-card-content">
        <div className="event-info">
          <h3 className="event-title">{title}</h3>
          <div className="event-date-container">
            <img src={calendarIcon} className="calendar-icon" alt="Calendar" />
            <time className="event-date">
              {date} • {year}
            </time>
          </div>
        </div>

        {/* ✅ Arrow Icon */}
        <img src={arrowIcon} className="event-arrow" alt="Arrow" />
      </div>

      {/* ✅ Description */}
      {isOpen && (
        <div className="event-description">
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Organizer:</strong> {organizer}
          </p>
          <p>{description}</p>
        </div>
      )}

      <style jsx>{`
        .event-card {
          display: flex;
          flex-direction: column;
          padding: 16px;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .event-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .event-card-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .event-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .event-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          font-family: "Poppins", sans-serif;
          margin: 0;
        }

        .event-date-container {
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

        .event-date {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }

        .event-arrow {
          width: 20px;
          height: 20px;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .event-card:hover .event-arrow {
          opacity: 1;
        }

        .event-description {
          font-size: 14px;
          color: #555;
          line-height: 1.4;
          margin-top: 12px;
          padding: 12px;
          border-top: 1px solid #e0e0e0;
          background-color: #fafafa;
          border-radius: 0 0 12px 12px;
        }

        /* ✅ Mobile Responsive */
        @media (max-width: 768px) {
          .event-card {
            padding: 12px;
          }

          .event-title {
            font-size: 14px;
          }

          .event-date {
            font-size: 12px;
          }

          .event-arrow {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </article>
  );
}

export default EventsCards;
