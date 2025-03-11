import React from "react";

function EventCard({ title, location, organizer, date, year }) {
  return (
    <article className="event-card-column">
      <div className="event-card">
        {/* Event Title Row */}
        <div className="event-title-row">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c564655e8d5bed7ae13f362287ac6d8e1d581aef288da6225315d5770af25dc?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
            className="calendar-icon"
            alt="Calendar Icon"
          />
          <h3 className="event-title">{title}</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afac6bca00fde4d2832499f2d5c50dd388eb8bf8544e8654e976f9a304ffced6?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
            className="share-icon"
            alt="Share Icon"
          />
        </div>

        {/* Event Date */}
        <div className="event-date">
          <p>
            📅 {date} | {year}
          </p>
        </div>

        {/* Location */}
        <div className="event-location">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98cdbb310f727a122176a83c00477f5fe3cd3e84609ef9c17fdbd19eabb72f66?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
            className="location-icon"
            alt="Location Icon"
          />
          <p className="location-text">Location: {location}</p>
        </div>

        {/* Organizer */}
        <div className="event-organizer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/118f93a82f4a7c74522f882108e947f96244ef388d53b303f8fa1643abc00b4d?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
            className="organizer-icon"
            alt="Organizer Icon"
          />
          <p className="organizer-text">Organized by: {organizer}</p>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .event-card-column {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 200px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .event-card-column {
            width: 100%;
          }
        }

        .event-card {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 15px;
          padding: 20px;
         
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        

        .event-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .calendar-icon,
        .share-icon {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        .event-title {
          font-size: 18px;
          font-weight: bold;
          color: #fa7500;
          margin: 0;
          flex-grow: 1;
          text-align: center;
        }

        .event-date {
          font-size: 14px;
          color: #555;
          margin-bottom: 10px;
        }

        .event-location,
        .event-organizer {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #333;
          margin-bottom: 10px;
        }

        .location-icon,
        .organizer-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .location-text,
        .organizer-text {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </article>
  );
}

export default EventCard;
