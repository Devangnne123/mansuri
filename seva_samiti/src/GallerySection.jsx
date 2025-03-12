import React from "react";

function GallerySection() {
  const galleryItems = [
    { id: 1, name: "Ranan Parmar", form: "Mumbai" },
    { id: 2, name: "Ranan Parmar", form: "Mumbai" },
    
  ];

  return (
    <section className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <div className="gallery-title-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ff8937ebf7e988d78c4b86df0a54b7f702af43c9380f33e5701cf9c7f923fd"
            className="gallery-icon"
            alt="Gallery Icon"
          />
          <h2 className="gallery-title">GALLERY</h2>
        </div>
        <button className="all-gallery-button">ALL GALLERY</button>
      </div>

      {/* Gallery Content */}
      <div className="gallery-content">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img
              src="istock.jpg"
              className="gallery-image"
              alt={item.name}
            />
            <div className="gallery-caption">
              {item.name}
              <br />
              <span className="form-text">{item.form}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Styling */}
      <style jsx>{`
        /* Main Container */
        .gallery-container {
          border-radius: 20px;
          background-color: #ffffff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          margin: 40px 10px;
          padding: 30px;
          align-items: center;
          font-family: Inter, sans-serif;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 20px;
            margin: 20px;
          }
        }

        /* Header */
        .gallery-header {
          background-color: #fdfeb0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 12px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .gallery-title-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .gallery-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .gallery-title {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }

        /* Button */
        .all-gallery-button {
          background-color: #ff8800;
          color: #fff;
          padding: 8px 20px;
          border: none;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .all-gallery-button:hover {
          background-color: #ff6600;
          transform: translateY(-2px);
        }

        /* Gallery Content */
        .gallery-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          width: 100%;
          justify-items: center;
        }

        @media (max-width: 768px) {
          .gallery-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Individual Gallery Item */
        .gallery-item {
          background-color: #fafafa;
          border-radius: 12px;
          padding: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 150px;
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        }

        /* Gallery Image */
        .gallery-image {
          width: 100%;
          border-radius: 8px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-image:hover {
          transform: scale(1.05);
        }

        /* Caption */
        .gallery-caption {
          text-align: center;
          margin-top: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .form-text {
          font-size: 12px;
          color: #777;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

export default GallerySection;
