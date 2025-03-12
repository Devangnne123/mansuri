import React from "react";
import EventCard from "./EventCard";
import AboutSection from "./AboutSection";
import "./EventsSection.css";
import { motion, useInView } from 'framer-motion';

function EventsSection() {
  const events = [
    {
      title: "Note Book Distribution",
      location: "School",
      organizer: "Seva Samiti",
      date: "15 Mar - 17 Mar",
      year: "2025",
    },
    {
      title: "Annual Meeting",
      location: "Community Hall",
      organizer: "Seva Samiti",
      date: "20 Mar - 22 Mar",
      year: "2025",
    },
    {
      title: "Food Distribution",
      location: "Temple",
      organizer: "Seva Samiti",
      date: "25 Mar - 26 Mar",
      year: "2025",
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section ref={ref} className="events-section" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
      <div className="events-content">
        <div className="about-column1">
          <AboutSection />
        </div>
        <div className="events-column">
          <div className="events-container">
            {/* Header */}
            <motion.div className="events-header" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
              <div className="events-title-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded296044576e59c6796f9bb03058e990880a904f5848a39395bee22eb5c04c7?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
                  className="events-icon"
                  alt="Events Icon"
                />
                <motion.h2 className="events-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>EVENTS</motion.h2>
              </div>
              <button className="all-events-button">ALL EVENTS</button>
            </motion.div>

            {/* Event + Date Container */}
            <div className="event-list">
              {events.map((event, index) => (
                <div key={index} className="event-container">
                  {/* Date Container */}
                  <div className="date-container">
                    <div className="event-date">{event.date}</div>
                    <div className="event-year">{event.year}</div>
                  </div>

                  {/* Event Card */}
                  <EventCard
                    key={index}
                    title={event.title}
                    location={event.location}
                    organizer={event.organizer}
                    date={event.date}
                    year={event.year}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-column">
          <AboutSection />
        </div>
      </div>

      {/* Styles */}
      
    </motion.section>
  );
}

export default EventsSection;
