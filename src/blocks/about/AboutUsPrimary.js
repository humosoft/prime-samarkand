import React from "react";

const AboutUsPrimary = ({ title, description, counters }) => {
  return (
    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
      <div className="title">
        <h2>
          <div title={title}>{title}</div>
        </h2>
      </div>

      <div className="text">
        <p>{description}</p>
      </div>

      <div className="list-group list-group-horizontal spacer m-top-lg m-bottom-lg-media-xl style-default">
        {counters && counters.map((counter) => (
          <div key={counter.id} className="list-group-item">
            <h4 className="text-secondary">{counter.count}</h4>
            <p>{counter.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPrimary;
