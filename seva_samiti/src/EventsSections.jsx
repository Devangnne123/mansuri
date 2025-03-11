import React from "react";
import EventCard from "./EventsCards";

const EventsSections = () => {
  const events = [
    {
      title: "Note Book Distribution",
      location: "School",
      organizer: "Seva Samiti",
      date: "15 Mar - 17 Mar",
      year: "2025",
      description:
        "Providing essential learning materials to underprivileged students to support their education.",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be2fffb9769fc124b924b5ae43cca604871b7d7d6d17177de29aae1666af6ccf",
      calendarIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d",
    },
    {
      title: "Annual Meeting",
      location: "Community Hall",
      organizer: "Seva Samiti",
      date: "20 Mar - 22 Mar",
      year: "2025",
      description:
        "An important gathering to discuss future initiatives and reflect on past achievements.",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be2fffb9769fc124b924b5ae43cca604871b7d7d6d17177de29aae1666af6ccf",
      calendarIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d",
    },
    {
      title: "Food Distribution",
      location: "Temple",
      organizer: "Seva Samiti",
      date: "25 Mar - 26 Mar",
      year: "2025",
      description:
        "Ensuring that no one in the community goes hungry by distributing food to those in need.",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be2fffb9769fc124b924b5ae43cca604871b7d7d6d17177de29aae1666af6ccf",
      calendarIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d",
    },
  ];

  return (
    <section className="events-sections">
      {/* ✅ Heading */}
      <h2 className="events-titles">EVENTS</h2>

      <div className="events-containers">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            location={event.location}
            organizer={event.organizer}
            date={event.date}
            year={event.year}
            description={event.description}
            arrowIcon={event.arrowIcon}
            calendarIcon={event.calendarIcon}
          />
        ))}
      </div>

      <style jsx>{`
        .events-sections {
         display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 16px;
          background-color: #f9fafc;
        }

        .events-titles {
          font-size: 32px;
          font-weight: 800;
          color: #333;
          margin-bottom: 24px;
          text-transform: uppercase;
          border-bottom: 4px solid #ff8800;
          display: inline-block;
          padding-bottom: 5px;
          font-family: "Poppins", sans-serif;
        }

        .events-containers {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          width: 100%;
        }

        /* ✅ Mobile Responsive */
        @media (max-width: 768px) {
          .events-sections {
            padding: 24px 12px;
          }

          .events-titles {
            font-size: 24px;
          }

          .events-containers {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default EventsSections;
