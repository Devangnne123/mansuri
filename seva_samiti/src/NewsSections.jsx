import NewsCard from "./NewsCards";

const NewsSections = () => {
  const newsItems = [
    {
      category: "General News",
      date: "15 Mar 2025",
      description:
        "Mark Carney says Canada won't back down on tariffs: 'Until US shows respect'.",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be2fffb9769fc124b924b5ae43cca604871b7d7d6d17177de29aae1666af6ccf",
      calendarIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d",
    },
    {
      category: "Market Update",
      date: "20 Mar 2025",
      description:
        "Another major financial update shakes the market today with significant impacts.",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be2fffb9769fc124b924b5ae43cca604871b7d7d6d17177de29aae1666af6ccf",
      calendarIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d",
    },
    {
      category: "Market Update",
      date: "20 Mar 2025",
      description:
        "Another major financial update shakes the market today with significant impacts.",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be2fffb9769fc124b924b5ae43cca604871b7d7d6d17177de29aae1666af6ccf",
      calendarIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67892382de9c30e28f6ac14668ad9e89397246186f2d892c0f3dcc669f921e2d",
    },
  ];

  return (
    <section className="news-section">
      {/* ✅ Heading */}
      <h2 className="news-title">NEWS</h2>

      <div className="news-container">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            category={item.category}
            date={item.date}
            description={item.description}
            arrowIcon={item.arrowIcon}
            calendarIcon={item.calendarIcon}
          />
        ))}
      </div>

      <style jsx>{`
        .news-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 16px;
          
          width:100%;
        }

        .news-title {
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

        .news-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          width: 100%;
        }

        /* ✅ Mobile Responsive */
        @media (max-width: 768px) {
          .news-section {
            padding: 24px 12px;
            width:90%;
          }

          .news-title {
            font-size: 24px;
          }

          .news-container {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default NewsSections;
