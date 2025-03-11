import React from "react";

function NewsItem({ title, date }) {
  return (
    <article className="news-item">
      <h3 className="news-item-title">{title}</h3>
      <div className="news-date-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
          className="calendar-icon"
          alt="Calendar Icon"
        />
        <time className="news-date">{date}</time>
      </div>
      <style jsx>{`
        .news-item {
          margin-bottom: 38px;
        }
        .news-item:last-child {
          margin-bottom: 0;
        }
        .news-item-title {
          font-size: 12px;
          font-weight: 500;
          margin: 0;
        }
        .news-date-container {
          display: flex;
          margin-top: 7px;
          align-items: center;
          gap: 6px;
          font-size: 8px;
        }
        .calendar-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 18px;
          flex-shrink: 0;
        }
        .news-date {
          margin: auto 0;
        }
      `}</style>
    </article>
  );
}

export default NewsItem;
