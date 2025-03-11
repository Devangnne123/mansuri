import React from "react";
import MemberCard from "./MemberCard";
import "./CommitteeSection.css"; // External CSS file for styling

function CommitteeSection() {
  const members = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ead0bef07719d7d746e37f292a068b01d7855b1a6569c7e415fad38b99b83e02",
      name: "NAME-1",
      form: "FORM-1",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ead0bef07719d7d746e37f292a068b01d7855b1a6569c7e415fad38b99b83e02",
      name: "NAME-2",
      form: "FORM-2",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7124aa401299abf7de413152832459aaf68ba13235d8c901e6b19a2f9e9b5f9b",
      name: "NAME-3",
      form: "FORM-3",
    },
  ];

  return (
    <section className="committee-section">
      <div className="committee-container">
        <h2 className="committee-title">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9028dcd3bcdbc311097cd9dd9a634cd42ee792bee10a1e57030a382ec1d03f"
            className="committee-icon"
            alt="Committee Icon"
            loading="lazy"
          />
          COMMITTEE
        </h2>
        <div className="committee-content">
          <div className="members-grid">
            <div className="members-row">
              {members.map((member) => (
                <MemberCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  form={member.form}
                />
              ))}
            </div>
          </div>
          <button className="view-all-button" aria-label="View All Committee Members">
            View All Members
          </button>
        </div>
      </div>
    </section>
  );
}

export default CommitteeSection;
