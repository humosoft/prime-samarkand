import React from "react";

const WhyUsContent = ({items}) => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="clearfix">
          <div className="row gutter-width-lg with-pb-lg style-default">
            {items &&
              items.map((item, i) => (
                <div
                  key={item.id}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                  <h4 className="text-secondary">
                    {(i + 1).toString().padStart(2, "0")}
                  </h4>
                  <p className="text-primary p-large bold">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsContent;
