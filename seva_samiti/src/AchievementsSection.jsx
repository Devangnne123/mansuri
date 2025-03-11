import React from "react";
import GallerySection from "./GallerySection";
import "./AchievementsSection.css";

function AchievementsSection() {
  return (
    <section className="achievements-section">
      <div className="achievements-content">
        <div className="achievements-column">
          <div className="achievements-container">
           
            <div className="achievements-text">
              <h2 className="achievements-title"> <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58617491f53ff0231cacee9b7becf84071fe24be5c130199b4a561f7deb8aa4b?placeholderIfAbsent=true&apiKey=246328c9c48c45dfa2d17d04ef601627"
              className="achievements-icon"
              alt="Achievements Icon"
            />Achievements & Awards –</h2>
              <p className="achievements-description">
                <span className="bullet orange-text">
                  🔹 Community Service Excellence
                </span>
                <span className="regular-text">
                  {" "}
                  – Recognized for impactful initiatives in social welfare,
                  charity programs, and humanitarian efforts.
                </span>
                <br />
                <span className="bullet orange-text">
                  🔹 Education & Skill Developme
                </span>
                <span className="regular-text">
                  nt – Awarded for promoting education, conducting workshops,
                  and empowering individuals through skill-based learning.
                </span>
                <br />
                <span className="bullet orange-text">
                  🔹 Cultural & Heritage Preservat
                </span>
                <span className="regular-text">
                  ion – Honored for organizing traditional celebrations and
                  preserving the rich cultural heritage of our community.
                </span>
                <br />
                <span className="bullet orange-text">
                  🔹 Health & Welfare Contribut
                </span>
                <span className="regular-text">
                  ions – Appreciated for conducting medical camps, blood
                  donation drives, and health awareness progr
                </span>
                ams.
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-column">
          <GallerySection />
        </div>
      </div>
     
    </section>
  );
}

export default AchievementsSection;
