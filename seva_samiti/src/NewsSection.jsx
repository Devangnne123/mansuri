import React from "react";
import NewsItem from "./NewsItem";
import { motion, useInView } from 'framer-motion';

function NewsSection() {
  const newsItems = [
    { date: "15 Mar 2025", title: "General News" },
    { date: "15 Mar 2025", title: "General Awareness News" },
    { date: "15 Mar 2025", title: "General News" },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section ref={ref} className="news-container" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
      <div className="news-header">
        <div className="news-title-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3627ae1209356b0cf3ee6068db20308756d23390d84ec655a4d6c2aa6db6215c?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
            className="news-icon"
            alt="News Icon"
          />
          <motion.h2 className="news-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>NEWS</motion.h2>
        </div>
        <button className="all-news-button">ALL NEWS</button>
      </div>
      <div className="news-content">
        <div className="date-column">
          {newsItems.map((item, index) => (
            <div key={index} className="date-box">
              <div>15 Mar</div>
              <div className="year">2025</div>
            </div>
          ))}
        </div>
        <div className="news-items-column">
          {newsItems.map((item, index) => (
            <NewsItem key={index} title={item.title} date={item.date} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .news-container {
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          margin-top: 50px;
          width: 361px;
          max-width: 90%;
          padding-bottom: 28px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
        }
        @media (max-width: 991px) {
          .news-container {
            margin-top: 40px;
          }
        }
        .news-header {
          background-color: rgba(253, 254, 176, 1);
          display: flex;
          width: 100%;
          padding: 14px 23px;
          align-items: stretch;
          gap: 20px;
          font-weight: 800;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .news-header {
            padding-left: 20px;
          }
        }
        .news-title-container {
          display: flex;
          align-items: stretch;
          gap: 15px;
          font-size: 20px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .news-title-container {
            white-space: initial;
          }
        }
        .news-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 32px;
          flex-shrink: 0;
        }
        .news-title {
          align-self: start;
          margin: 0;
          font-size: 20px;
          font-weight: 800;
        }
        .all-news-button {
          border-radius: 50px;
          background-color: rgba(255, 136, 0, 1);
          align-self: start;
          padding: 9px 36px;
          font-size: 10px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          font-family: inherit;
          color: inherit;
        }
        @media (max-width: 991px) {
          .all-news-button {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
        .news-content {
          align-self: center;
          display: flex;
          margin-top: 21px;
          width: 298px;
          max-width: 100%;
          align-items: stretch;
          gap: 10px;
          font-size: 12px;
          font-weight: 500;
          justify-content: space-evenly;
          overflow: hidden;
          position: relative;
          height:200px;
        }
        .news-content::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
          pointer-events: none;
        }
        .news-items-column
         {
          display: flex;
          flex-direction: column;
          animation: scrollUp 5s linear infinite;
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .date-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: scrollUp 5s linear infinite;
        }
        .date-box {
          border-radius: 20px;
          background-color: rgba(217, 217, 217, 1);
          display: flex;
          padding: 12px 22px;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 991px) {
          .date-box {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
        .year {
          margin-top: 8px;
        }
      `}</style>
    </motion.section>
  );
}

export default NewsSection;